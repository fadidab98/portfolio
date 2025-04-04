import { useState, useEffect } from 'react';
import { useScanWebsiteMutation } from '@/lib/scanApi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function WebsiteScan() {
  const [url, setUrl] = useState('');
  const [triggerScan, { data, isLoading, isError, error }] = useScanWebsiteMutation();
  const [displayScore, setDisplayScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    triggerScan(url);
  };

  useEffect(() => {
    if (data?.results?.performance?.performanceScore) {
      setDisplayScore(0);
      const targetScore = data?.results?.performance?.performanceScore;
      const duration = 1500;
      const increment = targetScore / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetScore) {
          setDisplayScore(Math.round(targetScore));
          clearInterval(timer);
        } else {
          setDisplayScore(Math.round(current));
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>FadiLogic Website Scan Tool - Fadi Dabboura</title>
        <meta
          name="description"
          content="FadiLogic by Fadi Dabboura: Free website scan tool to analyze performance, errors, and accessibility."
        />
        <meta
          name="keywords"
          content="FadiLogic website scan, Fadi Dabboura, website scan tool, web performance, accessibility checker, free scan, web optimization, frontend development"
        />
        <meta name="author" content="Fadi Dabboura" />
        <link rel="canonical" href="https://fadilogic.serp24.online/website-scan" />
      </Head>
      <div className="min-h-screen bg-background text-text font-inter p-6">
        <NextSeo
          title="FadiLogic Website Scan Tool - Fadi Dabboura"
          description="FadiLogic by Fadi Dabboura: Free tool to scan website performance, errors, and accessibility."
          canonical="https://fadilogic.serp24.online/website-scan"
          openGraph={{
            url: 'https://fadilogic.serp24.online/website-scan',
            title: 'FadiLogic Website Scan Tool - Fadi Dabboura',
            description: 'FadiLogic by Fadi Dabboura: Free tool to scan website performance, errors, and accessibility, shared on GitHub and Facebook.',
            images: [
              {
                url: 'https://fadilogic.serp24.online/images/FadiLogic.webp',
                width: 1200,
                height: 630,
                alt: 'FadiLogic Website Scan by Fadi Dabboura',
                type: 'image/webp',
              },
            ],
            siteName: 'FadiLogic',
          }}
          additionalMetaTags={[
            {
              name: 'keywords',
              content:"FadiLogic website scan, Fadi Dabboura, website scan tool, web performance, accessibility checker, free scan, web optimization, frontend development"
            },
          ]}
        />
        {/* Introductory Text */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-accent font-playfair">FadiLogic Website Scan Service</h1>
          <p className="mt-4 text-lg">
            Welcome to FadiLogic by Fadi Dabboura! Use our free website scan tool to check your site’s performance, errors, and accessibility. Optimize your website with detailed insights. Need help?{' '}
            <Link href="/contact" className="text-accent underline">Contact us</Link> anytime.
          </p>
        </header>

        {/* Form */}
        <main>
          <section className="bg-secondary container min-h-60 text-center p-14 max-md:p-4" aria-labelledby="scan-form-heading">
            <h2 id="scan-form-heading" className="text-3xl font-bold mb-4 text-white">Enter Your Website URL</h2>
            <form
              onSubmit={handleSubmit}
              className="mb-8 flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto"
              aria-label="Website scan form"
            >
              <label htmlFor="url-input" className="sr-only">Website URL</label>
              <input
                id="url-input"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL (e.g., https://example.com)"
                className="flex-1 bg-secondary text-text border border-accent rounded p-2 focus:outline-none focus:ring-2 focus:ring-accent"
                required
                aria-required="true"
              />
              <button
                type="submit"
                className="bg-accent text-background px-4 py-2 rounded hover:bg-opacity-90 transition disabled:opacity-50"
                disabled={isLoading}
                aria-label={isLoading ? 'Scanning in progress' : 'Start website scan'}
              >
                {isLoading ? 'Scanning...' : 'Scan'}
              </button>
            </form>
          </section>

          {isLoading && (
            <div className="text-center mt-10" role="status" aria-live="polite">
              <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-t-accent border-gray-300 rounded-full animate-spin" aria-hidden="true"></div>
                <p className="mt-4">Scanning your website...</p>
              </div>
            </div>
          )}

          {isError && (
            <p className="text-center text-red-400 mt-10" role="alert">
              Error: {error?.message || 'Something went wrong'}
            </p>
          )}

          {data && (
            <section className="max-w-4xl mx-auto mt-10">
              <div className="bg-secondary m-auto mb-4 p-6 rounded-lg shadow-md text-center border border-accent w-1/2 max-sm:w-full h-48">
                <h3 className="text-xl font-bold text-text font-playfair">Performance</h3>
                <br />
                <div className="relative flex items-center justify-center mt-4">
                  <svg className="absolute w-24 h-24" viewBox="0 0 36 36">
                    <path
                      className="text-[#3a3a3a]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <motion.path
                      className="text-accent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="100"
                      strokeDashoffset={100 - (data.results?.performance?.performanceScore || 0)}
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 100 - (data.results?.performance?.performanceScore || 0) }}
                      transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />
                  </svg>
                  <div className="relative z-10">
                    <motion.div
                      className="text-2xl font-semibold text-accent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {displayScore}%
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* Rest of your results section unchanged */}
            </section>
          )}
        </main>
      </div>
    </>
  );
}