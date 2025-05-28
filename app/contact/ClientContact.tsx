'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Section from '@/components/Section';
import ContactText from '@/components/contact/ContactText';

// Dynamic import with fallback
const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  ssr: true,
  loading: () => <p>Loading contact form...</p>,
});

export default function ClientContact() {
  return (
    <div className="max-w-4xl mx-auto my-5">
      <Section className="text-center mb-12 border border-accent/20 m-12 rounded-md">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white tracking-tight">
          Contact <span className="text-accent">Fadi Dabboura</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
          I’m a DevOps Engineer and Web Developer passionate about delivering scalable solutions and optimizing website performance. Need CI/CD pipelines, custom web apps, or a free website scan? I’m here to help.{' '}
          <Link
            href="/"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="Explore Fadi Dabboura's portfolio"
          >
            Explore my portfolio
          </Link>{' '}
          or try my{' '}
          <Link
            href="/website-scan"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="Try FadiLogic's free website scan tool"
          >
            website scan tool
          </Link>{' '}
          to elevate your site.
        </p>
      </Section>

      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12 border border-accent/20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          Why Work With Me?
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          I transformed a startup’s workflow by cutting deployment times by 50% with a tailored CI/CD pipeline. My expertise in DevOps and web development ensures efficient, scalable, and high-performing solutions. Ready to elevate your project?{' '}
          <Link
            href="/#projects"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="View Fadi Dabboura's projects"
          >
            See my projects
          </Link>
        </p>
      </Section>

      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12 border border-accent/20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center tracking-tight">
          Case Study: Optimizing a Startup’s Workflow
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          For a tech startup, I designed a custom CI/CD pipeline using Jenkins and AWS, reducing deployment times from hours to minutes. This allowed their team to focus on innovation while maintaining a robust, scalable infrastructure. I also optimized their website, improving load times by 40% and boosting SEO rankings. Curious how I can help you?{' '}
          <Link
            href="/website-scan"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="Try FadiLogic's free website scan tool"
          >
            Scan your site
          </Link>{' '}
          or{' '}
          <Link
            href="/#about"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="Learn more about Fadi Dabboura"
          >
            learn about my approach
          </Link>{' '}
          to tailored solutions.
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
            aria-label="Email Fadi Dabboura"
          >
            fadi@serp24.online
          </a>
          . Try my{' '}
          <Link
            href="/website-scan"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="Try FadiLogic's free website scan tool"
          >
            free website scan tool
          </Link>{' '}
          to optimize your site today!
        </p>
      </Section>
    </div>
  );
}