
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
    
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Update active state in navbar based on section visibility
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
    const handleScroll = () => {
      let current = '';
      
      sections.forEach(section => {
        // Cast section to HTMLElement to access offsetTop property
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navItems.forEach(item => {
        item.classList.remove('bg-primary', 'text-white');
        
        const href = item.getAttribute('href');
        if (href && href === `#${current}`) {
          item.classList.add('bg-primary', 'text-white');
        }
      });
    };
    
    // Add animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const windowHeight = window.innerHeight;
      
      elements.forEach((element) => {
        const elementPosition = (element as HTMLElement).getBoundingClientRect().top;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check for elements in viewport
    setTimeout(animateOnScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
