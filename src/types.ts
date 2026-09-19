export interface ContactInfo {
  name: string;
  email: string;
  mobile: string;
  tagline?: string;
  summary?: string;
  github: {
    handle: string;
    url: string;
  };
  linkedin: {
    handle: string;
    url: string;
  };
  leetcode: {
    handle: string;
    url: string;
  };
  links: {
    github: string;
    linkedin: string;
    leetcode: string;
    codeforces?: string;
  };
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degreeOrGrade: string;
  score: string;
  period: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  linkText?: string;
  linkUrl?: string;
  roleOrCategory: string;
  period?: string;
  organization?: string;
  bullets: string[];
  technologies?: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  content: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  description: string;
  issuer?: string;
  issueDate?: string;
}

export interface ExtracurricularItem {
  id: string;
  title: string;
  description: string;
  activity?: string;
  details?: string;
}

export interface ResponsibilityItem {
  id: string;
  title: string;
  description: string;
  role?: string;
  organization?: string;
  period?: string;
}
