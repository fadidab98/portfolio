import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { projects } from '@/data/project';

import {
  SkeletonProjectCard,
  SkeletonScanServiceSection,
} from '@/components/skeleton/Skeleton';
import Hero from '../components/Hero';
import Link from 'next/link';
import Head from 'next/head';
const ScanServiceSection = dynamic(
  () => import('@/components/ScanServiceSection'),
  {
    ssr: false,
    loading: () => <SkeletonScanServiceSection />,
  }
);
const Section = dynamic(() => import('../components/Section'), { ssr: true });
const FeaturedProjectCard = dynamic(() => import('../components/ProjectCard'), {
  ssr: false,
  loading: () => <SkeletonProjectCard />,
});
const ProjectCard = dynamic(() => import('../components/ProjectCard'), {
  ssr: false,
  loading: () => <SkeletonProjectCard />,
});
const WelcomeSection = dynamic(() => import('@/components/WelcomeSection'), {
  ssr: false,
});
export default function Home({ projects }) {
  const featuredProject = projects[0];

  // Structured data prioritizing website
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

  return (
    <>
      <NextSeo
        title="Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic"
        description="Discover Fadi Dabboura’s portfolio: Expert DevOps, web development, and a free website scan tool to optimize your site’s performance and SEO at FadiLogic."
        canonical="https://fadilogic.serp24.online/"
        openGraph={{
          url: 'https://fadilogic.serp24.online/',
          title: 'Fadi Dabboura - Portfolio & Website Scan | FadiLogic',
          description:
            'Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise.',
          images: [
            {
              url: 'https://fadilogic.serp24.online/images/FadiLogic.png',
              width: 1200,
              height: 630,
              alt: 'Fadi Dabboura Website Scan and Portfolio',
              type: 'image/png',
            },
          ],
          siteName: 'FadiLogic',
          locale: 'en_US',
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: 'Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic',
          description:
            'Explore Fadi Dabboura’s FadiLogic: Free website scan tool and portfolio showcasing DevOps and web development expertise.',
          image: 'https://fadilogic.serp24.online/images/FadiLogic.png',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'fadi dabboura, website scan, webscan, web scan tool, website performance, web development, devops, portfolio, fadi dabboura portfolio, devops engineer, full-stack developer',
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
        <link
          rel="preload"
          href="/images/project1.webp"
          as="image"
          fetchPriority="high"
        />
      </Head>

      <Hero />
      <WelcomeSection />
      <ScanServiceSection />
      <Section id="projects">
        <h2 className="text-4xl mb-8 text-center">Projects by Fadi Dabboura</h2>
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
