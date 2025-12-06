/**
 * ============================================
 * FOOTER COMPONENT
 * ============================================
 * 
 * The footer at the bottom of the page with:
 * - Logo and tagline
 * - Social links
 * - Quick navigation links
 * - Download CV and Contact buttons
 * - Copyright notice
 * 
 * TO EDIT:
 * - Change info in src/data/content.ts (personalInfo, socialLinks, navLinks)
 */

import { Github, Linkedin, Mail, Download, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, socialLinks, navLinks } from '@/data/content';

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 border-t border-border">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Brand Section */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">
                  {personalInfo.initials}
                </span>
              </div>
              <span className="font-display font-semibold text-xl tracking-wider">
                {personalInfo.name.split(' ')[0].toUpperCase()}
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-4">
              {personalInfo.footerTagline}
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-[#0077B5] hover:bg-muted/80 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.name.toLowerCase().replace(' ', '')}@gmail.com`}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="font-semibold mb-4">Ready to Start?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Let's build something amazing together. Download my CV or get in touch!
            </p>
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground w-full justify-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full justify-center"
              >
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Flutter & React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
