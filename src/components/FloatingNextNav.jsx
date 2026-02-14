import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
// CAMBIO AQUÍ: Importamos el nombre correcto que aparece en tu error
import { BACH_FLOWERS_DATA } from '../data/bachFlowers'; 

const baseRoutes = [
  { path: "/", label: "Inicio" },
  { path: "/biomagnetismo", label: "Biomagnetismo" },
  { path: "/el-par-biomagnetico-que-es", label: "El Par Biomagnético" },
  { path: "/origen-del-biomagnetismo", label: "Origen" },
  { path: "/biomagnetismo-infantil", label: "Biomagnetismo Infantil" },
  { path: "/los-campos-magneticos-en-nuestro-cuerpo", label: "Campos Magnéticos" },
  { path: "/pares-temporales", label: "Pares Temporales" },
  { path: "/alergias-y-biomagnetismo", label: "Alergias" },
  { path: "/flores-de-bach", label: "Flores de Bach" },
  { path: "/flores-de-bach/lista", label: "Lista de Flores" }
];

// CAMBIO AQUÍ: Usamos BACH_FLOWERS_DATA
const flowerRoutes = BACH_FLOWERS_DATA.map(flor => ({
  path: `/flores-de-bach/${flor.id}`,
  label: flor.name
}));

const endRoutes = [
  { path: "/consultas-online-flores-bach", label: "Consultas Online" },
  { path: "/contacto", label: "Contacto" }
];

const routes = [...baseRoutes, ...flowerRoutes, ...endRoutes];

const FloatingNextNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentIndex = routes.findIndex(route => route.path === pathname);
  
  if (currentIndex === -1) return null;

  const prevRoute = routes[currentIndex - 1];
  const nextRoute = routes[currentIndex + 1];

  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <>
      {prevRoute && (
        <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[9999] group flex items-center">
          <Button
            onClick={() => handleNavigation(prevRoute.path)}
            size="icon"
            className="h-12 w-12 rounded-full shadow-xl bg-white/90 hover:bg-primary text-primary hover:text-white border border-border transition-all duration-300"
          >
            <ChevronLeft size={28} />
          </Button>
          <div className="ml-2 px-3 py-1 bg-primary text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
             {prevRoute.label}
          </div>
        </div>
      )}

      {nextRoute && (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[9999] group flex flex-row-reverse items-center">
          <Button
            onClick={() => handleNavigation(nextRoute.path)}
            size="icon"
            className="h-12 w-12 rounded-full shadow-xl bg-white/90 hover:bg-primary text-primary hover:text-white border border-border transition-all duration-300"
          >
            <ChevronRight size={28} />
          </Button>
          <div className="mr-2 px-3 py-1 bg-primary text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
             {nextRoute.label}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingNextNav;