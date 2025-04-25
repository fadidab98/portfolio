import Head from 'next/head';
import ClientWebscan from './ClientWebscan';

// Consolidated JSON-LD Structured Data
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FadiLogic Website Scan Tool',
    description: 'A free tool to analyze website performance and errors.',
    url: 'https://fadilogic.serp24.online/website-scan',
    author: {
      '@type': 'Person',
      name: 'Fadi Dabboura',
      givenName: 'Fadi',
      familyName: 'Dabboura',
      sameAs: [
        'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
        'https://www.facebook.com/fadi.dabboura.73',
        'https://github.com/fadidab98',
      ],
    },
    applicationCategory: 'Developer Tools',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://fadilogic.serp24.online',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Website Scan Tool',
        item: 'https://fadilogic.serp24.online/website-scan',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does the FadiLogic Website Scan Tool do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The FadiLogic Website Scan Tool analyzes your website’s performance, speed, SEO, and errors, providing actionable insights to optimize your site.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the website scan tool free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the FadiLogic Website Scan Tool is completely free. Simply visit https://fadilogic.serp24.online/website-scan and enter your website URL to start.',
        },
      },
    ],
  },
];

export const metadata = {
  title: 'Fadi Dabboura Website Scan Tool | FadiLogic',
  description:
    'Use Fadi Dabboura’s free website scan tool to analyze your site’s performance, speed, and errors. Optimize your web development today!',
  keywords:
    'fadi dabboura, website scan tool, free webscan, website performance tool, web development, devops, site speed test, website error checker',
  robots: 'index, follow',
  openGraph: {
    title: 'Fadi Dabboura - Website Scan Tool | FadiLogic',
    description:
      'Fadi Dabboura’s FadiLogic: Free webscan tool to check website performance and errors.',
    url: 'https://fadilogic.serp24.online/website-scan',
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
    title: 'Fadi Dabboura Website Scan Tool | FadiLogic',
    description:
      'Use Fadi Dabboura’s free website scan tool to analyze your site’s performance and errors.',
    images: ['https://fadilogic.serp24.online/images/FadiLogic.png'],
  },
  alternates: {
    canonical: 'https://fadilogic.serp24.online/website-scan',
  },
  manifest: '/manifest.json',
};

export default function Webscan() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <ClientWebscan />
    </>
  );
}
