import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { projectsEn } from '../data/projects-en';
import { useLang, useTranslation } from '../i18n';

const Projects: React.FC = () => {
  const { lang } = useLang();
  const { t } = useTranslation();
  const list = lang === 'pt' ? projects : projectsEn;

  return (
    <section id="projects" className="bg-dark-950 section-padding px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Título da Seção */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('projects.title').split(' ')[0]}{' '}
            <span className="text-primary-500">{t('projects.title').split(' ')[1]}</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-5"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('projects.tagline')}
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {list.map((project, index) => (
            <div
              key={project.id}
              className="bg-dark-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-primary-500/50 transition-all duration-300 shadow-lg hover:shadow-primary-500/10 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagem */}
              {project.imageUrl && (
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}

              {/* Conteúdo */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botão Saiba Mais */}
                <div className="mt-3 flex justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-500 hover:underline transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    {t('projects.moreInfo')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
