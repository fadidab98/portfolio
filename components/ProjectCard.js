'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project, isMobile }) {
  const motionProps = isMobile
    ? {}
    : {
        whileHover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' },
        transition: { duration: 0.3 },
      };

  return (
    <motion.div
      className="bg-secondary p-6 rounded-lg shadow-md"
      {...motionProps}
    >
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={`Image for ${project.title} FadiLogic Portfolio`}
          priority
          fetchPriority="high"
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <h3 className="text-3xl mb-2 mt-4">{project.title}</h3>
      <p className="text-white mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-accent text-background px-2 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-accent hover:text-yellow-400"
        >
          <FaExternalLinkAlt className="mr-1" /> Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-accent hover:text-yellow-400"
        >
          <FaGithub className="mr-1" /> GitHub
        </a>
      </div>
    </motion.div>
  );
}
