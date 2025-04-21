import ClientContact from './ClientContact';

// Page-specific JSON-LD
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
  title: 'Fadi Dabboura | Contact Me - FadiLogic',
  description:
    'Contact Fadi Dabboura for collaborations, inquiries, or to discuss DevOps and web development projects at FadiLogic.',
  keywords:
    'fadi dabboura, contact, devops, web development, website scan, fadilogic',
  openGraph: {
    title: 'Fadi Dabboura - Contact | FadiLogic',
    description:
      'Contact with Fadi Dabboura for DevOps, web development, or to try the free website scan tool at FadiLogic.',
    url: 'https://fadilogic.serp24.online/contact',
  },
  twitter: {
    title: 'Fadi Dabboura | Contact Me - FadiLogic',
    description:
      'Contact Fadi Dabboura for DevOps, web development, or to try the free website scan tool at FadiLogic.',
  },
  other: {
    'script:application/ld+json': JSON.stringify(structuredData),
  },
  alternates: {
    canonical: 'https://fadilogic.serp24.online/contact',
  },
};

export default function Contact() {
  return <ClientContact />;
}
