import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight, Phone } from 'lucide-react';
import { useTranslation } from '../i18n';
import { Link } from 'react-router-dom';

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
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="max-w-4xl space-y-8">
          
          {/* Título */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            {t('hero.title1')}{' '}
            <span className="text-primary-500">{t('hero.title2')}</span>{' '}
            {t('hero.title3')}
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-300 animate-slide-up">
            {t('hero.subtitle')}
          </p>

          {/* Parágrafo de introdução */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              {t('hero.paragraph')}
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center justify-center gap-2 px-6 py-3 text-lg shadow hover:scale-105 transition-all"
            >
              {t('hero.projectsButton')}
              <ArrowRight size={20} />
            </button>

            <Link
              to="/cv"
              className="btn-secondary flex items-center justify-center gap-2 px-6 py-3 text-lg shadow hover:scale-105 transition-all"
            >
              <Download size={20} />
              {t('hero.downloadCv')}
            </Link>
          </div>

          {/* Redes sociais */}
          <div className="flex gap-6 mt-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/gabepaduch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors p-2"
            >
              <Github size={28} />
            </a>
            <a
              href="https://br.linkedin.com/in/gabrielcavalli-paduch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors p-2"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:gabriel.paduch@hotmail.com"
              className="text-gray-400 hover:text-primary-500 transition-colors p-2"
            >
              <Mail size={28} />
            </a>
            <a
              href="https://wa.me/5547996118970"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors p-2"
            >
              <Phone size={28} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
