import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundGlow } from './components/ui/BackgroundGlow';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Achievements } from './components/sections/Achievements';
import { ResumeViewer } from './components/sections/ResumeViewer';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { Terminal } from './components/ui/Terminal';
import { NotFound } from './components/common/NotFound';

export const AppContent: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Show custom 404 page if path is unknown and not root
  if (currentPath !== '/' && currentPath !== '/index.html' && currentPath !== '') {
    return (
      <NotFound
        onHome={() => {
          window.history.pushState({}, '', '/');
          setCurrentPath('/');
        }}
      />
    );
  }

  const handleTerminalNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] dark:bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300">
      {/* Background ambient lighting and grid */}
      <BackgroundGlow />

      {/* Top scroll progress indicator */}
      <ScrollProgress />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        
        {/* Interactive Dev Terminal */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Terminal onNavigate={handleTerminalNavigate} />
        </section>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <ResumeViewer />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
