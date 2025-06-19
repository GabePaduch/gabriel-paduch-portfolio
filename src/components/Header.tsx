import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GP</span>
            </div>
            <span className="text-white font-semibold text-xl">Gabriel Paduch</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-primary-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary-500 transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-primary-500 transition-colors">Projetos</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-primary-500 transition-colors">Depoimentos</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary-500 transition-colors">Contato</button>
          </div>

          {/* Social Links Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/gabepaduch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://br.linkedin.com/in/gabriel-cavalli-paduch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:gabriel.paduch@hotmail.com"
              className="text-gray-300 hover:text-primary-500 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-900/95 backdrop-blur-sm rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-primary-500 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary-500 transition-colors text-left">Sobre</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-primary-500 transition-colors text-left">Projetos</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-primary-500 transition-colors text-left">Depoimentos</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary-500 transition-colors text-left">Contato</button>

              <div className="flex space-x-4 pt-4 border-t border-gray-700">
                <a
                  href="https://github.com/gabepaduch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://br.linkedin.com/in/gabriel-cavalli-paduch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:gabriel.paduch@hotmail.com"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;