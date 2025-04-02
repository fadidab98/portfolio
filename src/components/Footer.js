export default function Footer() {
    return (
      <footer className="bg-secondary py-6 px-4 sm:px-6 lg:px-8 text-center border-t border-accent">
        <p className="text-white">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
        </div>
      </footer>
    );
  }