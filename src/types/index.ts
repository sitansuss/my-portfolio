// src/types/index.ts
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveLink: string;
  codeLink: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  responsibilities: string[];
}