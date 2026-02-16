export interface Experience {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
}

export interface ResumeData {
  name: string;
  location: string;
  email: string;
  linkedin: string;
  website: string;
  role: string;
  summary: string;
  skills: { category?: string; items: string[] }[];
  experience: Experience[];
  resumeFile: string;
}
