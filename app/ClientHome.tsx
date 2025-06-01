'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Section from '@/components/Section';
import { Project } from '../types';
import { SkeletonHero, SkeletonProjectCard, SkeletonScanServiceSection, SkeletonWelcomeSection } from '@/components/skeleton/Skeleton';

const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: true,
  loading: () =>  <SkeletonHero/>,
});

const WelcomeSection = dynamic(() => import('@/components/WelcomeSection'), {
  ssr: true,
  loading: () => <SkeletonWelcomeSection/>,
});

const ScanServiceSection = dynamic(() => import('@/components/ScanServiceSection'), {
  ssr: true,
  loading: () => <SkeletonScanServiceSection/>,
});

const ProjectCard = dynamic(() => import('@/components/ProjectCard'), {
  ssr: true,
  loading: () => <SkeletonProjectCard/>,
});

interface ClientHomeProps {
  projects: Project[];
}

export default function ClientHome({ projects }: ClientHomeProps): React.JSX.Element {
      const featuredProject = projects[0];
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ScanServiceSection />
      <Section id="projects" className="section-container">
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
        <p className="text-center text-lg text-gray-300 mt-8">
          Want to collaborate on a project?{' '}
          <Link href="/contact" className="text-accent underline hover:text-accent/80 transition">
            Contact me
          </Link>{' '}
          to discuss your ideas!
        </p>
      </Section>
      <Section id="cta" className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
          Ready to Elevate Your Project?
        </h2>
        <div className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center">
          <p>
            Boost your website’s performance with my{' '}
            <Link
              href="/website-scan"
              className="text-accent underline hover-text transition"
              aria-label="Try FadiLogic's free website scan tool"
            >
              free website scan tool
            </Link>
            . Get insights into speed, performance, and security.
          </p>
          <p>
            Looking for tailored <strong>DevOps</strong> or <strong>web development</strong>{' '}
            solutions?{' '}
            <Link
              href="/contact"
              className="text-accent underline hover-text transition"
              aria-label="Contact Fadi Dabboura for project inquiries"
            >
              Contact me
            </Link>{' '}
            to build scalable CI/CD pipelines or web apps.
          </p>
        </div>
      </Section>
    </>
  );
}