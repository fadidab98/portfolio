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
    triggerScan({ url }); // Ensure the API expects { url }
  };

  useEffect(() => {
    if (data?.success && data.data?.results?.performance?.performanceScore) {
      setDisplayScore(0);
      const targetScore = data.data.results.performance.performanceScore;
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
        <meta name="description" content="FadiLogic by Fadi Dabboura: Free website scan tool to analyze performance, errors, and accessibility." />
        <meta name="keywords" content="FadiLogic website scan, Fadi Dabboura, website scan tool, web performance, accessibility checker, free scan, web optimization, frontend development" />
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
            description: 'FadiLogic by Fadi Dabboura: Free tool to scan website performance, errors, and accessibility.',
            images: [{ url: 'https://fadilogic.serp24.online/images/FadiLogic.webp', width: 1200, height: 630, alt: 'FadiLogic Website Scan' }],
          }}
        />
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-accent font-playfair">FadiLogic Website Scan Service</h1>
          <p className="mt-4 text-lg">
            Welcome to FadiLogic! Scan your website for performance, errors, and accessibility.{' '}
            <Link href="/contact" className="text-accent underline">Contact us</Link> for support.
          </p>
        </header>

        <main>
          <section className="bg-secondary container min-h-60 text-center p-14 max-md:p-4">
            <h2 className="text-3xl font-bold mb-4 text-white">Enter Your Website URL</h2>
            <form onSubmit={handleSubmit} className="mb-8 flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="e.g., https://example.com"
                className="flex-1 bg-secondary text-text border border-accent rounded p-2 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="bg-accent text-background px-4 py-2 rounded hover:bg-opacity-90 transition disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Scanning...' : 'Scan'}
              </button>
            </form>
          </section>

          {isLoading && (
            <div className="text-center mt-10">
              <div className="w-16 h-16 border-4 border-t-accent border-gray-300 rounded-full animate-spin mx-auto"></div>
              <p className="mt-4">Scanning your website...</p>
            </div>
          )}

          {isError && (
            <div className="text-center text-red-400 mt-10">
              <p><strong>Error:</strong> {error?.data?.error?.message || 'Something went wrong'}</p>
              {error?.data?.error?.stack && (
                <pre className="text-left text-sm mt-2">{error.data.error.stack}</pre>
              )}
            </div>
          )}

          {data?.success && (
            <section className="max-w-4xl mx-auto mt-10">
              <div className="bg-secondary mb-4 p-6 rounded-lg shadow-md text-center border border-accent w-1/2 max-sm:w-full h-48">
                <h3 className="text-xl font-bold text-text font-playfair">Performance Score</h3>
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
                      strokeDashoffset={100 - displayScore}
                      animate={{ strokeDashoffset: 100 - displayScore }}
                      transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />
                  </svg>
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

              {/* Display Metrics */}
              <div className="bg-secondary p-6 rounded-lg shadow-md mb-4">
                <h3 className="text-xl font-bold text-text">Performance Metrics</h3>
                <ul className="mt-4 text-left">
                  {Object.entries(data.data.results.performance.metrics).map(([key, metric]) => (
                    <li key={key} className="mb-2">
                      <strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {metric.displayValue || `${metric.value.toFixed(2)} s`}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Display Errors */}
              {data.data.results.errors.length > 0 && (
                <div className="bg-red-900 p-6 rounded-lg shadow-md mb-4">
                  <h3 className="text-xl font-bold text-white">Errors ({data.data.results.totalErrors})</h3>
                  <ul className="mt-4 text-left">
                    {data.data.results.errors.map((err, index) => (
                      <li key={index} className="mb-2 text-red-200">
                        <strong>{err.title}:</strong> {err.description} (Score: {err.score}, Value: {err.displayValue})
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Display Alerts */}
              {data.data.results.alerts.length > 0 && (
                <div className="bg-yellow-900 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-white">Alerts ({data.data.results.totalAlerts})</h3>
                  <ul className="mt-4 text-left">
                    {data.data.results.alerts.map((alert, index) => (
                      <li key={index} className="mb-2 text-yellow-200">
                        <strong>{alert.title}:</strong> {alert.description} (Score: {alert.score}, Value: {alert.displayValue})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}
        </main>
      </div>
    </>
  );
}