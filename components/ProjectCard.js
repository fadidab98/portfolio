import Image from 'next/image';

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

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={192}
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoBAAEAAQAcJaACdLoB+AA/an7gAAA="
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300">{project.description}</p>
    </div>
  );
}
