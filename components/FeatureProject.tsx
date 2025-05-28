import dynamic from 'next/dynamic';
import ProjectCard from './ProjectCard';
import Section from './Section';
import { Project } from '../types';

const FeaturedProjectCard = dynamic(() => import('@/components/ProjectCard'), {
  ssr: false,
  loading: () => (
    <div className="relative w-full min-h-[256px] bg-secondary rounded-md animate-pulse" />
  ),
});

interface FeatureProjectProps {
  featuredProject: Project;
  projects: Project[];
}

export default function FeatureProject({ featuredProject, projects }: FeatureProjectProps) {
  return (
    <Section id="projects" className="min-h-[800px]">
      <h2 className="text-4xl mb-8 text-center">
        DevOps Engineer Portfolio by Fadi Dabboura
      </h2>
      <div className="mb-8 p-4 bg-yellow-100 text-yellow-800 rounded-lg text-center">
        <p className="font-semibold">
          Real projects coming soon! Discover my expertise in{' '}
          <strong>DevOps</strong>, <strong>CI/CD pipelines</strong>,{' '}
          <strong>cloud infrastructure</strong>, and{' '}
          <strong>web development</strong>. Stay tuned for detailed case studies
          and live demos.
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
  );
}