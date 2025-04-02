import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script'; // For loading GA script
import { useEffect } from 'react';

const GA_TRACKING_ID = 'G-7V85L1LGSS';
export default function Hero() {
  // Track page view when component mounts
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Hero Section',
        page_location: window.location.href,
        page_path: '/',
      });
    }
  }, []);
  return (
    <>
    {/* Google Analytics Script */}
    <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    <motion.section
      id="home"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Column: Image with Design Elements */}
        <div className="relative w-full md:w-1/2 flex justify-center  md:justify-start">
          <div className="relative transform translate-y-[-20px] ">
            <Image
              src="/images/project1.jpg" // Replace with your actual image path
              alt="Fadi Dabboura"
              width={300}
              height={300}
              className="rounded-full  border-4 border-accent shadow-lg w-64  h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover"
            />
            {/* Decorative Design Element */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-accent rounded-full opacity-20 z-[-1]"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent rounded-full opacity-20 z-[-1]"></div>
          </div>
        </div>

        {/* Right Column: Description and Icons */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4">Fadi Dabboura</h1>
          <p className="text-xl sm:text-2xl text-white mb-4 leading-relaxed">
            Software Engineer & Web Developer
          </p>
          <p className="text-base sm:text-lg text-gray-300 mb-6">
          I am Fadi Dabboura, a dedicated DevOps engineer, data scientist, and web developer with a passion for building efficient, scalable, and data-driven solutions. Currently, I am pursuing a Master’s degree in Informatics at Ostfalia , where I am deepening my expertise in Software engineering. With a strong foundation in  full-stack development, machine learning, and Devops. I thrive on solving complex challenges and collaborating on innovative ideas. Explore my portfolio to see my work, or feel free to reach out to discuss potential opportunities!
          </p>
          {/* Wonderful Icons */}
          <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mb-6 ">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer ">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 text-accent h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:your.email@example.com">
              <img src="/icons/email.svg" alt="Email" className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform" />
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-accent text-background py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-base sm:text-lg hover:bg-yellow-600 hover:scale-105 transition duration-300"
            onClick={() =>
              window.gtag('event', 'click', {
                event_category: 'Button',
                event_label: 'Get in Touch',
              })
            }
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </motion.section>
    </>
  );
}