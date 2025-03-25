import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { SkillBar } from "@/components/ui/skill-bar";

const frontendSkills = [
  { name: "React / React Native", percentage: 95 },
  { name: "JavaScript / TypeScript", percentage: 90 },
  { name: "HTML5 / CSS3", percentage: 95 },
  { name: "Vue.js", percentage: 80 },
  { name: "Redux / Context API", percentage: 85 }
];

const backendSkills = [
  { name: "Node.js / Express", percentage: 90 },
  { name: "MongoDB / Mongoose", percentage: 85 },
  { name: "SQL / PostgreSQL", percentage: 80 },
  { name: "Python / Django", percentage: 75 },
  { name: "RESTful API Design", percentage: 90 }
];

const designSkills = [
  { name: "Figma", icon: "fab fa-figma" },
  { name: "Sketch", icon: "fab fa-sketch" },
  { name: "Adobe XD", icon: "fab fa-adobe" },
  { name: "UI Design", icon: "fas fa-pencil-ruler" },
  { name: "UX Research", icon: "fas fa-user-friends" },
  { name: "Prototyping", icon: "fas fa-photo-video" }
];

const otherSkills = [
  { name: "Git / GitHub", icon: "fab fa-git-alt" },
  { name: "AWS / Azure", icon: "fas fa-cloud" },
  { name: "Docker", icon: "fas fa-docker" },
  { name: "Responsive Design", icon: "fas fa-mobile-alt" },
  { name: "Accessibility", icon: "fas fa-universal-access" },
  { name: "Performance", icon: "fas fa-tachometer-alt" }
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
          
          {/* Design Skills */}
          <motion.div 
            className="bg-card rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold font-heading mb-6 flex items-center">
              <i className="fas fa-palette text-primary mr-3"></i>
              Design Skills
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {designSkills.map((skill, index) => (
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
