import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { BACH_FLOWERS_DATA } from '../data/bachFlowers';

const FloatingNextNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Lista de rutas principales
  const mainRoutes = [
    '/', '/biomagnetismo', '/par-biomagnetico', '/pares-temporales',
    '/alergias', '/origen-biomagnetismo', '/biomagnetismo-infantil',
    '/campos-magneticos', '/flores-bach', '/catalogo-flores',
    '/consultas-online', '/contacto'
  ];

  // 2. Extraer ID de la URL manualmente (más fiable que useParams en componentes globales)
  const pathParts = location.pathname.split('/');
  const isFlowerDetail = location.pathname.includes('/flores-de-bach/');
  const currentFlowerId = isFlowerDetail ? pathParts[pathParts.length - 1] : null;

  const handleNavigation = (direction) => {
    if (isFlowerDetail && currentFlowerId) {
      // Buscamos la flor actual en la data
      const currentIndex = BACH_FLOWERS_DATA.findIndex(f => String(f.id) === String(currentFlowerId));
      
      if (currentIndex !== -1) {
        let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

        if (nextIndex >= 0 && nextIndex < BACH_FLOWERS_DATA.length) {
          const nextFlower = BACH_FLOWERS_DATA[nextIndex];
          navigate(`/flores-de-bach/${nextFlower.id}`);
        } else {
          navigate('/catalogo-flores');
        }
      }
    } else {
      // Navegación de temas generales
      const currentIndex = mainRoutes.indexOf(location.pathname);
      if (currentIndex === -1) return;
      const nextIndex = direction === 'next' 
        ? (currentIndex + 1) % mainRoutes.length 
        : (currentIndex - 1 + mainRoutes.length) % mainRoutes.length;
      navigate(mainRoutes[nextIndex]);
    }
    
    // Forzar scroll arriba para evitar el efecto "footer"
    setTimeout(() => window.scrollTo(0, 0), 10);
  };

  return (
    <div className="fixed inset-y-0 left-0 right-0 pointer-events-none z-50 flex items-center justify-between px-2 sm:px-6">
      <Button
        variant="ghost"
        onClick={() => handleNavigation('prev')}
        className="pointer-events-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 shadow-2xl border border-emerald-100 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all"
      >
        <ChevronLeft size={40} />
      </Button>

      <Button
        variant="ghost"
        onClick={() => handleNavigation('next')}
        className="pointer-events-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 shadow-2xl border border-emerald-100 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all"
      >
        <ChevronRight size={40} />
      </Button>
    </div>
  );
};

export default FloatingNextNav;