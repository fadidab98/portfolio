// scripts/verify-build.js
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'node-html-parser';

const buildDir = join(process.cwd(), '.next', 'server', 'app');
const pages = ['index.html', 'contact.html', 'website-scan.html'];

pages.forEach((page) => {
  const filePath = join(buildDir, page);
  console.log(`Verifying ${page}:`);
  try {
    const html = readFileSync(filePath, 'utf-8');
    const dom = parse(html);
    const head = dom.querySelector('head');
    const styleTag = head.querySelector('style');
    const preloadLink = head.querySelector('link[rel="preload"][as="style"]');
    const stylesheetLinks = head.querySelectorAll('link[rel="stylesheet"]');
    const noscriptTags = head.querySelectorAll('noscript');

    console.log(`- <style> tag: ${styleTag ? 'Found' : 'Not found'}`);
    console.log(`- <link rel="preload" as="style">: ${preloadLink ? 'Found' : 'Not found'}`);
    console.log(`- Residual <link rel="stylesheet">: ${stylesheetLinks.length > 0 ? 'Found' : 'Not found'}`);
    stylesheetLinks.forEach((link, i) => {
      console.log(`  Residual <link rel="stylesheet"> ${i + 1}: ${link.toString()}`);
    });
    console.log(`- <noscript> tags: ${noscriptTags.length}`);
    noscriptTags.forEach((tag, i) => {
      console.log(`  <noscript> ${i + 1}: ${tag.toString()}`);
      const noscriptContent = tag.innerHTML;
      const noscriptDom = parse(noscriptContent);
      const link = noscriptDom.querySelector('link[rel="stylesheet"]');
      if (link) {
        const rel = link.getAttribute('rel');
        const href = link.getAttribute('href');
        const attributes = Object.keys(link.attributes);
        console.log(`  - Link attributes: ${JSON.stringify(attributes)}`);
        if (rel === 'stylesheet' && href) {
          console.log(`  - Link in <noscript> ${i + 1}: Valid`);
        } else {
          console.log(`  - Link in <noscript> ${i + 1}: Invalid (rel: ${rel}, href: ${href})`);
        }
      } else {
        console.log(`  - Link in <noscript> ${i + 1}: Invalid (no link found)`);
      }
    });

    // Check __next_f scripts
    const nextScripts = dom.querySelectorAll('script');
    let hasStylesheetInScript = false;
    let scriptCount = 0;
    nextScripts.forEach((script) => {
      scriptCount++;
      const scriptContent = script.textContent || '';
      console.log(`Verifying script ${scriptCount} for ${page} (length: ${scriptContent.length} chars)`);
      const regex = /\\\[\\\[\\\"\\\$\\\",\\\"link\\\".*?\\\"rel\\\":\\\"stylesheet\\\".*?\\\]\\\]/g;
      if (regex.test(scriptContent)) {
        console.log(`  Found <link rel="stylesheet"> in script ${scriptCount}: ${scriptContent.slice(0, 200)}...`);
        hasStylesheetInScript = true;
      } else {
        console.log(`- <link rel="stylesheet"> in __next_f scripts: Not found`);
      }
    });
    if (hasStylesheetInScript) {
      console.error(`Warning: Found <link rel="stylesheet"> in __next_f scripts for ${page}`);
    } else {
    console.log(`- <link rel="stylesheet"> in __next_f scripts: Not found`);
    }
    console.log(`- <link rel="stylesheet"> in __next_f scripts: ${hasStylesheetInScript ? 'Found' : 'Not found'}`);
    console.log(`Processed ${scriptCount} scripts for ${page}`);
  } catch (error) {
    console.error(`Error verifying ${page}:`, error);
  }
});