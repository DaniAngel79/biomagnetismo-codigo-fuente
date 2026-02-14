import React from "react";
import { Link } from "react-router-dom";
import { Magnet, Flower2, Heart, Zap, Users, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const mainServices = [
    {
      icon: Magnet,
      title: "Biomagnetismo",
      description: "Investigamos el efecto de campos magnéticos para restaurar el equilibrio del pH y promover la homeostasis natural.",
      benefits: ["Equilibrio del pH", "Sin patógenos", "Alivio"],
      image: "/img/sesión-real.webp",
      link: "/biomagnetismo"
    },
    {
      icon: Flower2,
      title: "Flores de Bach",
      description: "Esencias florales para tratar estados emocionales negativos y restablecer el equilibrio mente-cuerpo.",
      benefits: ["Emociones", "Anti-estrés", "Bienestar"],
      image: "/img/eduard-bach.webp",
      link: "/flores-bach"
    },
  ];

  const features = [
    { icon: Heart, title: "Terapia Complementaria", description: "Acompaña la medicina tradicional." },
    { icon: Zap, title: "Resultados Rápidos", description: "Mejoras desde la primera sesión." },
    { icon: Users, title: "Para Todos", description: "Personas, animales y plantas." },
    { icon: Shield, title: "Sin Medicación", description: "Terapia 100% natural." },
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Terapias para tu bienestar</h2>
        </div>

        {/* Main Services - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {mainServices.map((service) => (
            <Link key={service.title} to={service.link} className="group block h-full">
              <Card className="h-full border-border/50 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                <div className="relative h-48 sm:h-64 overflow-hidden bg-white flex items-center justify-center p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.benefits.map((b) => (
                      <span key={b} className="text-[10px] md:text-xs font-semibold px-2 py-1 bg-accent/30 rounded-full">
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-primary font-bold text-sm">
                    Ver detalles <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Features - Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-4 md:p-6 rounded-2xl border border-border/50 text-center shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                <f.icon size={24} />
              </div>
              <h4 className="text-sm md:text-base font-bold mb-1">{f.title}</h4>
              <p className="text-[10px] md:text-xs text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;