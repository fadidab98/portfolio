import ClientContact from './ClientContact';

// Page-specific structured data
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

export const metadata = {
  title: 'Contact Fadi Dabboura - FadiLogic',
  description:
    'Contact Fadi Dabboura for DevOps, web development, or to try the free website scan tool at FadiLogic.',
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
    title: 'Fadi Dabboura - Contact | FadiLogic',
    description:
      'Contact Fadi Dabboura for DevOps, web development, or to try the free website scan tool at FadiLogic.',
    images: ['https://fadilogic.serp24.online/images/FadiLogic.png'],
  },
  alternates: {
    canonical: 'https://fadilogic.serp24.online/contact',
  },
};

// Enable Incremental Static Regeneration (ISR) - regenerate every 24 hours
export const revalidate = 86400;

// Force static generation
export const dynamic = 'force-static';

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientContact />
    </>
  );
}