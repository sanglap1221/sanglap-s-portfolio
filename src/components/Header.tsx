import { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, Eye, FileText, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { personalInfo, navLinks } from '@/data/content';

interface HeaderProps {
  isDark?: boolean;
  setIsDark?: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const Header = ({ isDark = false, setIsDark }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // If mobile menu is open, keep navbar visible
      if (mobileMenuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // If at or near the top of the page, always keep visible
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 8) {
        // Scrolling DOWN -> hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current && lastScrollY.current - currentScrollY > 8) {
        // Scrolling UP (slide backward) -> reveal navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

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
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [mobileMenuOpen]);

  const handleToggleTheme = () => {
    if (setIsDark) {
      setIsDark((prev) => !prev);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'bg-[#f8fafc]/90 dark:bg-[#090d16]/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Name - Clean text without SG badge */}
        <a href="#home" className="flex items-center group">
          <span className="font-bold text-slate-900 dark:text-white text-xl tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {personalInfo.name}
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
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & CV */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Light / Dark Mode Toggle Button */}
          {setIsDark && (
            <button
              onClick={handleToggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-xs cursor-pointer"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 transition-transform -rotate-12 hover:rotate-0" />
              )}
            </button>
          )}

          {/* CV Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded-xl border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium shadow-xs"
              >
                <FileText className="w-4 h-4 mr-1.5 text-slate-500 dark:text-slate-400" />
                My CV
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl shadow-xl p-1.5 min-w-[140px]"
            >
              <DropdownMenuItem asChild className="cursor-pointer rounded-lg text-xs font-medium py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
                <a href="/Sanglap_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="w-3.5 h-3.5 mr-2 text-blue-600 dark:text-blue-400" />
                  View CV
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer rounded-lg text-xs font-medium py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
                <a href="/Sanglap_CV.pdf" download="Sanglap_CV.pdf">
                  <Download className="w-3.5 h-3.5 mr-2 text-blue-600 dark:text-blue-400" />
                  Download CV
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile menu toggle & theme toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          {setIsDark && (
            <button
              onClick={handleToggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-4 shadow-xl space-y-3">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 dark:text-slate-200 font-medium py-1.5 text-sm hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex gap-2">
            <Button asChild variant="outline" size="sm" className="w-full text-xs rounded-xl border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200">
              <a href="/Sanglap_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Eye className="w-3.5 h-3.5 mr-1 text-blue-600 dark:text-blue-400" /> View CV
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
