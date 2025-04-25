// app/contact/page.js
import ClientContact from './ClientContact';

// Page-specific JSON-LD structured data
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Fadi Dabboura',
    url: 'https://fadilogic.serp24.online/contact',
    description:
      'Contact Fadi Dabboura for DevOps and web development inquiries.',
    mainEntity: {
      '@type': 'Person',
      name: 'Fadi Dabboura',
      givenName: 'Fadi',
      familyName: 'Dabboura',
      email: 'mailto:fadi@serp24.online',
      sameAs: [
        'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
        'https://www.facebook.com/fadi.dabboura.73',
        'https://github.com/fadidab98',
      ],
    },
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

// Page-specific metadata
export const metadata = {
  title: 'Fadi Dabboura | Contact Me - FadiLogic',
  description:
    'Contact Fadi Dabboura for collaborations, inquiries, or to discuss DevOps and web development projects at FadiLogic.',
  keywords:
    'fadi dabboura, contact, devops, web development, website scan, fadilogic',
  robots: 'index, follow',
  openGraph: {
    title: 'Fadi Dabboura - Contact | FadiLogic',
    description:
      'Contact Fadi Dabboura for DevOps, web development, or to try the free website scan tool at FadiLogic.',
    url: 'https://fadilogic.serp24.online/contact',
    siteName: 'FadiLogic',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://fadilogic.serp24.online/images/FadiLogic.png',
        width: 1200,
        height: 630,
        alt: 'FadiLogic',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fadi Dabboura | Contact Me - FadiLogic',
    description:
      'Contact Fadi Dabboura for DevOps, web development, or to try the free website scan tool at FadiLogic.',
    images: ['https://fadilogic.serp24.online/images/FadiLogic.png'],
  },
  alternates: {
    canonical: 'https://fadilogic.serp24.online/contact',
  },
};

export default function Contact() {
  return (
    <>
      <head>
        {/* Page-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <ClientContact />
    </>
  );
}
