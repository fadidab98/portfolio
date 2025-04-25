'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Section from '@/components/Section';
import ContactText from '@/components/contact/ContactText';

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  ssr: true,
});

export default function ClientContact() {
  return (
    <div className="max-w-4xl mx-auto my-5">
      <Section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white tracking-tight">
          Contact <span className="text-accent">Fadi Dabboura</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
          Whether you have a question, a project idea, or seek to collaborate on
          innovative DevOps and web development solutions, I’m here to help.{' '}
          <Link
            href="/"
            className="text-accent underline hover:text-accent/80 transition"
          >
            Explore my portfolio
          </Link>{' '}
          to learn more about my work, or use my{' '}
          <Link
            href="/website-scan"
            className="text-accent underline hover:text-accent/80 transition"
          >
            website scan tool
          </Link>{' '}
          to analyze your site’s performance.
        </p>
      </Section>
      <ContactText />
      <Section className="w-full max-w-2xl mx-auto bg-secondary rounded-xl shadow-2xl p-8 sm:p-12 border border-accent/20 hover:shadow-accent/20 transition-all duration-300">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
          Get in Touch
        </h2>
        <ContactForm />
        <p className="mt-6 text-center text-gray-300 text-lg sm:text-xl">
          Or email me directly at:{' '}
          <a
            href="mailto:fadi@serp24.online"
            className="text-accent hover:underline transition"
          >
            fadi@serp24.online
          </a>
          . While you’re here, try my{' '}
          <Link
            href="/website-scan"
            className="text-accent underline hover:text-accent/80 transition"
          >
            free website scan tool
          </Link>{' '}
          to optimize your site!
        </p>
      </Section>
    </div>
  );
}
