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
    description: 'Fadi Dabboura’s free website scan tool analyzes performance, speed, SEO, and errors, providing actionable insights for optimization.',
    keywords: 'fadi, dabboura, fadi dabboura, website scan, web performance, seo, devops',
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
        name: 'What does Fadi Dabboura’s Website Scan Tool do?',
        acceptedAnswer: {
          '@context': 'https://schema.org',
          '@type': 'Answer',
          text: 'Fadi Dabboura’s Website Scan Tool analyzes your website’s performance, speed, SEO, accessibility, and errors, offering actionable recommendations to enhance user experience and search rankings.',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Question',
        name: 'Is Fadi Dabboura’s website scan tool free to use?',
        acceptedAnswer: {
          '@context': 'https://schema.org',
          '@type': 'Answer',
          text: 'Yes, Fadi Dabboura’s Website Scan Tool is completely free. Visit https://fadidabboura.com/website-scan, enter your website URL, and get a detailed performance report.',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Question',
        name: 'How can I improve my website based on the scan results?',
        acceptedAnswer: {
          '@context': 'https://schema.org',
          '@type': 'Answer',
          text: 'Follow the tool’s recommendations, such as optimizing images, fixing broken links, or improving SEO. Contact Fadi Dabboura for expert DevOps and web development support.',
        },
      },
    ],
  },
];

export const metadata: Metadata = MergeMetadata(rootMetadata, {
  title: 'Fadi Dabboura Website Scan Tool | FadiLogic',
  description: 'Fadi Dabboura’s free website scan tool by Fadi analyzes performance, speed, SEO, and errors. Optimize your site with FadiLogic’s expert insights.',
  keywords: 'fadi, dabboura, fadi dabboura, website scan tool, free webscan, website performance, seo, devops, site speed test, website error checker',
  openGraph: {
    title: 'Fadi Dabboura - Website Scan Tool | FadiLogic',
    description: 'Fadi Dabboura’s FadiLogic: Free website scan tool by Fadi to analyze performance, SEO, and errors for optimal web development.',
    url: 'https://fadidabboura.com/website-scan',
  },
  twitter: {
    title: 'Fadi Dabboura Website Scan Tool | FadiLogic',
    description: 'Fadi Dabboura’s free website scan tool at FadiLogic: Check your site’s performance, SEO, and errors with Fadi’s expertise.',
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
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedStructuredData) }}
      />
      <ClientWebscan />
    </>
  );
}