'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Section from '@/components/Section';
import { SkeletonHero } from '@/components/skeleton/Skeleton';
import {
  SkeletonScanServiceSection,
  SkeletonWelcomeSection,
} from '../components/skeleton/Skeleton';

// Sample projects data (replace with your actual data fetching)
const sampleProjects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description',
    image: '/images/project1.webp',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description',
    image: '/images/project1.webp',
  },
];
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: true,
  loading: () => <SkeletonHero />,
});
const WelcomeSection = dynamic(() => import('../components/WelcomeSection'), {
  ssr: true,
  loading: () => <SkeletonWelcomeSection />,
});
const ScanServiceSection = dynamic(
  () => import('@/components/ScanServiceSection'),
  {
    ssr: true,
    loading: () => <SkeletonScanServiceSection />,
  }
);
const FeaturedProjectCard = dynamic(() => import('@/components/ProjectCard'), {
  ssr: true,
  loading: () => (
    <div className="relative w-full min-h-[300px] bg-gray-700 rounded-md animate-pulse" /> // Adjusted to typical card height
  ),
});
const ProjectCard = dynamic(() => import('@/components/ProjectCard'), {
  ssr: true,
  loading: () => (
    <div className="relative w-full min-h-[300px] bg-gray-700 rounded-md animate-pulse" />
  ),
});

export default function ClientHome({ projects = sampleProjects }) {
  const featuredProject = projects[0];

  return (
    <>
      <Hero />
      <WelcomeSection />

      <ScanServiceSection />

      <Section
        id="projects"
        className="min-h-[1000px] border border-accent/20 m-12 rounded-md"
      >
        <h2 className="text-4xl mb-8 text-center">
          DevOps Engineer Portfolio by Fadi Dabboura
        </h2>
        <div
          className="mb-8 p-4 bg-yellow-100 text-yellow-800 rounded-lg text-center"
          style={{ minHeight: '100px' }}
        >
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
      <Section id="cta" className="min-h-[400px]">
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
              contact me
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
  // Replace with your actual data fetching logic
  const projects = sampleProjects;
  return {
    props: { projects },
    revalidate: 86400, // Regenerate every 60 seconds
  };
}
