import React from "react";
import { Link } from "react-router-dom";
import { Magnet, Flower2, Heart, Zap, Users, Shield, ArrowRight, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  // COPY PURGADO DE TÉRMINOS CLÍNICOS
  const mainServices = [
    {
      id: "biomagnetismo",
      icon: Magnet,
      title: "Equilibrio Biomagnético",
      description: "Aplicación de campos magnéticos estáticos para promover el confort físico y facilitar la relajación profunda del cuerpo.",
      benefits: ["Confort Físico", "Relajación", "Equilibrio"],
      image: "/img/sesion-dr-goitz.webp", // Sugerencia: Evita tildes en nombres de archivo (sesion vs sesión)
      link: "/biomagnetismo"
    },
    {
      id: "flores-bach",
      icon: Flower2,
      title: "Orientación Floral",
      description: "Asesoría en sistemas florales naturales para fomentar la gestión del estrés y acompañar tu desarrollo personal.",
      benefits: ["Gestión de Estrés", "Claridad", "Bienestar"],
      image: "/img/eduard-bach.webp",
      link: "/flores-bach"
    },
  ];

  const features = [
    { icon: Heart, title: "Enfoque Integral", description: "Orientado al bienestar general." },
    { icon: Zap, title: "Gestión Activa", description: "Herramientas para tu día a día." },
    { icon: Users, title: "Para Todos", description: "Adaptable a cada estilo de vida." },
    { icon: Shield, title: "No Invasivo", description: "Métodos 100% naturales." },
  ];

  // TRACKING DE INTERÉS (CRO)
  const trackServiceInterest = (serviceId) => {
    if (typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('event', 'select_content', {
          content_type: 'servicio',
          content_id: serviceId
        });
      }
    }
  };

  return (
    <section id="servicios" className="py-16 md:py-24 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
            Nuestros Enfoques
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Herramientas para tu bienestar
          </h2>
        </div>

        {/* Main Services - Optimizado para LCP/CLS y Accesibilidad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {mainServices.map((service) => (
            <Link 
              key={service.id} 
              to={service.link} 
              onClick={() => trackServiceInterest(service.id)}
              className="group block h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
              aria-label={`Saber más sobre ${service.title}`}
            >
              <Card className="h-full border-border/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
                <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                  <img
                    src={service.image}
                    alt="" // Alt vacío porque la imagen es decorativa, el título ya describe la tarjeta
                    className="max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary" aria-hidden="true">
                      <service.icon size={20} />
                    </div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4" aria-label="Beneficios principales">
                    {service.benefits.map((b) => (
                      <span key={b} className="text-[10px] md:text-xs font-semibold px-2 py-1 bg-accent/30 text-accent-foreground rounded-full">
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-primary font-bold text-sm">
                    Ver detalles <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-4 md:p-6 rounded-2xl border border-border/50 text-center shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary" aria-hidden="true">
                <f.icon size={24} />
              </div>
              <h4 className="text-sm md:text-base font-bold mb-1">{f.title}</h4>
              <p className="text-[10px] md:text-xs text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>

        {/* UX Defensiva: Escudo Legal del Componente */}
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
          <ShieldAlert size={20} className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>Aclaración Educativa:</strong> Los servicios aquí detallados son de carácter complementario y están enfocados en el bienestar general. No sustituyen el diagnóstico, prescripción ni tratamiento médico profesional.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;