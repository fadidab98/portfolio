import ClientHome from './ClientHome';

// Static project data
const projects = [
  {
    title: 'Machine Learning Dashboard',
    description:
      'A real-time dashboard for visualizing ML model performance, built with Next.js and TensorFlow. Features include live data updates and responsive design.',
    technologies: ['Next.js', 'TensorFlow', 'Tailwind CSS'],
    image: '/images/ml-dashboard.avif',
    alt: 'Machine Learning Dashboard Screenshot',
    liveLink: 'https://ml-dashboard.example.com',
    githubLink: 'https://github.com/fadidab98/ml-dashboard',
  },
  {
    title: 'Portfolio Site',
    description:
      'A responsive portfolio showcasing DevOps and web development expertise, optimized for SEO and performance.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/FadiLogic-web.webp',
    alt: 'FadiLogic Portfolio Site Screenshot',
    liveLink: 'https://fadilogic.serp24.online',
    githubLink: 'https://github.com/fadidab98/portfolio',
  },
];

// Page-specific structured data
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Fadi Dabboura Portfolio',
    url: 'https://fadilogic.serp24.online',
    description:
      'Portfolio of Fadi Dabboura, showcasing DevOps and web development projects, including a free website scan tool.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: project.liveLink,
        image: project.image,
        position: index + 1,
      })),
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
    ],
  },
];

export const metadata = {
  title: 'Fadi Dabboura - DevOps & Web Developer | FadiLogic',
  description:
    'Explore Fadi Dabboura’s portfolio: Expert DevOps engineer, web developer, and free website scan tool to boost your site’s SEO and performance at FadiLogic.',
  robots: 'index, follow',
  openGraph: {
    title: 'Fadi Dabboura - Portfolio & Website Scan | FadiLogic',
    description:
      'Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise.',
    url: 'https://fadilogic.serp24.online/',
    images: [
      {
        url: 'https://fadilogic.serp24.online/images/FadiLogic.png',
        width: 1200,
        height: 630,
        alt: 'FadiLogic - DevOps and Web Development',
      },
    ],
  },
  twitter: {
    title: 'Fadi Dabboura - DevOps & Web Developer | FadiLogic',
    description:
      'Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise.',
    images: ['https://fadilogic.serp24.online/images/FadiLogic.png'],
  },
  alternates: {
    canonical: 'https://fadilogic.serp24.online/',
  },
};

// Enable Incremental Static Regeneration (ISR) - regenerate every 24 hours
export const revalidate = 86400;

// Force static generation
export const dynamic = 'force-static';

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientHome projects={projects} />
    </>
  );
}