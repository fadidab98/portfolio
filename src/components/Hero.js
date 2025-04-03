import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Hero() {
  const isMobile = useSelector((state) => state.setting.setting.isMobile);

  // Define the common content to avoid duplication
  const heroContent = (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="relative aspect-[250/350] w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] ">
          <Image
            src="/images/project1.webp"
            alt="Fadi Dabboura"
            width={250}
            height={350}
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoBAAEAAQAcJaACdLoB+AA/an7gAAA="
            className="rounded-full border-4 border-accent shadow-lg object-cover w-full h-full"
            sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
          />
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-accent rounded-full opacity-20 z-[-1]"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent rounded-full opacity-20 z-[-1]"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Fadi Dabboura</h1>
        <p className="text-xl sm:text-2xl text-white mb-4 leading-relaxed">
          Software Engineer & Web Developer
        </p>
        <div className="text-base sm:text-lg text-gray-300 space-y-4 mb-6 min-h-[150px] sm:min-h-[180px] md:min-h-[200px]">
          <p className="leading-relaxed">
            I am Fadi Dabboura, a dedicated <strong>DevOps engineer</strong>, <strong>data scientist</strong>, and <strong>web developer</strong> with a passion for building efficient, scalable, and data-driven solutions.
          </p>
          <p className="leading-relaxed">
            Currently, I am pursuing a Master’s degree in Informatics at Ostfalia, where I am deepening my expertise in software engineering. With a strong foundation in full-stack development, machine learning, and DevOps, I thrive on solving complex challenges and collaborating on innovative ideas.
          </p>
          <p className="leading-relaxed">
            Explore my portfolio to see my work, or feel free to reach out to discuss potential opportunities!
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-block bg-accent text-background py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-base sm:text-lg hover:bg-yellow-600 hover:scale-105 transition duration-300 shadow-md"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );

  return isMobile ? (
    <section id="home" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto md:pb-10">
      {heroContent}
    </section>
  ) : (
    <motion.section
      id="home"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto md:pb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {heroContent}
    </motion.section>
  );
}