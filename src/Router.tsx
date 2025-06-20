import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Cv from './components/Cv';
import CvPdf from './components/CvPdf';
import CvPdfEn from './components/CvPdfEn';

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/cv-pdf" element={<CvPdf />} />
        <Route path="/cv-pdf-en" element={<CvPdfEn />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
