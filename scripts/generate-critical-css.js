import { generate } from 'critical';
import { promises as fs } from 'fs';
import path from 'path';

const pages = [
  { route: '/', output: 'home.critical.css', html: 'index.html' },
  { route: '/contact', output: 'contact.critical.css', html: 'contact.html' },
  { route: '/website-scan', output: 'website-scan.critical.css', html: 'website-scan.html' },
];

async function getLatestCSSFile() {
  const cssDir = path.join(process.cwd(), '.next/static/css');
  try {
    const files = await fs.readdir(cssDir);
    const cssFiles = files.filter(file => file.endsWith('.css') && !file.includes('critical'));
    if (cssFiles.length === 0) {
      throw new Error('No CSS files found in .next/static/css');
    }
    const latestFile = await Promise.all(
      cssFiles.map(async file => {
        const stats = await fs.stat(path.join(cssDir, file));
        return { file, mtime: stats.mtime };
      })
    ).then(files => files.sort((a, b) => b.mtime.getTime() - a.mtime.getTime())[0].file);
    console.log(`Selected latest CSS file: ${latestFile}`);
    return path.join(cssDir, latestFile);
  } catch (error) {
    console.error('Error finding latest CSS file:', error);
    return null;
  }
}

async function findHtmlFile(htmlPath) {
  const possibleDirs = [
    path.join(process.cwd(), '.next/server/app'),
    path.join(process.cwd(), '.next/server/pages'),
  ];

  for (const dir of possibleDirs) {
    const fullPath = path.join(dir, htmlPath);
    try {
      await fs.access(fullPath);
      console.log(`Found HTML file for ${htmlPath} at ${fullPath}`);
      return fullPath;
    } catch (error) {
      console.log(`HTML file not found at ${fullPath}`);
    }
  }
  throw new Error(`No HTML file found for ${htmlPath} in any directory`);
}

async function injectCriticalCSS(htmlPath, cssPath) {
  try {
    const htmlContent = await fs.readFile(htmlPath, 'utf-8');
    const cssContent = await fs.readFile(cssPath, 'utf-8');
    // Inject critical CSS into <head>
    const criticalCSS = `<style id="critical-css">${cssContent}</style>`;
    const updatedHtml = htmlContent.replace('</head>', `${criticalCSS}</head>`);
    await fs.writeFile(htmlPath, updatedHtml);
    console.log(`Injected critical CSS into ${htmlPath}`);
  } catch (error) {
    console.error(`Failed to inject critical CSS into ${htmlPath}:`, error);
  }
}

async function generateCriticalCSS() {
  console.log('Starting critical CSS generation offline...');
  const outputDir = path.join(process.cwd(), '.next/static/css');
  const cssFile = await getLatestCSSFile();

  if (!cssFile) {
    console.error('Cannot proceed without a valid CSS file.');
    return;
  }

  for (const page of pages) {
    try {
      const htmlPath = await findHtmlFile(page.html);
      const cssOutputPath = path.join(outputDir, page.output);
      await generate({
        base: process.cwd(),
        html: await fs.readFile(htmlPath, 'utf-8'),
        target: cssOutputPath,
        dimensions: [
          { width: 414, height: 896 }, // Mobile
          { width: 1280, height: 800 }, // Desktop
        ],
        inline: false,
        ignore: ['@font-face', /url\(/],
        css: [cssFile],
        penthouse: {
          timeout: 60000, // 60s
        },
      });
      console.log(`Successfully generated critical CSS for ${page.route}: ${page.output}`);
      // Inject critical CSS into HTML
      await injectCriticalCSS(htmlPath, cssOutputPath);
    } catch (error) {
      console.error(`Error generating critical CSS for ${page.route}:`, error);
    }
  }
  console.log('Critical CSS generation and injection completed.');
}

generateCriticalCSS().catch(err => {
  console.error('Critical CSS generation failed:', err);
  process.exit(0);
});