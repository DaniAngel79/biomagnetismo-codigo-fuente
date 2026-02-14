import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // 1. Reset de scroll al cambiar de página
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // 2. Lógica de visibilidad forzada
  useEffect(() => {
    const toggleVisibility = () => {
      // En móviles, el scroll a veces se mide en documentElement
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);
    };

    // Escuchamos en window con captura para que no se escape nada
    window.addEventListener("scroll", toggleVisibility, true);
    return () => window.removeEventListener("scroll", toggleVisibility, true);
  }, []);

  const handleManualScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 3. El componente visual
  const buttonContent = isVisible ? (
    <button
      onClick={handleManualScroll}
      style={{ 
        position: 'fixed', 
        bottom: '120px', 
        right: '25px', 
        zIndex: 999999, 
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        visibility: 'visible'
      }}
      className="p-3 md:p-4 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-700 transition-all active:scale-90 border-2 border-white items-center justify-center"
      aria-label="Subir"
    >
      <ChevronUp size={24} />
    </button>
  ) : null;

  // 4. USO DE PORTAL: Inyectamos el botón directamente en el body
  // Esto salta cualquier restricción de overflow del contenedor de React
  return createPortal(buttonContent, document.body);
};

export default ScrollToTop;