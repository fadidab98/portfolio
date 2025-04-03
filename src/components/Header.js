import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.asPath === path;

  // Prevent scrolling when navbar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header className="relative z-50 bg-secondary text-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-6 px-4 sm:px-6 lg:px-8 relative z-50">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-accent">FadiLogic</h1>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden text-accent text-2xl p-2 focus:outline-none  rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen
              ? 'fixed top-[80px] left-0 right-0 bottom-0 bg-secondary z-40'
              : 'hidden'
          } md:block md:static md:bg-transparent md:top-auto md:left-auto md:right-auto md:bottom-auto md:mt-0 transition-all duration-500 ease-in-out overflow-hidden`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 h-full justify-center items-center p-4 md:p-0 text-white">
            <li className="w-full md:w-auto">
              <Link
                href="/"
                className={`block py-3 md:py-2 px-4 md:px-6 text-lg md:text-base font-semibold transition duration-300 w-full text-center md:text-left no-underline ${
                  isActive('/')
                    ? 'text-accent bg-accent/20 md:rounded-md'
                    : 'hover:text-accent hover:bg-accent/20 md:hover:rounded-md'
                } focus:outline-none `}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/#about"
                className={`block py-3 md:py-2 px-4 md:px-6 text-lg md:text-base font-semibold transition duration-300 w-full text-center md:text-left no-underline ${
                  isActive('/#about')
                    ? 'text-accent bg-accent/20 md:rounded-md'
                    : 'hover:text-accent hover:bg-accent/20 md:hover:rounded-md'
                } focus:outline-none `}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/#projects"
                className={`block py-3 md:py-2 px-4 md:px-6 text-lg md:text-base font-semibold transition duration-300 w-full text-center md:text-left no-underline ${
                  isActive('/#projects')
                    ? 'text-accent bg-accent/20 md:rounded-md'
                    : 'hover:text-accent hover:bg-accent/20 md:hover:rounded-md'
                } focus:outline-none `}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/contact"
                className={`block py-3 md:py-2 px-4 md:px-6 text-lg md:text-base font-semibold transition duration-300 w-full text-center md:text-left no-underline ${
                  isActive('/contact')
                    ? 'text-accent bg-accent/20 md:rounded-md'
                    : 'hover:text-accent hover:bg-accent/20 md:hover:rounded-md'
                } focus:outline-none `}
                onClick={() => setIsOpen(false)}
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