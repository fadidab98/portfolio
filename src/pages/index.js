import Head from 'next/head';
import dynamic from 'next/dynamic';
import { projects } from '@/data/project';
import { useSelector } from 'react-redux';
import ScanServiceSection from '../components/ScanServiceSection';
import { SkeletonHero, SkeletonProjectCard } from '@/components/skeleton/Skeleton';

const Hero = dynamic(() => import('../components/Hero'), {
  ssr: true,
  loading: () => <SkeletonHero />,
});
const Section = dynamic(() => import('../components/Section'), { ssr: true });
const FeaturedProjectCard = dynamic(() => import('../components/ProjectCard'), {
  ssr: true,
  loading: () => <SkeletonProjectCard />,
});
const ProjectCard = dynamic(() => import('../components/ProjectCard'), {
  ssr: false,
  loading: () => <SkeletonProjectCard />,
});

export default function Home({ projects }) {
  const featuredProject = projects[0];
  return (
    <>
      <Head>
        <title>FadiLogic - Machine Learning & full-stack Portfolio</title>
        <meta
          name="description"
          content="Explore FadiLogic's portfolio showcasing machine learning projects and full-stack development expertise using Next.js."
        />
        <meta
          name="keywords"
          content="machine learning, full-stack development, next.js, portfolio, web development"
        />
        <meta name="author" content="Fadi Dabboura" />
        <link rel="canonical" href="https://fadilogic.serp24.online/" />
        {/* Preload links are fine, keep them */}
        <link rel="preload" href="/images/project1.webp" as="image" />
        <link rel="preload" href="/icons/email.svg" as="image" />
        <link rel="preload" href="/icons/github.svg" as="image" />
        <link rel="preload" href="/icons/linkedin.svg" as="image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Fadi Dabboura",
            "jobTitle": "Machine Learning Engineer & full-stack Developer & devops",
            "url": "https://fadilogic.serp24.online",
          })}
  </script>
      </Head>
      <Hero />
      <ScanServiceSection />
      <Section id="projects">
        <h2 className="text-4xl mb-8 text-center">Featured Project</h2>
        <div className="max-w-2xl mx-auto">
          <FeaturedProjectCard project={featuredProject} />
        </div>
        <h2 className="text-4xl mt-12 mb-8 text-center">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects,
    },
    revalidate: 3600,
  };
}