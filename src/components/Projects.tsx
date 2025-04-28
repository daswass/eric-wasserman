import React, { useState } from 'react';
import resumeData from '../data/resume.ts';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2 text-zinc-800">Side Projects</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-zinc-600">
            Entrepreneurial ventures I've developed alongside my professional career
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resumeData.sideProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-zinc-100 transition-transform hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center p-6">
                  <Code size={64} className="text-amber-400" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-zinc-800">{project.company}</h3>
                  <p className="text-sm text-amber-600 mb-4">{project.position} | {project.period}</p>
                  
                  <p className="text-zinc-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-zinc-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-zinc-600 space-y-1">
                      {project.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="line-clamp-2">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies && project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs">
                        + {project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setActiveTab(index)}
                    className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium text-sm"
                  >
                    Learn More <ExternalLink size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Project details modal */}
          {activeTab !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
                <div className="p-6 bg-gradient-to-r from-zinc-800 to-zinc-900 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">
                        {resumeData.sideProjects[activeTab].company}
                      </h3>
                      <p className="text-amber-400">
                        {resumeData.sideProjects[activeTab].position} | {resumeData.sideProjects[activeTab].period}
                      </p>
                    </div>
                    <button 
                      onClick={() => setActiveTab(null)}
                      className="text-white hover:text-amber-400"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-zinc-700 mb-6">
                    {resumeData.sideProjects[activeTab].description}
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3 text-zinc-800">Key Achievements</h4>
                  <ul className="space-y-3 mb-6">
                    {resumeData.sideProjects[activeTab].achievements.map((achievement, idx) => (
                      <li key={idx} className="flex">
                        <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-zinc-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {resumeData.sideProjects[activeTab].technologies && (
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-zinc-800">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.sideProjects[activeTab].technologies?.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setActiveTab(null)}
                      className="px-4 py-2 bg-zinc-200 hover:bg-zinc-300 text-zinc-800 rounded-md transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;