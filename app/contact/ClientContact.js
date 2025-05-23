'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
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
          I’m a DevOps Engineer and Web Developer dedicated to crafting scalable solutions and boosting website performance. Need help with CI/CD pipelines, web development, or a free website scan? I’m here for you.{' '}
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
          to optimize your site.
        </p>
      </Section>

      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12 border border-accent/20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          Why Work With Me?
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          I helped a startup cut deployment times by 50% with a custom CI/CD pipeline. My expertise in DevOps and web development delivers efficient, scalable, and high-performing solutions. Ready to transform your project?{' '}
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
          Learn More About My Services
        </h2>
        <div className="relative w-full aspect-video">
          <video
            className="w-full rounded-lg shadow-md"
            controls
            poster="/images/FadiLogic-video-poster.webp"
            aria-label="Introduction to Fadi Dabboura’s DevOps and web development services"
          >
            <source src="/videos/fadi-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 text-center leading-relaxed">
          Watch this short video to learn how I can help with your DevOps and web development needs.{' '}
          <Link
            href="/website-scan"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="Try FadiLogic's free website scan tool"
          >
            Scan your site
          </Link>{' '}
          or{' '}
          <Link
            href="/#projects"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="View Fadi Dabboura’s portfolio"
          >
            view my work
          </Link>{' '}
          for more details.
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