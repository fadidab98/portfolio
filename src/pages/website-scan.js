import Head from 'next/head';
import dynamic from 'next/dynamic';
import WebsitescanText from '@/components/WebsitescanText';
import Link from 'next/link';
import Section from '@/components/Section';

const WebsiteScanForm = dynamic(() => import('../components/WebsiteScanForm'), {
  ssr: false,
});

export default function Webscan() {
  return (
    <>
      <Head>
        <title>Fadi Dabboura Website Scan Tool | FadiLogic</title>
        <meta
          name="description"
          content="Use Fadi Dabboura’s free website scan tool to analyze your site’s performance, speed, and errors. Optimize your web development today!"
        />
        <meta
          name="keywords"
          content="fadi dabboura, website scan tool, free webscan, website performance tool, web development, devops, site speed test, website error checker"
        />
        <meta name="author" content="Fadi Dabboura" />
        <link
          rel="canonical"
          href="https://fadilogic.serp24.online/website-scan"
        />
        <meta
          property="og:title"
          content="Fadi Dabboura - Website Scan Tool | FadiLogic"
        />
        <meta
          property="og:description"
          content="Fadi Dabboura’s FadiLogic: Free webscan tool to check website performance and errors."
        />
        <meta
          property="og:image"
          content="https://fadilogic.serp24.online/images/FadiLogic.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Fadi Dabboura Website Scan Tool"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FadiLogic" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:url"
          content="https://fadilogic.serp24.online/website-scan"
        />
        <meta
          name="twitter:title"
          content="Fadi Dabboura Website Scan Tool | FadiLogic"
        />
        <meta
          name="twitter:description"
          content="Use Fadi Dabboura’s free website scan tool to analyze your site’s performance and errors."
        />
        <meta
          name="twitter:image"
          content="https://fadilogic.serp24.online/images/FadiLogic.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'FadiLogic Website Scan Tool',
                description:
                  'A free tool to analyze website performance and errors.',
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
            ]),
          }}
        />
      </Head>
      <div className="min-h-screen bg-background text-text font-inter p-6">
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
        <div className="  container min-h-60 text-center ">
          <WebsiteScanForm />
        </div>
      </div>
    </>
  );
}
