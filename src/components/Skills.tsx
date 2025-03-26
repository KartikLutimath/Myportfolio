
const Skills = () => {
  const technicalSkills = [
    { name: 'C++', level: 90 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 85 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 70 },
    { name: 'Java', level: 70 },
  ];

  const categorizedSkills = {
    'Languages': ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
    'Frontend': ['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    'Backend': ['Node.js', 'Express.js', 'RESTful APIs'],
    'Database': ['MongoDB', 'PostgreSQL'],
    'DevTools': ['VS Code', 'Git', 'Docker', 'Postman', 'GitHub', 'Chrome DevTools', 'Tableau Public'],
    'Core CS': ['Data Structures', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  };

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="heading-lg text-center mb-4 animate-fade-in-up">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delaySm">
          I've worked with a variety of technologies and tools throughout my journey as a software engineer.
        </p>

        <div className="mb-16 animate-fade-in-up animate-delayMd">
          <h3 className="heading-md text-center mb-8">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${0.15 + index * 0.1}s` }}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`, 
                      transition: 'width 1s ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up animate-delayLg">
          <h3 className="heading-md text-center mb-8">Skill Set</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(categorizedSkills).map(([category, skills], index) => (
              <div 
                key={category} 
                className="card p-6 hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              >
                <h4 className="heading-sm mb-4 text-primary">{category}</h4>
                <div className="flex flex-wrap">
                  {skills.map(skill => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
