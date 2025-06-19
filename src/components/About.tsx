import React from 'react';
import { skills } from '../data/skills';
import { useTranslation } from '../i18n';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="bg-dark-900 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('about.title').split(' ')[0]}{' '}
            <span className="text-primary-500">{t('about.title').split(' ')[1]}</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="space-y-6 lg:col-span-3">
            <h3 className="text-2xl font-semibold text-white mb-6">{t('about.subtitle')}</h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <div className="pt-4">
                <blockquote className="text-primary-400 font-medium text-xl italic">
                  {t('about.quote')}
                </blockquote>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-8">{t('about.skillsTitle')}</h3>
            <div className="max-h-[800px] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.category}
                    className="bg-dark-800 p-6 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="text-primary-500 font-semibold mb-3 text-lg">
                      {t(`skills.${skill.category}`)}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-primary-500/20 hover:text-primary-400 transition-colors"
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
      </div>
    </section>
  );
};

export default About;