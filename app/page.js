import Head from 'next/head';
import ClientHome from './ClientHome';
import { projects } from '@/data/project';

// Page-specific JSON-LD
const structuredData = [
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
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does FadiLogic offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FadiLogic provides DevOps solutions, including CI/CD pipelines and cloud infrastructure, as well as web development and website performance optimization using a free scan tool.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I scan my website for performance issues?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the free website scan tool at FadiLogic to analyze your site’s speed, SEO, and errors. Visit https://fadilogic.serp24.online/website-scan to get started.',
        },
      },
    ],
  },
];

export const metadata = {
  title: 'Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic',
  description:
    'Explore Fadi Dabboura’s portfolio: Expert DevOps engineer, web developer, and free website scan tool to boost your site’s SEO and performance at FadiLogic.',
  keywords:
    'fadi dabboura, devops, web developer, website scan, portfolio, fadilogic',
  robots: 'index, follow',
  openGraph: {
    title: 'Fadi Dabboura - Portfolio & Website Scan | FadiLogic',
    description:
      'Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise.',
    url: 'https://fadilogic.serp24.online/',
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
    title: 'Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic',
    description:
      'Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise.',
    images: ['https://fadilogic.serp24.online/images/FadiLogic.png'],
  },
  alternates: {
    canonical: 'https://fadilogic.serp24.online/',
  },
  manifest: '/manifest.json',
};

export default async function Home() {
  const projectsData = projects; // Replace with API call if dynamic
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
      <ClientHome projects={projectsData} />
    </>
  );
}
