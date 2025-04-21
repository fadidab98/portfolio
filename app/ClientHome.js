'use client';

import dynamic from 'next/dynamic';

import FeatureProject from '../components/FeatureProject';

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
    image: '/images/project2.webp',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description',
    image: '/images/project3.webp',
  },
];
const WelcomeSection = dynamic(() => import('../components/WelcomeSection'), {
  ssr: false,
});
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
});
const ScanServiceSection = dynamic(
  () => import('@/components/ScanServiceSection'),
  {
    ssr: false,
  }
);

export default function ClientHome({ projects = sampleProjects }) {
  const featuredProject = projects[0];

  return (
    <>
      <Hero />
      <WelcomeSection />
      <ScanServiceSection />
      <FeatureProject featuredProject={featuredProject} projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  // Replace with your actual data fetching logic
  const projects = sampleProjects;
  return {
    props: { projects },
    revalidate: 60, // Regenerate every 60 seconds
  };
}
