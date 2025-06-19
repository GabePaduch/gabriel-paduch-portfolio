import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'pt' | 'en';

interface LangContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextProps>({ lang: 'pt', setLang: () => {} });

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('pt');

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);

const translations = {
  pt: {
    header: {
      home: 'Home',
      about: 'Sobre',
      projects: 'Projetos',
      testimonials: 'Depoimentos',
      contact: 'Contato'
    },
    hero: {
      title1: '🚀 Construindo Soluções em',
      title2: 'IA, APIs, Automação',
      title3: 'e Cloud',
      subtitle:
        'Especialista em desenvolvimento backend, integrações, infraestrutura e soluções sob medida para negócios digitais.',
      paragraph:
        'Sou Gabriel Paduch, especialista em desenvolvimento de APIs, automação de processos, integração de sistemas e infraestrutura cloud. Trabalho com Python, FastAPI, Flask, Docker, PostgreSQL, N8N, Kubernetes e outras stacks modernas. Ajudo empresas a transformar ideias em soluções práticas e escaláveis.',
      projectsButton: 'Ver Meus Projetos',
      downloadCv: 'Download CV'
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Quem sou eu',
      p1:
        'Sou apaixonado por resolver problemas através da tecnologia. Tenho experiência sólida em desenvolvimento backend com Python, FastAPI e Flask, além de integração com APIs, automações com N8N, infraestrutura com Docker e Kubernetes e projetos de IA aplicada a negócios.',
      p2:
        'Sou direto, prático e tenho uma abordagem "mão na massa". Não fico só no código: entendo a dor do cliente, crio a solução e acompanho até a entrega final.',
      quote: '"Sem enrolação. Aqui a solução é direta."',
      skillsTitle: 'Skills Técnicas'
    },
    skills: {
      Linguagens: 'Linguagens',
      Frameworks: 'Frameworks',
      Infraestrutura: 'Infraestrutura',
      Cloud: 'Cloud',
      Automação: 'Automação',
      'IA/ML': 'IA/ML',
      'Banco de Dados': 'Banco de Dados',
      Ferramentas: 'Ferramentas'
    },
    projects: {
      title: 'Meus Projetos',
      tagline: 'Soluções práticas e escaláveis que transformam ideias em resultados reais',
      code: 'Código',
      demo: 'Demo'
    },
    testimonials: {
      title: 'O que dizem sobre meu trabalho',
      tagline: 'Resultados reais que falam por si só',
      quote: '"Tecnologia prática, resultado real."'
    },
    contact: {
      title: 'Vamos Conversar',
      tagline: 'Tem um projeto em mente? Vamos transformar sua ideia em realidade',
      getInTouch: 'Entre em Contato',
      info:
        'Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua equipe.',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      namePlaceholder: 'Seu nome completo',
      emailPlaceholder: 'seu@email.com',
      messagePlaceholder: 'Conte-me sobre seu projeto ou dúvida...',
      send: 'Enviar Mensagem',
      successAlert: 'Mensagem enviada com sucesso! Retornarei em breve.'
    },
    footer: {
      tagline: 'Transformando ideias em soluções tecnológicas práticas e escaláveis',
      madeWith: 'Feito com',
      andLots: 'e muito',
      rights: 'Todos os direitos reservados.',
      specialist: 'Especialista em IA, APIs & Automação',
      available: 'Disponível para novos projetos'
    }
  },
  en: {
    header: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    hero: {
      title1: '🚀 Building Solutions with',
      title2: 'AI, APIs, Automation',
      title3: 'and Cloud',
      subtitle:
        'Specialist in backend development, integrations, infrastructure and custom solutions for digital businesses.',
      paragraph:
        "I'm Gabriel Paduch, an expert in API development, process automation, system integration and cloud infrastructure. I work with Python, FastAPI, Flask, Docker, PostgreSQL, N8N, Kubernetes and other modern stacks. I help companies turn ideas into practical, scalable solutions.",
      projectsButton: 'View My Projects',
      downloadCv: 'Download CV'
    },
    about: {
      title: 'About Me',
      subtitle: 'Who am I',
      p1:
        "I'm passionate about solving problems through technology. I have solid experience in backend development with Python, FastAPI and Flask, plus API integrations, automations with N8N, infrastructure with Docker and Kubernetes and AI projects applied to business.",
      p2:
        "I'm straightforward, hands-on and practical. I don't just code: I understand the client's pain, create the solution and stay with it until final delivery.",
      quote: '"No fuss. Here the solution is straight to the point."',
      skillsTitle: 'Technical Skills'
    },
    skills: {
      Linguagens: 'Languages',
      Frameworks: 'Frameworks',
      Infraestrutura: 'Infrastructure',
      Cloud: 'Cloud',
      Automação: 'Automation',
      'IA/ML': 'AI/ML',
      'Banco de Dados': 'Databases',
      Ferramentas: 'Tools'
    },
    projects: {
      title: 'My Projects',
      tagline: 'Practical, scalable solutions turning ideas into real results',
      code: 'Code',
      demo: 'Demo'
    },
    testimonials: {
      title: 'What people say about my work',
      tagline: 'Real results that speak for themselves',
      quote: '"Practical technology, real results."'
    },
    contact: {
      title: "Let's Talk",
      tagline: "Have a project in mind? Let's turn your idea into reality",
      getInTouch: 'Get in Touch',
      info:
        "I'm always open to discuss new projects, creative ideas or opportunities to join your team.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Tell me about your project or question...',
      send: 'Send Message',
      successAlert: "Message sent successfully! I'll get back to you soon."
    },
    footer: {
      tagline: 'Turning ideas into practical, scalable tech solutions',
      madeWith: 'Made with',
      andLots: 'and lots of',
      rights: 'All rights reserved.',
      specialist: 'Specialist in AI, APIs & Automation',
      available: 'Available for new projects'
    }
  }
} as const;

export const useTranslation = () => {
  const { lang } = useLang();
  const t = (key: string): string => {
    const parts = key.split('.');
    let result: any = translations[lang];
    for (const p of parts) {
      result = result?.[p];
      if (result === undefined) return key;
    }
    return result as string;
  };
  return { t };
};
