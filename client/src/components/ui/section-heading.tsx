import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  highlight: string;
  alignment?: "left" | "center";
  description?: string;
}

export default function SectionHeading({ 
  title, 
  highlight, 
  alignment = "center",
  description
}: SectionHeadingProps) {
  return (
    <motion.div 
      className={cn(
        "mb-12",
        alignment === "center" ? "text-center max-w-2xl mx-auto" : ""
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
      <div className={cn(
        "w-20 h-1 bg-primary mb-6",
        alignment === "center" ? "mx-auto" : ""
      )}></div>
      {description && (
        <p className="text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}
