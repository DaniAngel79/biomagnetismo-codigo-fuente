import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
// IMPORTANTE: Aquí llamamos a la página que no veías
import Services from "../components/Services"; 
import { Card, CardContent } from "../components/ui/card";
import { Star } from "lucide-react";

const HomePage = () => {
  const testimonials = [
    {
      text: "Después de lidiar con pánico y ansiedad durante mucho tiempo, el biomagnetismo me ayudó. Además desapareció una migraña de años.",
      author: "Monica",
    },
    {
      text: "Mis dolores ciáticos y cervicales desaparecieron. Fue un cambio total desde la primera sesión.",
      author: "Hector",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Biomagnetismo Daniel Angel - Inicio</title>
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center pt-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-foreground px-4 py-2 rounded-full border border-primary/10">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium">Terapias Naturales Certificadas</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
                Equilibra tu <span className="text-primary">energía</span>
              </h1>
              <Button asChild size="lg" className="rounded-full shadow-lg">
                <a href="https://wa.me/5493547446076" target="_blank" rel="noopener noreferrer">
                  Agendar Consulta <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/par-timo-timo.webp" alt="Biomagnetismo" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. AQUÍ ES DONDE APARECE LA PÁGINA QUE NO VEÍAS */}
      <Services />

      {/* 3. TESTIMONIOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-12">Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-8 italic">
                  <div className="flex justify-center gap-1 mb-4 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  "{t.text}"
                  <p className="mt-4 font-bold not-italic text-primary">— {t.author}</p>
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