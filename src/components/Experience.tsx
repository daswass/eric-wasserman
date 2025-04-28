import React, { useState } from 'react';
import resumeData from '../data/resume.ts';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="experience" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2 text-zinc-800">Career Progression</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-zinc-600">
            My professional journey through the financial technology landscape
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Timeline navigation */}
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100">
                  {resumeData.experience.map((exp, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left p-3 mb-2 rounded-md transition-all ${
                        activeIndex === index 
                          ? 'bg-amber-50 border-l-4 border-amber-500 text-zinc-900' 
                          : 'hover:bg-zinc-50 text-zinc-600'
                      }`}
                    >
                      <h3 className="font-medium">{exp.company}</h3>
                      <p className="text-sm text-zinc-500">{exp.period}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Experience details */}
            <div className="md:w-2/3">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100 transition-all duration-300">
                <div className="mb-4 pb-4 border-b border-zinc-100">
                  <h3 className="text-2xl font-semibold text-zinc-800">{resumeData.experience[activeIndex].position}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-zinc-500">
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-1 text-amber-500" />
                      <span>{resumeData.experience[activeIndex].company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1 text-amber-500" />
                      <span>{resumeData.experience[activeIndex].location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1 text-amber-500" />
                      <span>{resumeData.experience[activeIndex].period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-zinc-700 mb-6">
                  {resumeData.experience[activeIndex].description}
                </p>
                
                <h4 className="font-semibold text-lg mb-3 text-zinc-800">Key Achievements</h4>
                <ul className="space-y-3 mb-6">
                  {resumeData.experience[activeIndex].achievements.map((achievement, idx) => (
                    <li key={idx} className="flex">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-zinc-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                {resumeData.experience[activeIndex].technologies && (
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-zinc-800">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.experience[activeIndex].technologies?.map((tech, idx) => (
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;