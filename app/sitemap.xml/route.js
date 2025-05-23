// app/sitemap.xml/route.js
import { NextResponse } from 'next/server';

function generateSitemap() {
  const baseUrl = 'https://fadilogic.serp24.online';
  const lastModified = new Date().toISOString();
  const pages = [
    { url: '/', lastmod: lastModified, changefreq: 'weekly', priority: '1.0' },
    { url: '/website-scan', lastmod: lastModified, changefreq: 'weekly', priority: '0.9' },
    { url: '/contact', lastmod: lastModified, changefreq: 'monthly', priority: '0.8' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
            <url>
              <loc>${baseUrl}${page.url}</loc>
              <lastmod>${page.lastmod}</lastmod>
              <changefreq>${page.changefreq}</changefreq>
              <priority>${page.priority}</priority>
            </url>
          `
        )
        .join('')}
    </urlset>`;
}

export async function GET() {
  try {
    const sitemap = generateSitemap();
    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'text/xml',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
      },
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}