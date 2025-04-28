import React from 'react';
import resumeData from '../data/resume.ts';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-zinc-800">About Me</h2>
          <div className="w-20 h-1 bg-amber-500 mb-8"></div>
          
          <p className="text-lg text-zinc-700 leading-relaxed mb-10">
            {resumeData.professionalSummary}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 p-6 rounded-lg shadow-sm border border-zinc-100">
              <h3 className="text-xl font-semibold mb-4 text-zinc-800">Personal Information</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-zinc-900 font-medium">Location</p>
                    <p className="text-zinc-600">{resumeData.personalInfo.location}</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="mr-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-zinc-900 font-medium">Phone</p>
                    <a 
                      href={`tel:${resumeData.personalInfo.phone}`} 
                      className="text-zinc-600 hover:text-amber-500 transition-colors"
                    >
                      {resumeData.personalInfo.phone}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="mr-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-zinc-900 font-medium">Email</p>
                    <a 
                      href={`mailto:${resumeData.personalInfo.email}`} 
                      className="text-zinc-600 hover:text-amber-500 transition-colors"
                    >
                      {resumeData.personalInfo.email}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Linkedin className="mr-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-zinc-900 font-medium">LinkedIn</p>
                    <a 
                      href={`https://${resumeData.personalInfo.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-amber-500 transition-colors"
                    >
                      {resumeData.personalInfo.linkedin}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-zinc-50 p-6 rounded-lg shadow-sm border border-zinc-100">
              <h3 className="text-xl font-semibold mb-4 text-zinc-800">Education</h3>
              
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-2">
                  <h4 className="text-lg font-medium text-zinc-800">{edu.institution}</h4>
                  <p className="text-zinc-600">{edu.degree}</p>
                  <p className="text-zinc-500 text-sm">Graduated: {edu.gradYear}</p>
                  <p className="text-zinc-500 text-sm">GPA: {edu.gpa} | Major GPA: {edu.majorGpa}</p>
                </div>
              ))}
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-zinc-800">Additional Activities</h3>
              
              {resumeData.additionalExperience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-lg font-medium text-zinc-800">{exp.title}</h4>
                  <p className="text-zinc-600">{exp.organization}</p>
                  <p className="text-zinc-500 text-sm">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;