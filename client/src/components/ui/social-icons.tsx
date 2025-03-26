import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/constants";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialIcons({ className, iconClassName }: SocialIconsProps) {
  return (
    <div className={className || "flex space-x-6"}>
      <a 
        href={SOCIAL_LINKS.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={iconClassName || "text-muted-foreground hover:text-primary transition-colors"}
        aria-label="GitHub"
      >
        <i className="fab fa-github text-xl"></i>
      </a>
      <a 
        href={SOCIAL_LINKS.linkedin}
        target="_blank" 
        rel="noopener noreferrer" 
        className={iconClassName || "text-muted-foreground hover:text-primary transition-colors"}
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin text-xl"></i>
      </a>
      <a 
        href={SOCIAL_LINKS.instagram}
        target="_blank" 
        rel="noopener noreferrer" 
        className={iconClassName || "text-muted-foreground hover:text-primary transition-colors"}
        aria-label="Instagram"
      >
        <i className="fab fa-instagram text-xl"></i>
      </a>
    </div>
  );
}
