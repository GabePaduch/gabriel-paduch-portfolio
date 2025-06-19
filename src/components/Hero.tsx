import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center section-padding">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t('hero.title1')}{' '}
            <span className="text-primary-500">{t('hero.title2')}</span>{' '}
            {t('hero.title3')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            {t('hero.subtitle')}
          </p>
          
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              {t('hero.paragraph')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center justify-center gap-2"
            >
              {t('hero.projectsButton')}
              <ArrowRight size={20} />
            </button>
            
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Download size={20} />
              {t('hero.downloadCv')}
            </button>
          </div>

          <div className="flex gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors p-2"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors p-2"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:contato@volvix.com.br"
              className="text-gray-400 hover:text-primary-500 transition-colors p-2"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;