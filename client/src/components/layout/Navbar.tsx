import { useState, useEffect } from "react";
import { Link } from "wouter";
import ThemeToggle from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id") || "";
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300 ease-in-out border-b",
      scrolled 
        ? "bg-white/90 dark:bg-background/90 backdrop-blur-sm border-border" 
        : "bg-transparent border-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <a href="#hero" className="text-2xl font-bold font-heading">
            <span className="text-primary">Hardik </span>Chudasama
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium hover:text-primary dark:hover:text-primary transition-colors relative nav-link",
                  activeSection === link.href.substring(1) ? "text-primary" : "text-foreground/80"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href;
                  const targetElement = document.querySelector(targetId);
                  
                  if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300",
                  activeSection === link.href.substring(1) ? "w-full" : ""
                )}></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button 
              className="md:hidden p-2 rounded-md text-foreground/80 hover:bg-accent transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-background border-t border-border transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "max-h-64" : "max-h-0"
      )}>
        <div className="px-4 py-5 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="block font-medium text-foreground/80 hover:text-primary dark:hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                const targetId = link.href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                  const headerOffset = 80;
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - headerOffset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
