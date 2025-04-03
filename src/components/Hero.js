import { motion } from 'framer-motion'; // Static import
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const GA_TRACKING_ID = 'G-7V85L1LGSS';

export default function Hero() {
  return (
    <>


      <motion.section
        id="home"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative" >
          <Image
            src="/images/project1.webp"
            alt="Fadi Dabboura"
            width={300}
            height={300}
            priority
            placeholder="blur"
            className="rounded-full border-4 border-accent shadow-lg object-cover"
            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
          />
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-accent rounded-full opacity-20 z-[-1]"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent rounded-full opacity-20 z-[-1]"></div>
        </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4">Fadi Dabboura</h1>
            <p className="text-xl sm:text-2xl text-white mb-4 leading-relaxed">
              Software Engineer & Web Developer
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6">
            I am Fadi Dabboura, a dedicated DevOps engineer, data scientist, and web developer with a passion for building efficient, scalable, and data-driven solutions. Currently, I am pursuing a Master’s degree in Informatics at Ostfalia , where I am deepening my expertise in Software engineering....
            </p>
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mb-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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

            >
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}