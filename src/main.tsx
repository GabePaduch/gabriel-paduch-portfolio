import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainRouter from './Router';
import { LangProvider } from './i18n';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <MainRouter />
    </LangProvider>
  </StrictMode>
);
