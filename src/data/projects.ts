import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Next-API',
    description: 'API de multi-integração criada para clientes de WhatsApp, ERP e IA. Backend desenvolvido com FastAPI, PostgreSQL, Docker e NGINX.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'NGINX', 'WhatsApp API'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Sistema de Transcrição Automática',
    description: 'Recebe áudios, transcreve com Whisper e envia o texto para CRMs via Webhook. Processamento em tempo real.',
    technologies: ['Python', 'Whisper', 'FastAPI', 'Webhooks', 'FFmpeg'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Sistema de RAG com PostgreSQL e OpenAI',
    description: 'Projeto de RAG (Retrieval-Augmented Generation) utilizando PostgreSQL para armazenamento de embeddings, OpenAI para geração de texto e FastAPI como backend.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'LangChain'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Reconhecimento de Imagens com IA',
    description: 'Projeto de IA para busca de produtos por similaridade visual usando Milvus e OpenCV.',
    technologies: ['Python', 'OpenCV', 'Milvus', 'PyTorch', 'FastAPI', 'Computer Vision'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Integração com Facebook Ads API',
    description: 'Coleta dados de campanhas e criativos, faz categorização automática de anúncios e gera relatórios personalizados.',
    technologies: ['Python', 'Facebook API', 'Pandas', 'PostgreSQL', 'Celery'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Automação Comercial com N8N',
    description: 'Fluxos automatizados de atendimento no WhatsApp integrados com Dify e PostgreSQL para automação de processos comerciais.',
    technologies: ['N8N', 'Python', 'WhatsApp API', 'PostgreSQL', 'Dify', 'Webhooks'],
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
