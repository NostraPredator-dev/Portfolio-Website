import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SocialIcons from "@/components/ui/social-icons";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <motion.div 
            className="w-full md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-lg">
              <motion.span 
                variants={itemVariants}
                className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full"
              >
                Full-stack Developer
              </motion.span>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight"
              >
                I create <span className="text-primary">digital</span> experiences that <span className="text-primary">matter</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                A passionate developer focused on crafting elegant solutions and creating meaningful user experiences that combine innovation with solid engineering principles.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  size="lg"
                  className="shadow-lg shadow-primary/20 hover:shadow-primary/30"
                  onClick={() => {
                    const projectsSection = document.querySelector("#projects");
                    if (projectsSection) {
                      const headerOffset = 80;
                      projectsSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      const offsetPosition = projectsSection.getBoundingClientRect().top + window.scrollY - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }}
                >
                  View Projects
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
                  onClick={() => {
                    const contactSection = document.querySelector("#contact");
                    if (contactSection) {
                      const headerOffset = 80;
                      contactSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      const offsetPosition = contactSection.getBoundingClientRect().top + window.scrollY - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }}
                >
                  Contact Me
                </Button>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-10"
              >
                <SocialIcons className="flex items-center space-x-6" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-70"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-card shadow-xl overflow-hidden">
              <img 
                src="../../../assets/img.jpg" 
                alt="Your Name" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              </div>
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-card rounded-full p-4 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <div className="bg-secondary text-secondary-foreground w-14 h-14 flex items-center justify-center rounded-full text-xl">
                  <i className="fas fa-code"></i>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
