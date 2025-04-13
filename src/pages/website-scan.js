import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';

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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Fadi Dabboura’s Website Scan Tool
          </h1>
        </div>
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            How Does the Website Scan Tool Work?
          </h2>
          <p className="text-lg mb-4">
            Fadi Dabboura’s Website Scan Tool analyzes your website’s
            performance, speed, and errors by evaluating key metrics such as
            load time, responsiveness, and SEO readiness. Simply enter your
            website URL, and our tool will provide a detailed report to help you
            optimize your site.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Why Website Performance Matters
          </h2>
          <p className="text-lg mb-4">
            A fast and error-free website improves user experience, reduces
            bounce rates, and boosts your search engine rankings. With Fadi
            Dabboura’s free webscan tool, you can identify issues like slow load
            times, broken links, and SEO errors to enhance your site’s
            performance.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-accent">
                What does the website scan tool check?
              </h3>
              <p className="text-lg">
                The tool checks your site’s performance metrics, including load
                speed, mobile responsiveness, SEO errors, and broken links.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent">
                Is the website scan tool free?
              </h3>
              <p className="text-lg">
                Yes, Fadi Dabboura’s website scan tool is completely free to
                use.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent">
                How can I improve my website performance?
              </h3>
              <p className="text-lg">
                After scanning, follow the tool’s recommendations, such as
                optimizing images, reducing JavaScript, and improving server
                response time. Contact Fadi Dabboura for personalized DevOps and
                web development solutions.
              </p>
            </div>
          </div>
        </section>
        <div className=" container min-h-60 text-center p-14 max-md:p-4 max-md:w-full max-md:m-0 my-12 w-full mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Enter Your Website URL
          </h2>
          <p className="mt-4 text-lg">
            Welcome to my Website Scan Service! Analyze your site’s performance
            and errors below.{' '}
            <Link href="/" className="text-accent underline">
              Back to portfolio
            </Link>
            .
          </p>
          <WebsiteScanForm />
        </div>
      </div>
    </>
  );
}
