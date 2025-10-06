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
  

  await page.goto(url, {
    waitUntil: 'networkidle0'
  });

  console.log('🌐 network idle');
  
  // Wait for React to render
  await page.waitForSelector('#root > *', { timeout: 10000 });
  
  console.log('🎨 Extracting critical CSS...');
  const cssCoverage = await page.coverage.stopCSSCoverage();
  
  // critical doesn't work because somehow we're not pulling stuff, maybe modals or selectors or something
  let criticalCSS = '';
//   for (const entry of cssCoverage) {
//     // Only include stylesheets that have any usage
//     if (entry.ranges.length > 0) {
//       const css = entry.text;
      
//       // For each used range, extract that CSS
//       let usedCSS = '';
//       for (const range of entry.ranges) {
//         usedCSS += css.slice(range.start, range.end);
//       }
      
//       criticalCSS += usedCSS + '\n';
//     }
//   }
  let allCSS = '';
  for (const entry of cssCoverage) {
    allCSS += entry.text + '\n';
  }
  criticalCSS = allCSS
  
  let renderedHtml = await page.content();
    renderedHtml = renderedHtml.replace(
    '</head>',
    `<style id="critical-css">${criticalCSS}</style></head>`
  );
  renderedHtml = renderedHtml.replace(
    /<link([^>]*rel=["']stylesheet["'][^>]*)>/g,
    '<link$1 media="print" onload="this.media=\'all\'; this.onload=null;">'
  );
  
  // Close browser and server
  await browser.close();
  await previewServer.httpServer.close();
  
  // Save the pre-rendered HTML
  await fs.writeFile(indexPath, renderedHtml, 'utf-8');
  
  // Measure file sizes
  const stats = await fs.stat(indexPath);
  const uncompressedSize = stats.size;
  
  // Simulate gzip compression to see what the wire size would be
  const { gzip } = await import('zlib');
  const { promisify } = await import('util');
  const gzipAsync = promisify(gzip);
  
  const compressed = await gzipAsync(Buffer.from(renderedHtml));
  const compressedSize = compressed.length;

  console.log('✅ Pre-render complete! Updated dist/index.html');
  console.log(`📦 Gzipped: ${(compressedSize / 1024).toFixed(2)}KB, Uncompressed: ${(uncompressedSize / 1024).toFixed(2)}KB`);

  if (compressedSize <= 14 * 1024) {
    console.log('🎉 Fits in initial TCP window! (14KB)');
  } else if (compressedSize <= 16 * 1024) {
    console.log('✨ Close! Within 16KB target');
  } else {
    console.log(`⚠️  Exceeds target by ${((compressedSize - 16 * 1024) / 1024).toFixed(2)}KB`);
  }
}

prerender().catch(err => {
  console.error('❌ Pre-render failed:', err);
  process.exit(1);
});