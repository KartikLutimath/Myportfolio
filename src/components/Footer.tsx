
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center">
          <a 
            onClick={scrollToTop}
            className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors mb-8 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} className="text-primary" />
          </a>
          
          <h2 className="text-2xl font-bold mb-4">Kartik<span className="text-primary">Lutimath</span></h2>
          
          <p className="text-gray-400 mb-6 text-center max-w-md">
            A passionate software engineer dedicated to creating efficient, scalable, and user-friendly applications.
          </p>
          
          <div className="flex space-x-4 mb-8">
            <a 
              href="https://github.com/KartikLutimath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 dark:bg-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kartiklutimath/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 dark:bg-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:kartik.lutimath@example.com"
              className="p-3 bg-gray-800 dark:bg-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Kartik Lutimath. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
