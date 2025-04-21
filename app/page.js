import { projects } from '@/data/project';

import ClientHome from './ClientHome';

// Page-specific JSON-LD
const structuredData = [
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
];

export const metadata = {
  title: 'Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic',
  description:
    'Explore Fadi Dabboura’s portfolio: Expert DevOps engineer, web developer, and free website scan tool to boost your site’s SEO and performance at FadiLogic.',
  openGraph: {
    title: 'Fadi Dabboura - Portfolio & Website Scan | FadiLogic',
    description:
      'Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise.',
    url: 'https://fadilogic.serp24.online/',
  },
  twitter: {
    title: 'Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic',
    description:
      'Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise.',
  },
  other: {
    'script:application/ld+json': JSON.stringify(structuredData),
  },
  alternates: {
    canonical: 'https://fadilogic.serp24.online/',
  },
};

export default async function Home() {
  const projectsData = projects; // Replace with API call if dynamic
  return <ClientHome projects={projectsData} />;
}
