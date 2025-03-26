import { useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) {
        section.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700', 'ease-in-out');
        sectionObserver.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) sectionObserver.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="antialiased bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <section ref={addToRefs} id="about">
          <AboutSection />
        </section>
        <section ref={addToRefs} id="projects">
          <ProjectsSection />
        </section>
        <section ref={addToRefs} id="skills">
          <SkillsSection />
        </section>
        <section ref={addToRefs} id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
