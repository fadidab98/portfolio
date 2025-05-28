import ClientContact from './ClientContact';
import { MergeMetadata, MergeStructuredData } from '@/lib/MetaConfig';
import { metadata as rootMetadata } from '@/app/layout';
import Script from 'next/script';
import { StructuredData, Metadata } from '../../types';

const pageStructuredData: StructuredData[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Fadi Dabboura',
    url: 'https://fadidabboura.com/contact',
    description: 'Contact Fadi Dabboura for expert DevOps and web development services.',
    mainEntity: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Fadi Dabboura',
      email: 'mailto:fadi@serp24.online',
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
        name: 'Contact',
        item: 'https://fadidabboura.com/contact',
      },
    ],
  },
];

export const metadata: Metadata = MergeMetadata(rootMetadata, {
  title: 'Contact Fadi Dabboura - DevOps & Web Development | FadiLogic',
  description: 'Reach out to Fadi Dabboura for expert DevOps and web development services.',
  openGraph: {
    title: 'Contact Fadi Dabboura - DevOps & Web Development | FadiLogic',
    description: 'Reach out to Fadi Dabboura for expert DevOps and web development services.',
    url: 'https://fadidabboura.com/contact',
  },
  twitter: {
    title: 'Contact Fadi Dabboura - DevOps & Web Development | FadiLogic',
    description: 'Reach out to Fadi Dabboura for expert DevOps and web development services.',
  },
  alternates: {
    canonical: 'https://fadidabboura.com/contact',
  },
});

const combinedStructuredData: StructuredData[] = MergeStructuredData(
  rootMetadata.globalStructuredData || [],
  pageStructuredData
);

export const revalidate = 86400;
export const dynamic = 'force-static';

export default function Contact(): React.JSX.Element {
  return (
    <>
      <Script
        id="structured-data-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedStructuredData) }}
      />
      <ClientContact />
    </>
  );
}