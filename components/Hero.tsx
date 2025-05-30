'use client';

import { useMediaQuery } from 'react-responsive';
import HeroServer from './HeroServer';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SocialLink } from '../types';

export default function Hero() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const socialLinks: SocialLink[] = [
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
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-300 ${link.color} transition-colors duration-300 transform hover:scale-110`}
            aria-label={`Visit Fadi Dabboura’s ${link.name} profile`}
          >
            <span className="text-2xl">{link.icon}</span>
          </a>
        ))}
      </div>
      <div>
        <a
          href="/contact"
          className="inline-block bg-accent text-background py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-base sm:text-lg hover:bg-yellow-600 hover:scale-105 transition duration-300 shadow-md"
         
         style={{backgroundColor:'#d4af37'}}
          aria-label="Contact Fadi Dabboura"
        >
          Contact Me
        </a>
      </div>
    </>
  );

  return isMobile ? <HeroServer>{socialContent}</HeroServer> : <HeroServer>{socialContent}</HeroServer>;
}