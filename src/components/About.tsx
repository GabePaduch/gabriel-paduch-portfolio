import React from 'react';
import { skills } from '../data/skills';
import { useTranslation } from '../i18n';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-dark-900 section-padding px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Título da Seção */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('about.title').split(' ')[0]}{' '}
            <span className="text-primary-500">{t('about.title').split(' ')[1]}</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{t('about.introTagline')}</p>
        </div>

        {/* Grid Principal */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-14 items-start">
          
          {/* Sobre Mim */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
              {t('about.subtitle')}
            </h3>

            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <blockquote className="text-primary-400 font-medium text-xl italic border-l-4 border-primary-500 pl-4 mt-4">
                {t('about.quote')}
              </blockquote>
            </div>
          </div>

          {/* Skills Técnicas */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              {t('about.skillsTitle')}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.category}
                  className="bg-dark-800 p-4 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-300 space-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-primary-500 font-semibold text-sm uppercase tracking-wide mb-1">
                    {t(`skills.${skill.category}`)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-primary-500/20 hover:text-primary-400 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
