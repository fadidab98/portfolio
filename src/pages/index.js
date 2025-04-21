import dynamic from 'next/dynamic';
import { projects } from '@/data/project';
import {
  SkeletonProjectCard,
  SkeletonScanServiceSection,
} from '@/components/skeleton/Skeleton';
import Hero from '../components/Hero';
import Link from 'next/link';
import Head from 'next/head';

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fadi Dabboura',
    url: 'https://fadilogic.serp24.online',
    jobTitle: 'DevOps Engineer & Web Developer',
    sameAs: [
      'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
      'https://github.com/fadidab98',
      'https://www.facebook.com/fadi.dabboura.73',
      'https://www.instagram.com/dabbourafadi',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FadiLogic',
    url: 'https://fadilogic.serp24.online',
    sameAs: [
      'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
      'https://github.com/fadidab98',
      'https://www.facebook.com/fadi.dabboura.73',
      'https://www.instagram.com/dabbourafadi',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://fadilogic.serp24.online',
    name: 'FadiLogic',
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://fadilogic.serp24.online/website-scan',
        },
        'query-input': {
          '@type': 'PropertyValueSpecification',
          valueRequired: true,
          valueName: 'website_url',
        },
        description:
          'Scan your website for performance and errors using FadiLogic’s free website scan tool.',
      },
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
    ],
  },
];

const ScanServiceSection = dynamic(
  () => import('@/components/ScanServiceSection'),
  { ssr: false, loading: () => <SkeletonScanServiceSection /> }
);
const Section = dynamic(() => import('../components/Section'), { ssr: true });
const FeaturedProjectCard = dynamic(() => import('../components/ProjectCard'), {
  ssr: true,
  loading: () => <SkeletonProjectCard />,
});
const ProjectCard = dynamic(() => import('../components/ProjectCard'), {
  ssr: true,
  loading: () => <SkeletonProjectCard />,
});

export default function Home({ projects }) {
  const featuredProject = projects[0];

  return (
    <>
      <Head>
        <title>
          Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic
        </title>
        <meta
          name="description"
          content="Explore Fadi Dabboura’s portfolio: Expert DevOps engineer, web developer, and free website scan tool to boost your site’s SEO and performance at FadiLogic."
        />
        <meta name="author" content="Fadi Dabboura" />
        <meta name="theme-color" content="#1a202c" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Fadi Dabboura - Portfolio & Website Scan | FadiLogic"
        />
        <meta
          property="og:description"
          content="Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise."
        />
        <meta
          property="og:image"
          content="https://fadilogic.serp24.online/images/FadiLogic.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Fadi Dabboura Website Scan and Portfolio"
        />
        <meta property="og:url" content="https://fadilogic.serp24.online/" />
        <meta property="og:site_name" content="FadiLogic" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic"
        />
        <meta
          name="twitter:description"
          content="Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise."
        />
        <meta
          name="twitter:image"
          content="https://fadilogic.serp24.online/images/FadiLogic.png"
        />
        <link rel="canonical" href="https://fadilogic.serp24.online/" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-64x64.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <Hero />
      <Section id="welcome">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
          Welcome to <span className="text-accent">FadiLogic</span>
        </h2>
        <div className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center space-y-4">
          <p>
            I’m Fadi Dabboura, a dedicated <strong>DevOps Engineer</strong> and{' '}
            <strong>Web Developer</strong> with a passion for building
            high-performance, scalable web solutions. My expertise spans CI/CD
            pipelines, cloud infrastructure, full-stack development, and website
            optimization.
          </p>
          <p>
            Explore my portfolio to see projects showcasing my skills in{' '}
            <strong>DevOps</strong>, <strong>web development</strong>, and
            performance tuning. Try my{' '}
            <Link
              href="/website-scan"
              className="text-accent underline hover:text-accent/80 transition"
            >
              free website scan tool
            </Link>{' '}
            to analyze your site’s speed, SEO, and errors, or{' '}
            <Link
              href="/contact"
              className="text-accent underline hover:text-accent/80 transition"
            >
              contact me
            </Link>{' '}
            to collaborate on your next project.
          </p>
          <p>
            As a Master’s student in Informatics at Ostfalia University, I bring
            cutting-edge knowledge to every project, ensuring robust, modern
            solutions.
          </p>
        </div>
      </Section>
      <Section id="website-scan">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
          Free Website Scan Tool by FadiLogic
        </h2>
        <ScanServiceSection />
      </Section>
      <Section id="projects">
        <h2 className="text-4xl mb-8 text-center">
          DevOps Engineer Portfolio by Fadi Dabboura
        </h2>
        <div className="mb-8 p-4 bg-yellow-100 text-yellow-800 rounded-lg text-center">
          <p className="font-semibold">
            Real projects coming soon! Discover my expertise in{' '}
            <strong>DevOps</strong>, <strong>CI/CD pipelines</strong>,{' '}
            <strong>cloud infrastructure</strong>, and{' '}
            <strong>web development</strong>. Stay tuned for detailed case
            studies and live demos.
          </p>
        </div>
        <h2 className="text-4xl mb-8 text-center">Featured Project Preview</h2>
        <div className="max-w-2xl mx-auto">
          <FeaturedProjectCard project={featuredProject} />
        </div>
        <h2 className="text-4xl mt-12 mb-8 text-center">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>
      <Section id="cta">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
          Ready to Elevate Your Project?
        </h2>
        <div className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center space-y-4">
          <p>
            Optimize your website with my{' '}
            <Link
              href="/website-scan"
              className="text-accent underline hover:text-accent/80 transition"
            >
              free website scan tool
            </Link>{' '}
            to uncover performance issues, SEO gaps, and errors. Get actionable
            insights to boost your site’s success.
          </p>
          <p>
            Need custom <strong>DevOps</strong> or{' '}
            <strong>web development</strong> solutions?{' '}
            <Link
              href="/contact"
              className="text-accent underline hover:text-accent/80 transition"
            >
              Contact me
            </Link>{' '}
            to discuss your needs, from CI/CD pipelines to scalable web
            applications. Let’s build something extraordinary together!
          </p>
        </div>
      </Section>
    </>
  );
}

export async function getStaticProps() {
  const projectsData = projects;
  return {
    props: {
      projects: projectsData,
    },
    revalidate: 3600,
  };
}
