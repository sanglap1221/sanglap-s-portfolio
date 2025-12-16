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
  
  // State to track if user has scrolled (for background change)
  const [hasScrolled, setHasScrolled] = useState(false);

  // This effect adds a scroll listener to change the navbar background
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 50 pixels, show background
      setHasScrolled(window.scrollY > 50);
    };
    
    // Add the scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu open/closed
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-2">
            {/* Logo box with initials */}
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button - hidden on mobile */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                      <FileText className="w-4 h-4 mr-2" />
                    My CV
                    <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
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
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-center border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground mt-2"
                  >
                    My CV
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
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
