import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { useTranslation, useLang } from '../i18n';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import profileImage from '../images/cv-profile.jpg';

const Cv: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const experienceList = t('cv.experienceList', { returnObjects: true }) as string[];
  const skillsList = t('cv.skillsList', { returnObjects: true }) as string[];
  const educationList = t('cv.educationList', { returnObjects: true }) as string[];
  const { lang } = useLang();

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom, duration: 0.6 }
    })
  };

  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    if (cvRef.current) {
      const element = cvRef.current;

      html2pdf()
        .from(element)
        .set({
          margin: 0.5,
          filename: 'Gabriel_Paduch_CV.pdf',
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        })
        .save();
    }
  };

  const goToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  const Section: React.FC<{
    title: string;
    delay: number;
    size?: string;
    children: React.ReactNode;
  }> = ({ title, delay, size = 'text-3xl', children }) => (
    <motion.div
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      className="bg-dark-900 p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
    >
      <h2 className={`${size} font-bold text-primary-500 mb-5`}>{title}</h2>
      <div className="text-gray-300 space-y-3 text-base leading-relaxed">{children}</div>
    </motion.div>
  );

  const formatParagraph = (text: string) => {
    const highlights = [
      'automações end-to-end',
      'IA generativa',
      'Docker',
      'Kubernetes',
      'PostgreSQL',
      'Scrum',
      'Kanban',
      '50 clientes simultâneos'
    ];

    let formatted = text;
    highlights.forEach((word) => {
      const regex = new RegExp(`(${word})`, 'gi');
      formatted = formatted.replace(regex, '<strong>$1</strong>');
    });

    return formatted.split('\n').map((line, index) => (
      <p
        key={index}
        className="mb-2"
        dangerouslySetInnerHTML={{ __html: line }}
      />
    ));
  };

  return (
    <>
      <section id="cv" className="min-h-screen gradient-bg text-white pb-10">
        <Header />

        <motion.div
          ref={cvRef}
          className="max-w-6xl mx-auto w-full px-4 md:px-8 pt-24 space-y-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Topo com Foto + Título */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-10">
            {/* Foto com Borda */}
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg mb-6 md:mb-0">
              <img
                src={profileImage}
                alt="Gabriel Paduch"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Título e descrição */}
            <div className="text-center md:text-left space-y-3">
              <h1 className="text-5xl md:text-6xl font-extrabold text-primary-500 leading-tight">
                {t('cv.title')}
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl">{t('cv.description')}</p>
            </div>
          </div>

          {/* Resumo Profissional */}
          <Section title={t('cv.summaryTitle')} delay={0.1} size="text-2xl">
            <div
              className="space-y-4 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('cv.summary') }}
            />
          </Section>

          {/* Experiência */}
          <Section title={t('cv.experienceTitle')} delay={0.2}>
            <div className="space-y-8">
              {experienceList.map((item, index) => {
                const [header, details] = item.split(':');
                const isEnglish = header.includes(' at ');
                const match = header.match(isEnglish
                  ? /^(.*) at (.*) \((.*)\)$/
                  : /^(.*) na (.*) \((.*)\)$/);

                if (!match) return null;

                const role = match[1];
                const company = match[2];
                const period = match[3];

                return (
                  <div key={index} className="border-b border-gray-800 pb-4">
                    <h3 className="text-xl font-semibold text-primary-400">{role}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      <strong>{company}</strong> • {period}
                    </p>
                    <p className="text-gray-300 leading-relaxed">{details.trim()}</p>
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Skills */}
          <Section title={t('cv.skillsTitle')} delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsList.map((item, index) => {
                const [category, details] = item.split(':');
                return (
                  <div key={index} className="border border-gray-700 rounded-xl p-4 bg-dark-800 shadow hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold text-primary-400 mb-2">{category.trim()}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{details.trim()}</p>
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Formação */}
          <Section title={t('cv.educationTitle')} delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationList.map((item, index) => {
                const [title, extra] = item.split(' - ');
                return (
                  <div key={index} className="border border-gray-700 rounded-xl p-4 bg-dark-800 shadow hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold text-primary-400 mb-1">{title.trim()}</h4>
                    {extra && <p className="text-gray-400 text-sm">{extra.trim()}</p>}
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Sobre Mim */}
          <Section title={t('cv.aboutMeTitle')} delay={0.5}>
            <div
              className="space-y-3"
              dangerouslySetInnerHTML={{ __html: t('cv.aboutMe') }}
            />
          </Section>

          {/* Botões Finais */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
          <button
            onClick={() => window.open(lang === 'en' ? '/cv-pdf-en' : '/cv-pdf', '_blank')}
            className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-full text-lg shadow hover:scale-105 transition-all"
          >
            <Download size={20} />
            {t('cv.download')}
          </button>

            <button
              onClick={goToContact}
              className="btn-secondary flex items-center justify-center gap-2 px-6 py-3 rounded-full text-lg shadow hover:scale-105 transition-all"
            >
              <Mail size={20} />
              {t('cv.contactMe')}
            </button>
          </motion.div>

          {/* Redes sociais */}
          <motion.div
            className="flex gap-6 justify-center mt-6 mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
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
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Cv;
