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
    const stylesheetLinks = head.querySelectorAll('link[rel="stylesheet"]');
    const noscriptTags = head.querySelectorAll('noscript');

    console.log(`- <style> tag: ${styleTag ? 'Found' : 'Not found'}`);
    console.log(`- <link rel="stylesheet"> count: ${stylesheetLinks.length}`);
    stylesheetLinks.forEach((link, i) => {
      console.log(`  Link ${i + 1}: ${link.toString()}`);
    });
    console.log(`- <noscript> tags: ${noscriptTags.length}`);
    noscriptTags.forEach((tag, i) => {
      console.log(`  <noscript> ${i + 1}: ${tag.innerHTML}`);
    });
  } catch (error) {
    console.error(`Error verifying ${page}:`, error);
  }
});