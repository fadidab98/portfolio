import { writeFileSync, readFileSync } from 'fs';
import { join, normalize } from 'path';
import { readdirSync, existsSync } from 'fs';

async function generateCritical() {
  console.log('Starting critical CSS generation...');
  const buildDir = join(process.cwd(), '.next', 'server', 'app');
  const cssDir = join(process.cwd(), '.next', 'static', 'css');

  // Function to recursively find HTML files
  const getHtmlFiles = (dir) => {
    console.log(`Searching for HTML files in: ${dir}`);
    const files = [];
    const readDir = (path, relativePath = '') => {
      try {
        readdirSync(path, { withFileTypes: true }).forEach((entry) => {
          const fullPath = normalize(join(path, entry.name));
          const relPath = relativePath
            ? join(relativePath, entry.name)
            : entry.name;
          if (entry.isDirectory()) {
            readDir(fullPath, relPath);
          } else if (fullPath.endsWith('.html')) {
            let route;
            if (entry.name === 'index.html') route = '/';
            else if (entry.name === 'contact.html') route = '/contact';
            else if (entry.name === 'website-scan.html')
              route = '/website-scan';
            else route = `/${entry.name.replace(/\.html$/, '')}`;
            files.push({ fullPath, route });
          }
        });
      } catch (error) {
        console.error(`Error reading directory ${path}:`, error);
      }
    };
    readDir(dir);
    return files;
  };

  const htmlFiles = getHtmlFiles(buildDir);
  if (htmlFiles.length === 0) {
    console.error('No HTML files found in', buildDir);
    return;
  } else {
    console.log(
      'Found HTML files:',
      htmlFiles.map((f) => f.fullPath)
    );
  }

  const relevantPages = ['/', '/website-scan', '/contact'];
  const uniqueFiles = htmlFiles
    .filter(({ route }) => relevantPages.includes(route))
    .reduce((acc, file) => {
      if (!acc.some((f) => f.route === file.route)) acc.push(file);
      return acc;
    }, []);

  if (uniqueFiles.length === 0) {
    console.error('No relevant HTML files found for routes:', relevantPages);
    return;
  }

  for (const { fullPath, route } of uniqueFiles) {
    if (!existsSync(fullPath)) {
      console.error(`HTML file not found: ${fullPath}`);
      continue;
    }

    try {
      let html = readFileSync(fullPath, 'utf-8');
      console.log(`Processing HTML file for route ${route}: ${fullPath}`);

      // Dynamically find the CSS link
      const linkMatch = html.match(
        /<link\s+rel="stylesheet"\s+href="([^"]+)"[^>]*>/i
      );
      if (!linkMatch) {
        console.warn(`No CSS link found in ${route}`);
        continue;
      }

      const cssHref = linkMatch[1]; // e.g., "/_next/static/css/511edabfa52cd738.css"
      const cssFileName = cssHref.split('/').pop(); // e.g., "511edabfa52cd738.css"
      const cssFilePath = join(cssDir, cssFileName);
      console.log(`Found CSS link: ${cssHref}, File: ${cssFilePath}`);

      if (!existsSync(cssFilePath)) {
        console.error(`CSS file not found: ${cssFilePath}`);
        continue;
      }

      const cssContent = readFileSync(cssFilePath, 'utf-8');
      console.log(
        `Read CSS content for ${cssFileName}, size: ${cssContent.length} characters`
      );

      // Remove the matched CSS link
      html = html.replace(linkMatch[0], '');
      // Inject the CSS into the head
      html = html.replace(/<\/head>/i, `<style>${cssContent}</style></head>`);

      writeFileSync(fullPath, html);
      console.log(`CSS inlined for ${route}: ${cssFileName}`);
    } catch (error) {
      console.error(`Error processing ${route}:`, error);
    }
  }
  console.log('Critical CSS generation completed.');
}

generateCritical().catch((error) => {
  console.error('Critical CSS generation failed:', error);
});
