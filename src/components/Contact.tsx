import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Mensagem enviada com sucesso! Retornarei em breve.');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-dark-950 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos <span className="text-primary-500">Conversar</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos transformar sua ideia em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Entre em Contato
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Estou sempre aberto para discutir novos projetos, ideias criativas 
                ou oportunidades de fazer parte da sua equipe.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <Mail className="text-primary-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a 
                    href="mailto:gabriel.paduch@hotmail.com"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    gabriel.paduch@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <Phone className="text-primary-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">WhatsApp</h4>
                  <a 
                    href="https://wa.me/5547996118970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    +55 47 9 9611-8970
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <MapPin className="text-primary-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Localização</h4>
                  <p className="text-gray-400">Balneário Camboriú, SC - Brasil</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Me siga nas redes</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/gabepaduch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-800 p-3 rounded-lg border border-gray-700 hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-300"
                >
                  <Github className="text-gray-400 hover:text-primary-500 transition-colors" size={24} />
                </a>
                <a
                  href="https://br.linkedin.com/in/gabriel-cavalli-paduch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-800 p-3 rounded-lg border border-gray-700 hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-300"
                >
                  <Linkedin className="text-gray-400 hover:text-primary-500 transition-colors" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-800 p-8 rounded-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Conte-me sobre seu projeto ou dúvida..."
                />
              </div>

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
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
