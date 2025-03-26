import { Card, CardContent } from "../components/ui/card";
import { Project } from "../lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors = {
    web: "bg-primary text-white",
    mobile: "bg-secondary text-white",
    design: "bg-purple-500 text-white"
  };

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case "web": return "Web";
      case "mobile": return "Mobile";
      case "design": return "Design";
      default: return category;
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden h-48 bg-accent/50">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14.016q2.906 0 5.016 2.039t2.109 5.016v0.938h-14.25v-0.938q0-2.977 2.109-5.016t5.016-2.039zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z"></path>
          </svg>
        </div>
        
        <div className={`absolute top-2 right-2 ${categoryColors[project.category]} text-xs px-2 py-1 rounded-full`}>
          {getCategoryLabel(project.category)}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold font-heading mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-accent text-xs rounded text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a href={project.links.live} className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
            View Project
          </a>
          
          <div className="flex space-x-2">
            {project.links.github && (
              <a href={project.links.github} className="text-muted-foreground hover:text-primary transition-colors">
                <i className="fab fa-github"></i>
              </a>
            )}
            
            {project.links.dribbble && (
              <a href={project.links.dribbble} className="text-muted-foreground hover:text-primary transition-colors">
                <i className="fab fa-dribbble"></i>
              </a>
            )}
            
            {project.links.live && (
              <a href={project.links.live} className="text-muted-foreground hover:text-primary transition-colors">
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
