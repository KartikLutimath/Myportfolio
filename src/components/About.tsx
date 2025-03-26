
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="heading-lg mb-6 animate-fade-in-up">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in-up animate-delaySm">
              I'm a Full Stack Web Developer based in Bangalore, Karnataka, with experience in building 
              efficient, scalable, and maintainable applications. Recently completed an internship at 
              Varcons Technologies where I developed a Biometric Authentication Landing Page.
            </p>
            <p className="text-gray-600 mb-6 animate-fade-in-up animate-delayMd">
              I enjoy tackling complex problems and turning them into simple, elegant solutions. 
              My approach focuses on creating responsive and user-friendly interfaces while ensuring
              optimal performance through efficient state management and resource optimization.
            </p>
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up animate-delayLg">
              <span className="skill-badge">Problem Solving</span>
              <span className="skill-badge">Clean Code</span>
              <span className="skill-badge">Team Collaboration</span>
              <span className="skill-badge">Fast Learner</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="space-y-8">
              <div className="card p-6 animate-fade-in-left animate-delaySm">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-1">Education</h3>
                    <p className="text-gray-600 mb-2">B.E. in Computer Science and Design</p>
                    <p className="text-sm text-gray-500">
                      Dayananda Sagar Academy of Technology and Management (Dec 2021 - Jun 2025)
                      <br />CGPA: 8.24 | 7th SEM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card p-6 animate-fade-in-left animate-delayMd">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-1">Experience</h3>
                    <p className="text-gray-600 mb-2">Full Stack Web Developer Intern - Varcons Technologies</p>
                    <p className="text-sm text-gray-500">
                      Oct 2023 - Dec 2023 | Bangalore, Karnataka
                      <br />Developed a Biometric Authentication Landing Page using Figma, HTML, CSS, JavaScript, and React.js
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card p-6 animate-fade-in-left animate-delayLg">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-1">Achievements</h3>
                    <p className="text-gray-600 mb-2">Coding & Technical Accomplishments</p>
                    <p className="text-sm text-gray-500">
                      Solved 600+ coding problems across multiple platforms
                      <br />Ranked in the Top 20 in institution on the GeeksforGeeks coding platform
                      <br />Top 10 rank in Technospark Hackathon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
