import { useState, useEffect } from 'react';
import { Menu, X, Download, Eye, ChevronDown, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { personalInfo, navLinks } from '@/data/content';

const Header = () => {
  // State to track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State to track the active section for scroll spy
  const [activeSection, setActiveSection] = useState('home');
  
  // State to track if user has scrolled (for background change)
  const [hasScrolled, setHasScrolled] = useState(false);

  // This effect adds a scroll listener and intersection observer
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    // Scroll Spy Logic using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', 
      threshold: 0
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
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Toggle mobile menu open/closed
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-2 group">
            {/* Logo box with initials */}
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
              <span className="font-display font-bold text-primary-foreground text-lg">
                {personalInfo.initials}
              </span>
            </div>
            {/* Full name (hidden on small screens) */}
            <span className="font-display font-semibold text-xl tracking-wider hidden sm:block">
              {personalInfo.name.split(' ')[0].toUpperCase()}
            </span>
          </a>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Loop through each navigation link */}
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 py-2 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-primary/80'
                  }`}
                >
                  {link.name}
                  {/* Animated underline for active link */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in slide-in-from-left-2 duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button - hidden on mobile */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                      <FileText className="w-4 h-4 mr-2" />
                    My CV
                    <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-md border-border">
                <DropdownMenuItem asChild>
                  <a href="/Sanglap_CV.pdf" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <Eye className="w-4 h-4 mr-2" />
                    View CV
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/Sanglap_CV.pdf" download="Sanglap_CV.pdf" className="cursor-pointer">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button - only visible on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {/* Show X when open, hamburger when closed */}
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - only shows when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary/10 text-primary font-semibold' 
                        : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="h-px bg-border my-2" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-center border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    My CV
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] bg-card border-border">
                  <DropdownMenuItem asChild>
                    <a href="/Sanglap_CV.pdf" target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      View CV
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/Sanglap_CV.pdf" download="Sanglap_CV.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
