
import { ArrowDown, Code, Terminal, Linkedin, Github, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container px-4 sm:px-6 flex flex-col items-center text-center z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-accent/80 dark:bg-accent/30 text-accent-foreground/90 text-sm font-medium mb-6 animate-fade-in">
          Software Engineer
        </div>
        
        <h1 className="heading-xl mb-6 animate-fade-in-up animate-delaySm">
          Hi, I'm <span className="text-primary hover:scale-105 inline-block transition-transform duration-300">Kartik Lutimath</span>
        </h1>
        
        <p className="max-w-2xl text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up animate-delayMd">
          A passionate Full Stack Web Developer from Bangalore, Karnataka, India. I focus on creating clean, efficient, and user-friendly applications.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up animate-delayMd">
          <a href="mailto:kartiklutimath@gmail.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors transform hover:translate-y-[-2px]">
            <Mail size={18} className="animate-bounce" style={{ animationDuration: '2s' }} /> kartiklutimath@gmail.com
          </a>
          <a href="tel:+916360340931" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors transform hover:translate-y-[-2px]">
            <Phone size={18} /> +91-6360340931
          </a>
          <a href="https://linkedin.com/in/kartiklutimath/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors transform hover:translate-y-[-2px]">
            <Linkedin size={18} /> linkedin.com/in/kartiklutimath
          </a>
          <a href="https://github.com/KartikLutimath" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors transform hover:translate-y-[-2px]">
            <Github size={18} /> github.com/KartikLutimath
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delayLg">
          <a href="#projects" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
            <Code size={18} /> View My Work
          </a>
          <a href="#contact" className="btn-outline flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
            <Terminal size={18} /> Get In Touch
          </a>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors animate-fade-in animate-delayXl"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
