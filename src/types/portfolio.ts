export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  designation: string;
  titles: string[];
  summary: string;
  aboutBio: string[];
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resumeFileName: string;
  resumeUrl: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  badgeColor: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent: boolean;
  summary: string;
  responsibilities: string[];
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  period: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  contributions: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureNotes?: string[];
  featured?: boolean;
  color: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location?: string;
  period: string;
  grade: string;
  highlights?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  metric: string;
  description: string;
  category: string;
  icon: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skillCategories: SkillCategory[];
  languages: string[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
}
