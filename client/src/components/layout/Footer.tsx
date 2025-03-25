import { Link } from "wouter";
import SocialIcons from "@/components/ui/social-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.querySelector(sectionId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-card py-10 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#hero" 
              className="text-2xl font-bold font-heading"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="text-primary">John</span>Doe
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Creating digital experiences that matter.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6">
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#about");
              }}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#projects");
              }}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#skills");
              }}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
            >
              Contact
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#" 
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors text-sm"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          
          <SocialIcons className="mt-4 md:mt-0" />
        </div>
      </div>
    </footer>
  );
}
