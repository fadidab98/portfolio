import Link from 'next/link';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-700 text-center min-h-[150px] text-white"  style={{ borderColor: '#d4af37' }}>
      <div className="max-w-7xl mx-auto">
        {/* Branding and Copyright */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold tracking-tight">
            Fadi Dabboura
          </h3>
          <p className="mt-2 text-sm text-gray-300">
            © {new Date().getFullYear()} Fadi Dabboura. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 ease-in-out"
            aria-label="Contact Fadi Dabboura"
          >
            Contact
          </Link>
          <Link
            href="/website-scan"
            className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 ease-in-out"
            aria-label="Try FadiLogic’s website scan tool"
          >
            Website Scan
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/fadi-dabboura-8300bb211"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300 ease-in-out"
            aria-label="Fadi Dabboura on LinkedIn"
          >
            <span className="sr-only">Visit Fadi Dabboura's on LinkedIn profile</span>
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/fadidab98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300 ease-in-out"
            aria-label="Fadi Dabboura on GitHub"
          >
            <span className="sr-only">Visit Fadi Dabboura's on GitHub profile</span>
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/fadi.dabboura.73"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300 ease-in-out"
            aria-label="Fadi Dabboura on Facebook"
          >
            <span className="sr-only">Visit Fadi Dabboura's on Facebook profile</span>
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}