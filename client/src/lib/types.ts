export interface Project {
  id: number;
  title: string;
  description: string;
  category: "web" | "mobile" | "design";
  tags: string[];
  links: {
    github?: string;
    dribbble?: string;
    live?: string;
  };
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillIcon {
  name: string;
  icon: string;
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  current: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
}
