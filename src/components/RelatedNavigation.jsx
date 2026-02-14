import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BACH_FLOWERS_DATA } from '../data/bachFlowers'; 

const RelatedNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sequence = [
  "/",
  "/biomagnetismo",
  "/par-biomagnetico",
  "/pares-temporales", // Corregido
  "/alergias",
  "/origen-biomagnetismo",
  "/biomagnetismo-infantil",
  "/campos-magneticos",
  "/flores-bach",
  "/catalogo-flores",
  "/consultas-online",
  "/contacto"
];

  let prevPath = null;
  let nextPath = null;

  // Detección manual de ID de flor para evitar errores de context
  const isFlowerDetail = location.pathname.startsWith('/flores-de-bach/');
  
  if (isFlowerDetail) {
    const flowerId = location.pathname.split('/').pop();
    const currentIndex = BACH_FLOWERS_DATA.findIndex(f => f.id === flowerId);
    
    if (currentIndex !== -1) {
      const prevFlower = BACH_FLOWERS_DATA[(currentIndex - 1 + BACH_FLOWERS_DATA.length) % BACH_FLOWERS_DATA.length];
      const nextFlower = BACH_FLOWERS_DATA[(currentIndex + 1) % BACH_FLOWERS_DATA.length];
      prevPath = `/flores-de-bach/${prevFlower.id}`;
      nextPath = `/flores-de-bach/${nextFlower.id}`;
    }
  } else {
    const currentIndex = sequence.indexOf(location.pathname);
    if (currentIndex !== -1) {
      prevPath = sequence[(currentIndex - 1 + sequence.length) % sequence.length];
      nextPath = sequence[(currentIndex + 1) % sequence.length];
    }
  }

  if (!prevPath || !nextPath) return null;

  return (
    <div className="fixed inset-y-0 left-0 right-0 pointer-events-none z-[90] flex items-center justify-between px-4 md:px-10">
      <button
        onClick={() => { navigate(prevPath); window.scrollTo(0, 0); }}
        className="p-3 rounded-full bg-white/90 shadow-2xl border border-slate-200 text-slate-700 hover:text-emerald-600 hover:bg-white transition-all pointer-events-auto group"
      >
        <ChevronLeft size={36} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={() => { navigate(nextPath); window.scrollTo(0, 0); }}
        className="p-3 rounded-full bg-white/90 shadow-2xl border border-slate-200 text-slate-700 hover:text-emerald-600 hover:bg-white transition-all pointer-events-auto group"
      >
        <ChevronRight size={36} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default RelatedNavigation;