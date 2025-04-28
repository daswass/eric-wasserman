import React, { useEffect, useRef } from 'react';
import resumeData from '../data/resume.ts';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  // Skill proficiency levels
  const skillLevels: Record<string, number> = {
    'Java': 95,
    'C++': 90,
    'TypeScript': 85,
    'q': 80,
    'C#': 85,
    'Clojure': 80,
    'Perl': 75,
    'Python': 80,
    'SQL': 85,
    'Spring': 90,
    'Hibernate': 85,
    'Angular': 80,
    'Guice': 85,
    'Boost': 80,
    'JAX-RS': 75,
    'Google Cloud Platform': 85,
    'AWS': 80,
    'AppEngine': 85,
    'Microservices': 90,
    'Gradle': 85,
    'Bazel': 80,
    'Git': 90,
    'CI/CD': 85,
    'Agile Methodologies': 90,
  };
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = document.querySelectorAll('.skill-progress');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.width || '0%';
              (bar as HTMLElement).style.opacity = '1';
            }, index * 100);
          });
        }
      });
    }, options);
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-zinc-800 text-white" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-zinc-300">
            A comprehensive view of my technical capabilities and expertise
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {resumeData.skills.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-zinc-700/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6 text-amber-400">
                  {category.category}
                </h3>
                
                {category.category === 'Database Management Systems' ? (
                  // Grid layout for database skills
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="bg-zinc-700/50 rounded-lg p-4 hover:bg-zinc-600/50 transition-colors cursor-default"
                      >
                        <span className="text-zinc-100">{skill}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Progress bars for other categories
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => {
                      const level = skillLevels[skill] || 70;
                      return (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill}</span>
                            <span className="text-zinc-400">{level}%</span>
                          </div>
                          <div className="w-full bg-zinc-700 rounded-full h-2.5">
                            <div 
                              className="skill-progress bg-amber-500 h-2.5 rounded-full opacity-0 transition-all duration-1000 ease-out"
                              style={{ width: '0%', transitionDelay: `${skillIndex * 100}ms` }}
                              data-width={`${level}%`}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-zinc-700/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-center text-amber-400">Professional Strengths</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Leadership',
                'Problem Solving',
                'Architecture Design',
                'Mentoring',
                'Team Management',
                'Performance Optimization',
                'System Integration',
                'Technical Communication'
              ].map((strength, index) => (
                <div 
                  key={index} 
                  className="bg-zinc-700/50 rounded-lg p-4 text-center transform transition-all hover:scale-105 hover:bg-zinc-600/50"
                >
                  <span className="font-medium text-zinc-100">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;