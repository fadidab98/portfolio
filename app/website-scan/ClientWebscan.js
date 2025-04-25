'use client';

import dynamic from 'next/dynamic';
import WebsitescanText from '@/components/WebsitescanText';
import Link from 'next/link';
import Section from '@/components/Section';

const WebsiteScanForm = dynamic(() => import('@/components/WebsiteScanForm'), {
  ssr: true,
});

export default function ClientWebscan() {
  return (
    <>
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
