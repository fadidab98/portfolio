import Head from 'next/head';
import dynamic from 'next/dynamic';
import { projects } from '@/data/project';
import ScanServiceSection from '@/components/ScanServiceSection';
import { SkeletonProjectCard } from '@/components/skeleton/Skeleton';
import Hero from '../components/Hero';
import Link from 'next/link';

const Section = dynamic(() => import('../components/Section'), { ssr: true });
const FeaturedProjectCard = dynamic(() => import('../components/ProjectCard'), {
  ssr: true,
  loading: () => <SkeletonProjectCard />,
});
const ProjectCard = dynamic(() => import('../components/ProjectCard'), {
  ssr: true,
  loading: () => <SkeletonProjectCard />,
});

export default function Home({ projects }) {
  const featuredProject = projects[0];
  return (
    <>
      <Head>
        <title>
          Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic
        </title>
        <meta
          name="description"
          content="Discover Fadi Dabboura’s portfolio: Expert DevOps, web development, and a free website scan tool to optimize your site at FadiLogic."
        />
        <meta
          name="keywords"
          content="fadi, dabboura, fadi dabboura, website scan, webscan, web scan tool, website performance, web development, devops, portfolio, fadi dabboura portfolio"
        />
        <meta name="author" content="Fadi Dabboura" />
        <link rel="canonical" href="https://fadilogic.serp24.online/" />
        <meta
          property="og:title"
          content="Fadi Dabboura - Portfolio & Website Scan | FadiLogic"
        />
        <meta
          property="og:description"
          content="Check out Fadi Dabboura’s FadiLogic: Free webscan tool and portfolio of DevOps and web projects!"
        />
        <meta property="og:url" content="https://fadilogic.serp24.online/" />
        <meta
          property="og:image"
          content="https://fadilogic.serp24.online/images/FadiLogic.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Fadi Dabboura Website Scan and Portfolio"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FadiLogic" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic"
        />
        <meta
          name="twitter:description"
          content="Check out Fadi Dabboura’s FadiLogic: Free webscan tool and portfolio of DevOps and web projects!"
        />
        <meta
          name="twitter:image"
          content="https://fadilogic.serp24.online/images/FadiLogic.png"
        />
        <link
          rel="preload"
          href="/images/project1.webp"
          as="image"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Fadi Dabboura',
                url: 'https://fadilogic.serp24.online',
                sameAs: [
                  'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
                  'https://www.instagram.com/dabbourafadi',
                  'https://www.facebook.com/fadi.dabboura.73',
                ],
                jobTitle: 'DevOps Engineer & Web Developer',
                brand: { '@type': 'Brand', name: 'FadiLogic' },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://fadilogic.serp24.online',
                  },
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'FadiLogic',
                url: 'https://fadilogic.serp24.online',
                sameAs: [
                  'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
                  'https://www.instagram.com/dabbourafadi',
                  'https://www.facebook.com/fadi.dabboura.73',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                url: 'https://fadilogic.serp24.online',
                name: 'FadiLogic',
                potentialAction: [
                  {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate:
                        'https://fadilogic.serp24.online/website-scan',
                    },
                    'query-input': {
                      '@type': 'PropertyValueSpecification',
                      valueRequired: true,
                      valueName: 'website_url',
                    },
                    description:
                      'Scan your website for performance and errors using FadiLogic’s free website scan tool.',
                  },
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ContactPage',
                name: 'Contact Fadi Dabboura',
                url: 'https://fadilogic.serp24.online/contact',
                description:
                  'Contact with Fadi Dabboura for DevOps and web development inquiries.',
                mainEntity: {
                  '@type': 'Person',
                  name: 'Fadi Dabboura',
                  email: 'mailto:fadi@serp24.online',
                  sameAs: [
                    'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
                    'https://www.facebook.com/fadi.dabboura.73',
                    'https://github.com/fadidab98',
                  ],
                },
              },
            ]),
          }}
        />
      </Head>
      <div className="bg-background">
        <Hero />
        <Section id="welcome">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
            Welcome to <span className="text-accent">FadiLogic</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center">
            I’m Fadi Dabboura, a passionate DevOps Engineer and Web Developer
            dedicated to building high-performance, scalable web solutions.
            Explore my portfolio below, try my{' '}
            <Link
              href="/website-scan"
              className="text-accent underline hover:text-accent/80 transition"
            >
              free website scan tool
            </Link>{' '}
            to optimize your site, or{' '}
            <Link
              href="/contact"
              className="text-accent underline hover:text-accent/80 transition"
            >
              get in touch
            </Link>{' '}
            to collaborate on your next project.
          </p>
        </Section>
        <ScanServiceSection />
        <Section id="projects">
          <div className="mb-8 p-4 bg-yellow-100 text-yellow-800 rounded-lg text-center">
            <p className="font-semibold">
              This projects section contains dummy data. Real projects will be
              showcased soon as the website is under development.
            </p>
          </div>
          <h2 className="text-4xl mb-8 text-center">
            Featured Project by Fadi Dabboura
          </h2>
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
        <Section id="cta">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
            Ready to Optimize Your Site?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center">
            Use my{' '}
            <Link
              href="/website-scan"
              className="text-accent underline hover:text-accent/80 transition"
            >
              free website scan tool
            </Link>{' '}
            to analyze your site’s performance and errors, or{' '}
            <Link
              href="/contact"
              className="text-accent underline hover:text-accent/80 transition"
            >
              contact me
            </Link>{' '}
            to discuss your DevOps and web development needs. Let’s take your
            project to the next level!
          </p>
        </Section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projectsData = projects;
  return {
    props: {
      projects: projectsData,
    },
    revalidate: 3600,
  };
}
