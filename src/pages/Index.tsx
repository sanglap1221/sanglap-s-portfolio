/**
 * ============================================
 * INDEX PAGE (MAIN PAGE)
 * ============================================
 * 
 * This is the main page that combines all sections.
 * Each section is imported as a separate component.
 * 
 * The page structure:
 * 1. Header (navbar)
 * 2. Hero (landing section)
 * 3. About (bio and education)
 * 4. Experience (roles, proof of work)
 * 5. Skills (technical skills)
 * 6. Services (what you offer)
 * 7. Projects (portfolio)
 * 8. Contact (form and info)
 * 9. Footer
 */

import { useEffect } from 'react';
import { personalInfo } from '@/data/content';

// Import all section components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // This effect runs once when the page loads
  // It updates the browser tab title and meta description for SEO
  useEffect(() => {
    // Set the page title (shown in browser tab)
    document.title = `${personalInfo.name} | ${personalInfo.title}`;
    
    // Update the meta description for search engines
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        `${personalInfo.name} - ${personalInfo.heroIntro}`
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Each section is rendered in order */}
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
