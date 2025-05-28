import Image from 'next/image';
import { Project } from '../types';

export function SkeletonProjectCard() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="w-full h-48 bg-gray-700 rounded-md mb-4 animate-pulse"></div>
      <div className="h-6 bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-1 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-1 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded w-2/3 mb-4 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-4 animate-pulse"></div>
      <div className="flex space-x-4">
        <div className="h-4 bg-gray-700 rounded w-16 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded w-16 animate-pulse"></div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <Image
        src={project.image}
        alt={project.alt || project.title}
        width={400}
        height={192}
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASo \n"
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex space-x-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline hover:text-accent/80 transition"
          aria-label={`View live demo of ${project.title}`}
        >
          Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline hover:text-accent/80 transition"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}