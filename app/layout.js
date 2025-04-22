import { Inter } from 'next/font/google';
import ClientLayout from './ClientLayout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// Global JSON-LD Structured Data
const globalStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://fadilogic.serp24.online',
    name: 'FadiLogic',
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://fadilogic.serp24.online/website-scan',
        },
        'query-input': {
          '@type': 'PropertyValueSpecification',
          valueRequired: true,
          valueName: 'website_url',
        },
        description:
          'Scan your website for performance and errors using FadiLogic’s free website scan tool.',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fadi Dabboura',
    url: 'https://fadilogic.serp24.online',
    jobTitle: 'DevOps Engineer & Web Developer',
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
    url: 'https://fadilogic.serp24.online',
    sameAs: [
      'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
      'https://github.com/fadidab98',
      'https://www.facebook.com/fadi.dabboura.73',
      'https://www.instagram.com/dabbourafadi',
    ],
  },
];

export const metadata = {
  title: {
    default: 'Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic',
    template: '%s | FadiLogic',
  },
  description:
    'Explore Fadi Dabboura’s portfolio: Expert DevOps engineer, web developer, and free website scan tool to boost your site’s SEO and performance at FadiLogic.',
  keywords:
    'fadi dabboura, devops, web developer, website scan, portfolio, fadilogic',
  robots: 'index, follow',
  openGraph: {
    siteName: 'FadiLogic',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://fadilogic.serp24.online/images/FadiLogic.png',
        width: 1200,
        height: 630,
        alt: 'FadiLogic',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://fadilogic.serp24.online/images/FadiLogic.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="preload"
          href="/images/project1.webp"
          as="image"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalStructuredData),
          }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
