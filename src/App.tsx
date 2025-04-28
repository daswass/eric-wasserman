import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Eric Wasserman | Leading with Purpose";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute(
        "href",
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👨‍💻</text></svg>'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
