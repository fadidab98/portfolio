import Link from 'next/link';
import Section from './Section';

export default function WelcomeSection() {
  return (
    <Section id="welcome" className="min-h-[400px]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
        Welcome to <span className="text-accent">FadiLogic</span>
      </h2>
      <div className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center space-y-4">
        <p>
          I’m Fadi Dabboura, a dedicated <strong>DevOps Engineer</strong> and{' '}
          <strong>Web Developer</strong> with a passion for building
          high-performance, scalable web solutions. My expertise spans CI/CD
          pipelines, cloud infrastructure, full-stack development, and website
          optimization.
        </p>
        <p>
          Explore my portfolio to see projects showcasing my skills in{' '}
          <strong>DevOps</strong>, <strong>web development</strong>, and
          performance tuning. Try my{' '}
          <Link
            href="/website-scan"
            className="text-accent underline hover:text-accent/80 transition"
          >
            free website scan tool
          </Link>{' '}
          to analyze your site’s speed, SEO, and errors, or{' '}
          <Link
            href="/contact"
            className="text-accent underline hover:text-accent/80 transition"
          >
            contact me
          </Link>{' '}
          to collaborate on your next project.
        </p>
        <p>
          As a Master’s student in Informatics at Ostfalia University, I bring
          cutting-edge knowledge to every project, ensuring robust, modern
          solutions.
        </p>
      </div>
    </Section>
  );
}
