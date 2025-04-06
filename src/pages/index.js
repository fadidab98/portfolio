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
        title="Fadi Dabboura - FadiLogic Portfolio"
        description="Fadi Dabboura’s FadiLogic: Official portfolio showcasing machine learning and frontend projects."
        canonical="https://fadilogic.serp24.online/"
        openGraph={{
          url: 'https://fadilogic.serp24.online/',
          title: 'Fadi Dabboura - FadiLogic Portfolio',
          description: 'Fadi Dabboura’s FadiLogic: Official portfolio showcasing Devops and Web projects on GitHub and Facebook.',
          images: [
            {
              url: 'https://fadilogic.serp24.online/images/FadiLogic.webp',
              width: 1200,
              height: 630,
              alt: 'FadiLogic Portfolio by Fadi Dabboura',
              type: 'image/webp',
            },
          ],
          siteName: 'FadiLogic',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Fadi Dabboura, web scan tool, website performance, web development, frontend development, backend development, devops',
          },
        ]}
      />
      <Head>
        <title>Fadi Dabboura - FadiLogic Official Portfolio</title>
        <meta
          name="description"
          content="Fadi Dabboura’s FadiLogic: Official portfolio of a Devops Engineer and Web Developer."
        />
        <meta
          name="keywords"
          content="Fadi Dabboura, web scan tool, website performance, web development, frontend development, backend development, devops"
        />
        <meta name="author" content="Fadi Dabboura" />
        <link rel="canonical" href="https://fadilogic.serp24.online/" />
        <link rel="preload" href="/images/project1.webp" as="image" />
        <link rel="preload" href="/icons/email.svg" as="image" />
        <link rel="preload" href="/icons/github.svg" as="image" />
        <link rel="preload" href="/icons/linkedin.svg" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              'name': 'Fadi Dabboura',
              'url': 'https://fadilogic.serp24.online',
              'sameAs': [
                'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
                'https://www.instagram.com/dabbourafadi',
                'https://www.facebook.com/fadi.dabboura.73',
              ],
              'jobTitle': 'Devops Engineer & Web Developer',
              'brand': {
                '@type': 'Brand',
                'name': 'FadiLogic',
              },
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
  return {
    props: {
      projects,
    },
    revalidate: 3600,
  };
}