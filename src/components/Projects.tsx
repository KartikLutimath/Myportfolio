
import { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Layers, Database, Shield } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  type: string;
  date: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Real projects from resume
        const realProjects: Project[] = [
          {
            id: 1,
            title: "MockXpert- AI Interview Mocker",
            description: "Built an AI-driven mock interview platform to help learners improve their interview skills through hands-on practice with dynamically generated questions and AI feedback.",
            technologies: ["Next.js", "RESTful API", "PostgreSQL", "Gemini AI", "Clerk"],
            githubUrl: "https://github.com/KartikLutimath/MockXpert-Gen-AI-Interview-Mocker",
            liveUrl: "https://mock-xpert-ai-interview.vercel.app/",
            imageUrl: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            type: "web",
            date: "July 2024"
          },
          {
            id: 2,
            title: "AI-Powered Intrusion Detection System",
            description: "Developed an ML-based Intrusion Detection System (IDS) achieving 90% accuracy using a supervised learning model to detect cybersecurity threats.",
            technologies: ["Python", "Scikit-learn", "TensorFlow", "NumPy", "Pandas"],
            githubUrl: "https://github.com/KartikLutimath/Intrusion_detection_using_random_forest",
            imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            type: "ai",
            date: "March 2025"
          },
          {
            id: 3,
            title: "E-Commerce website",
            description: "Developed an e-commerce website that allows users to browse products, filter by categories, and add items to the cart. The platform provides a seamless user experience with an intuitive interface and responsive design.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
            githubUrl: "https://github.com/KartikLutimath/E-commerce",
            liveUrl: "https://e-commerce-rho-umber.vercel.app/",
            imageUrl: "https://i.postimg.cc/1tQV6XxG/e-commerce.webp",
            type: "web",
            date: "Dec 2023"
          },
          {
            id: 4,
            title: "Biometric Authentication Landing Page",
            description: "Developed a responsive and user-friendly landing page for a biometric authentication service, ensuring cross-browser compatibility and optimal performance.",
            technologies: ["React.js", "HTML", "CSS", "JavaScript", "Figma"],
            githubUrl: "https://github.com/KartikLutimath",
            imageUrl: "https://images.unsplash.com/photo-1566897819059-db42e135fa69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            type: "web",
            date: "Oct-Dec 2023"
          },
        ];
        
        setProjects(realProjects);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="heading-lg text-center mb-4 animate-fade-in-up">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delaySm">
          Here are some of the projects I've worked on. Each project provided unique challenges and learning opportunities.
        </p>

        <div className="flex justify-center mb-10 animate-fade-in-up animate-delayMd">
          <div className="inline-flex rounded-md shadow-sm bg-secondary p-1">
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filter === 'all' ? 'bg-white shadow-sm' : 'hover:bg-white/60'}`}
              onClick={() => setFilter('all')}
            >
              <Layers className="inline-block mr-1" size={16} /> All
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filter === 'web' ? 'bg-white shadow-sm' : 'hover:bg-white/60'}`}
              onClick={() => setFilter('web')}
            >
              <Code className="inline-block mr-1" size={16} /> Web
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filter === 'ai' ? 'bg-white shadow-sm' : 'hover:bg-white/60'}`}
              onClick={() => setFilter('ai')}
            >
              <Shield className="inline-block mr-1" size={16} /> AI/Security
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filter === 'data' ? 'bg-white shadow-sm' : 'hover:bg-white/60'}`}
              onClick={() => setFilter('data')}
            >
              <Database className="inline-block mr-1" size={16} /> Data
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="h-96 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`card overflow-hidden group animate-fade-in-up`}
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="flex space-x-3">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github size={18} className="text-gray-800" />
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={18} className="text-gray-800" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="heading-sm group-hover:text-primary transition-colors">{project.title}</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{project.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="skill-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12 animate-fade-in-up animate-delayLg">
          <a 
            href="https://github.com/KartikLutimath" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center"
          >
            <Github className="mr-2" size={18} /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
