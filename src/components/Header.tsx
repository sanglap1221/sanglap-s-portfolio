import { useState, useEffect } from 'react';
import { Menu, X, Download, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { personalInfo, navLinks } from '@/data/content';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const sectionId = link.href.replace('#', '');
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
            {personalInfo.initials}
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">
            {personalInfo.name.split(' ')[0]}
          </span>
        </a>

        {/* Navigation items */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item, idx) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={idx}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CV Dropdown */}
        <div className="hidden sm:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-medium shadow-xs"
              >
                <FileText className="w-4 h-4 mr-1.5 text-slate-500" />
                My CV
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white border-slate-200 rounded-xl shadow-lg p-1.5 min-w-[140px]"
            >
              <DropdownMenuItem asChild className="cursor-pointer rounded-lg text-xs font-medium py-2">
                <a href="/Sanglap_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="w-3.5 h-3.5 mr-2 text-blue-600" />
                  View CV
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer rounded-lg text-xs font-medium py-2">
                <a href="/Sanglap_CV.pdf" download="Sanglap_CV.pdf">
                  <Download className="w-3.5 h-3.5 mr-2 text-blue-600" />
                  Download CV
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-xl space-y-3">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-1.5 text-sm hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <Button asChild variant="outline" size="sm" className="w-full text-xs rounded-xl">
              <a href="/Sanglap_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Eye className="w-3.5 h-3.5 mr-1 text-blue-600" /> View CV
              </a>
            </Button>
            <Button asChild size="sm" className="w-full bg-blue-600 text-white text-xs rounded-xl">
              <a href="/Sanglap_CV.pdf" download="Sanglap_CV.pdf">
                <Download className="w-3.5 h-3.5 mr-1" /> Download
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
