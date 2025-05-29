import { Inter } from 'next/font/google';
import ClientLayout from './ClientLayout';
import './globals.css';
import { StructuredData, Metadata } from '../types';
import { promises as fs } from 'fs';
import path from 'path';
import { headers } from 'next/headers';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const globalStructuredData: StructuredData[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fadi Dabboura',
    givenName: 'Fadi',
    familyName: 'Dabboura',
    url: 'https://fadidabboura.com',
    jobTitle: 'DevOps Engineer & Web Developer',
    image: 'https://fadidabboura.com/images/FadiLogic-profile.webp',
    sameAs: [
      'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
      'https://github.com/fadidab98',
      'https://www.facebook.com/fadi.dabboura.73',
      'https://www.instagram.com/dabbourafadi',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FadiLogic',
    url: 'https://fadidabboura.com',
    logo: 'https://fadidabboura.com/favicon-192x192.png',
    sameAs: [
      'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
      'https://github.com/fadidab98',
      'https://www.facebook.com/fadi.dabboura.73',
      'https://www.instagram.com/dabbourafadi',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://fadidabboura.com',
    name: 'FadiLogic',
    potentialAction: [
      {
        '@context': 'https://schema.org',
        '@type': 'SearchAction',
        target: {
          '@context': 'https://schema.org',
          '@type': 'EntryPoint',
          urlTemplate: 'https://fadidabboura.com/website-scan',
        },
        'query-input': {
          '@context': 'https://schema.org',
          '@type': 'PropertyValueSpecification',
          valueRequired: true,
          valueName: 'website_url',
        },
        description: 'Scan your website for performance and errors using FadiLogic’s free website scan tool.',
      },
    ],
  },
];

export const metadata: Metadata = {
  globalStructuredData,
  metadataBase: new URL('https://fadidabboura.com'),
  title: {
    default: 'Fadi Dabboura - DevOps & Web Developer | FadiLogic',
    template: '%s | FadiLogic',
  },
  description:
    'Fadi Dabboura’s FadiLogic offers expert DevOps engineering, web development, and a free website scan tool to boost your site’s SEO and performance. Contact Fadi for scalable CI/CD and cloud solutions.',
  keywords: 'fadi, dabboura, fadi dabboura, devops, web development, website scan, seo, ci/cd, cloud infrastructure',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://fadidabboura.com',
    types: {
      'application/xml': 'https://fadidabboura.com/sitemap.xml',
    },
  },
  openGraph: {
    siteName: 'FadiLogic',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/FadiLogic.png',
        width: 1200,
        height: 630,
        alt: 'FadiLogic - DevOps and Web Development',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/FadiLogic.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

async function getMainCSSFile(): Promise<string | null> {
  const cssDir = path.join(process.cwd(), '.next/static/css');
  try {
    const files = await fs.readdir(cssDir);
    const cssFiles = files.filter(file => file.endsWith('.css') && !file.includes('critical'));
    if (cssFiles.length === 0) {
      console.warn('No main CSS files found in .next/static/css');
      return null;
    }
    const latestFile = await Promise.all(
      cssFiles.map(async file => {
        const stats = await fs.stat(path.join(cssDir, file));
        return { file, mtime: stats.mtime };
      })
    ).then(files => files.sort((a, b) => b.mtime.getTime() - a.mtime.getTime())[0].file);
    console.log(`Selected main CSS file: ${latestFile}`);
    return `/next/static/css/${latestFile}`;
  } catch (error) {
    console.error('Error finding main CSS file:', error);
    return null;
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const mainCSS = await getMainCSSFile();

  return (
    <html lang="en" className={inter.className}>
      <head>
        {mainCSS && (
          <link
            rel="stylesheet"
            href={mainCSS}
          />
        )}
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}