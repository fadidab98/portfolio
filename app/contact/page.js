import ClientContact from './ClientContact';

// Page-specific structured data
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Fadi Dabboura',
    url: 'https://fadilogic.serp24.online/contact',
    description:
      'Contact Fadi Dabboura for expert DevOps, web development, and website performance optimization services.',
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
    potentialAction: {
      '@type': 'CommunicateAction',
      target: 'https://fadilogic.serp24.online/contact',
      recipient: {
        '@type': 'Person',
        email: 'fadi@serp24.online',
      },
      description: 'Submit a contact form to reach Fadi Dabboura for DevOps, web development, or performance optimization inquiries.',
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
      {
        '@type': 'Question',
        name: 'Can you help with existing website issues?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I can analyze your website using my free website scan tool to identify issues like slow load times, broken links, or SEO gaps, and provide solutions to fix them.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the process for starting a project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We start with a consultation to understand your needs, followed by planning, implementation, and ongoing support to ensure your project’s success.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Service',
      name: 'DevOps Consulting by FadiLogic',
      sameAs: 'https://fadilogic.serp24.online/#devops',
      provider: {
        '@type': 'Organization',
        name: 'FadiLogic',
        url: 'https://fadilogic.serp24.online',
        sameAs: [
          'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
          'https://github.com/fadidab98',
        ],
      },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1, // Added for completeness
    },
    author: {
      '@type': 'Person',
      name: 'Jane Smith',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FadiLogic',
      url: 'https://fadilogic.serp24.online',
    },
    reviewBody: 'Fadi Dabboura helped me set up a CI/CD pipeline that reduced our deployment time by 50%. His expertise in DevOps and web development is unmatched!',
    datePublished: '2025-01-15T08:00:00Z', // ISO 8601 format
    description: 'A review of Fadi Dabboura’s DevOps consulting services, focusing on CI/CD pipeline optimization.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Service',
      name: 'Website Performance Optimization by FadiLogic',
      sameAs: 'https://fadilogic.serp24.online/website-scan',
      provider: {
        '@type': 'Organization',
        name: 'FadiLogic',
        url: 'https://fadilogic.serp24.online',
        sameAs: [
          'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
          'https://github.com/fadidab98',
        ],
      },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: 'Mark Johnson',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FadiLogic',
      url: 'https://fadilogic.serp24.online',
    },
    reviewBody: 'Working with Fadi was a game-changer. His website scan tool identified critical SEO issues, and his solutions boosted our site’s ranking significantly.',
    datePublished: '2025-02-10T08:00:00Z',
    description: 'A review of Fadi Dabboura’s website performance optimization services, including SEO and speed improvements.',
  },
];

export const metadata = {
  title: 'Contact Fadi Dabboura - DevOps & Web Development | FadiLogic',
  description:
    'Reach out to Fadi Dabboura for expert DevOps, web development, and website performance optimization services. Try my free website scan tool at FadiLogic.',
  robots: 'index, follow',
  openGraph: {
    title: 'Contact Fadi Dabboura - DevOps & Web Development | FadiLogic',
    description:
      'Reach out to Fadi Dabboura for expert DevOps, web development, and website performance optimization services. Try my free website scan tool at FadiLogic.',
    url: 'https://fadilogic.serp24.online/contact',
    siteName: 'FadiLogic',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://fadilogic.serp24.online/images/FadiLogic.png',
        width: 1200,
        height: 630,
        alt: 'FadiLogic - DevOps and Web Development',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Fadi Dabboura - DevOps & Web Development | FadiLogic',
    description:
      'Reach out to Fadi Dabboura for expert DevOps, web development, and website performance optimization services. Try my free website scan tool at FadiLogic.',
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