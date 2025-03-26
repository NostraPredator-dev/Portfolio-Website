import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import ProjectCard from "@/components/ui/project-card";
import { Project } from "@/lib/types";

type ProjectCategory = "all" | "web" | "game" | "mobile" | "design";

const projectCategories = [
  { id: "all" as ProjectCategory, label: "All Projects" },
  { id: "web" as ProjectCategory, label: "Web Apps" },
  { id: "game" as ProjectCategory, label: "Games" },
  { id: "mobile" as ProjectCategory, label: "Mobile Apps" }
];

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A responsive e-commerce platform with product listings, cart functionality, and user authentication.",
    category: "web",
    tags: ["JavaScript", "React", "Node.js"],
    links: {
      github: "https://github.com/NostraPredator-dev/E-Commerce",
      live: "#"
    }
  },
  {
    id: 2,
    title: "Weather App",
    description: "An Android application that shows the weather and temperature for cities around the world.",
    category: "mobile",
    tags: ["JavaScript", "APIs", "Mobile"],
    links: {
      github: "https://github.com/NostraPredator-dev/Weather-App",
      live: "#"
    }
  },
  {
    id: 3,
    title: "To-Do List",
    description: "A task management application that helps users organize and track their daily activities.",
    category: "web",
    tags: ["JavaScript", "HTML", "CSS"],
    links: {
      github: "https://github.com/NostraPredator-dev/To-Do-List",
      live: "#"
    }
  },
  {
    id: 4,
    title: "Quiz Mania App",
    description: "An interactive quiz application with multiple categories, score tracking, and timed challenges.",
    category: "web",
    tags: ["JavaScript", "React", "APIs"],
    links: {
      github: "https://github.com/NostraPredator-dev/QuizMania-App",
      live: "#"
    }
  },
  {
    id: 5,
    title: "Bunny Game",
    description: "A 2D platformer game where players control a bunny character navigating through obstacles and collecting items.",
    category: "game",
    tags: ["JavaScript", "Canvas", "Game Development"],
    links: {
      github: "https://github.com/NostraPredator-dev/Bunny-Game",
      live: "#"
    }
  },
  {
    id: 6,
    title: "IronMan Game",
    description: "An action game featuring Iron Man character with flying mechanics and combat abilities.",
    category: "game",
    tags: ["JavaScript", "Game Physics", "Animation"],
    links: {
      github: "https://github.com/NostraPredator-dev/IronMan-Game",
      live: "#"
    }
  },
  {
    id: 7,
    title: "Hangman Game",
    description: "A classic word-guessing game with multiple difficulty levels and categories.",
    category: "game",
    tags: ["Python", "CLI", "Word Games"],
    links: {
      github: "https://github.com/NostraPredator-dev/Hangman-Game",
      live: "#"
    }
  },
  {
    id: 8,
    title: "Worm Game",
    description: "A simple yet addictive snake-style game where the player controls a worm to collect food and grow longer.",
    category: "game",
    tags: ["JavaScript", "Canvas", "Game Logic"],
    links: {
      github: "https://github.com/NostraPredator-dev/Worm-Game",
      live: "#"
    }
  }
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

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
