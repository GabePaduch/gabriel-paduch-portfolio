export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Testimonial {
  id: string;
  client: string;
  feedback: string;
  company?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}