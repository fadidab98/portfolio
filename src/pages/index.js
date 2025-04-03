import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { SkeletonProjectCard, SkeletonHero } from '../components/skeleton/Skeleton';
import { projects } from '@/data/project';
import { useSelector } from 'react-redux';


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
  const isMobile = useSelector((state) => state.setting.setting.isMobile);
  const featuredProject = projects[0];
  console.log('Home - isMobile:', isMobile);
  return (
    <>
      <Head>
        <title>FadiLogic</title>
        <meta name="description" content="Portfolio of a Machine Learning Engineer and Frontend Developer." />
        <meta name="keywords" content="machine learning, frontend, next.js, portfolio" />
        <link rel="preload" href="/images/project1.webp" as="image" />
        <link rel="preload" href="/images/project1.webp" as="image" />

        <link rel="preload" href="/icons/email.svg" as="image" />

        <link rel="preload" href="/icons/github.svg" as="image" />

        <link rel="preload" href="/icons/linkedin.svg" as="image" />

   
      </Head>
      <Hero />
      <Section id="scan-service" className="bg-secondary overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center min-h-[400px]">
          <div className="absolute -top-40 -left-40 w-[30rem] h-full max-sm:w-[20rem] max-sm:h-[20rem] bg-accent rounded-full opacity-20 z-[8]"></div>
          <div className="absolute -bottom-40 -right-40 w-[15rem] h-[15rem] bg-accent rounded-full opacity-20 z-[8]"></div>
          <div className="mb-6">
            <FaSearch className="text-accent text-5xl mx-auto" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Website Scan Service</h2>
          <p className="text-lg mb-8 text-gray-300 leading-relaxed">
            Our <strong>Website Scan Service</strong> delivers a thorough and detailed evaluation of your website’s performance, designed to uncover potential issues that may hinder its functionality, user experience, or visibility on search engines. Leveraging cutting-edge diagnostic tools, we analyze critical aspects such as page load speeds, broken links, security vulnerabilities, and overall site optimization. This comprehensive approach ensures that no stone is left unturned, providing you with actionable insights to enhance your online presence. Should any significant concerns arise, our dedicated team of experts is readily available to offer personalized guidance and solutions tailored to your specific needs. Elevate your website’s performance and reliability—begin your journey to a seamless digital experience by initiating your scan today.
          </p>
          <Link
            href="/website-scan"
            className="inline-block bg-accent text-background py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Start Scan Now
          </Link>
        </div>
      </Section>
      <Section id="projects">
        <h2 className="text-4xl mb-8 text-center">Featured Project</h2>
        <div className="max-w-lg mx-auto">
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