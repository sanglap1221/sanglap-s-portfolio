import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/content';

// Import all section components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Theme state with local storage persistence and system preference detection
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Sync theme with html document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  // SEO Tab title & description
  useEffect(() => {
    document.title = `${personalInfo.name} | ${personalInfo.title}`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        `${personalInfo.name} - ${personalInfo.heroIntro}`
      );
    }
  }, []);

  return (
    <div className={`${isDark ? 'dark' : ''} font-sans antialiased transition-colors duration-300`}>
      {/* 
        COLOR PALETTE:
        - Light Mode: Rich Ice-Slate canvas (#f1f5fa) that makes white cards stand out with crisp contrast.
        - Dark Mode: Deep Midnight Navy (#080d19) with cobalt ambient undertones.
      */}
      <div className="min-h-screen relative bg-[#f1f5fa] dark:bg-[#080d19] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden">
        {/* Subtle Blue Blueprint Architectural Dot Matrix */}
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-45 dark:opacity-20"
          style={{
            backgroundImage: isDark
              ? 'radial-gradient(rgba(96, 165, 250, 0.3) 1.2px, transparent 1.2px)'
              : 'radial-gradient(rgba(37, 99, 235, 0.22) 1.3px, transparent 1.3px)',
            backgroundSize: '26px 26px',
            maskImage: 'radial-gradient(ellipse 85% 65% at 50% 15%, black 45%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 15%, black 45%, transparent 95%)',
          }}
        />

        {/* Ambient Sapphire, Cobalt & Sky Glow Orbs */}
        <div className="pointer-events-none fixed -top-28 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[550px] bg-gradient-to-b from-blue-400/25 via-sky-300/15 to-transparent dark:from-blue-600/20 dark:via-indigo-600/10 dark:to-transparent rounded-full blur-[130px] z-0" />
        <div className="pointer-events-none fixed top-[36%] -right-40 w-[480px] h-[480px] bg-gradient-to-bl from-blue-400/20 to-sky-300/10 dark:from-blue-600/15 dark:to-transparent rounded-full blur-[140px] z-0" />
        <div className="pointer-events-none fixed top-[64%] -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-sky-400/20 to-blue-500/10 dark:from-cyan-600/15 dark:to-transparent rounded-full blur-[140px] z-0" />
        <div className="pointer-events-none fixed -bottom-24 left-1/3 w-[600px] h-[380px] bg-indigo-300/15 dark:bg-blue-900/15 rounded-full blur-[140px] z-0" />

        {/* Content Layers with Elevated Glass Hierarchy */}
        <div className="relative z-10">
          <Header isDark={isDark} setIsDark={setIsDark} />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
