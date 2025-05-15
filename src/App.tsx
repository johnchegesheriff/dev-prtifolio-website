import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'John Macharia | Software Engineer';
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 min-h-screen font-sans transition-colors duration-300">
        <Header />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;