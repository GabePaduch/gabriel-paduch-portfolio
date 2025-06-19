import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-dark-950 section-padding px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus <span className="text-primary-500">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções práticas e escaláveis que transformam ideias em resultados reais.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-dark-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-primary-500/50 transition-all duration-300 shadow-lg hover:shadow-primary-500/10 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.imageUrl && (
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
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

                {/* Botão Saiba Mais centralizado */}
                <div className="mt-4 flex justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={18} />
                    Saiba Mais
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
