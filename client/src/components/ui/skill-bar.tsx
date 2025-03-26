import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: "primary" | "secondary";
  delay?: number;
}

export function SkillBar({ name, percentage, color, delay = 0 }: SkillBarProps) {
  const colorClass = {
    primary: "text-primary bg-primary",
    secondary: "text-secondary bg-secondary"
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className={`text-${color}`}>{percentage}%</span>
      </div>
      <div className="w-full bg-accent rounded-full h-2 overflow-hidden">
        <motion.div 
          className={`${colorClass[color]} h-2 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
        ></motion.div>
      </div>
    </div>
  );
}

interface TimelineProps {
  children: React.ReactNode;
  active?: boolean;
  colorClass?: string;
}

export function Timeline({ children, active = false, colorClass = "border-primary" }: TimelineProps) {
  return (
    <div className={cn(
      "border-l-2 pl-4 py-1",
      active ? colorClass : "border-muted-foreground/50"
    )}>
      {children}
    </div>
  );
}

interface TimelineItemProps {
  title: string;
  subtitle: string;
  meta: string;
}

export function TimelineItem({ title, subtitle, meta }: TimelineItemProps) {
  return (
    <>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      <p className="text-xs text-muted-foreground">{meta}</p>
    </>
  );
}
