import { Inter } from 'next/font/google';
import ClientLayout from './ClientLayout';
import './globals.css';
import { StructuredData, Metadata } from '../types';

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
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}