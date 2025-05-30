'use client';

import { useState, useEffect } from 'react';
import { useScanWebsiteMutation } from '@/lib/scanApi';
import { motion, AnimatePresence } from 'framer-motion';
import { ScanResult, ErrorItem, AlertItem } from '@/types';

interface PerformanceLabel {
  label: string;
  color: string;
}

interface ApiError {
  message?: string;
  data?: { message: string };
}

export default function WebsiteScanForm(): React.JSX.Element {
  const [url, setUrl] = useState<string>('');
  const [triggerScan, { data: rawData, isLoading, isError, error }] = useScanWebsiteMutation();
  const [displayScore, setDisplayScore] = useState<number>(0);
  const [parsedData, setParsedData] = useState<ScanResult | null>(null);
  const [showElements, setShowElements] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (rawData) {
      try {
        const parsed = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
        setParsedData(parsed as ScanResult);
      } catch (err) {
        console.error('Failed to parse API response:', err);
        setParsedData(null);
      }
    } else {
      setParsedData(null);
    }
  }, [rawData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    triggerScan({ url });
    setShowElements({});
  };

  const toggleElement = (key: string): void => {
    setShowElements((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    if (parsedData?.data?.performance?.score) {
      setDisplayScore(0);
      const targetScore = parsedData.data.performance.score;
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
  }, [parsedData]);

  const getPerformanceLabel = (score: number): PerformanceLabel => {
    if (score >= 90) return { label: 'Excellent', color: 'text-accent' };
    if (score >= 70) return { label: 'Good', color: 'text-blue-400' };
    if (score >= 50) return { label: 'Needs Improvement', color: 'text-red-400' };
    return { label: 'Poor', color: 'text-red-400' };
  };

  const performanceLabel = getPerformanceLabel(displayScore);

  if (!parsedData?.data?.performance || !parsedData?.data?.accessibility) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-secondary rounded-2xl shadow-xl p-8 border border-accent/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Website Performance Scanner
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL (e.g., https://example.com)"
              className="flex-1 bg-[#2a2a2a] text-white border border-accent rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-accent text-background px-6 py-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              style={{ backgroundColor: '#d4af37' }}
              disabled={isLoading}
            >
              {isLoading ? 'Scanning...' : 'Scan Website'}
            </button>
          </form>
        </div>

        {isLoading && (
          <div className="text-center mt-12">
            <div className="w-16 h-16 border-4 border-t-accent border-gray-300 rounded-full animate-spin mx-auto" style={{
              borderColor: '#d4af37 transparent transparent transparent'
            }}></div>
            <p className="text-white mt-4 text-lg">Analyzing website performance...</p>
          </div>
        )}

        {isError && (
          <p className="text-center text-red-400 mt-12 text-lg">
            Error: {(error as ApiError)?.data?.message || (error as ApiError)?.message || 'Failed to scan website'}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-secondary rounded-2xl shadow-xl p-8 border border-accent/20 mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Website Performance Scanner
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (e.g., https://example.com)"
            className="flex-1 bg-[#2a2a2a] text-white border border-accent rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="bg-accent text-background px-6 py-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            style={{ backgroundColor: '#d4af37' }}
            disabled={isLoading}
          >
            {isLoading ? 'Scanning...' : 'Scan Website'}
          </button>
        </form>
      </div>

      <div className="space-y-6 mb-8">
        {/* Performance Score */}
        <div className="bg-secondary rounded-2xl p-8 shadow-xl border border-accent/20">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Performance Score
          </h2>
          <div className="relative flex items-center justify-center">
            <svg className="w-32 h-32" viewBox="0 0 36 36">
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
                stroke="#d4af37"
                strokeWidth="2"
                strokeDasharray="100"
                strokeDashoffset={100 - (parsedData?.data?.performance?.score || 0)}
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 100 - (parsedData?.data?.performance?.score || 0) }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </svg>
            <div className="absolute text-center">
              <motion.div
                className={`text-4xl font-semibold ${performanceLabel.color}`}
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

        {/* Total Errors and Total Alerts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-secondary p-6 rounded-2xl shadow-xl border border-accent/20 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Total Errors</h2>
            <p className="text-3xl font-semibold text-accent" style={{ color: '#d4af37' }}>
              {parsedData?.data?.totalErrors || 0}
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-2xl shadow-xl border border-accent/20 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Total Alerts</h2>
            <p className="text-3xl font-semibold text-accent" style={{ color: '#d4af37' }}>
              {parsedData?.data?.totalAlerts || 0}
            </p>
          </div>
        </div>

        {/* Accessibility Score */}
        <div className="bg-secondary rounded-2xl p-8 shadow-xl border border-accent/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Accessibility Score</h2>
          <p className="text-4xl font-semibold text-accent" style={{ color: '#d4af37' }}>
            {parsedData?.data?.accessibility?.score || 0}%
          </p>
        </div>
      </div>

      {/* Issues Section */}
      <div className="space-y-12">
        {/* Performance Errors */}
        {parsedData?.data?.performance?.errors?.length === 0?(
          <div>
          <h3 className="text-2xl font-bold text-accent mb-6" style={{ color: '#d4af37' }}>
            Performance Errors
          </h3>
          {parsedData?.data?.performance?.errors?.length > 0 ? (
            <ul className="space-y-4">
              {parsedData?.data?.performance?.errors?.map((error: ErrorItem, index: number) => (
                <li
                  key={`perf-error-${index}`}
                  className="bg-secondary p-6 rounded-xl shadow-md border-l-4 border-red-400"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-red-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h4 className="text-xl font-semibold text-white">{error.title}</h4>
                    </div>
                    {error.element !== 'N/A' && (
                      <button
                        onClick={() => toggleElement(`perf-error-${index}`)}
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300"
                      >
                        {showElements[`perf-error-${index}`] ? 'Hide Element' : 'Show Element'}
                      </button>
                    )}
                  </div>
                  <p className="text-gray-300 mb-2 pl-7 text-left">{error.description}</p>
                  <p className="text-gray-300 mb-2 pl-7 text-left">
                    <strong className="text-white text-left">Value:</strong> {error.value}
                  </p>
                  <p className="text-gray-300 pl-7 text-left">
                    <strong className="text-white">Suggestion:</strong> {error.suggestion}
                  </p>
                  <AnimatePresence>
                    {showElements[`perf-error-${index}`] && error.element !== 'N/A' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 overflow-hidden"
                      >
                        <p className="text-gray-300">
                          <strong className="text-white">Element:</strong>
                        </p>
                        <pre className="bg-[#2a2a2a] p-4 rounded-lg mt-2 text-sm text-gray-300 font-mono overflow-x-auto border border-gray-600">
                          {error.element}
                        </pre>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300 text-center">No performance errors found.</p>
          )}
        </div>
        ):""}
        

        {/* Performance Alerts */}
       { parsedData?.data?.performance?.alerts?.length === 0 ?(
                <div>
                <h3 className="text-2xl font-bold text-accent mb-6" style={{ color: '#d4af37' }}>
                  Performance Alerts
                </h3>
                {parsedData?.data?.performance?.alerts?.length > 0 ? (
                  <ul className="space-y-4">
                    {parsedData?.data?.performance?.alerts?.map((alert: AlertItem, index: number) => (
                      <li
                        key={`perf-alert-${index}`}
                        className="bg-secondary p-6 rounded-xl shadow-md border-l-4 border-accent"
                        style={{ borderColor: '#d4af37' }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <svg
                              className="w-6 h-6 text-accent mr-2"
                              fill="none"
                              stroke="#d4af37"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <h4 className="text-xl font-semibold text-white">{alert.title}</h4>
                          </div>
                          {alert.element !== 'N/A' && (
                            <button
                              onClick={() => toggleElement(`perf-alert-${index}`)}
                              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300"
                            >
                              {showElements[`perf-alert-${index}`] ? 'Hide Element' : 'Show Element'}
                            </button>
                          )}
                        </div>
                        <p className="text-gray-300 pl-7 text-left mb-2">{alert.description}</p>
                        <p className="text-gray-300 pl-7 text-left mb-2">
                          <strong className="text-white">Score:</strong> {alert.score}
                        </p>
                        <p className="text-gray-300 pl-7 text-left">
                          <strong className="text-white">Suggestion:</strong> {alert.suggestion}
                        </p>
                        <AnimatePresence>
                          {showElements[`perf-alert-${index}`] && alert.element !== 'N/A' && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 overflow-hidden"
                            >
                              <p className="text-gray-300">
                                <strong className="text-white">Element:</strong>
                              </p>
                              <pre className="bg-[#2a2a2a] p-4 rounded-lg mt-2 text-sm text-gray-300 font-mono overflow-x-auto border border-gray-600">
                                {alert.element}
                              </pre>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 text-center">No performance alerts found.</p>
                )}
              </div>
       ):""}


        {/* Accessibility Errors */}
        {parsedData?.data?.accessibility?.errors?.length === 0?(
                  <div>
                  <h3 className="text-2xl font-bold text-accent mb-6" style={{ color: '#d4af37' }}>
                    Accessibility Errors
                  </h3>
                  {parsedData?.data?.accessibility?.errors?.length > 0 ? (
                    <ul className="space-y-4">
                      {parsedData?.data?.accessibility?.errors?.map((error: ErrorItem, index: number) => (
                        <li
                          key={`acc-error-${index}`}
                          className="bg-secondary p-6 rounded-xl shadow-md border-l-4 border-red-400"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <svg
                                className="w-6 h-6 text-red-400 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <h4 className="text-xl font-semibold text-white">{error.title}</h4>
                            </div>
                            {error.element !== 'N/A' && (
                              <button
                                onClick={() => toggleElement(`acc-error-${index}`)}
                                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300"
                              >
                                {showElements[`acc-error-${index}`] ? 'Hide Element' : 'Show Element'}
                              </button>
                            )}
                          </div>
                          <p className="text-gray-300 pl-7 text-left mb-2">{error.description}</p>
                          <p className="text-gray-300 pl-7 text-left mb-2">
                            <strong className="text-white">Value:</strong> {error.value}
                          </p>
                          <p className="text-gray-300 pl-7 text-left">
                            <strong className="text-white">Suggestion:</strong> {error.suggestion}
                          </p>
                          <AnimatePresence>
                            {showElements[`acc-error-${index}`] && error.element !== 'N/A' && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 overflow-hidden"
                              >
                                <p className="text-gray-300">
                                  <strong className="text-white">Element:</strong>
                                </p>
                                <pre className="bg-[#2a2a2a] p-4 rounded-lg mt-2 text-sm text-gray-300 font-mono overflow-x-auto border border-gray-600">
                                  {error.element}
                                </pre>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 text-center">No accessibility errors found.</p>
                  )}
                </div>
        ):""}


        {/* Accessibility Alerts */}
        {parsedData?.data?.accessibility?.alerts?.length === 0?(
                  <div>
                  <h3 className="text-2xl font-bold text-accent mb-6" style={{ color: '#d4af37' }}>
                    Accessibility Alerts
                  </h3>
                  {parsedData?.data?.accessibility?.alerts?.length > 0 ? (
                    <ul className="space-y-4">
                      {parsedData?.data?.accessibility?.alerts?.map((alert: AlertItem, index: number) => (
                        <li
                          key={`acc-alert-${index}`}
                          className="bg-secondary p-6 rounded-xl shadow-md border-l-4 border-accent"
                          style={{ borderColor: '#d4af37' }}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <svg
                                className="w-6 h-6 text-accent mr-2"
                                fill="none"
                                stroke="#d4af37"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <h4 className="text-xl font-semibold text-white">{alert.title}</h4>
                            </div>
                            {alert.element !== 'N/A' && (
                              <button
                                onClick={() => toggleElement(`acc-alert-${index}`)}
                                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300"
                              >
                                {showElements[`acc-alert-${index}`] ? 'Hide Element' : 'Show Element'}
                              </button>
                            )}
                          </div>
                          <p className="text-gray-300 pl-7 text-left mb-2">{alert.description}</p>
                          <p className="text-gray-300 pl-7 text-left mb-2">
                            <strong className="text-white">Score:</strong> {alert.score}
                          </p>
                          <p className="text-gray-300 pl-7 text-left">
                            <strong className="text-white">Suggestion:</strong> {alert.suggestion}
                          </p>
                          <AnimatePresence>
                            {showElements[`acc-alert-${index}`] && alert.element !== 'N/A' && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 overflow-hidden"
                              >
                                <p className="text-gray-300">
                                  <strong className="text-white">Element:</strong>
                                </p>
                                <pre className="bg-[#2a2a2a] p-4 rounded-lg mt-2 text-sm text-gray-300 font-mono overflow-x-auto border border-gray-600">
                                  {alert.element}
                                </pre>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 text-center">No accessibility alerts found.</p>
                  )}
                </div>
        ):""}

      </div>
    </div>
  );
}