// components/Hero.jsx (Client-Komponente)
'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import HeroServer from './HeroServer';

// Korrigierte Imports für react-icons
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Motiondiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div), // Korrigierter Import (motion.div statt motion.dev)
  { ssr: false }
);

export default function Hero() {
  // Ersetze Redux durch useMediaQuery
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/fadi.dabboura.73',
      icon: <FaFacebookF />,
      color: 'hover:text-[#1877F2]',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/fadidab98',
      icon: <FaGithub />,
      color: 'hover:text-[#333]',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
      icon: <FaLinkedinIn />,
      color: 'hover:text-[#0A66C2]',
    },
  ];

  const socialContent = (
    <>
      <div className="flex justify-center md:justify-start gap-4 mb-6">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-300 ${link.color} transition-colors duration-300 transform hover:scale-110`}
            aria-label={link.name}
          >
            <span className="text-2xl">{link.icon}</span>
          </Link>
        ))}
      </div>
      <Link
        href="/contact"
        className="inline-block bg-accent text-background py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-base sm:text-lg hover:bg-yellow-600 hover:scale-105 transition duration-300 shadow-md"
      >
        Contact Me
      </Link>
    </>
  );

  return isMobile ? (
    <HeroServer>{socialContent}</HeroServer>
  ) : (
    <Motiondiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <HeroServer>{socialContent}</HeroServer>
    </Motiondiv>
  );
}
