import React from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const address = "Belisario Roldan 53, Alta Gracia, Córdoba, Argentina";
  // Corregido: sintaxis de template string para la URL de mapas
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
  // Configuración de WhatsApp
  const phoneNumber = "5493547446076";
  const whatsappMessage = encodeURIComponent("Hola Daniel, vengo de tu sitio web y me gustaría realizar una consulta.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Info General */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold italic text-emerald-400">Biomagnetismo</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Terapias naturales para el equilibrio físico y emocional. Especialistas en Biomagnetismo y Flores de Bach.
            </p>
          </div>

          {/* Columna 2: Contacto Rápido */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase text-xs tracking-widest">Contacto</h4>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-emerald-400 transition-colors group"
                  title="Chatear por WhatsApp"
                >
                  <Phone size={16} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                  <span>+54 9 3547 446076</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={16} className="text-emerald-500" />
                <a href="mailto:contacto@biomagnetismo.store" className="hover:text-emerald-400 transition-colors">
                  contacto@biomagnetismo.store
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Clock size={16} className="text-emerald-500" />
                <span>Lun - Vie: 09:00 - 19:00</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Ubicación Interactiva */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase text-xs tracking-widest">Encuéntranos</h4>
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all"
            >
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-500 shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                    Belisario Roldan 53
                  </p>
                  <p className="text-xs text-slate-500 italic">Alta Gracia, Córdoba</p>
                </div>
                <ExternalLink size={14} className="ml-auto text-slate-600 group-hover:text-emerald-500" />
              </div>
              
              <div className="mt-4 h-24 w-full bg-slate-800 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50">
                   <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-tighter border border-emerald-400/30 px-2 py-1 rounded">Ver en Google Maps</span>
                </div>
              </div>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Biomagnetismo Daniel Angel. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;