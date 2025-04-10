import { projects } from '@/data/project';

function generateSitemap() {
  const baseUrl = 'https://fadilogic.serp24.online';
  const pages = [
    { url: '/', lastmod: new Date().toISOString(), priority: '1.0' },
    { url: '/website-scan', lastmod: new Date().toISOString(), priority: '0.9' },
    { url: '/contact', lastmod: new Date().toISOString(), priority: '0.8' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
            <url>
              <loc>${baseUrl}${page.url}</loc>
              <lastmod>${page.lastmod}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${page.priority}</priority>
            </url>
          `
        )
        .join('')}
    </urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}