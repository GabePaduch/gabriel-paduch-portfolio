import { Project } from '../types';

export const projectsEn: Project[] = [
  {
    id: '1',
    title: 'Next-API',
    description: 'Multi-integration API built for WhatsApp, ERP, and AI clients. Backend developed with FastAPI, PostgreSQL, Docker, and NGINX.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'NGINX', 'WhatsApp API'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Automatic Transcription System',
    description: 'Receives audio, transcribes it with Whisper, and sends the text to CRMs via Webhook. Real-time processing.',
    technologies: ['Python', 'Whisper', 'FastAPI', 'Webhooks', 'FFmpeg'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'RAG System with PostgreSQL and OpenAI',
    description: 'RAG (Retrieval-Augmented Generation) project using PostgreSQL for embedding storage, OpenAI for text generation, and FastAPI as the backend.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'LangChain'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Image Recognition with AI',
    description: 'AI project for product search based on visual similarity using Milvus and OpenCV.',
    technologies: ['Python', 'OpenCV', 'Milvus', 'PyTorch', 'FastAPI', 'Computer Vision'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Facebook Ads API Integration',
    description: 'Collects campaign and creative data, automatically categorizes ads, and generates custom reports.',
    technologies: ['Python', 'Facebook API', 'Pandas', 'PostgreSQL', 'Celery'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Business Automation with N8N',
    description: 'Automated WhatsApp flows integrated with Dify and PostgreSQL for business process automation.',
    technologies: ['N8N', 'Python', 'WhatsApp API', 'PostgreSQL', 'Dify', 'Webhooks'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
