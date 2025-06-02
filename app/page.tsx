import ClientHome from './ClientHome';
import { MergeMetadata, MergeStructuredData } from '@/lib/MetaConfig';
import { metadata as rootMetadata } from '@/app/layout';
import Script from 'next/script';
import { Project, StructuredData, Metadata } from '../types';

const projects: Project[] = [
  {
    title: 'Machine Learning Dashboard by Fadi Dabboura', // Added "by Fadi Dabboura"
    description: 'A real-time dashboard for visualizing ML model performance, built by Fadi Dabboura with Next.js and TensorFlow. Features include live data updates and responsive design.',
    technologies: ['Next.js', 'TensorFlow', 'Tailwind CSS'],
    image: '/images/ml-dashboard.avif',
    alt: 'Machine Learning Dashboard by Fadi Dabboura', // Added "by Fadi Dabboura"
    liveLink: 'https://ml-dashboard.example.com',
    githubLink: 'https://github.com/fadidab98/ml-dashboard',
    author: {
      '@type': 'Person',
      name: 'Fadi Dabboura',
    },
    datePublished: '2024-06-01',
  },
  {
    title: 'Fadi Dabboura’s Portfolio Site', // Added "Fadi Dabboura’s"
    description: 'A responsive portfolio by Fadi Dabboura showcasing DevOps and web development expertise, optimized for SEO and performance.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/FadiLogic-web.webp',
    alt: 'Fadi Dabboura’s Portfolio Site Screenshot', // Added "Fadi Dabboura’s"
    liveLink: 'https://fadidabboura.com',
    githubLink: 'https://github.com/fadidab98/portfolio',
    author: {
      '@type': 'Person',
      name: 'Fadi Dabboura',
    },
    datePublished: '2024-08-01',
  },
];

const pageStructuredData: StructuredData[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Fadi Dabboura’s Portfolio',
    url: 'https://fadidabboura.com',
    image: 'https://fadidabboura.com/images/fadi-dabboura-profile.webp', // Updated image name
    description: 'Portfolio of Fadi Dabboura, showcasing DevOps and web development projects, including a free website scan tool by Fadi Dabboura.',
    keywords: 'fadi dabboura, dabboura, fadi, devops, web development, website scan, seo',
    mainEntity: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@context': 'https://schema.org',
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          url: project.liveLink,
          image: project.image,
          author: project.author,
          datePublished: project.datePublished,
        },
      })),
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
        name: 'Fadi Dabboura’s Home',
        item: 'https://fadidabboura.com',
      },
    ],
  },
  // New FAQ Schema
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Fadi Dabboura?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fadi Dabboura is a DevOps Engineer and Web Developer at FadiLogic, specializing in CI/CD, cloud infrastructure, and SEO optimization.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services does Fadi Dabboura offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fadi Dabboura offers DevOps engineering, web development, and a free website scan tool to improve SEO and performance.',
        },
      },
    ],
  },
];

export const metadata: Metadata = MergeMetadata(rootMetadata, {
  title: 'Fadi Dabboura | DevOps & Web Developer - FadiLogic',
  description: 'Fadi Dabboura’s FadiLogic: Expert DevOps and web development services. Use Fadi Dabboura’s free website scan tool to optimize SEO and performance.',
  keywords: 'fadi dabboura, dabboura, fadi, devops engineer, web developer, website scan, seo, ci/cd, cloud infrastructure',
  openGraph: {
    title: 'Fadi Dabboura | Portfolio & Website Scan - FadiLogic',
    description: 'Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise.',
    url: 'https://fadidabboura.com',
    images: [
      {
        url: '/images/fadi-dabboura-profile.webp', // Updated image name
        width: 1200,
        height: 630,
        alt: 'Fadi Dabboura’s FadiLogic Portfolio',
      },
    ],
  },
  twitter: {
    title: 'Fadi Dabboura | DevOps & Web Developer - FadiLogic',
    description: 'Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise.',
    images: ['/images/fadi-dabboura-profile.webp'], // Updated image name
  },
  alternates: {
    canonical: 'https://fadidabboura.com',
  },
});

const combinedStructuredData: StructuredData[] = MergeStructuredData(
  rootMetadata.globalStructuredData || [],
  pageStructuredData
);

export const revalidate = 86400;
export const dynamic = 'force-static';

export default function Home(): React.JSX.Element {
  return (
    <>
      <Script
        id="structured-data-home"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedStructuredData) }}
      />
      <ClientHome projects={projects} />
    </>
  );
}