import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-dark-900 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que dizem sobre <span className="text-primary-500">meu trabalho</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Resultados reais que falam por si só
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-dark-800 p-8 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <Quote className="text-primary-500 mb-4" size={32} />
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-white font-semibold text-lg">
                  {testimonial.client}
                </h4>
                {testimonial.company && (
                  <p className="text-primary-400 font-medium">
                    {testimonial.company}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-dark-800 rounded-lg p-6 border border-gray-700">
            <p className="text-primary-400 font-medium text-lg italic">
              "Tecnologia prática, resultado real."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;