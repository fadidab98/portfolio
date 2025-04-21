import Link from 'next/link';
import Section from '../Section';

export default function ContactText() {
  return (
    <>
      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          What to Expect After Contacting Me
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          Once you submit the form below, I’ll review your message and respond
          within 24-48 hours. Whether you’re looking for DevOps solutions, web
          development services, or help with website performance using my{' '}
          <Link
            href="/website-scan"
            className="text-accent underline hover:text-accent/80 transition"
          >
            website scan tool
          </Link>
          , I’m here to provide expert guidance. Let’s work together to bring
          your project to life!
        </p>
      </Section>

      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          Services I Offer
        </h2>
        <ul className="space-y-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-accent mr-2 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              DevOps solutions for scalable infrastructure and CI/CD pipelines.
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-accent mr-2 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Web development projects with a focus on performance and SEO.
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-accent mr-2 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Website performance optimization using my free scan tool.
            </span>
          </li>
        </ul>
      </Section>

      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-accent pl-4">
            <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">
              How quickly will I get a response?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              I typically respond within 24-48 hours after receiving your
              message.
            </p>
          </div>
          <div className="border-l-4 border-accent pl-4">
            <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">
              What types of projects do you work on?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              I specialize in DevOps, web development, and website performance
              optimization, including CI/CD pipelines, scalable web apps, and
              SEO improvements.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          What Clients Say
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          “Fadi Dabboura helped me set up a CI/CD pipeline that reduced our
          deployment time by 50%. His expertise in DevOps and web development is
          unmatched!” – Jane Smith, Startup Founder
        </p>
      </Section>
    </>
  );
}
