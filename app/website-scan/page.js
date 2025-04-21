import ClientWebscan from './ClientWebscan';

// Page-specific JSON-LD
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
      sameAs: [
        'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
        'https://www.facebook.com/fadi.dabboura.73',
        'https://github.com/fadidab98',
      ],
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
];

export const metadata = {
  title: 'Fadi Dabboura Website Scan Tool | FadiLogic',
  description:
    'Use Fadi Dabboura’s free website scan tool to analyze your site’s performance, speed, and errors. Optimize your web development today!',
  keywords:
    'fadi dabboura, website scan tool, free webscan, website performance tool, web development, devops, site speed test, website error checker',
  openGraph: {
    title: 'Fadi Dabboura - Website Scan Tool | FadiLogic',
    description:
      'Fadi Dabboura’s FadiLogic: Free webscan tool to check website performance and errors.',
    url: 'https://fadilogic.serp24.online/website-scan',
  },
  twitter: {
    title: 'Fadi Dabboura Website Scan Tool | FadiLogic',
    description:
      'Use Fadi Dabboura’s free website scan tool to analyze your site’s performance and errors.',
  },
  other: {
    'script:application/ld+json': JSON.stringify(structuredData),
  },
  alternates: {
    canonical: 'https://fadilogic.serp24.online/website-scan',
  },
};

export default function Webscan() {
  return <ClientWebscan />;
}
