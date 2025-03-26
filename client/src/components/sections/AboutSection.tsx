import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { Timeline, TimelineItem } from "@/components/ui/skill-bar";

const projects = [
  {
    title: "Game Development",
    description: "Self-directed learning and projects",
    period: "2022 - Present",
    current: true
  },
  {
    title: "Web Development",
    description: "Building interactive web applications",
    period: "2021 - Present",
    current: true
  }
];

const education = [
  {
    title: "Computer Science",
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    period: "2022 - Present",
    current: true
  },
  {
    title: "Higher Secondary",
    institution: "De-Nobili School (ISC)",
    period: "2019-2021",
    current: false
  }
];

const interests = [
  "Game Development",
  "Web Development",
  "JavaScript",
  "Python",
  "UI/UX Design",
  "Problem Solving"
];

const offerings = [
  "Game Development",
  "Web Application Development",
  "Responsive UI Design",
  "JavaScript Programming"
];

export default function AboutSection() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-2/5">
            <div className="sticky top-32">
              <SectionHeading title="About" highlight="Me" alignment="left" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate self-taught developer and a 3rd-year CSE student at KIIT with expertise in full-stack development. I have a strong interest in game development and web technologies, particularly React. I enjoy creating interactive experiences that are both fun and functional, always looking for new ways to enhance user engagement.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Currently, I'm focusing on JavaScript and Python while expanding my skills through hands-on projects and competitive coding. I love solving complex problems and bringing creative ideas to life through code, constantly pushing myself to learn and improve.
              </p>
              <a href="../../../assets/resume.pdf" download="Hardik Resume.pdf" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                Download Resume
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Projects Card */}
              <motion.div 
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-code-branch text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Projects Focus</h3>
                <div className="space-y-4 mt-4">
                  {projects.map((project, index) => (
                    <Timeline key={index} active={project.current}>
                      <TimelineItem title={project.title} subtitle={project.description} meta={project.period} />
                    </Timeline>
                  ))}
                </div>
              </motion.div>
              
              {/* Education Card */}
              <motion.div 
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-graduation-cap text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Education</h3>
                <div className="space-y-4 mt-4">
                  {education.map((edu, index) => (
                    <Timeline key={index} active={edu.current} colorClass="border-secondary">
                      <TimelineItem title={edu.title} subtitle={edu.institution} meta={edu.period} />
                    </Timeline>
                  ))}
                </div>
              </motion.div>
              
              {/* Interests Card */}
              <motion.div 
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-heart text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {interests.map((interest, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              {/* Offerings Card */}
              <motion.div 
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-cog text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Skills Focus</h3>
                <ul className="space-y-2 mt-4">
                  {offerings.map((offering, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
