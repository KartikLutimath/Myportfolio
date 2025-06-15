
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import KLImage from "../assets/KL.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 animate-fade-in-left">
          <Avatar className="h-10 w-10 border-2 border-primary">
            {/* <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQFKMi9lWv2I_g/profile-displayphoto-shrink_200_200/0/1710750652939?e=1721865600&v=beta&t=F5NNHYIxJEXXVGG7jCDh6aSHDzwcpJHVGOr1gGdgvPU" alt="Kartik Lutimath" /> */}
            
            <AvatarImage src={KLImage} alt="Kartik Lutimath" />
            <AvatarFallback>KL</AvatarFallback>
          </Avatar>
          <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">Kartik<span className="text-primary">Lutimath</span></a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 animate-fade-in-right">
          <a href="#about" className="nav-item">About</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#contact" className="nav-item">Contact</a>
          <a href="https://drive.google.com/file/d/1ITvpK1DI01gWxILzkdQ2M9wFjv2nWKKJ/view?usp=drive_link" className="nav-item">Resume</a>
          
          <div className="ml-4 flex items-center space-x-2">
            <a 
              href="https://github.com/KartikLutimath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kartiklutimath/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button 
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-4 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700 shadow-lg animate-fade-in-down">
          <div className="flex flex-col space-y-2">
            <a href="#about" className="nav-item text-center" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="nav-item text-center" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#skills" className="nav-item text-center" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#contact" className="nav-item text-center" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="https://drive.google.com/file/d/1ITvpK1DI01gWxILzkdQ2M9wFjv2nWKKJ/view?usp=drive_link" className="nav-item text-center" target="_blank"
             rel="noopener noreferrer"onClick={() => setIsMenuOpen(false)}>Resume</a>

            <div className="flex justify-center space-x-4 mt-2">
              <a 
                href="https://github.com/KartikLutimath" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kartiklutimath/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;