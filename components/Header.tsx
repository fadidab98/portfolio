'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Dispatch, SetStateAction } from 'react';
import { style } from 'framer-motion/client';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
}

export default function Header({ isMenuOpen, setIsMenuOpen, pathname }: HeaderProps): React.JSX.Element {
  const isActive = (path: string): boolean => {
    if (path === '/') {
      return pathname === '/' || pathname === '';
    }
    return pathname === path;
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-50 bg-secondary text-white shadow-md" style={{backgroundColor:"#2d2d2d"}}>
      <div className="max-w-5xl mx-auto flex justify-between items-center py-6 px-4 sm:px-6 lg:px-8 relative z-50">
        <span className="text-2xl font-bold text-accent">FadiLogic</span>
        <button
          className="md:hidden text-accent text-2xl p-2 focus:outline-none rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav
          className={`mobile-hidden md:block md:static md:bg-transparent md:top-auto md:left-auto md:right-auto md:bottom-auto md:mt-0 transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'fixed top-[80px] left-0 right-0 bottom-0 bg-secondary z-50' : 'hidden'
          }` } style={{backgroundColor:"#2d2d2d"}}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 h-full justify-center items-center p-2 md:p-0 text-white">
            <li className="w-full md:w-auto">
              <Link
                href="/"
                className={`block py-3 md:py-2 px-2 md:px-6 text-lg md:text-base font-semibold transition duration-300 w-full text-center md:text-left no-decoration focus:outline-none ${
                  isActive('/') ? 'text-accent bg-accent/20 md:rounded-md' : 'hover:text-accent hover:bg-accent/20 md:hover:rounded-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/#about"
                className={`block py-3 md:py-2 px-2 md:px-6 text-lg md:text-base font-semibold transition duration-300 w-full text-center md:text-left no-underline focus:outline-none ${
                  isActive('/#about')
                    ? 'text-accent bg-accent/20 md:rounded-md'
                    : 'hover:text-accent hover:bg-accent/20 md:hover:rounded-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            
            <li className="w-full md:w-auto">
              <Link
                href="/#projects"
                className={`block py-3 md:py-2 px-2 md:px-6 text-lg md:text-base font-semibold transition duration-300 w-full text-center md:text-left no-underline focus:outline-none ${
                  isActive('/#projects')
                    ? 'text-accent bg-accent/20 md:rounded-md'
                    : 'hover:text-accent hover:bg-accent/20 md:hover:rounded-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/contact"
                className={`block py-3 md:py-2 px-2 md:px-6 text-lg md:text-base font-semibold transition duration-300 w-full text-center md:text-left no-underline focus:outline-none ${
                  isActive('/contact')
                    ? 'text-accent bg-accent/20 md:rounded-md'
                    : 'hover:text-accent hover:bg-accent/20 md:hover:rounded-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}