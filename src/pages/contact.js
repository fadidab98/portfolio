import { NextSeo } from 'next-seo';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Section from '@/components/Section';
import ContactText from '@/components/contact/ContactText';
import Head from 'next/head';

const ContactForm = dynamic(() => import('../components/ContactForm'), {
  ssr: false,
});

export default function Contact() {
  // Structured data prioritizing website
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Fadi Dabboura',
      url: 'https://fadilogic.serp24.online/contact',
      description:
        'Contact with Fadi Dabboura for DevOps and web development inquiries.',
      mainEntity: {
        '@type': 'Person',
        name: 'Fadi Dabboura',
        url: 'https://fadilogic.serp24.online', // Website as primary
        email: 'mailto:fadi@serp24.online',
        sameAs: [
          'https://www.linkedin.com/in/fadi-dabboura-8300bb211', // LinkedIn first
          'https://github.com/fadidab98',
          'https://www.facebook.com/fadi.dabboura.73',
          'https://www.instagram.com/dabbourafadi',
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'FadiLogic',
      url: 'https://fadilogic.serp24.online',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'fadi@serp24.online',
          contactType: 'Customer Service',
        },
      ],
      sameAs: [
        'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
        'https://github.com/fadidab98',
        'https://www.facebook.com/fadi.dabboura.73',
        'https://www.instagram.com/dabbourafadi',
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
          name: 'Contact',
          item: 'https://fadilogic.serp24.online/contact',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How quickly will I get a response?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'I typically respond within 24-48 hours after receiving your message.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of projects do you work on?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'I specialize in DevOps, web development, and website performance optimization, including CI/CD pipelines, scalable web apps, and SEO improvements.',
          },
        },
      ],
    },
  ];

  return (
    <>
      <NextSeo
        title="Contact Fadi Dabboura - FadiLogic"
        description="Contact Fadi Dabboura for collaborations, inquiries, or to discuss DevOps and web development projects at FadiLogic."
        canonical="https://fadilogic.serp24.online/contact"
        openGraph={{
          url: 'https://fadilogic.serp24.online/contact',
          title: 'Fadi Dabboura - Contact | FadiLogic',
          description:
            'Contact with Fadi Dabboura for DevOps, web development, or to try the free website scan tool at FadiLogic.',
          images: [
            {
              url: 'https://fadilogic.serp24.online/images/FadiLogic.png',
              width: 1200,
              height: 630,
              alt: 'Fadi Dabboura Contact Page',
              type: 'image/png',
            },
          ],
          siteName: 'FadiLogic',
          locale: 'en_US',
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: 'Fadi Dabboura - Contact | FadiLogic',
          description:
            'Contact with Fadi Dabboura for DevOps, web development, or to try the free website scan tool at FadiLogic.',
          image: 'https://fadilogic.serp24.online/images/FadiLogic.png',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'fadi dabboura, contact, devops, web development, website scan, fadilogic',
          },
          {
            name: 'author',
            content: 'Fadi Dabboura',
          },
        ]}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <div className="max-w-4xl mx-auto my-5">
        <Section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white tracking-tight">
            Contact <span className="text-accent">Fadi Dabboura</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
            Whether you have a question, a project idea, or seek to collaborate
            on innovative DevOps and web development solutions, I’m here to
            help.{' '}
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
    </>
  );
}
