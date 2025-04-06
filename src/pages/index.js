import Head from 'next/head';
import dynamic from 'next/dynamic';
import { projects } from '@/data/project';
import ScanServiceSection from '../components/ScanServiceSection';
import { SkeletonHero, SkeletonProjectCard } from '@/components/skeleton/Skeleton';
import { NextSeo } from 'next-seo';

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
<NextSeo
  title="Fadi Dabboura - Portfolio & Website Scan | FadiLogic"
  description="Fadi Dabboura’s FadiLogic: Free webscan tool and portfolio of DevOps projects shared on LinkedIn and Facebook."
  canonical="https://fadilogic.serp24.online/"
  openGraph={{
    url: "https://fadilogic.serp24.online/",
    title: "Fadi Dabboura - Portfolio & Website Scan | FadiLogic",
    description: "Fadi Dabboura’s FadiLogic: Free webscan tool and portfolio of DevOps projects shared on LinkedIn and Facebook.",
    images: [
      {
        url: "https://fadilogic.serp24.online/images/FadiLogic.webp", // Or absolute URL if needed
        width: 1200,
        height: 630,
        alt: "Fadi Dabboura Website Scan and Portfolio",
        type: "image/webp",
      },
    ],
    siteName: "FadiLogic",
  }}
  additionalMetaTags={[
    {
      name: "keywords",
      content: "fadi, dabboura, website scan, webscan, web scan tool, website performance, web development, devops",
    },
    {
      property: "og:image", // Explicitly add og:image
      content: "https://fadilogic.serp24.online/images/FadiLogic.webp",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:alt",
      content: "Fadi Dabboura Website Scan and Portfolio",
    },
    {
      property: "og:image:type",
      content: "image/webp",
    },
    {
      name: "keywords",
      content: "fadi, dabboura, website scan, webscan, FadiLogic, web scan tool, website performance, web development, devops",
    },
    {
      name: "author",
      content: "Fadi Dabboura",
    },
  
  ]}
/>
<Head>
  <link rel="canonical" href="https://fadilogic.serp24.online/" />
  <link rel="preload" href="/images/project1.webp" as="image" />
  <link rel="preload" href="/icons/email.svg" as="image" />
  <link rel="preload" href="/icons/github.svg" as="image" />
  <link rel="preload" href="/icons/linkedin.svg" as="image" />
  <meta property="og:image" content="https://fadilogic.serp24.online/images/FadiLogic.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Fadi Dabboura Website Scan and Portfolio" />
  <meta property="og:image:type" content="image/webp" />
  
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
  const projectsData = projects; // Ensure projects is static
  return {
    props: {
      projects: projectsData,
    },
    revalidate: 3600,
  };
}