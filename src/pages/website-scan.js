import { useState, useEffect } from 'react';
import { useScanWebsiteMutation } from '@/lib/scanApi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function Webscan() {
  const [url, setUrl] = useState('');
  const [triggerScan, { data, isLoading, isError, error }] = useScanWebsiteMutation();
  const [displayScore, setDisplayScore] = useState(0);
  console.log(data?.results)
  const handleSubmit = (e) => {
    e.preventDefault();
    triggerScan(url);
  };

  // Animate the performance score when data changes
  useEffect(() => {
    if (data?.results?.performance?.performanceScore) {
      setDisplayScore(0); // Reset to 0 before counting up
      const targetScore = data?.results?.performance?.performanceScore;
      const duration = 1500; // Animation duration in milliseconds (1.5s)
      const increment = targetScore / (duration / 50); // Update every 50ms
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

      return () => clearInterval(timer); // Cleanup
    }
  }, [data]);

  return (
    <>
    <Head>
    <title>FadiLogic Web Scan Tool - Fadi Dabboura</title>
    <meta
    name="description"
    content="FadiLogic by Fadi Dabboura: Free web scan tool to analyze website performance and errors."
  />
  <meta
      name="keywords"
      content="FadiLogic, Fadi Dabboura, web scan tool, website performance, web development, frontend development, backend development, devops"
    />
  <meta name="author" content="Fadi Dabboura" />
  <link rel="canonical" href="https://fadilogic.serp24.online/website-scan" />
  <meta property="og:image" content="https://fadilogic.serp24.online/images/FadiLogic.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Fadi Dabboura Website Scan and Portfolio" />
  <meta property="og:image:type" content="image/webp" />
</Head>
<NextSeo
        title="Fadi Dabboura - Website Scan Tool | FadiLogic"
        description="Fadi Dabboura's free website scan tool to analyze your site's performance and identify errors."
        canonical="https://fadilogic.serp24.online/website-scan"
        openGraph={{
          url: "https://fadilogic.serp24.online/website-scan",
          title: "Fadi Dabboura - Website Scan Tool | FadiLogic",
          description: "Fadi Dabboura's FadiLogic: Free website scan tool to check performance and errors.",
          images: [
            {
              url: "https://fadilogic.serp24.online/images/FadiLogic.webp",
              width: 1200,
              height: 630,
              alt: "Fadi Dabboura Website Scan Tool",
              type: "image/webp",
            },
          ],
          siteName: "FadiLogic",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "fadi, dabboura, website scan, webscan, web scan tool, website performance, web development, devops",
          },
          {
            name: "author",
            content: "Fadi Dabboura",
          },
        ]}
      />
    <div className="min-h-screen bg-background text-text font-inter p-6">
      {/* Introductory Text */}
      <div className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-4 text-white">Fadi Dabboura’s Website Scan Tool</h2>   
          <p className="mt-4 text-lg">
          Welcome to my Website Scan Service! Enter your website URL below to scan it for
          performance metrics, errors, and alerts. We’ll analyze your site and provide detailed
          insights to help you optimize it. If you run into any issues or need assistance, feel
          free to{' '}
          <Link href="/contact" className="text-accent underline">
            contact us
          </Link>{' '}
          anytime.
        </p>
      </div>

      {/* Form */}
      <div className="bg-secondary container min-h-60 text-center p-14 max-md:p-4">
      
        <h2 className="text-3xl font-bold mb-4 text-white">Enter Your Website URL</h2>
        <form
          onSubmit={handleSubmit}
          className="mb-8 flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto"
        >
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (e.g., https://example.com)"
            className="flex-1 bg-secondary text-text border border-accent rounded p-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="bg-accent text-background px-4 py-2 rounded hover:bg-opacity-90 transition disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Scanning...' : 'Scan'}
          </button>
        </form>
      </div>

      {/* Loading State with Spinner and Animated Text */}
      {isLoading && (
        <div className="text-center mt-10">
          <div className="relative flex items-center justify-center">
            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-t-accent border-gray-300 rounded-full animate-spin"></div>
            {/* Animated Text */}
            <motion.p
              className="absolute text-lg text-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            >
              
            </motion.p>
          </div>
          Scanning your website...
        </div>
      )}

      {/* Error State */}
      {isError && (
        <p className="text-center text-red-400 mt-10">
          Error: {error?.message || 'Something went wrong'}
        </p>
      )}

      {/* Results */}
      {data && (
        <div className="max-w-4xl mx-auto mt-10">
          {/* Performance Score Counter with Circular Progress */}
          <div className="bg-secondary m-auto mb-4 p-6 rounded-lg shadow-md text-center border border-accent w-1/2 max-sm:w-full  h-48">
            <h2 className="text-xl font-bold text-text font-playfair">Performance</h2>
            <br/>
           
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

          {/* Cards for Totals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {/* Errors Card */}
            <div className="bg-secondary p-6 rounded-lg shadow-md text-center border border-accent">
              <h2 className="text-xl font-bold text-text font-playfair">Errors</h2>
              <p className="text-4xl font-semibold text-accent">{data.results.totalErrors}</p>
            </div>

            {/* Alerts Card */}
            <div className="bg-secondary p-6 rounded-lg shadow-md text-center border border-accent">
              <h2 className="text-xl font-bold text-text font-playfair">Alerts</h2>
              <p className="text-4xl font-semibold text-accent">{data.results.totalAlerts}</p>
            </div>
          </div>

          {/* Error Details */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-accent mb-4 font-playfair">Error Details</h3>
            {data.results.errors.length > 0 ? (
              <ul className="space-y-6">
                {data.results.errors.map((error, index) => (
                  <li key={index} className="bg-secondary p-4 rounded-lg shadow-sm break-all">
                    <h4 className="text-lg font-semibold text-text font-playfair">{error.title}</h4>
                    <p className="text-text">{error.description}</p>
                    <p className="text-text">
                      <strong>Suggestion:</strong> {error.suggestion}
                    </p>
                    {error.element && (
                      <div className="mt-2">
                        <p className="text-text">
                          <strong>Element Selector:</strong> {error.element.selector}
                        </p>
                        <pre className="bg-[#3a3a3a] p-2 rounded mt-1 text-sm text-text font-mono overflow-x-auto">
                          {error.element.snippet}
                        </pre>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-text">No errors found.</p>
            )}
          </div>

          {/* Alert Details */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4 font-playfair">Alert Details</h3>
            {data.results.alerts.length > 0 ? (
              <ul className="space-y-6">
                {data.results.alerts.map((alert, index) => (
                  <li key={index} className="bg-secondary p-4 rounded-lg shadow-sm break-all">
                    <h4 className="text-lg font-semibold text-text font-playfair">{alert.title}</h4>
                    <p className="text-text">{alert.description}</p>
                    <p className="text-text">
                      <strong>Suggestion:</strong> {alert.suggestion}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-text">No alerts found.</p>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
}