export default function Footer() {
    return (
      <footer className="bg-secondary py-6 px-4 sm:px-6 lg:px-8 text-center border-t border-accent">
        <p className="text-white">© {new Date().getFullYear()} Fadi Dabboura. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/fadi-dabboura-8300bb211" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href="https://github.com/fadidab98" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
        </div>
      </footer>
    );
  }