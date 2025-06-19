import React from 'react';
import { skills } from '../data/skills';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-dark-900 section-padding px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-primary-500">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">
          {/* Texto - Quem sou eu */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Quem sou eu
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Sou apaixonado por resolver problemas através da tecnologia. Tenho experiência 
                sólida em desenvolvimento backend com Python, FastAPI e Flask, além de integração 
                com APIs, automações com N8N, infraestrutura com Docker e Kubernetes e projetos 
                de IA aplicada a negócios.
              </p>
              <p>
                Sou direto, prático e tenho uma abordagem "mão na massa". Não fico só no código: 
                entendo a dor do cliente, crio a solução e acompanho até a entrega final.
              </p>
              <div className="pt-4">
                <blockquote className="text-primary-400 font-medium text-xl italic">
                  "Sem enrolação. Aqui a solução é direta."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Skills Técnicas */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Skills Técnicas</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.category}
                  className="bg-dark-800 p-4 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-primary-500 font-semibold mb-2 text-base">
                    {skill.category}
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
