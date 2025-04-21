import Section from '../components/Section';

export default function WebsitescanText() {
  return (
    <Section className="max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4 text-white">
        How Does the Website Scan Tool Work?
      </h2>
      <p className="text-lg mb-4">
        Fadi Dabboura’s Website Scan Tool analyzes your website’s performance,
        speed, and errors by evaluating key metrics such as load time,
        responsiveness, and SEO readiness. Simply enter your website URL, and
        our tool will provide a detailed report to help you optimize your site.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-white">
        Why Website Performance Matters
      </h2>
      <p className="text-lg mb-4">
        A fast and error-free website improves user experience, reduces bounce
        rates, and boosts your search engine rankings. With Fadi Dabboura’s free
        webscan tool, you can identify issues like slow load times, broken
        links, and SEO errors to enhance your site’s performance.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-accent">
            What does the website scan tool check?
          </h3>
          <p className="text-lg">
            The tool checks your site’s performance metrics, including load
            speed, mobile responsiveness, SEO errors, and broken links.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-accent">
            Is the website scan tool free?
          </h3>
          <p className="text-lg">
            Yes, Fadi Dabboura’s website scan tool is completely free to use.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-accent">
            How can I improve my website performance?
          </h3>
          <p className="text-lg">
            After scanning, follow the tool’s recommendations, such as
            optimizing images, reducing JavaScript, and improving server
            response time. Contact Fadi Dabboura for personalized DevOps and web
            development solutions.
          </p>
        </div>
      </div>
    </Section>
  );
}
