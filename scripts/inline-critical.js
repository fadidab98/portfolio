// scripts/inline-critical.js
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join, normalize } from 'path';
import Critters from 'critters';
import { parse } from 'node-html-parser';

async function inlineCritical() {
  console.log('Starting critical CSS inlining with Critters...');
  console.log('Script version: 3.24 (2025-06-03)');
  const buildDir = join(process.cwd(), '.next', 'server', 'app');
  const cssDir = join(process.cwd(), '.next', 'static', 'css');

  const critters = new Critters({
    path: cssDir,
    publicPath: '/_next/static/css/',
    external: true,
    inlineThreshold: 0,
    minimumExternalSize: 0,
    preload: 'swap',
    pruneSource: true,
    logLevel: 'trace',
    reduceInlineCss: true,
    noscriptFallback: true,
  });

  const getHtmlFiles = (dir) => {
    console.log(`Searching for HTML files in: ${dir}`);
    const files = [];
    const readDir = (path, relativePath = '') => {
      try {
        readdirSync(path, { withFileTypes: true }).forEach((entry) => {
          const fullPath = normalize(join(path, entry.name));
          const relPath = relativePath ? join(relativePath, entry.name) : entry.name;
          if (entry.isDirectory()) {
            readDir(fullPath, relPath);
          } else if (fullPath.endsWith('.html')) {
            let route;
            if (entry.name === 'index.html') route = '/';
            else if (entry.name === 'contact.html') route = '/contact';
            else if (entry.name === 'website-scan.html') route = '/website-scan';
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
  }
  console.log('Found HTML files:', htmlFiles.map(f => f.fullPath));

  const relevantPages = ['/', '/website-scan', '/contact'];
  const uniqueFiles = htmlFiles
    .filter(({ route }) => relevantPages.includes(route))
    .reduce((acc, file) => {
      if (!acc.some((f) => f.route === file.route)) acc.push(file);
      return acc;
    }, []);

  for (const { fullPath, route } of uniqueFiles) {
    if (!existsSync(fullPath)) {
      console.error(`HTML file not found: ${fullPath}`);
      continue;
    }

    try {
      let html = readFileSync(fullPath, 'utf-8');
      console.log(`Processing HTML file for route ${route}: ${fullPath}`);
      let dom = parse(html);
      const cssLink = dom.querySelector('link[rel="stylesheet"][href*="_next/static/css/"]');
      if (!cssLink) {
        console.error(`No CSS <link> tag found in ${fullPath}`);
        continue;
      }
      let cssPath = join(process.cwd(), '.next', cssLink.getAttribute('href').replace(/^\/_next\//, ''));
      if (!existsSync(cssPath)) {
        console.error(`CSS file not found: ${cssPath}`);
        continue;
      }
      let cssContent = readFileSync(cssPath, 'utf-8');
      console.log(`CSS file content length: ${cssContent.length} characters`);

      let processedHtml = await critters.process(html);
      let processedDom = parse(processedHtml);
      const head = processedDom.querySelector('head');

      // Add preload link if missing
      let preloadLink = head.querySelector('link[rel="preload"][as="style"]');
      if (!preloadLink) {
        console.log(`Adding <link rel="preload" as="style"> for ${route}`);
        head.childNodes.unshift(parse(`<link rel="preload" href="${cssLink.getAttribute('href')}" as="style" onload="this.rel='stylesheet'">`));
        processedHtml = processedDom.toString();
        processedDom = parse(processedHtml);
      }

      // Remove residual stylesheet links
      const stylesheetLinks = processedDom.querySelectorAll('link[rel="stylesheet"]');
      if (stylesheetLinks.length > 0) {
        console.log(`Removing ${stylesheetLinks.length} <link rel="stylesheet"> tags for ${route}`);
        stylesheetLinks.forEach(link => link.remove());
        processedHtml = processedDom.toString();
        processedDom = parse(processedHtml);
      }

      // Clean __next_f scripts
      const nextScripts = processedDom.querySelectorAll('script');
      let scriptCount = 0;
      for (const script of nextScripts) {
        scriptCount++;
        const scriptContent = script.textContent || '';
        console.log(`Processing script ${scriptCount} for ${route} (length: ${scriptContent.length} chars)`);
        if (scriptContent.includes('self.__next_f.push')) {
          console.log(`Found __next_f script ${scriptCount} for ${route}`);
          if (scriptCount === 13 && (route === '/contact' || route === '/')) {
            console.log(`Full script content for script 13 ${route}:`, scriptContent);
          }
          const regex = /\\\[\\\[\\\"\\\$\\\",\\\"link\\\".*?\\\"rel\\\":\\\"stylesheet\\\".*?\\\]\\\]/g;
          const matches = scriptContent.match(regex);
          if (matches) {
            console.log(`Matched stylesheet patterns in script ${scriptCount} for ${route}: ${matches.join(', ')}`);
            script.textContent = scriptContent.replace(regex, '[]');
            console.log(`Cleaned __next_f script ${scriptCount} for ${route}`);
          } else {
            console.log(`No stylesheet reference found in __next_f script ${scriptCount} for ${route}`);
            if (scriptContent.includes('rel:\\"stylesheet\\"')) {
              console.log(`Found 'rel:"stylesheet"' in script content, regex may need adjustment`);
              console.log(`Full script content for script ${scriptCount} ${route}:`, scriptContent);
            }
          }
        } else {
          console.log(`Script ${scriptCount} for ${route} is not a __next_f script`);
        }
      }
      console.log(`Processed ${scriptCount} scripts for ${route}`);
      processedHtml = processedDom.toString();

      // Remove and add noscript
      processedHtml = processedHtml.replace(/<noscript>[\s\S]*?<\/noscript>/g, '');
      const noscriptTag = `<noscript><link rel="stylesheet" href="${cssLink.getAttribute('href')}"></noscript>`;
      processedHtml = processedHtml.replace('</head>', `${noscriptTag}</head>`);
      console.log(`Added <noscript> tag for ${route}`);

      // Verify noscript presence
      const noscriptCount = (processedHtml.match(/<noscript>/g) || []).length;
      console.log(`Found ${noscriptCount} <noscript> tags in final HTML for ${route}`);
      if (noscriptCount !== 1) {
        console.error(`Expected 1 <noscript> tag, found ${noscriptCount} for ${route}`);
      }

      writeFileSync(fullPath, processedHtml, 'utf-8');
      console.log(`Successfully saved modified HTML for ${route}: ${fullPath}`);
    } catch (error) {
      console.error(`Error processing ${route}:`, error);
    }
  }
  console.log('Critical CSS inlining completed.');
}

inlineCritical().catch((error) => {
  console.error('Critical CSS inlining failed:', error);
  process.exit(1);
});