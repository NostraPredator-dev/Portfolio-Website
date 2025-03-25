import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import ProjectCard from "@/components/ui/project-card";

const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "design", label: "UI/UX Design" }
];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with admin dashboard, payment integration, and responsive design.",
    category: "web",
    tags: ["React", "Node.js", "MongoDB"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "A mobile application for tracking workouts, nutrition, and health metrics with data visualization.",
    category: "mobile",
    tags: ["React Native", "Firebase", "Redux"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 3,
    title: "Finance Dashboard UI",
    description: "A comprehensive UI/UX design for a financial management dashboard with data visualization.",
    category: "design",
    tags: ["Figma", "Adobe XD", "Prototyping"],
    links: {
      dribbble: "#",
      live: "#"
    }
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    category: "web",
    tags: ["Vue.js", "Express", "Socket.IO"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 5,
    title: "Travel Companion App",
    description: "A mobile application for travelers with itinerary planning, local recommendations, and maps.",
    category: "mobile",
    tags: ["Flutter", "Firebase", "Google Maps API"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 6,
    title: "Smart Home App Design",
    description: "A UI/UX design for a smart home control application with intuitive controls and visualizations.",
    category: "design",
    tags: ["Figma", "Sketch", "Interaction Design"],
    links: {
      dribbble: "#",
      live: "#"
    }
  }
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(project => 
    activeCategory === "all" || project.category === activeCategory
  );

  return (
    <div className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured" highlight="Projects" />
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              className={`rounded-full ${activeCategory === category.id ? "bg-primary" : "hover:bg-primary/10 text-foreground"}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10"
          >
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
