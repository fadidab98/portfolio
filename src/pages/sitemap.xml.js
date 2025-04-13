function generateSitemap() {
  const baseUrl = 'https://fadilogic.serp24.online';
  const lastModified = '2025-04-13T00:00:00.000Z'; // Set to the last major update dte
  const pages = [
    { url: '/', lastmod: lastModified, priority: '1.0' },
    { url: '/website-scan', lastmod: lastModified, priority: '1.0' },
    { url: '/contact', lastmod: lastModified, priority: '0.8' },
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
