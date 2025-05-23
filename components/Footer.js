import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary py-6 px-4 sm:px-6 lg:px-8 text-center border-t border-accent min-h-[100px]">
      <p className="text-white">
        © {new Date().getFullYear()} Fadi Dabboura. All rights reserved.
      </p>
      
      <div className="mt-4 flex justify-center space-x-4">
      <Link href="/contact" className="hover:text-accent" aria-label="Contact Fadi Dabboura">
          Contact
        </Link>
        <Link href="/website-scan" className="hover:text-accent" aria-label="Try FadiLogic’s website scan tool">
          Website Scan
        </Link>
        <a
          href="https://www.linkedin.com/in/fadi-dabboura-8300bb211"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/fadidab98"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          GitHub
        </a>
        <a
          href="https://www.facebook.com/fadi.dabboura.73"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}
