// ClientHome.tsx
'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Section from '@/components/Section';
import { Project } from '../types';
import { SkeletonHero, SkeletonProjectCard, SkeletonScanServiceSection, SkeletonWelcomeSection } from '@/components/skeleton/Skeleton';

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
  loading: () => <SkeletonProjectCard />,
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
  <h2 className="text-4xl mb-8 text-center">DevOps Engineer Portfolio</h2> {/* Removed "by Fadi Dabboura" */}
  <h2 className="text-4xl mb-8 text-center">Featured Project</h2> {/* Removed "by Fadi Dabboura" */}
  <div className="max-w-2xl mx-auto">
    <ProjectCard project={featuredProject} />
  </div>
  <h2 className="text-4xl mt-12 mb-8 text-center">More Projects</h2> {/* Removed "by Fadi Dabboura" */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.slice(1).map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>
  <p className="text-center text-lg text-gray-300 mt-8">
    Want to collaborate on a project?{' '}
    <Link href="/contact" className="text-accent underline hover:text-accent/80 transition">
      Contact Me
    </Link>{' '}
    to discuss your ideas!
  </p>
      </Section>
      <Section id="cta" className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
          Ready to Elevate Your Project?
        </h2> {/* Removed "with Fadi Dabboura" */}
        <div className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center">
          <p>
            Boost your website’s performance with my{' '}
            <Link
              href="/website-scan"
              className="text-accent underline hover-text transition"
              aria-label="Try the free website scan tool"
            >
              free website scan tool
            </Link>
            . Get insights into speed, performance, and security.
          </p>
          <p className="mt-4">
            Looking for tailored <strong>DevOps</strong> or <strong>web development</strong>{' '}
            solutions?{' '}
            <Link
              href="/contact"
              className="text-accent underline hover-text transition"
              aria-label="Contact for project inquiries"
            >
              Contact Me
            </Link>{' '}
            to build scalable CI/CD pipelines or web apps.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/website-scan"
            className="inline-block bg-accent text-background py-4 px-8 rounded-lg text-xl font-bold hover:bg-yellow-600 transition duration-300 shadow-lg"
            aria-label="Start your free website scan"
          >
            Scan Your Website Now
          </Link>
        </div>
      </Section>
    </>
  );
}