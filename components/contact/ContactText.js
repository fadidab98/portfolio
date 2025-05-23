import Link from 'next/link';
import Section from '../Section';

export default function ContactText() {
  return (
    <>
      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12 border border-accent/20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          What to Expect After Contacting Me
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          After submitting the form below, I’ll personally review your message and respond within 24-48 hours. Whether you need <strong>DevOps solutions</strong>, custom <strong>web development</strong>, or insights from my{' '}
          <Link
            href="/website-scan"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="Try FadiLogic’s free website scan tool"
          >
            free website scan tool
          </Link>
          , I’ll provide tailored guidance to meet your goals. Explore my{' '}
          <Link
            href="/#projects"
            className="text-accent underline hover:text-accent/80 transition"
            aria-label="View Fadi Dabboura’s portfolio"
          >
            portfolio
          </Link>{' '}
          to see examples of my work, and let’s bring your project to life!
        </p>
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
              Streamlined <strong>DevOps solutions</strong> for scalable cloud infrastructure and automated CI/CD pipelines.
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
              High-performance <strong>web development</strong> projects optimized for speed, accessibility, and SEO.
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
              Comprehensive <strong>website performance optimization</strong> using my free scan tool to boost user experience.
            </span>
          </li>
        </ul>
      </Section>

      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12 border border-accent/20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
          <div className="border-l-4 border-accent pl-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2" itemProp="name">
              How quickly will I get a response?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <span itemProp="text">I typically respond within 24-48 hours after receiving your message.</span>
            </p>
          </div>
          <div className="border-l-4 border-accent pl-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2" itemProp="name">
              What types of projects do you work on?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <span itemProp="text">
                I specialize in DevOps, web development, and website performance optimization, including CI/CD pipelines, scalable web apps, and SEO improvements.
              </span>
            </p>
          </div>
          <div className="border-l-4 border-accent pl-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2" itemProp="name">
              Can you help with existing website issues?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <span itemProp="text">
                Yes, I can analyze your website using my{' '}
                <Link
                  href="/website-scan"
                  className="text-accent underline hover:text-accent/80 transition"
                  aria-label="Try FadiLogic’s free website scan tool"
                >
                  free scan tool
                </Link>{' '}
                to identify issues like slow load times, broken links, or SEO gaps, and provide solutions to fix them.
              </span>
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12 border border-accent/20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
          What Clients Say
        </h2>
        <div className="space-y-6" itemScope itemType="https://schema.org/Review">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed" itemProp="reviewBody">
            “Fadi Dabboura helped me set up a CI/CD pipeline that reduced our deployment time by 50%. His expertise in DevOps and web development is unmatched!” –{' '}
            <span itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">Jane Smith</span>
            </span>, Startup Founder
          </p>
          <meta itemProp="datePublished" content="2025-01-15" />
          <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
            <meta itemProp="ratingValue" content="5" />
            <meta itemProp="bestRating" content="5" />
          </div>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed" itemProp="reviewBody">
            “Working with Fadi was a game-changer. His website scan tool identified critical SEO issues, and his solutions boosted our site’s ranking significantly.” –{' '}
            <span itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">Mark Johnson</span>
            </span>, E-commerce Owner
          </p>
          <meta itemProp="datePublished" content="2025-02-10" />
          <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
            <meta itemProp="ratingValue" content="5" />
            <meta itemProp="bestRating" content="5" />
          </div>
        </div>
      </Section>
    </>
  );
}