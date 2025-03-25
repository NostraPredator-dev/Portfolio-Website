import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { Timeline, TimelineItem } from "@/components/ui/skill-bar";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    period: "2020 - Present",
    current: true
  },
  {
    title: "Web Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    current: false
  },
  {
    title: "Junior Developer",
    company: "StartUp Vision",
    period: "2016 - 2018",
    current: false
  }
];

const education = [
  {
    title: "Master's in Computer Science",
    institution: "Tech University",
    period: "2014 - 2016",
    current: false
  },
  {
    title: "Bachelor's in Software Engineering",
    institution: "State University",
    period: "2010 - 2014",
    current: false
  }
];

const interests = [
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
  "AI & Machine Learning",
  "IoT",
  "Blockchain"
];

const services = [
  "Web Application Development",
  "Responsive UI/UX Design",
  "Performance Optimization",
  "API Development & Integration"
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
                I'm a creative developer with over 5 years of experience building exceptional digital experiences that combine innovative design with solid engineering principles.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                My approach centers on creating solutions that are not only visually appealing but also accessible, performant, and user-focused. I believe in continuous learning and staying at the forefront of technology trends.
              </p>
              <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                Download Resume
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experience Card */}
              <motion.div 
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-briefcase text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Experience</h3>
                <div className="space-y-4 mt-4">
                  {experiences.map((exp, index) => (
                    <Timeline key={index} active={exp.current}>
                      <TimelineItem title={exp.title} subtitle={exp.company} meta={exp.period} />
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
                  <i className="fas fa-graduation-cap text-secondary text-xl"></i>
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
              
              {/* Services Card */}
              <motion.div 
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-cog text-secondary text-xl"></i>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Services</h3>
                <ul className="space-y-2 mt-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{service}</span>
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
