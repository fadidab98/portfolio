import { Inter } from 'next/font/google';
import ClientLayout from './ClientLayout';
import './globals.css';
import Script from 'next/script';

const globalStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fadi Dabboura',
    givenName: 'Fadi',
    familyName: 'Dabboura',
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

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// Inline critical CSS for above-the-fold content
const criticalCSS = `
  html, body { margin: 0; padding: 0; font-family: 'Inter', 'Inter Fallback', sans-serif; background-color: #1a1a1a; color: #ffffff; }
  .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
  .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
  .text-base { font-size: 1rem; line-height: 1.5rem; }
  .leading-relaxed { line-height: 1.625; }
  .bg-secondary { background-color: rgb(45 45 45); }
  .text-accent { color: rgb(212 175 55); }
  .text-white { color: rgb(255 255 255); }
  .text-gray-300 { color: rgb(209 213 219); }
  .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .max-w-5xl { max-width: 64rem; }
  .mx-auto { margin-left: auto; margin-right: auto; }
  .min-h-[400px] { min-height: 400px; }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        {/* Preload Inter font */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Global structured data */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalStructuredData),
          }}
        />
        {/* Explicit viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
