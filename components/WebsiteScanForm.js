'use client';

import { useState, useEffect } from 'react';
import { useScanWebsiteMutation } from '@/lib/scanApi';
import { motion } from 'framer-motion';
import Section from './Section';

export default function WebsiteScanForm() {
  const [url, setUrl] = useState('');
  const [triggerScan, { data, isLoading, isError, error }] =
    useScanWebsiteMutation();
  const [displayScore, setDisplayScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    triggerScan(url);
  };

  useEffect(() => {
    if (data?.results?.performance?.performanceScore) {
      setDisplayScore(0);
      const targetScore = data.results.performance.performanceScore;
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

  // Determine performance label based on score
  const getPerformanceLabel = (score) => {
    if (score >= 90) return { label: 'Excellent', color: 'text-accent' };
    if (score >= 70) return { label: 'Good', color: 'text-accent' };
    if (score >= 50)
      return { label: 'Needs Improvement', color: 'text-accent' };
    return { label: 'Poor', color: 'text-accent' };
  };

  const performanceLabel = getPerformanceLabel(displayScore);

  return (
    <>
      <Section
        id="websitescanform"
        className=" bg-secondary  text-center p-8 sm:p-12 my-8 rounded-xl shadow-2xl border border-accent/20 hover:shadow-accent/20 transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">
          Enter Your Website URL
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mb-8 flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto"
        >
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (e.g., https://example.com)"
            className="flex-1 bg-[#2a2a2a] text-white border border-accent rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="bg-accent text-background px-6 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Scanning...' : 'Scan'}
          </button>
        </form>
      </Section>

      {isLoading && (
        <div className="text-center mt-12">
          <div className="relative flex items-center justify-center">
            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-t-accent border-gray-300 rounded-full animate-spin"></div>
            {/* Animated Text */}
          </div>
          Scanning your website...
        </div>
      )}

      {isError && (
        <p className="text-center text-red-400 mt-12 text-lg sm:text-xl">
          Error: {error?.message || 'Something went wrong'}
        </p>
      )}

      {data && (
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-secondary mb-8 p-8 rounded-xl shadow-xl text-center border border-accent/20 hover:shadow-accent/20 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-playfair mb-4">
              Performance Score
            </h2>
            <div className="relative flex items-center justify-center mt-6">
              <svg className="absolute w-32 h-32" viewBox="0 0 36 36">
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
                  strokeDashoffset={
                    100 - (data.results?.performance?.performanceScore || 0)
                  }
                  initial={{ strokeDashoffset: 100 }}
                  animate={{
                    strokeDashoffset:
                      100 - (data.results?.performance?.performanceScore || 0),
                  }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
              </svg>
              <div className="relative z-10">
                <motion.div
                  className={`text-3xl sm:text-4xl font-semibold ${performanceLabel.color}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {displayScore}%
                </motion.div>
                <p className={`mt-2 text-lg ${performanceLabel.color}`}>
                  {performanceLabel.label}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-secondary p-6 rounded-xl shadow-xl text-center border border-accent/20 hover:shadow-accent/20 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-playfair mb-2">
                Errors
              </h2>
              <p className="text-4xl sm:text-5xl font-semibold text-accent">
                {data.results.totalErrors}
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-xl shadow-xl text-center border border-accent/20 hover:shadow-accent/20 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-playfair mb-2">
                Alerts
              </h2>
              <p className="text-4xl sm:text-5xl font-semibold text-accent">
                {data.results.totalAlerts}
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-6 font-playfair">
              Error Details
            </h3>
            {data.results.errors.length > 0 ? (
              <ul className="space-y-6">
                {data.results.errors.map((error, index) => (
                  <li
                    key={index}
                    className="bg-secondary p-6 rounded-lg shadow-md break-all border-l-4 border-red-400"
                  >
                    <div className="flex items-center mb-2">
                      <svg
                        className="w-6 h-6 text-red-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h4 className="text-lg sm:text-xl font-semibold text-white font-playfair">
                        {error.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 mb-2">{error.description}</p>
                    <p className="text-gray-300">
                      <strong className="text-white">Suggestion:</strong>{' '}
                      {error.suggestion}
                    </p>
                    {error.element && (
                      <div className="mt-4">
                        <p className="text-gray-300">
                          <strong className="text-white">
                            Element Selector:
                          </strong>{' '}
                          {error.element.selector}
                        </p>
                        <pre className="bg-[#2a2a2a] p-3 rounded-lg mt-2 text-sm text-gray-300 font-mono overflow-x-auto border border-gray-600">
                          {error.element.snippet}
                        </pre>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300 text-center">No errors found.</p>
            )}
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-6 font-playfair">
              Alert Details
            </h3>
            {data.results.alerts.length > 0 ? (
              <ul className="space-y-6">
                {data.results.alerts.map((alert, index) => (
                  <li
                    key={index}
                    className="bg-secondary p-6 rounded-lg shadow-md break-all border-l-4 border-accent"
                  >
                    <div className="flex items-center mb-2">
                      <svg
                        className="w-6 h-6 text-accent mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h4 className="text-lg sm:text-xl font-semibold text-white font-playfair">
                        {alert.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 mb-2">{alert.description}</p>
                    <p className="text-gray-300">
                      <strong className="text-white">Suggestion:</strong>{' '}
                      {alert.suggestion}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300 text-center">No alerts found.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
