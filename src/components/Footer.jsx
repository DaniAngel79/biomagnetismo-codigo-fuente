import React from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldAlert } from "lucide-react";

const Footer = () => {
  const address = "Belisario Roldan 53, Alta Gracia, Córdoba, Argentina";
  // FIX CRÍTICO: Corrección del template string y uso de URL estándar de Google Maps
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  
  const phoneNumber = "5493547446076";
  const whatsappMessage = encodeURIComponent("Hola Daniel, vengo de tu sitio web y me gustaría realizar una consulta.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold italic text-emerald-400">Biomagnetismo</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enfoques naturales para el confort físico y la gestión del estrés. Especialistas en equilibrio energético y sistemas florales.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase text-xs tracking-widest">Contacto</h4>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-emerald-400 transition-colors group"
                  aria-label="Contactar por WhatsApp"
                >
                  <Phone size={16} className="text-emerald-500 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>+54 9 3547 446076</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={16} className="text-emerald-500" aria-hidden="true" />
                <a href="mailto:contacto@biomagnetismo.store" className="hover:text-emerald-400 transition-colors">
                  contacto@biomagnetismo.store
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Clock size={16} className="text-emerald-500" aria-hidden="true" />
                <span>Lun - Vie: 09:00 - 19:00</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase text-xs tracking-widest">Encuéntranos</h4>
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all"
              aria-label="Abrir ubicación en Google Maps"
            >
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-500 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                    Belisario Roldan 53
                  </p>
                  <p className="text-xs text-slate-500 italic">Alta Gracia, Córdoba</p>
                </div>
                <ExternalLink size={14} className="ml-auto text-slate-600 group-hover:text-emerald-500" aria-hidden="true" />
              </div>
            </a>
          </div>
        </div>

        {/* PARAGUAS LEGAL GLOBAL (UX Defensiva) */}
        <div className="mb-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 flex items-start gap-3">
          <ShieldAlert size={20} className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>Aviso Legal y de Responsabilidad:</strong> Toda la información, servicios y enfoques compartidos en este sitio web tienen fines exclusivamente educativos y orientados al bienestar general y la gestión del estrés. <strong>Bajo ninguna circunstancia constituyen consejo médico, diagnóstico, tratamiento clínico, ni prometen la curación de enfermedades.</strong> Si usted padece una condición médica o psiquiátrica, consulte a un profesional de la salud matriculado.
          </p>
        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Biomagnetismo Daniel Angel. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;