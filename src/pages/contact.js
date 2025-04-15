import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../components/ContactForm'), {
  ssr: false,
});

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-text font-inter py-20 px-4">
      <Head>
        <title>Fadi Dabboura | Contact Me - FadiLogic</title>
        <meta
          name="description"
          content="Contact Fadi Dabboura for collaborations, inquiries, or to discuss DevOps and web development projects at FadiLogic."
        />
        <meta
          name="keywords"
          content="fadi dabboura, contact, devops, web development, website scan, fadilogic"
        />
        <meta name="author" content="Fadi Dabboura" />
        <link rel="canonical" href="https://fadilogic.serp24.online/contact" />
        <meta
          property="og:title"
          content="Fadi Dabboura - Contact | FadiLogic"
        />
        <meta
          property="og:description"
          content="Contact with Fadi Dabboura for DevOps, web development, or to try the free website scan tool at FadiLogic."
        />
        <meta
          property="og:url"
          content="https://fadilogic.serp24.online/contact"
        />
        <meta
          property="og:image"
          content="https://fadilogic.serp24.online/images/FadiLogic.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fadi Dabboura Contact Page" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FadiLogic" />
        <meta property="og:locale" content="en_US" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
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
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Contact',
                    item: 'https://fadilogic.serp24.online/contact',
                  },
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'FadiLogic',
                url: 'https://fadilogic.serp24.online',
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    email: 'fadi@serp24.online',
                    contactType: 'Customer Service',
                  },
                ],
                sameAs: [
                  'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
                  'https://www.facebook.com/fadi.dabboura.73',
                  'https://github.com/fadidab98',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'How quickly will I get a response?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'I typically respond within 24-48 hours after receiving your message.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What types of projects do you work on?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'I specialize in DevOps, web development, and website performance optimization, including CI/CD pipelines, scalable web apps, and SEO improvements.',
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white tracking-tight">
            Contact <span className="text-accent">Fadi Dabboura</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
            Whether you have a question, a project idea, or seek to collaborate
            on innovative DevOps and web development solutions, I’m here to
            help.{' '}
            <Link
              href="/"
              className="text-accent underline hover:text-accent/80 transition"
            >
              Explore my portfolio
            </Link>{' '}
            to learn more about my work, or use my{' '}
            <Link
              href="/website-scan"
              className="text-accent underline hover:text-accent/80 transition"
            >
              website scan tool
            </Link>{' '}
            to analyze your site’s performance.
          </p>
        </div>

        <section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12">
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
        </section>

        <section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12">
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
                DevOps solutions for scalable infrastructure and CI/CD
                pipelines.
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
        </section>

        <section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12">
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
        </section>

        <section className="bg-secondary rounded-lg shadow-xl p-8 sm:p-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
            What Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            “Fadi Dabboura helped me set up a CI/CD pipeline that reduced our
            deployment time by 50%. His expertise in DevOps and web development
            is unmatched!” – Jane Smith, Startup Founder
          </p>
        </section>

        <section className="w-full max-w-2xl mx-auto bg-gradient-to-r from-secondary to-gray-800 rounded-xl shadow-2xl p-8 sm:p-12 border border-accent/20 hover:shadow-accent/20 transition-all duration-300">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
            Get in Touch
          </h2>
          <ContactForm />
          <p className="mt-6 text-center text-gray-300 text-lg sm:text-xl">
            Or email me directly at:{' '}
            <a
              href="mailto:fadi@serp24.online"
              className="text-accent hover:underline transition"
            >
              fadi@serp24.online
            </a>
            . While you’re here, try my{' '}
            <Link
              href="/website-scan"
              className="text-accent underline hover:text-accent/80 transition"
            >
              free website scan tool
            </Link>{' '}
            to optimize your site!
          </p>
        </section>
      </div>
    </div>
  );
}
