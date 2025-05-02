// scripts/test-parser.js
import { parse } from 'node-html-parser';

const html = `
  <head>
    <link rel="stylesheet" href="/_next/static/css/1eac7ab8b6dbc3a4.css" precedence="next" crossorigin="undefined">
    <link rel="preload" href="/_next/static/css/1eac7ab8b6dbc3a4.css" as="style">
    <noscript><link rel="stylesheet" href="/_next/static/css/1eac7ab8b6dbc3a4.css"></noscript>
    <script>self.__next_f.push([1,"0:{\"f\":[[[\"\",{\"children\":[\"__PAGE__\",{}]},\"$undefined\",\"$undefined\",true],[\"\",[\"$\",\"$1\",\"c\",{\"children\":[[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/css/1eac7ab8b6dbc3a4.css\",\"precedence\":\"next\"}]]]}]]])</script>
  </head>`;

const dom = parse(html);
console.log('Initial <link> tags:');
dom
  .querySelectorAll('head link')
  .forEach((link, i) => console.log(`Link ${i + 1}: ${link.toString()}`));

const stylesheetLinks = dom.querySelectorAll('link[rel="stylesheet"]');
console.log(`Found ${stylesheetLinks.length} <link rel="stylesheet"> tags`);
stylesheetLinks.forEach((link, i) => {
  console.log(`Removing <link rel="stylesheet"> ${i + 1}: ${link.toString()}`);
  link.remove();
});

console.log('After removing <link rel="stylesheet">:');
dom
  .querySelectorAll('head link')
  .forEach((link, i) => console.log(`Link ${i + 1}: ${link.toString()}`));

const scripts = dom.querySelectorAll('script');
scripts.forEach((script, i) => {
  const content = script.textContent;
  if (content.includes('rel:"stylesheet"')) {
    console.log(
      `Found stylesheet in script ${i + 1}: ${content.slice(0, 200)}...`
    );
    script.textContent = content.replace(
      /\["\$","link","[^"]+",\{"rel":"stylesheet","href":"\/_next\/static\/css\/[^"]+","precedence":"next".*?\}\]/g,
      ''
    );
    console.log(
      `Cleaned script ${i + 1}: ${script.textContent.slice(0, 200)}...`
    );
  }
});

const noscriptTags = dom.querySelectorAll('head noscript');
console.log(`Found ${noscriptTags.length} <noscript> tags`);
noscriptTags.forEach((tag, i) =>
  console.log(`<noscript> ${i + 1}: ${tag.toString()}`)
);

const head = dom.querySelector('head');
const newNoscript = parse(
  '<noscript><link rel="stylesheet" href="/_next/static/css/1eac7ab8b6dbc3a4.css"></noscript>'
);
head.appendChild(newNoscript);
console.log('After adding new <noscript>:');
dom
  .querySelectorAll('head noscript')
  .forEach((tag, i) => console.log(`<noscript> ${i + 1}: ${tag.toString()}`));

console.log('Final HTML:', dom.toString().slice(0, 1000));
