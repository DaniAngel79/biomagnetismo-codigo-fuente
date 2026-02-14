import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import RelatedNavigation from './components/RelatedNavigation';

import HomePage from './pages/HomePage';
import AlergiasPage from './pages/AlergiasPage';
import BiomagnetismoInfantilPage from './pages/BiomagnetismoInfantilPage';
import BiomagnetismoPage from './pages/BiomagnetismoPage';
import CamposMagneticosPage from './pages/CamposMagneticosPage';
import ConsultasOnlinePage from './pages/ConsultasOnlinePage';
import ContactoPage from './pages/ContactoPage';
import FlorDetailPage from './pages/FlorDetailPage';
import FloresBachListPage from './pages/FloresBachListPage';
import FloresBachPage from './pages/FloresBachPage';
import NotFoundPage from './pages/NotFoundPage';
import OrigenBiomagnetismoPage from './pages/OrigenBiomagnetismoPage';
import ParBiomagneticoPage from './pages/ParBiomagneticoPage';
import ParesTemporalesPage from './pages/ParesTemporalesPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <ScrollToTop />
        <Navbar />
        <RelatedNavigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Seccion Biomagnetismo - Rutas exactas */}
            <Route path="/biomagnetismo" element={<BiomagnetismoPage />} />
            <Route path="/par-biomagnetico" element={<ParBiomagneticoPage />} />
            <Route path="/pares-temporales" element={<ParesTemporalesPage />} />
            <Route path="/alergias" element={<AlergiasPage />} />
            <Route path="/origen-biomagnetismo" element={<OrigenBiomagnetismoPage />} />
            <Route path="/biomagnetismo-infantil" element={<BiomagnetismoInfantilPage />} />
            <Route path="/campos-magneticos" element={<CamposMagneticosPage />} />

            {/* Seccion Flores de Bach */}
            <Route path="/flores-bach" element={<FloresBachPage />} />
            <Route path="/catalogo-flores" element={<FloresBachListPage />} />
            <Route path="/flores-de-bach/:id" element={<FlorDetailPage />} />
            <Route path="/consultas-online" element={<ConsultasOnlinePage />} />

            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;