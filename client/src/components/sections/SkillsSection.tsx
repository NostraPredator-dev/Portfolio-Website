import { motion } from "framer-motion";
import SectionHeading from "../components/ui/section-heading";
import { SkillBar } from "../components/ui/skill-bar";
import { Skill } from "../lib/types";

// Define a type for skills with icons
interface SkillWithIcon {
  name: string;
  icon: string;
}

const frontendSkills: Skill[] = [
  { name: "JavaScript", percentage: 95 },
  { name: "HTML5 / CSS3", percentage: 92 },
  { name: "React.js", percentage: 85 },
  { name: "Responsive Design", percentage: 90 },
  { name: "DOM Manipulation", percentage: 88 }
];

const backendSkills: Skill[] = [
  { name: "Node.js", percentage: 80 },
  { name: "Python", percentage: 75 },
  { name: "RESTful APIs", percentage: 85 },
  { name: "MongoDB", percentage: 75 },
  { name: "Express.js", percentage: 78 }
];

const gameDevSkills: SkillWithIcon[] = [
  { name: "Game Logic", icon: "fas fa-gamepad" },
  { name: "Canvas API", icon: "fas fa-palette" },
  { name: "Animation", icon: "fas fa-film" },
  { name: "Game Physics", icon: "fas fa-atom" },
  { name: "Collision Detection", icon: "fas fa-bullseye" },
  { name: "Sprite Management", icon: "fas fa-images" }
];

const otherSkills: SkillWithIcon[] = [
  { name: "Git / GitHub", icon: "fab fa-git-alt" },
  { name: "Mobile Development", icon: "fas fa-mobile-alt" },
  { name: "JSON / API Integration", icon: "fas fa-plug" },
  { name: "Code Organization", icon: "fas fa-code-branch" },
  { name: "Problem Solving", icon: "fas fa-puzzle-piece" },
  { name: "Web Performance", icon: "fas fa-tachometer-alt" }
];

export default function SkillsSection() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My" highlight="Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <motion.div 
            className="bg-card rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold font-heading mb-6 flex items-center">
              <i className="fas fa-code text-primary mr-3"></i>
              Frontend Development
            </h3>
            
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="primary"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div 
            className="bg-card rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold font-heading mb-6 flex items-center">
              <i className="fas fa-server text-secondary mr-3"></i>
              Backend Development
            </h3>
            
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="secondary"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Game Development Skills */}
          <motion.div 
            className="bg-card rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold font-heading mb-6 flex items-center">
              <i className="fas fa-gamepad text-primary mr-3"></i>
              Game Development
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {gameDevSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-accent/50 rounded-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="w-14 h-14 mb-3 flex items-center justify-center">
                    <i className={`${skill.icon} text-3xl text-primary`}></i>
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Other Skills */}
          <motion.div 
            className="bg-card rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold font-heading mb-6 flex items-center">
              <i className="fas fa-tools text-secondary mr-3"></i>
              Other Skills
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {otherSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-accent/50 rounded-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="w-14 h-14 mb-3 flex items-center justify-center">
                    <i className={`${skill.icon} text-3xl text-secondary`}></i>
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
