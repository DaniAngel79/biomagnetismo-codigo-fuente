import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes de Infraestructura (Carga estática)
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import { Toaster } from './components/ui/toaster';

// Carga diferida (Lazy Loading) para optimizar el rendimiento (LCP)
const HomePage = lazy(() => import('./pages/HomePage'));
const AlergiasPage = lazy(() => import('./pages/AlergiasPage'));
const BiomagnetismoInfantilPage = lazy(() => import('./pages/BiomagnetismoInfantilPage'));
const BiomagnetismoPage = lazy(() => import('./pages/BiomagnetismoPage'));
const CamposMagneticosPage = lazy(() => import('./pages/CamposMagneticosPage'));
const ConsultasOnlinePage = lazy(() => import('./pages/ConsultasOnlinePage'));
const ContactoPage = lazy(() => import('./pages/ContactoPage'));
const FlorDetailPage = lazy(() => import('./pages/FlorDetailPage'));
const FloresBachListPage = lazy(() => import('./pages/FloresBachListPage'));
const FloresBachPage = lazy(() => import('./pages/FloresBachPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const OrigenBiomagnetismoPage = lazy(() => import('./pages/OrigenBiomagnetismoPage'));
const ParBiomagneticoPage = lazy(() => import('./pages/ParBiomagneticoPage'));
const ParesTemporalesPage = lazy(() => import('./pages/ParesTemporalesPage'));
const PrivacidadPage = lazy(() => import('./pages/PrivacidadPage'));

// Pantalla de carga ultraligera
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* El componente Layout ya envuelve Navbar, Footer y las flechas de navegación */}
      <Layout> 
        <main className="outline-none">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Sección Biomagnetismo */}
              <Route path="/biomagnetismo" element={<BiomagnetismoPage />} />
              <Route path="/par-biomagnetico" element={<ParBiomagneticoPage />} />
              <Route path="/pares-temporales" element={<ParesTemporalesPage />} />
              <Route path="/alergias" element={<AlergiasPage />} />
              <Route path="/origen-biomagnetismo" element={<OrigenBiomagnetismoPage />} />
              <Route path="/biomagnetismo-infantil" element={<BiomagnetismoInfantilPage />} />
              <Route path="/campos-magneticos" element={<CamposMagneticosPage />} />

              {/* Sección Flores de Bach */}
              <Route path="/flores-bach" element={<FloresBachPage />} />
              <Route path="/catalogo-flores" element={<FloresBachListPage />} />
              <Route path="/flores-de-bach/:id" element={<FlorDetailPage />} />
              <Route path="/consultas-online" element={<ConsultasOnlinePage />} />

              {/* Páginas adicionales */}
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="/privacidad" element={<PrivacidadPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
      </Layout>
      
      {/* Elementos flotantes globales */}
      <WhatsAppButton />
      <Toaster />
    </Router>
  );
}

export default App;