import ClientWebscan from './ClientWebscan';
import { MergeMetadata, MergeStructuredData } from '@/lib/MetaConfig';
import { metadata as rootMetadata } from '@/app/layout';
import Script from 'next/script';
import { StructuredData, Metadata } from '../../types';

const pageStructuredData: StructuredData[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FadiLogic Website Scan Tool',
    description: 'A free tool to analyze website performance and errors.',
    image: 'https://fadidabboura.com/images/FadiLogic-profile.webp',
    url: 'https://fadidabboura.com/website-scan',
    author: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Fadi Dabboura',
      givenName: 'Fadi',
      familyName: 'Dabboura',
      image: 'https://fadidabboura.com/images/FadiLogic-profile.webp',
      sameAs: [
        'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
        'https://www.facebook.com/fadi.dabboura.73',
        'https://github.com/fadidab98',
      ],
    },
    applicationCategory: 'Developer Tools',
    operatingSystem: 'Web',
    offers: {
      '@context': 'https://schema.org',
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
        '@context': 'https://schema.org',
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://fadidabboura.com',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ListItem',
        position: 2,
        name: 'Website Scan Tool',
        item: 'https://fadidabboura.com/website-scan',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@context': 'https://schema.org',
        '@type': 'Question',
        name: 'What does the FadiLogic Website Scan Tool do?',
        acceptedAnswer: {
          '@context': 'https://schema.org',
          '@type': 'Answer',
          text: 'The FadiLogic Website Scan Tool analyzes your website’s performance, speed, SEO, and errors, providing actionable insights to optimize your site.',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Question',
        name: 'Is the website scan tool free to use?',
        acceptedAnswer: {
          '@context': 'https://schema.org',
          '@type': 'Answer',
          text: 'Yes, the FadiLogic Website Scan Tool is completely free. Simply visit https://fadidabboura.com/website-scan and enter your website URL to start.',
        },
      },
    ],
  },
];

export const metadata: Metadata = MergeMetadata(rootMetadata, {
  title: 'Fadi Dabboura Website Scan Tool | FadiLogic',
  description: 'Use Fadi Dabboura’s free website scan tool to analyze your site’s performance, speed, and errors. Optimize your web development today!',
  keywords: 'fadi dabboura, website scan tool, free webscan, website performance tool, web development, devops, site speed test, website error checker',
  openGraph: {
    title: 'Fadi Dabboura - Website Scan Tool | FadiLogic',
    description: 'Fadi Dabboura’s FadiLogic: Free webscan tool to check website performance and errors.',
    url: 'https://fadidabboura.com/website-scan',
  },
  twitter: {
    title: 'Fadi Dabboura Website Scan Tool | FadiLogic',
    description: 'Use Fadi Dabboura’s free website scan tool to analyze your site’s performance and errors.',
  },
  alternates: {
    canonical: 'https://fadidabboura.com/website-scan',
  },
});

const combinedStructuredData: StructuredData[] = MergeStructuredData(
  rootMetadata.globalStructuredData || [],
  pageStructuredData
);

export const revalidate = 86400;
export const dynamic = 'force-static';

export default function Webscan(): React.JSX.Element {
  return (
    <>
      <Script
        id="structured-data-webscan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedStructuredData) }}
      />
      <ClientWebscan />
    </>
  );
}