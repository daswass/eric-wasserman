import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import resumeData from '../data/resume.ts';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-lg md:text-xl font-semibold">
          <span className={`transition-colors duration-300 ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
            <span className="hidden md:inline">{resumeData.personalInfo.name.split(' ')[0]} </span>
            <span className="md:hidden">Eric </span>
            <span className="text-amber-500">W.</span>
          </span>
        </div>
        
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`transition-colors duration-300 ${
                    scrolled ? 'text-zinc-700 hover:text-amber-500' : 'text-zinc-100 hover:text-amber-400'
                  } font-medium`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-colors duration-300 ${
              scrolled ? 'text-zinc-800' : 'text-white'
            } focus:outline-none`}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden">
          <ul className="px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.label} className="py-2">
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-zinc-800 hover:text-amber-500 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;