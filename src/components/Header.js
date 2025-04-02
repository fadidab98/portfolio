import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-60  text-white p-4 bg-secondary py-6 px-4 sm:px-6 lg:px-8 shadow-md ">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-accent">FadiLogic</h1>
        <button
          className="md:hidden text-accent text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-white">
            <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
            <li><Link href="/#about" className="hover:text-accent transition">About</Link></li>
            <li><Link href="/#projects" className="hover:text-accent transition">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}