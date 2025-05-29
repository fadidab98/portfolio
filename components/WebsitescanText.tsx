import Section from './Section';
import Link from 'next/link';

export default function WebsitescanText() {
  return (
    <Section className="max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
        Optimize Your Website with Fadi Dabboura’s Scan Tool
      </h2>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        Fadi Dabboura’s Website Scan Tool, offered through FadiLogic, is a powerful, free solution designed to analyze and enhance your website’s performance. Developed by Fadi Dabboura, an expert DevOps engineer and web developer, this tool evaluates critical metrics like page speed, SEO, accessibility, and security to deliver actionable insights for optimization.
      </p>
      
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
        Why Choose Fadi Dabboura’s Website Scan Tool?
      </h2>
      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-accent">Comprehensive Analysis</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Fadi Dabboura’s tool examines your website for performance bottlenecks, broken links, SEO issues, and accessibility barriers, providing a detailed report to guide improvements.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-accent">Free and User-Friendly</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Completely free, this tool by Fadi Dabboura requires only your website URL to generate a report. No technical expertise is needed to understand the results.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-accent">Actionable Recommendations</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Each scan includes practical suggestions to address issues, from optimizing images to improving server response times, crafted by Fadi Dabboura’s expertise in web development.
          </p>
        </div>
      </div>
      
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
        How the Website Scan Tool Works
      </h2>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        Simply enter your website’s URL into Fadi Dabboura’s Website Scan Tool, and it will analyze key performance indicators, including load time, mobile responsiveness, and SEO readiness. The tool, built by Fadi Dabboura, generates a comprehensive report highlighting errors, alerts, and optimization opportunities to boost your site’s user experience and search engine rankings.
      </p>
      
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
        Benefits of Website Optimization
      </h2>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        A well-optimized website, as supported by Fadi Dabboura’s tool, enhances user satisfaction, reduces bounce rates, and improves search engine visibility. By addressing issues like slow load times or SEO errors, you can attract more visitors and convert them into customers. Fadi Dabboura’s expertise ensures your site meets modern web standards.
      </p>
      
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-accent">What metrics does Fadi Dabboura’s tool analyze?</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            The tool evaluates page speed, mobile responsiveness, SEO compliance, security vulnerabilities, and accessibility, providing a holistic view of your site’s health.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-accent">Is the scan tool really free?</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Yes, Fadi Dabboura’s Website Scan Tool is 100% free, designed to help website owners improve performance without cost.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-accent">How can I act on the scan results?</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Follow the tool’s tailored recommendations, such as compressing images or fixing broken links. For advanced solutions,{' '}
            <Link href="/contact" className="text-accent underline hover:text-accent/80 transition">
              contact Fadi Dabboura
            </Link>{' '}
            for expert DevOps and web development support.
          </p>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <Link
          href="/contact"
          className="inline-block bg-accent text-background py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-md"
          style={{ backgroundColor: '#d4af37' }}
        >
          Contact Fadi Dabboura for Expert Support
        </Link>
      </div>
    </Section>
  );
}