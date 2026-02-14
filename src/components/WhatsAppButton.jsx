import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Número de tu esposa para Biomagnetismo/Turnos generales
  const PHONE_NUMBER = "5493547446076";
  const MESSAGE = "Hola, quisiera un turno para la terapia de biomagnetismo. Mi nombre es ";

  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] group flex items-center justify-center"
      data-testid="whatsapp-floating-button"
      aria-label="Contactar por WhatsApp"
    >
      {/* Efecto de Pulso Magnético Triple para máxima visibilidad */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
      <div className="absolute inset-[-8px] bg-[#25D366] rounded-full animate-pulse opacity-10 group-hover:opacity-20 transition-opacity" />
      
      {/* Botón Principal con Gradiente */}
      <div className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] group-hover:shadow-[0_15px_30px_rgba(37,211,102,0.6)] group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
        <MessageCircle className="text-white drop-shadow-md" size={32} fill="currentColor" />
      </div>

      {/* Tooltip Estilizado (Lado Izquierdo) */}
      <div className="absolute right-full mr-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none">
        <div className="relative bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap shadow-2xl flex items-center gap-2 border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          ¡PEDIR TURNO!
          {/* Flechita del Tooltip */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-slate-900" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;