import React from 'react';
import resumeData from '../data/resume.ts';
import { ChevronUp, Github, Linkedin, Mail, PhoneCall } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Eric <span className="text-amber-500">Wasserman</span>
              </h2>
              <p className="text-zinc-400 max-w-md">
                {resumeData.personalInfo.title} with a passion for building high-performance systems
                and leading engineering teams.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href={`mailto:${resumeData.personalInfo.email}`}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-amber-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href={`tel:${resumeData.personalInfo.phone}`}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-amber-500 transition-colors"
                aria-label="Phone"
              >
                <PhoneCall size={18} />
              </a>
              <a 
                href={`https://${resumeData.personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-amber-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-500 hover:bg-amber-600 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp size={18} />
            </button>
          </div>
        </div>
        
        <div className="py-4 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          <p>© {currentYear} Eric Wasserman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;