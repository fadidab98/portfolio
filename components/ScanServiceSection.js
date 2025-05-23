import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import Section from './Section';

export default function ScanServiceSection() {
  return (
    <Section
      id="scan-service"
      className="bg-secondary overflow-hidden py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-[600px] sm:min-h-[650px] border border-accent/20 m-12 rounded-md"
    >
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] max-sm:w-[15rem] max-sm:h-[15rem] bg-accent rounded-full opacity-20 zami -[8]"></div>
        <div className="absolute -bottom-40 -right-40 w-[15rem] h-[15rem] max-sm:w-[10rem] max-sm:h-[10rem] bg-accent rounded-full opacity-20 z-[8]"></div>
        <div className="mb-6 flex justify-center items-center h-16 w-16 mx-auto">
          <FaSearch className="text-accent text-5xl" aria-hidden="true" />
        </div>
        <h2 className="text-4xl font-bold mb-4 text-white">
          Fadi Dabboura’s Website Scan Service
        </h2>
        <div className="text-lg text-gray-300 space-y-4 mb-8 min-h-[250px] sm:min-h-[300px]">
          <p className="leading-relaxed">
            My <strong>Website Scan Service</strong> provides a comprehensive analysis of your
            website’s performance, identifying issues that impact user experience and search engine
            rankings.
          </p>
          <p className="leading-relaxed">
            Using advanced tools, I evaluate <strong>page speed</strong>, <strong>SEO</strong>,{' '}
            <strong>security</strong>, and <strong>accessibility</strong>. The scan delivers actionable
            recommendations to optimize your site.
          </p>
          <p className="leading-relaxed">
            Get personalized support to address critical issues. Start with my{' '}
            <Link
              href="/website-scan"
              className="text-accent underline hover:text-accent/80 transition"
              aria-label="Try FadiLogic's free website scan tool"
            >
              free website scan tool
            </Link>{' '}
            or{' '}
            <Link
              href="/contact"
              className="text-accent underline hover:text-accent/80 transition"
              aria-label="Contact Fadi Dabboura for website scan support"
            >
              contact me
            </Link>{' '}
            for expert guidance.
          </p>
        </div>
        <Link
          href="/website-scan"
          className="inline-block bg-accent text-background py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-md"
          aria-label="Start FadiLogic’s free website scan"
        >
          Start Website Scan Now
        </Link>
      </div>
    </Section>
  );
}