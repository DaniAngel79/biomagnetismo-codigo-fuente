import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const PHONE_NUMBER = "5493547446076";
  const MESSAGE = "Hola Daniel, quisiera consultar por un turno de bienestar.";

  return (
    <div className="fixed bottom-6 right-6 z-[99] group flex items-center">
      {/* Tooltip con z-index alto para estar sobre el botón si es necesario */}
      <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none">
        <div className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shadow-2xl flex items-center gap-2 border border-white/10 uppercase tracking-widest">
           ¡Agendar ahora!
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-slate-900" />
        </div>
      </div>

      <a
        href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
        <MessageCircle className="text-white" size={32} fill="currentColor" />
      </a>
    </div>
  );
};

export default WhatsAppButton;