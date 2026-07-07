import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ProblemSolvingSection from './components/ProblemSolvingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import {
  navLinks,
  resumeUrl,
  socialLinks,
  skills,
  skillProgress,
  projects,
  stats,
  experience,
  contactInfo,
} from './portfolioData';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      const currentSection = sections
        .reverse()
        .find((section) => section.offsetTop <= scrollPosition);
      setActiveSection(currentSection?.id || 'home');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const memoResumeUrl = useMemo(() => resumeUrl, []);

  return (
    <div className="portfolio-shell min-h-screen bg-slate-950 text-slate-100">
      <Header navLinks={navLinks} scrollToSection={scrollToSection} activeSection={activeSection} />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <HeroSection resumeUrl={memoResumeUrl} socialLinks={socialLinks} contactInfo={contactInfo} scrollToSection={scrollToSection} />
          <AboutSection />
          <SkillsSection skills={skills} skillProgress={skillProgress} />
          <ProjectsSection projects={projects} />
          <ExperienceSection experience={experience} />
          <ProblemSolvingSection stats={stats} />
          <ContactSection contactInfo={contactInfo} resumeUrl={memoResumeUrl} />
          <Footer contactInfo={contactInfo} resumeUrl={memoResumeUrl} />
        </div>
      </main>
    </div>
  );
};

export default App;
