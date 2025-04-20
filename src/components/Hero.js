import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Image from 'next/image';

// Dynamically import Framer Motion's motion component with ssr: false
const MotionSection = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.section),
  {
    ssr: false,
  }
);

export default function Hero() {
  // Fallback for isMobile if Redux store is not yet available
  const isMobile =
    useSelector((state) => state?.setting?.setting?.isMobile) ??
    (typeof window !== 'undefined' && window.innerWidth < 768);

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/fadi.dabboura.73',
      icon: <FaFacebookF />,
      color: 'hover:text-[#1877F2]',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/fadidab98',
      icon: <FaGithub />,
      color: 'hover:text-[#333]',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
      icon: <FaLinkedinIn />,
      color: 'hover:text-[#0A66C2]',
    },
  ];

  const heroContent = (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[210px] sm:h-[280px] md:h-[350px] lg:h-[420px]">
          <Image
            src="/images/project1.webp"
            alt="Fadi Dabboura - DevOps Engineer and Web Developer"
            width={250}
            height={350}
            priority
            fetchPriority="high"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoBAAEAAQAcJaACdLoB+AA/an7gAAA="
            className="rounded-full border-4 border-accent shadow-lg object-cover"
            sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
          />
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-accent rounded-full opacity-20 z-[-1]"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent rounded-full opacity-20 z-[-1]"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Fadi Dabboura</h1>
        <h2 className="text-xl sm:text-2xl text-white mb-4 leading-relaxed">
          DevOps Engineer & Web Developer
        </h2>
        <div className="text-base text-gray-300 space-y-3 mb-6 min-h-[150px]">
          <p className="leading-relaxed">
            I’m Fadi Dabboura, a skilled <strong>DevOps Engineer</strong> and{' '}
            <strong>Web Developer</strong> specializing in CI/CD pipelines,
            cloud infrastructure, and high-performance web applications.
          </p>
          <p className="leading-relaxed">
            Try my{' '}
            <Link
              href="/website-scan"
              className="text-accent underline hover:text-accent/80 transition"
            >
              free website scan tool
            </Link>{' '}
            to optimize your site’s performance, SEO, and user experience.
          </p>
          <p className="leading-relaxed">
            As a Master’s student in Informatics at Ostfalia University, I bring
            expertise in full-stack development and DevOps. Explore my{' '}
            <Link
              href="#projects"
              className="text-accent underline hover:text-accent/80 transition"
            >
              portfolio
            </Link>{' '}
            or{' '}
            <Link
              href="/contact"
              className="text-accent underline hover:text-accent/80 transition"
            >
              contact me
            </Link>{' '}
            for collaboration opportunities.
          </p>
        </div>
        <div className="flex justify-center md:justify-start gap-4 mb-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-300 ${link.color} transition-colors duration-300 transform hover:scale-110`}
              aria-label={link.name}
            >
              <span className="text-2xl">{link.icon}</span>
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="inline-block bg-accent text-background py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-base sm:text-lg hover:bg-yellow-600 hover:scale-105 transition duration-300 shadow-md"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );

  return isMobile ? (
    <section className="bg-secondary py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
      {heroContent}
    </section>
  ) : (
    <MotionSection
      id="home"
      className="bg-secondary py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {heroContent}
    </MotionSection>
  );
}
