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
  description="Fadi Dabboura's FadiLogic: Explore my website scan tool and portfolio of DevOps and web development projects."
  canonical="https://fadilogic.serp24.online/"
  openGraph={{
    url: "https://fadilogic.serp24.online/",
    title: "Fadi Dabboura - Portfolio & Website Scan | FadiLogic",
    description: "Fadi Dabboura's FadiLogic: Free website scan tool and portfolio showcasing DevOps and web projects on GitHub and Facebook.",
    images: [
      {
        url: "/images/FadiLogic.webp",
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
  ]}
/>
<Head>
        {/* Override OG Tags for Homepage */}
        <meta property="og:title" content="Fadi Dabboura - Portfolio & Website Scan | FadiLogic" />
        <meta property="og:description" content="Fadi Dabboura’s FadiLogic: Free webscan tool and portfolio of DevOps projects shared on LinkedIn and Facebook." />
        <meta property="og:image" content="https://fadilogic.serp24.online/images/FadiLogic.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fadi Dabboura Website Scan and Portfolio" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:url" content="https://fadilogic.serp24.online/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FadiLogic" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://fadilogic.serp24.online/" />
        <link rel="preload" href="/images/project1.webp" as="image" />
        <link rel="preload" href="/icons/email.svg" as="image" />
        <link rel="preload" href="/icons/github.svg" as="image" />
        <link rel="preload" href="/icons/linkedin.svg" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fadi Dabboura",
              url: "https://fadilogic.serp24.online",
              sameAs: [
                "https://www.linkedin.com/in/fadi-dabboura-8300bb211",
                "https://www.instagram.com/dabbourafadi",
                "https://www.facebook.com/fadi.dabboura.73",
              ],
              jobTitle: "DevOps Engineer & Web Developer",
              brand: { "@type": "Brand", name: "FadiLogic" },
            }),
          }}
        />
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