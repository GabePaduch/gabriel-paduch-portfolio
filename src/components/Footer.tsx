import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GP</span>
            </div>
            <span className="text-white font-semibold text-xl">Gabriel Paduch</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Transformando ideias em soluções tecnológicas práticas e escaláveis
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <span>Feito com</span>
            <Heart className="text-primary-500" size={16} fill="currentColor" />
            <Code size={16} />
            <span>e muito</span>
            <Coffee size={16} />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2024 Gabriel Paduch. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <span>•</span>
              <span className="text-primary-400 font-medium">
                Especialista em IA, APIs & Automação
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="inline-flex items-center gap-2 bg-dark-800 px-4 py-2 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                Disponível para novos projetos
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;