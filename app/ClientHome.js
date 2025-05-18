'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Section from '@/components/Section';
import {
  SkeletonHero,
  SkeletonScanServiceSection,
  SkeletonWelcomeSection,
} from '@/components/skeleton/Skeleton';

const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: true,
  loading: () => <SkeletonHero />,
});

const WelcomeSection = dynamic(() => import('@/components/WelcomeSection'), {
  ssr: true,
  loading: () => <SkeletonWelcomeSection />,
});

const ScanServiceSection = dynamic(() => import('@/components/ScanServiceSection'), {
  ssr: true,
  loading: () => <SkeletonScanServiceSection />,
});

const ProjectCard = dynamic(() => import('@/components/ProjectCard'), {
  ssr: true,
  loading: () => (
    <div className="relative w-full min-h-[300px] bg-gray-700 rounded-md animate-pulse" />
  ),
});

export default function ClientHome({ projects }) {
  const featuredProject = projects[0];

  return (
    <>
      <Hero />
      <WelcomeSection />
      <ScanServiceSection />
      <Section id="projects" className="min-h-[1000px] border border-accent/20 m-12 rounded-md">
        <h2 className="text-4xl mb-8 text-center">DevOps Engineer Portfolio by Fadi Dabboura</h2>
        <h2 className="text-4xl mb-8 text-center">Featured Project</h2>
        <div className="max-w-2xl mx-auto">
          <ProjectCard project={featuredProject} />
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
            <Link href="/website-scan" className="text-accent underline hover:text-accent/80 transition">
              free website scan tool
            </Link>{' '}
            to uncover performance issues, SEO gaps, and errors. Get actionable insights to boost your site’s success.
          </p>
          <p>
            Need custom <strong>DevOps</strong> or <strong>web development</strong> solutions?{' '}
            <Link href="/contact" className="text-accent underline hover:text-accent/80 transition">
              Contact me
            </Link>{' '}
            to discuss your needs, from CI/CD pipelines to scalable web applications. Let’s build something extraordinary together!
          </p>
        </div>
      </Section>
    </>
  );
}