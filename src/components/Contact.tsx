import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { ContactForm } from '../types';
import { useTranslation } from '../i18n';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const countryCodes = [
    { code: '+55', name: 'Brazil', flag: '🇧🇷' },
    { code: '+1', name: 'USA', flag: '🇺🇸' },
    { code: '+44', name: 'UK', flag: '🇬🇧' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+33', name: 'France', flag: '🇫🇷' }
  ];

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [countryCode, setCountryCode] = useState('+55');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
  const validatePhone = (phone: string) => /^\d{10,15}$/.test(phone.replace(/\D/g, ''));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullPhone = `${countryCode}${formData.phone}`;

    if (!validateEmail(formData.email)) {
      alert('Por favor, insira um e-mail válido.');
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(formData.phone)) {
      alert('Por favor, insira um telefone válido (somente números).');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.datacrazy.io/v1/crm/api/crm/integrations/webhook/business/4e4e6509-91f0-4f3a-a350-d3872d46f45d', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, phone: fullPhone })
      });

      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setCountryCode('+55');
        setShowModal(true);
      } else {
        console.error('Erro ao enviar:', response.statusText);
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro inesperado. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-dark-950 section-padding px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Título */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title').split(' ')[0]}{' '}
            <span className="text-primary-500">{t('contact.title').split(' ')[1]}</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('contact.tagline')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Informações de Contato */}
          <div className="space-y-10">

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">{t('contact.getInTouch')}</h3>
              <p className="text-gray-400 text-lg">{t('contact.info')}</p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <Mail className="text-primary-500" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:gabriel.paduch@hotmail.com" className="text-gray-400 hover:text-primary-500 transition-colors">
                    gabriel.paduch@hotmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <Phone className="text-primary-500" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">WhatsApp</p>
                  <a href="https://wa.me/5547996118970" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                    +55 47 9 9611-8970
                  </a>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-center gap-4">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <MapPin className="text-primary-500" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Localização</p>
                  <p className="text-gray-400">Balneário Camboriú, SC - Brasil</p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="pt-6">
              <h4 className="text-white font-semibold mb-3">{t('contact.follow')}</h4>
              <div className="flex gap-4">
                <a href="https://github.com/gabepaduch" target="_blank" rel="noopener noreferrer" className="bg-dark-800 p-3 rounded-lg border border-gray-700 hover:border-primary-500 hover:bg-primary-500/10 transition-all">
                  <Github className="text-gray-400 hover:text-primary-500 transition-colors" size={24} />
                </a>
                <a href="https://br.linkedin.com/in/gabriel-cavalli-paduch" target="_blank" rel="noopener noreferrer" className="bg-dark-800 p-3 rounded-lg border border-gray-700 hover:border-primary-500 hover:bg-primary-500/10 transition-all">
                  <Linkedin className="text-gray-400 hover:text-primary-500 transition-colors" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-dark-800 p-8 rounded-xl border border-gray-700 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">{t('contact.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 transition"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">{t('contact.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 transition"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">{t('contact.phone')}</label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="flex-1 px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 transition"
                    placeholder={t('contact.phonePlaceholder')}
                  />
                </div>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">{t('contact.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 transition resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              {/* Botão */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={20} />
                    {t('contact.send')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal de Sucesso */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-dark-800 border border-primary-500 rounded-xl p-8 max-w-md w-full text-center shadow-lg">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">{t('contact.successTitle') || 'Mensagem enviada!'}</h3>
            <p className="text-gray-300 mb-6">{t('contact.successText') || 'Obrigado por entrar em contato. Em breve retornaremos.'}</p>
            <button
              onClick={() => setShowModal(false)}
              className="btn-primary px-6 py-2 text-sm font-semibold"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
