// Hero.tsx
import HeroServer from './HeroServer';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SocialLink } from '../types';

export default async function Hero() {
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
    <div className="flex flex-col items-center md:items-start gap-4">
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-300 ${link.color} transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-current focus:ring-opacity-50 w-8 h-8 flex items-center justify-center`}
          >
            <span className="sr-only">Visit Fadi Dabboura's {link.name} profile</span>
            <span aria-hidden="true" className="text-xl">{link.icon}</span>
          </a>
        ))}
      </div>
      <a
        href="/contact"
        className="inline-block bg-[#d4af37] text-background py-2 px-4 rounded-lg text-base hover:bg-yellow-600 hover:scale-105 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-opacity-50"
        aria-label="Contact Fadi Dabboura"
      >
        Contact Me
      </a>
    </div>
  );

  return <HeroServer>{socialContent}</HeroServer>;
}