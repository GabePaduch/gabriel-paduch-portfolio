import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import { projectsEn } from '../data/projects-en';
import { useLang, useTranslation } from '../i18n';

const Projects: React.FC = () => {
  const { lang } = useLang();
  const { t } = useTranslation();
  const list = lang === 'pt' ? projects : projectsEn;
  return (
    <section id="projects" className="bg-dark-950 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('projects.title').split(' ')[0]}{' '}
            <span className="text-primary-500">{t('projects.title').split(' ')[1]}</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('projects.tagline')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((project, index) => (
            <div
              key={project.id}
              className="bg-dark-800 rounded-lg overflow-hidden border border-gray-700 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm">{t('projects.code')}</span>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">{t('projects.demo')}</span>
                    </a>
                  )}
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