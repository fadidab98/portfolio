// scripts/generate-critical.js
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';
import { readdirSync, existsSync } from 'fs';
import Critters from 'critters';

async function generateCritical() {
  // Base directory for Next.js App Router output
  const buildDir = join(process.cwd(), '.next', 'server', 'app');

  // CSS directory
  const cssDir = join(process.cwd(), '.next', 'static', 'css');

  // Find generated CSS files
  let cssFiles = [];
  if (existsSync(cssDir)) {
    cssFiles = readdirSync(cssDir).filter((file) => file.endsWith('.css'));
    console.log('Available CSS files in .next/static/css/:', cssFiles);
  } else {
    console.warn('CSS directory not found:', cssDir);
  }

  // Configure Critters with dynamic CSS files
  const critters = new Critters({
    external: join(process.cwd(), 'app', 'globals.css'), // Main stylesheet
    additionalStylesheets: cssFiles.map((file) => join(cssDir, file)), // Include all generated CSS
    inlineThreshold: 10000, // Inline up to 10KB
    minimumExternalSize: 4096, // Defer non-critical CSS >4KB
    preload: 'swap', // Preload non-critical CSS
    paths: ['/', '/website-scan', '/contact'], // Pages for critical CSS extraction
    logLevel: 'debug', // Detailed logs
    inlineFonts: true, // Inline font-related CSS
  });

  // Dynamically find HTML files
  const getHtmlFiles = (dir) => {
    const files = [];
    const readDir = (path, relativePath = '') => {
      readdirSync(path, { withFileTypes: true }).forEach((entry) => {
        const fullPath = join(path, entry.name);
        const relPath = relativePath
          ? join(relativePath, entry.name)
          : entry.name;
        if (entry.isDirectory()) {
          readDir(fullPath, relPath);
        } else if (['index.html', 'page.html'].includes(entry.name)) {
          const route =
            relPath
              .replace(/\\/g, '/')
              .replace(/(index|page)\.html$/, '')
              .replace(/\/$/, '') || '/';
          files.push({ fullPath, route });
        }
      });
    };
    readDir(dir);
    return files;
  };

  const htmlFiles = getHtmlFiles(buildDir);

  if (htmlFiles.length === 0) {
    console.error('No HTML files found in', buildDir);
    return;
  }

  // Filter and deduplicate relevant pages
  const relevantPages = ['/', '/website-scan', '/contact'];
  const uniqueFiles = htmlFiles
    .filter(({ route }) => relevantPages.includes(route))
    .reduce((acc, file) => {
      if (!acc.some((f) => f.route === file.route)) {
        acc.push(file);
      }
      return acc;
    }, []);

  console.log(
    'Found HTML files:',
    uniqueFiles.map((f) => ({ route: f.route, path: f.fullPath }))
  );

  for (const { fullPath, route } of uniqueFiles) {
    if (!existsSync(fullPath)) {
      console.error(`HTML file not found: ${fullPath}`);
      continue;
    }

    try {
      const html = readFileSync(fullPath, 'utf-8');
      const optimizedHtml = await critters.process(html);
      writeFileSync(fullPath, optimizedHtml);
      console.log(`Critical CSS inlined for ${route}`);
    } catch (error) {
      console.error(`Error processing ${route}:`, error);
    }
  }
}

generateCritical().catch(console.error);
