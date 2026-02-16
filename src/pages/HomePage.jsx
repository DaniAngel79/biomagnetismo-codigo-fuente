import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { ArrowRight, Sparkles, Star, ShieldAlert } from "lucide-react";
import Services from "../components/Services"; 
import { Card, CardContent } from "../components/ui/card";

const HomePage = () => {
  const testimonials = [
    {
      text: "Logré recuperar mi tranquilidad y mi nivel de energía. El enfoque en el equilibrio me ayudó a gestionar el estrés diario como nunca antes.",
      author: "Monica",
    },
    {
      text: "Mi tensión física y agotamiento se redujeron drásticamente. Fue un cambio total en mi confort y bienestar desde la primera sesión.",
      author: "Hector",
    },
  ];

  const handleConversionClick = (e) => {
    e.preventDefault();
    
    // Tracking Multipíxel (Escalabilidad CRO)
    if (typeof window !== 'undefined') {
      // Meta Pixel
      if (window.fbq) window.fbq('trackCustom', 'BotonWhatsApp_Clic');
      // Google Analytics 4 (GTAG)
      if (window.gtag) window.gtag('event', 'generate_lead', { method: 'WhatsApp' });
    }
    
    window.open("https://wa.me/5493547446076", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Helmet>
        <title>Biomagnetismo Daniel Angel | Sesiones de Bienestar y Equilibrio</title>
        <meta name="description" content="Recupera tu claridad mental y gestiona el estrés con sesiones online y presenciales en Alta Gracia de equilibrio energético." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Daniel Angel | Asesoría en Bienestar" />
        <meta property="og:description" content="Gestión del estrés y equilibrio emocional mediante orientación personalizada." />
        <meta property="og:image" content="https://biomagnetismo.store/og-inicio.jpg" />
        <link rel="canonical" href="https://biomagnetismo.store/" />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center pt-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-foreground px-4 py-2 rounded-full border border-primary/10">
                <Sparkles size={16} className="text-primary" aria-hidden="true" />
                <span className="text-sm font-medium">Orientación y Bienestar Integral</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground tracking-tight">
                Recupera tu <span className="text-primary">equilibrio.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sesiones personalizadas para identificar bloqueos y estructurar una rutina de claridad mental.
              </p>
              
              <div className="space-y-3">
                <Button 
                  onClick={handleConversionClick} 
                  size="lg" 
                  className="rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  aria-label="Agendar evaluación por WhatsApp"
                >
                  Agendar Evaluación <ArrowRight className="ml-2" size={18} aria-hidden="true" />
                </Button>
                
                {/* UX Defensiva: Aviso legal contextual */}
                <div className="flex items-start gap-2 text-xs text-muted-foreground max-w-md">
                  <ShieldAlert size={14} className="shrink-0 mt-0.5 text-amber-600" aria-hidden="true" />
                  <p>
                    Las sesiones están destinadas exclusivamente a la gestión del estrés y el confort general. No diagnostican ni sustituyen tratamientos clínicos.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted">
              <img 
                src="/img/par-timo-timo.webp" 
                alt="Aplicación de imanes terapéuticos para el equilibrio energético" 
                className="w-full h-auto object-cover"
                fetchPriority="high"
                loading="eager"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICIOS */}
      <Services />

      {/* 3. TESTIMONIOS */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Experiencias</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 italic text-muted-foreground">
                  <div className="flex justify-center gap-1 mb-4 text-amber-400" aria-label="5 de 5 estrellas">
                    {/* Atributo aria-hidden para evitar redundancia en lectores de pantalla */}
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  "{t.text}"
                  <p className="mt-4 font-bold not-italic text-foreground">— {t.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;