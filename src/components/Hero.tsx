import React, { useEffect, useRef } from "react";
import resumeData from "../data/resume.ts";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typingRef.current) return;

    const titles = [
      "Trading Systems Architect",
      "Software Engineer",
      "Leader",
      "Problem Solver",
      "Coach",
      "Mentor",
    ];

    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentTitle = titles[currentTitleIndex];

      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentTitle.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentTitle.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        typingSpeed = 100;
      }

      if (!isDeleting && currentCharIndex === currentTitle.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        typingSpeed = 500; // Pause before typing the next title
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      const yOffset = -80;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-900/70 to-zinc-900/30"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 tracking-tight md:block hidden">
            {resumeData.personalInfo.name}
          </h1>

          <div className="h-12 md:h-16 mb-4 md:mb-8">
            <h2 className="text-xl md:text-2xl text-amber-400 font-medium">
              I'm a{" "}
              <span
                ref={typingRef}
                className="relative after:content-[''] after:inline-block after:w-[2px] after:h-5 after:bg-amber-400 after:animate-blink after:ml-1"></span>
            </h2>
          </div>

          <p className="text-lg md:text-xl mb-6 md:mb-10 text-zinc-200 leading-relaxed">
            {resumeData.professionalSummary}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold rounded-lg transition-colors duration-300 w-full sm:w-auto">
              Contact Me
            </a>
            <a
              href="https://docs.google.com/document/d/1zkwWQnALSXrs-MQ3P6GOUYzv_adC5Q0NqWjZBMRvCeE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-zinc-400 hover:border-white text-zinc-100 font-semibold rounded-lg transition-colors duration-300 w-full sm:w-auto">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
