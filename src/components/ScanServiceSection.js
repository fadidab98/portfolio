import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

export default function ScanServiceSection() {
  return (
    <section
      id="scan-service"
      className="bg-secondary overflow-hidden py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-[600px] sm:min-h-[650px]"
    >
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] max-sm:w-[15rem] max-sm:h-[15rem] bg-accent rounded-full opacity-20 z-[8]"></div>
        <div className="absolute -bottom-40 -right-40 w-[15rem] h-[15rem] max-sm:w-[10rem] max-sm:h-[10rem] bg-accent rounded-full opacity-20 z-[8]"></div>
        <div className="mb-6 flex justify-center items-center h-16 w-16 mx-auto">
          <FaSearch className="text-accent text-5xl" />
        </div>
        <h2 className="text-4xl font-bold mb-4 text-white">
          Fadi Dabboura’s Website Scan Service
        </h2>
        <div className="text-lg text-gray-300 space-y-4 mb-8 min-h-[250px] sm:min-h-[300px]">
          <p className="leading-relaxed">
            Our <strong>Website Scan Service</strong> delivers a thorough and
            detailed evaluation of your website’s performance, designed to
            uncover potential issues that may hinder its functionality, user
            experience, or visibility on search engines.
          </p>
          <p className="leading-relaxed">
            Leveraging cutting-edge diagnostic tools, we analyze critical
            aspects such as page load speeds, broken links, security
            vulnerabilities, and overall site optimization. This comprehensive
            approach ensures that no stone is left unturned, providing you with
            actionable insights to enhance your online presence.
          </p>
          <p className="leading-relaxed">
            Should any significant concerns arise, our dedicated team of experts
            is readily available to offer personalized guidance and solutions
            tailored to your specific needs. Elevate your website’s performance
            and reliability—begin your journey to a seamless digital experience
            by initiating your scan today.
          </p>
        </div>
        <Link
          href="/website-scan"
          className="inline-block bg-accent text-background py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-md"
        >
          Start Website Scan Now
        </Link>
      </div>
    </section>
  );
}
