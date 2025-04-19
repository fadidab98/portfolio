import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import WebsitescanText from '@/components/WebsitescanText';
import Link from 'next/link';
import Section from '@/components/Section';
import Head from 'next/head'; // Still needed for JSON-LD structured data

const WebsiteScanForm = dynamic(() => import('../components/WebsiteScanForm'), {
  ssr: false,
});

export default function Webscan() {
  // Structured data (JSON-LD) for the website scan page
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
      '@type': 'Person',
      name: 'Fadi Dabboura',
      jobTitle: 'DevOps & Web Developer',
      url: 'https://fadilogic.serp24.online',
      sameAs: [
        'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
        'https://www.facebook.com/fadi.dabboura.73',
        'https://github.com/fadidab98',
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Website Scan Tool',
          item: 'https://fadilogic.serp24.online/website-scan',
        },
      ],
    },
  ];

  return (
    <>
      {/* NextSeo for meta tags, Open Graph, and Twitter cards */}
      <NextSeo
        title="Fadi Dabboura Website Scan Tool - FadiLogic"
        description="Use Fadi Dabboura’s free website scan tool to analyze your site’s performance, speed, and errors. Optimize your web development today!"
        canonical="https://fadilogic.serp24.online/website-scan"
        openGraph={{
          url: 'https://fadilogic.serp24.online/website-scan',
          title: 'Fadi Dabboura - Website Scan Tool | FadiLogic',
          description:
            'Fadi Dabboura’s FadiLogic: Free webscan tool to check website performance and errors.',
          images: [
            {
              url: 'https://fadilogic.serp24.online/images/FadiLogic.png',
              width: 1200,
              height: 630,
              alt: 'Fadi Dabboura Website Scan Tool',
              type: 'image/png',
            },
          ],
          siteName: 'FadiLogic',
          locale: 'en_US',
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: 'Fadi Dabboura Website Scan Tool - FadiLogic',
          description:
            'Use Fadi Dabboura’s free website scan tool to analyze your site’s performance and errors.',
          image: 'https://fadilogic.serp24.online/images/FadiLogic.png',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'fadi dabboura, website scan tool, free webscan, website performance tool, web development, devops, site speed test, website error checker',
          },
          {
            name: 'author',
            content: 'Fadi Dabboura',
          },
        ]}
      />

      {/* Structured data */}
      <Head>
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
