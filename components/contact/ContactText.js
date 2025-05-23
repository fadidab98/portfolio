import Link from 'next/link';
import Image from 'next/image';
import Section from '../Section';

export default function ContactText() {
  return (
    <>
      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12 border border-accent/20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          What to Expect After Contacting Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              After submitting the form, I’ll review your inquiry and respond within 24-48 hours with personalized solutions. Whether you need <strong>DevOps workflows</strong>, custom <strong>web apps</strong>, or a performance boost via my{' '}
              <Link
                href="/website-scan"
                className="text-accent underline hover:text-accent/80 transition"
                aria-label="Try FadiLogic’s free website scan tool"
              >
                free website scan tool
              </Link>
              , I’m committed to your success. Visit my{' '}
              <Link
                href="/"
                className="text-accent underline hover:text-accent/80 transition"
                aria-label="Explore Fadi Dabboura’s homepage"
              >
                homepage
              </Link>{' '}
              or{' '}
              <Link
                href="/#projects"
                className="text-accent underline hover:text-accent/80 transition"
                aria-label="View Fadi Dabboura’s portfolio"
              >
                portfolio
              </Link>{' '}
              to see my expertise in action.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/FadiLogic-profile.webp"
              alt="Fadi Dabboura, DevOps Engineer and Web Developer"
              width={300}
              height={300}
              className="rounded-lg shadow-md mx-auto"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoBAAEAAQAcJaACdLoB+AA/an7gAAA="
            />
          </div>
        </div>
      </Section>

      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12 border border-accent/20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          Services I Offer
        </h2>
        <ul className="space-y-4 text-lg sm:text-xl text-gray-300 leading-relaxed" aria-label="Services offered by Fadi Dabboura">
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-accent mr-2 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Streamlined <strong>DevOps automation</strong> for cloud infrastructure and CI/CD pipelines to enhance scalability.
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-accent mr-2 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Custom <strong>web development</strong> focused on speed, accessibility, and top-tier SEO performance.
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-accent mr-2 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Advanced <strong>website optimization</strong> with my free scan tool to improve user experience and search rankings.
            </span>
          </li>
        </ul>
      </Section>

      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12 border border-accent/20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-accent pl-4">
            <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">
              How quickly will I get a response?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              I typically respond within 24-48 hours after receiving your message.
            </p>
          </div>
          <div className="border-l-4 border-accent pl-4">
            <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">
              What types of projects do you work on?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              I specialize in DevOps, web development, and website performance optimization, including CI/CD pipelines, scalable web apps, and SEO improvements.
            </p>
          </div>
          <div className="border-l-4 border-accent pl-4">
            <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">
              Can you help with existing website issues?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              Yes, I can analyze your website using my{' '}
              <Link
                href="/website-scan"
                className="text-accent underline hover:text-accent/80 transition"
                aria-label="Try FadiLogic’s free website scan tool"
              >
                free website scan tool
              </Link>{' '}
              to identify issues like slow load times, broken links, or SEO gaps, and provide solutions to fix them.
            </p>
          </div>
          <div className="border-l-4 border-accent pl-4">
            <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">
              What is the process for starting a project?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              We begin with a consultation to understand your needs, followed by planning, implementation, and ongoing support to ensure your project’s success.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12 border border-accent/20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          What Clients Say
        </h2>
        <div className="space-y-6">
          <blockquote className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            <p>
              “Fadi Dabboura helped me set up a CI/CD pipeline that reduced our deployment time by 50%. His expertise in DevOps and web development is unmatched!” –{' '}
              <cite>Jane Smith, Startup Founder</cite>
            </p>
          </blockquote>
          <blockquote className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            <p>
              “Working with Fadi was a game-changer. His website scan tool identified critical SEO issues, and his solutions boosted our site’s ranking significantly.” –{' '}
              <cite>Mark Johnson, E-commerce Owner</cite>
            </p>
          </blockquote>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center">
            Ready to start your project?{' '}
            <Link
              href="/#projects"
              className="text-accent underline hover:text-accent/80 transition"
              aria-label="View Fadi Dabboura’s portfolio"
            >
              See my work
            </Link>{' '}
            or fill out the form below!
          </p>
        </div>
      </Section>
    </>
  );
}