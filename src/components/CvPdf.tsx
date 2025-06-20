import React, { useEffect } from 'react';
import { useLang, useTranslation } from '../i18n';
import profileImage from '../images/cv-profile.jpg';

const CvPdf: React.FC = () => {
  const { t } = useTranslation();
  const { setLang } = useLang();

  useEffect(() => {
    setLang('pt');
  }, [setLang]);

  const experienceList = t('cv.experienceList', { returnObjects: true }) as string[];
  const skillsList = t('cv.skillsList', { returnObjects: true }) as string[];
  const educationList = t('cv.educationList', { returnObjects: true }) as string[];

  return (
    <div className="p-12 max-w-3xl mx-auto text-black bg-white print:bg-white print:text-black leading-relaxed text-[16px] font-sans print:text-[11pt] print:leading-normal print:p-8">
      
      {/* Cabeçalho */}
      <header className="flex items-center gap-6 mb-8 border-b border-gray-300 pb-4">
        <img
          src={profileImage}
          alt="Gabriel Paduch"
          className="w-28 h-28 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h1 className="text-4xl font-bold mb-1">Gabriel Paduch</h1>
          <p className="text-base">{t('cv.description')}</p>
        </div>
      </header>

      {/* Contato */}
      <section className="mb-8 text-[14px] leading-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Contato</h2>
        <ul className="space-y-1">
          <li><strong>Email:</strong> gabriel.paduch@hotmail.com</li>
          <li><strong>LinkedIn:</strong> https://linkedin.com/in/gabrielcavalli-paduch</li>
          <li><strong>WhatsApp:</strong> +55 47 99611-8970</li>
          <li><strong>Site:</strong> https://paduch.dev</li>
        </ul>
      </section>

      {/* Resumo */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">{t('cv.summaryTitle')}</h2>
        <div className="space-y-3 text-[15px]" dangerouslySetInnerHTML={{ __html: t('cv.summary') }} />
      </section>

      {/* Experiência */}
      <section className="mb-10 print:break-before-page">
        <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">{t('cv.experienceTitle')}</h2>
        {experienceList.map((item, index) => {
          const [header, details] = item.split(':');
          const isEnglish = header.includes(' at ');
          const match = header.match(
            isEnglish
              ? /^(.*) at (.*) \((.*)\)$/
              : /^(.*) na (.*) \((.*)\)$/
          );
          if (!match) return null;

          const role = match[1];
          const company = match[2];
          const period = match[3];

          return (
            <div key={index} className="mb-4">
              <p className="font-bold text-[15px]">{role} – {company} <span className="font-normal text-gray-600">({period})</span></p>
              <p className="text-[14px]">{details.trim()}</p>
            </div>
          );
        })}
      </section>

      {/* Skills */}
      <section className="mb-10 print:break-before-page">
        <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">{t('cv.skillsTitle')}</h2>
        <ul className="list-disc pl-6 space-y-1 text-[14px]">
          {skillsList.map((item, index) => {
            const [category, details] = item.split(':');
            return (
              <li key={index}>
                <strong>{category.trim()}:</strong> {details.trim()}
              </li>
            );
          })}
        </ul>
      </section>

      {/* Formação */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">{t('cv.educationTitle')}</h2>
        <ul className="list-disc pl-6 space-y-1 text-[14px]">
          {educationList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Sobre Mim */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">{t('cv.aboutMeTitle')}</h2>
        <div className="space-y-2 text-[14px]" dangerouslySetInnerHTML={{ __html: t('cv.aboutMe') }} />
      </section>

    </div>
  );
};

export default CvPdf;
