import { createServer } from 'vite';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { gzipSync } from 'zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const distDir = path.join(__dirname, 'dist');
  const indexPath = path.join(distDir, 'index.html');

  console.log('🚀 Starting pre-render...');

  // Render <App /> in Node using Vite's SSR module loader — no browser needed.
  // ssrLoadModule transpiles JSX and turns CSS imports into no-ops for us.
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  let appHtml;
  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
    appHtml = render();
  } finally {
    await vite.close();
  }
  console.log('🎨 Rendered <App /> to HTML');

  // Read the built HTML shell and the built (already Tailwind-purged) CSS.
  let html = await fs.readFile(indexPath, 'utf-8');
  const assetsDir = path.join(distDir, 'assets');
  const cssFiles = (await fs.readdir(assetsDir)).filter((f) => f.endsWith('.css'));
  let css = '';
  for (const f of cssFiles) {
    css += (await fs.readFile(path.join(assetsDir, f), 'utf-8')) + '\n';
  }

  // React 19's renderToString emits <link rel="preload" as="image"> hints for
  // <img> tags. Those are meant for streaming SSR (hoisted into <head>); with
  // non-streaming renderToString they land inline in #root next to the very
  // <img> they describe — no head-start, and they trigger "preloaded but not
  // used" console warnings because the images are display:none until hydration.
  // Strip them.
  appHtml = appHtml.replace(/<link\b[^>]*rel="preload"[^>]*as="image"[^>]*>/g, '');

  // 1. Inject the rendered markup into #root so crawlers and first paint get real content.
  if (!html.includes('<div id="root"></div>')) {
    throw new Error('Could not find empty <div id="root"></div> in built index.html');
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // 2. Inline the CSS so the first paint needs no extra request.
  html = html.replace('</head>', `<style id="critical-css">${css}</style></head>`);

  // 3. Load the real stylesheet asynchronously (non-render-blocking).
  html = html.replace(
    /<link([^>]*rel=["']stylesheet["'][^>]*)>/g,
    '<link$1 media="print" onload="this.media=\'all\'; this.onload=null;">'
  );

  await fs.writeFile(indexPath, html, 'utf-8');

  // Measure the gzipped wire size against the 14KB first-round-trip budget.
  const uncompressedSize = Buffer.byteLength(html);
  const compressedSize = gzipSync(Buffer.from(html)).length;

  console.log('✅ Pre-render complete! Updated dist/index.html');
  console.log(
    `📦 Gzipped: ${(compressedSize / 1024).toFixed(2)}KB, Uncompressed: ${(uncompressedSize / 1024).toFixed(2)}KB`
  );

  if (compressedSize <= 14 * 1024) {
    console.log('🎉 Fits in initial TCP window! (14KB)');
  } else if (compressedSize <= 16 * 1024) {
    console.log('✨ Close! Within 16KB target');
  } else {
    console.log(`⚠️  Exceeds target by ${((compressedSize - 16 * 1024) / 1024).toFixed(2)}KB`);
  }
}

prerender().catch((err) => {
  console.error('❌ Pre-render failed:', err);
  process.exit(1);
});
