import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { testimonialsEn } from '../data/testimonials-en';
import { useLang, useTranslation } from '../i18n';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const { lang } = useLang();
  const { t } = useTranslation();
  const list = lang === 'pt' ? testimonials : testimonialsEn;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="testimonials" className="bg-dark-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonials.title').split(' ')[0]}{' '}
            <span className="text-primary-500">{t('testimonials.title').split(' ')[1]}</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('testimonials.tagline')}
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {list.map((testimonial, index) => (
            <motion.div
              variants={item}
              key={testimonial.id}
              className="flex flex-col justify-between bg-dark-800 p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 shadow hover:shadow-primary-500/10"
            >
              <div>
                <Quote className="text-primary-500 mb-4" size={28} />
                <p className="text-gray-300 text-[15px] leading-relaxed italic">"{testimonial.feedback}"</p>
              </div>
              <div className="border-t border-gray-700 pt-4 mt-4">
                <p className="text-white font-semibold">{testimonial.client}</p>
                {testimonial.company && (
                  <p className="text-primary-400 text-sm">{testimonial.company}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Frase Final */}
        <div className="text-center mt-14">
          <div className="inline-block bg-dark-800 rounded-xl px-8 py-6 border border-gray-700 shadow-sm">
            <p className="text-primary-400 font-semibold text-lg italic">
              {t('testimonials.quote')}
            </p>
          </div>

          {/* Call-to-Action Extra */}
          <p className="text-gray-500 text-sm mt-4 italic">
            {lang === 'pt'
              ? 'Quer ser o próximo cliente satisfeito? Fale comigo!'
              : 'Want to be the next happy client? Let’s talk!'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
