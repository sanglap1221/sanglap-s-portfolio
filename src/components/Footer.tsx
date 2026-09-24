import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, contactInfo, socialLinks, navLinks } from '@/data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
              {personalInfo.initials}
            </div>
            <span className="font-bold text-slate-900 text-base tracking-tight">
              {personalInfo.name}
            </span>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
