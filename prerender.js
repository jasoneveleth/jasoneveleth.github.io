import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  
  console.log('🚀 Starting pre-render...');

  const previewServer = await preview({
    preview: {
      port: 4173
    }
  });
  
  const url = 'http://localhost:4173';
  console.log(`📡 Preview server running at ${url}`);
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  // Start CSS coverage before loading the page
  await page.coverage.startCSSCoverage();

  // Set the HTML content
  await page.goto(url, {
    waitUntil: 'networkidle0'
  });

  console.log('🌐 network idle')
  
  // Wait for React to render (adjust selector to match your app)
  await page.waitForSelector('#root > *', { timeout: 10000 });
  
  console.log('🎨 Extracting critical CSS...');
  const cssCoverage = await page.coverage.stopCSSCoverage();
  
  // Combine all used CSS
  let criticalCSS = '';
  for (const entry of cssCoverage) {
    const css = entry.text;
    const usedRanges = entry.ranges;
    
    // Extract only the used portions
    for (const range of usedRanges) {
      criticalCSS += css.slice(range.start, range.end) + '\n';
    }
  }

 console.log(`📏 Critical CSS size: ${(criticalCSS.length / 1024).toFixed(2)}KB`);

  // Get the fully rendered HTML
  let renderedHtml = await page.content();
  
  // Inline critical CSS
  renderedHtml = renderedHtml.replace(
    '</head>',
    `<style id="critical-css">${criticalCSS}</style></head>`
  );

  // Make external stylesheets load asynchronously (non-blocking)
  renderedHtml = renderedHtml.replace(
    /<link([^>]*rel=["']stylesheet["'][^>]*)>/g,
    '<link$1 media="print" onload="this.media=\'all\'; this.onload=null;">'
  );

  // Close browser
  await browser.close();
  await previewServer.httpServer.close();
  
  // Save the pre-rendered HTML back to index.html
  await fs.writeFile(indexPath, renderedHtml, 'utf-8');
  
  console.log('✅ Pre-render complete! Updated dist/index.html');
}

prerender().catch(err => {
  console.error('❌ Pre-render failed:', err);
  process.exit(1);
});