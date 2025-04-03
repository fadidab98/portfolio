// components/ProjectCard.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-secondary p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        priority
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl mb-2">{project.title}</h3>
      <p className="text-white mb-4 leading-relaxed">{project.description}</p>
      <p className="text-sm mb-4">
        Tech: <span className="text-accent">{project.technologies.join(', ')}</span>
      </p>
      <div className="flex space-x-4">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          Live Demo
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          GitHub
        </a>
      </div>
    </motion.div>
  );
}