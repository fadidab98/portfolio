import ClientHome from './ClientHome';
import Script from 'next/script';

// Page-specific JSON-LD structured data
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

// Sample project data (replace with real data or API call)
const projects = [
  {
    title: 'Machine Learning Dashboard',
    description:
      'A real-time dashboard built with Next.js and TensorFlow for data visualization.',
    technologies: ['Next.js', 'TensorFlow', 'Tailwind CSS'],
    image: '/images/project1.webp',
    alt: 'Machine Learning Dashboard Screenshot',
    liveLink: 'https://ml-dashboard.fadilogic.serp24.online',
    githubLink: 'https://github.com/fadidab98',
  },
  {
    title: 'Portfolio Site',
    description:
      'A responsive portfolio showcasing DevOps and web development expertise.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/project1.webp',
    alt: 'FadiLogic Portfolio Site Screenshot',
    liveLink: 'https://fadilogic.serp24.online',
    githubLink: 'https://github.com/fadidab98',
  },
];

// Page-specific metadata
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
  alternates: {
    canonical: 'https://fadilogic.serp24.online/',
  },
};

// Force static generation for this page
export const dynamic = 'force-static';

export default async function Home() {
  return (
    <>
      <head>
        {/* Page-specific structured data */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <ClientHome projects={projects} />
    </>
  );
}