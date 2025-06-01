import Link from 'next/link';
import Section from './Section';

export default function WelcomeSection() {
  return (
    <Section id="welcome" className="min-h-[400px] border border-accent/20 m-12 rounded-md">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
        Welcome to <span className="text-accent">Fadi Dabboura’s FadiLogic</span>
      </h2>
      <div className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center space-y-4">
        <p>
          I’m <strong>Fadi Dabboura</strong>, a passionate <strong>DevOps Engineer</strong> and{' '}
          <strong>Web Developer</strong> dedicated to crafting scalable, high-performance web
          solutions.
        </p>
        <p>
          <strong>Fadi Dabboura</strong>’s expertise includes <strong>CI/CD pipelines</strong>, <strong>cloud infrastructure</strong>,
          and <strong>full-stack development</strong>. Check out my{' '}
          <Link
            href="#projects"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="View Fadi Dabboura’s portfolio"
          >
            portfolio
          </Link>{' '}
          to see projects like real-time ML dashboards and optimized web apps by Fadi Dabboura.
        </p>
        <p>
          Optimize your site with <strong>Fadi Dabboura</strong>’s{' '}
          <Link
            href="/website-scan"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="Try Fadi Dabboura’s free website scan tool"
          >
            free website scan tool
          </Link>{' '}
          or{' '}
          <Link
            href="/contact"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="Contact Fadi Dabboura"
          >
            contact Fadi Dabboura
          </Link>{' '}
          to discuss your next project.
        </p>
      </div>
    </Section>
  );
}