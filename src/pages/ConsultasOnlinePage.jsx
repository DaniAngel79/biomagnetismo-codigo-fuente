import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Video, MessageCircle, Clock, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

const ConsultasOnlinePage = () => {
  // PASOS REFORMULADOS PARA CUMPLIMIENTO LEGAL
  const pasos = [
    {
      icon: MessageCircle,
      title: "1. Contacto inicial",
      description: "Iniciamos el contacto vía WhatsApp para coordinar el horario de tu sesión de orientación."
    },
    {
      icon: Video,
      title: "2. Sesión por videollamada",
      description: "Realizamos una consulta de 45-60 min para identificar los bloqueos emocionales actuales."
    },
    {
      icon: CheckCircle,
      title: "3. Esquema Personalizado",
      description: "Diseño tu guía de flores sugeridas y te envío el esquema para que lo prepares en tu farmacia de confianza."
    },
    {
      icon: Clock,
      title: "4. Acompañamiento",
      description: "Realizamos un seguimiento de tu evolución para ajustar el esquema según tu progreso emocional."
    }
  ];

  const handleWhatsAppClick = () => {
    // TRACKING DE CONVERSIÓN (CRO)
    if (typeof window !== 'undefined') {
      if (window.fbq) window.fbq('track', 'Contact', { content_name: 'Consulta_Online_Bach' });
      if (window.gtag) window.gtag('event', 'generate_lead', { method: 'WhatsApp_Online' });
    }
    window.open("https://wa.me/5493513492610?text=Hola%20Daniel,%20me%20interesa%20una%20sesi%C3%B3n%20online%20de%20Flores%20de%20Bach", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Sesiones Online Flores de Bach | Daniel Angel</title>
        <meta name="description" content="Gestión emocional y bienestar natural mediante sesiones online. Recibe tu esquema personalizado de Flores de Bach." />
        <link rel="canonical" href="https://biomagnetismo.store/consultas-online" />
      </Helmet>

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* HERO SECTION */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Bienestar sin fronteras
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                Sesiones de Orientación <span className="text-emerald-500 text-italic">Online</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Recupera tu equilibrio desde cualquier lugar. A través de videollamada, identificamos los estados emocionales que necesitas armonizar para diseñar un esquema de Flores de Bach adaptado a ti.
              </p>
              <Button onClick={handleWhatsAppClick} size="lg" className="bg-emerald-600 hover:bg-emerald-700 rounded-full px-10 shadow-lg transition-transform hover:scale-105">
                Solicitar Sesión Online <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
            
            <div className="bg-slate-50 rounded-[3rem] p-4 shadow-inner border border-slate-100 overflow-hidden">
              <img 
                src="img/bach-consult.webp" 
                alt="Videollamada de asesoría en flores de bach" 
                className="w-full h-auto rounded-[2.5rem] shadow-2xl"
                width="500"
                height="500"
                loading="eager"
              />
            </div>
          </div>

          {/* PASOS */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center tracking-tight">
              Tu proceso hacia el equilibrio
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pasos.map((paso, index) => (
                <Card key={index} className="border-none bg-slate-50 shadow-sm hover:shadow-md transition-all rounded-3xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                      <paso.icon className="text-emerald-500" size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{paso.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{paso.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* BENEFICIOS Y DISCLAIMER */}
          <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mb-32 -mr-32 blur-3xl"></div>
            
            <h2 className="text-3xl font-bold mb-10 text-center tracking-tight">
              Ventajas del formato digital
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                "Atención desde la comodidad de tu hogar",
                "Sin costos ni tiempos de traslado",
                "Sesiones privadas y confidenciales",
                "Esquema digital listo para farmacia",
                "Acompañamiento vía WhatsApp",
                "Flexibilidad horaria internacional"
              ].map((beneficio, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                  <span className="text-sm font-medium text-emerald-50">{beneficio}</span>
                </div>
              ))}
            </div>

            {/* UX DEFENSIVA - ESCUDO LEGAL */}
            <div className="flex items-start gap-4 p-6 bg-emerald-950/50 rounded-2xl border border-emerald-500/20">
               <ShieldCheck className="text-emerald-500 shrink-0 mt-1" size={24} />
               <p className="text-xs text-emerald-100/60 leading-relaxed uppercase tracking-wider">
                 <strong>Aviso de cumplimiento:</strong> Las sesiones online son de carácter informativo y educativo para el bienestar personal. No constituyen un diagnóstico médico, psiquiátrico ni reemplazan tratamientos profesionales. El consultante es responsable de la preparación del esquema sugerido en establecimientos autorizados.
               </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ConsultasOnlinePage;