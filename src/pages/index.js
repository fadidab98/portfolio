import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { projects } from '@/data/project'; // Assuming typo fixed

// Dynamically import non-critical components
const Hero = dynamic(() => import('../components/Hero'), { ssr: true });
const Section = dynamic(() => import('../components/Section'), { ssr: true });
const ProjectCard = dynamic(() => import('../components/ProjectCard'), { ssr: true });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false }); // Footer likely not critical for SSR
// Import only the specific icon needed
import { FaSearch } from 'react-icons/fa';
export default function Home() {
  const featuredProject = projects[0];

  return (
    <div>
      <Head>
        <title>FadiLogic</title>
        <meta name="description" content="Portfolio of a Machine Learning Engineer and Frontend Developer." />
        <meta name="keywords" content="machine learning, frontend, next.js, portfolio" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Fadi Dabboura', // Updated to your name
              jobTitle: 'Machine Learning Engineer & Frontend Developer',
              email: 'mailto:your.email@example.com', // Update with your email
            }),
          }}
        />
      </Head>
      <Hero />
      <Section id="scan-service" className="bg-secondary overflow-hidden ">
      <div className="relative max-w-4xl mx-auto text-center ">
      <div className="absolute -top-40 -left-40 w-[30rem] h-full max-sm:w-[20rem] max-sm:h-[20rem]     bg-accent rounded-full opacity-20 z-[8] "></div>
      <div className="absolute -bottom-40 -right-40 w-[15rem] h-[15rem] bg-accent rounded-full opacity-20 z-[8] "></div>

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
          <ProjectCard project={featuredProject} />
        </div>
        <h2 className="text-4xl mt-12 mb-8 text-center">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>

      
      <Footer />
    </div>
  );
}