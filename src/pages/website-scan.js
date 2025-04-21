import dynamic from 'next/dynamic';
import WebsitescanText from '@/components/WebsitescanText';
import Link from 'next/link';
import Section from '@/components/Section';
import Head from 'next/head';
import { createMetaConfig } from '@/lib/metaConfig';

const WebsiteScanForm = dynamic(() => import('../components/WebsiteScanForm'), {
  ssr: false,
});

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

// Meta tags configuration using createMetaConfig
const metaConfig = createMetaConfig({
  title: 'Fadi Dabboura Website Scan Tool | FadiLogic',
  description:
    'Use Fadi Dabboura’s free website scan tool to analyze your site’s performance, speed, and errors. Optimize your web development today!',
  keywords:
    'fadi dabboura, website scan tool, free webscan, website performance tool, web development, devops, site speed test, website error checker',
  canonical: 'https://fadilogic.serp24.online/website-scan',
  og: {
    title: 'Fadi Dabboura - Website Scan Tool | FadiLogic',
    description:
      'Fadi Dabboura’s FadiLogic: Free webscan tool to check website performance and errors.',
    image: 'https://fadilogic.serp24.online/images/FadiLogic.png',
    imageWidth: '1200',
    imageHeight: '630',
    imageAlt: 'Fadi Dabboura Website Scan Tool',
    imageType: 'image/png',
    url: 'https://fadilogic.serp24.online/website-scan',
  },
  twitter: {
    title: 'Fadi Dabboura Website Scan Tool | FadiLogic',
    description:
      'Use Fadi Dabboura’s free website scan tool to analyze your site’s performance and errors.',
    image: 'https://fadilogic.serp24.online/images/FadiLogic.png',
  },
});

export default function Webscan() {
  return (
    <>
      <Head>
        <title>{metaConfig.title}</title>
        <meta name="description" content={metaConfig.description} />
        <meta name="keywords" content={metaConfig.keywords} />
        <meta property="og:title" content={metaConfig.og.title} />
        <meta property="og:description" content={metaConfig.og.description} />
        <meta property="og:image" content={metaConfig.og.image} />
        <meta property="og:image:width" content={metaConfig.og.imageWidth} />
        <meta property="og:image:height" content={metaConfig.og.imageHeight} />
        <meta property="og:image:alt" content={metaConfig.og.imageAlt} />
        <meta property="og:image:type" content={metaConfig.og.imageType} />
        <meta property="og:url" content={metaConfig.og.url} />
        <meta property="og:site_name" content={metaConfig.og.siteName} />
        <meta property="og:locale" content={metaConfig.og.locale} />
        <meta property="og:type" content={metaConfig.og.type} />
        <meta name="twitter:card" content={metaConfig.twitter.card} />
        <meta name="twitter:title" content={metaConfig.twitter.title} />
        <meta
          name="twitter:description"
          content={metaConfig.twitter.description}
        />
        <meta name="twitter:image" content={metaConfig.twitter.image} />
        <link rel="canonical" href={metaConfig.canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <Section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white tracking-tight">
          Fadi Dabboura’s Website Scan Tool
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
          Welcome to my Website Scan Service! Analyze your site’s performance
          and errors below.{' '}
          <Link
            href="/"
            className="text-accent underline hover:text-accent/80 transition"
          >
            Back to portfolio
          </Link>{' '}
          or{' '}
          <Link
            href="/contact"
            className="text-accent underline hover:text-accent/80 transition"
          >
            contact me
          </Link>{' '}
          for personalized optimization solutions.
        </p>
      </Section>
      <WebsitescanText />
      <div className="container min-h-60 text-center mb-5">
        <WebsiteScanForm />
      </div>
    </>
  );
}
