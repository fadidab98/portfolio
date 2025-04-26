// scripts/generate-critical.js
import { writeFileSync, readFileSync } from 'fs';
import { join, normalize } from 'path';
import { readdirSync, existsSync } from 'fs';

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

  // Read the target CSS file
  const cssFilePath = normalize(join(cssDir, '511edabfa52cd738.css'));
  let cssContent = '';
  if (existsSync(cssFilePath)) {
    cssContent = readFileSync(cssFilePath, 'utf-8');
    console.log(`Read CSS file: ${cssFilePath}`);
  } else {
    console.error(`CSS file not found: ${cssFilePath}`);
    return;
  }

  // Find HTML files
  const getHtmlFiles = (dir) => {
    const files = [];
    const readDir = (path, relativePath = '') => {
      console.log(`Scanning directory: ${path}`);
      readdirSync(path, { withFileTypes: true }).forEach((entry) => {
        const fullPath = normalize(join(path, entry.name));
        const relPath = relativePath
          ? join(relativePath, entry.name)
          : entry.name;
        if (entry.isDirectory()) {
          readDir(fullPath, relPath);
        } else {
          console.log(`Found file: ${fullPath}`);
          if (fullPath.endsWith('.html')) {
            // Map filename to route
            let route;
            if (entry.name === 'index.html') {
              route = '/';
            } else if (entry.name === 'contact.html') {
              route = '/contact';
            } else if (entry.name === 'website-scan.html') {
              route = '/website-scan';
            } else {
              // Fallback: derive route from filename
              route = `/${entry.name.replace(/\.html$/, '')}`;
            }
            console.log(`Processing HTML file: ${fullPath} (route: ${route})`);
            files.push({ fullPath, route });
          }
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
    'Found HTML files for processing:',
    uniqueFiles.map((f) => ({ route: f.route, path: f.fullPath }))
  );

  for (const { fullPath, route } of uniqueFiles) {
    if (!existsSync(fullPath)) {
      console.error(`HTML file not found: ${fullPath}`);
      continue;
    }

    try {
      let html = readFileSync(fullPath, 'utf-8');
      console.log(
        `Processing ${route}: Original HTML contains CSS link: ${html.includes('faee608d96b31f31.css')}`
      );
      // Remove existing CSS link (robust regex)
      html = html.replace(
        /<link\s+rel="stylesheet"\s+href="\/_next\/static\/css\/faee608d96b31f31\.css"[^>]*>/i,
        ''
      );
      // Inject CSS into head
      html = html.replace(/<\/head>/i, `<style>${cssContent}</style></head>`);
      writeFileSync(fullPath, html);
      console.log(
        `CSS inlined for ${route}: CSS link removed, style tag added`
      );
      // Verify the output
      const updatedHtml = readFileSync(fullPath, 'utf-8');
      console.log(
        `Verification for ${route}: CSS link removed: ${!updatedHtml.includes('faee608d96b31f31.css')}, Style tag added: ${updatedHtml.includes(`<style>${cssContent}</style>`)}`
      );
    } catch (error) {
      console.error(`Error processing ${route}:`, error);
    }
  }
}

generateCritical().catch(console.error);
