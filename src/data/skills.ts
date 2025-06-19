import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: 'Linguagens',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    category: 'Frameworks',
    items: ['FastAPI', 'Flask', 'React', 'Node.js']
  },
  {
    category: 'Infraestrutura',
    items: ['Docker', 'Kubernetes', 'Nginx', 'Traefik', 'PostgreSQL']
  },
  {
    category: 'Cloud',
    items: ['AWS', 'VPS (Contabo)', 'Deploy Self-hosted', 'Cloud SQL']
  },
  {
    category: 'Automação',
    items: ['N8N', 'Webhooks', 'APIs REST', 'Celery', 'Cron Jobs']
  },
  {
    category: 'IA/ML',
    items: ['OpenAI', 'Whisper', 'RAG', 'Milvus', 'OpenCV', 'PyTorch']
  },
  {
    category: 'Banco de Dados',
    items: ['PostgreSQL', 'SQLite', 'Redis', 'Vector Databases']
  },
  {
    category: 'Ferramentas',
    items: ['Git', 'GitHub', 'FFmpeg', 'Rancher', 'Postman']
  }
];