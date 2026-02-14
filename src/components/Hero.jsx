import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

// Logo original del sitio
const LOGO_URL = "https://biomagnetismo.store/wp-content/uploads/2025/07/Captura-de-pantalla-2025-07-21-181949_1-copia.webp";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 leaf-pattern opacity-50" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 text-foreground px-4 py-2 rounded-full">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium">Terapias Naturales</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Equilibra tu{" "}
              <span className="text-primary">energía</span>{" "}
              y bienestar
            </h1>

            {/* Subheading */}
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Descubre el poder del biomagnetismo y las flores de Bach para
              alcanzar un equilibrio emocional y físico. Terapias naturales que
              promueven tu recuperación integral.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                data-testid="hero-cta-primary"
              >
                <a
                  href="https://wa.me/5493547446076?text=Hola,%20quisiera%20un%20turno%20para%20la%20terapia%20de%20biomagnetismo.%20Mi%20nombre%20es%20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-primary/30 hover:bg-primary/5 transition-all duration-300"
                data-testid="hero-cta-secondary"
              >
                <a href="#servicios">Conocer Servicios</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">9+</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center hidden sm:block">
                <p className="text-3xl font-heading font-bold text-primary">2</p>
                <p className="text-sm text-muted-foreground">Terapias especializadas</p>
              </div>
            </div>
          </div>

          {/* Image - Par Biomagnético original */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="img/par-canto-canto.webp"
                alt="Diagrama de biomagnetismo médico mostrando el par biomagnético Canto-Canto"
                className="w-full h-[400px] lg:h-[550px] object-cover bg-white"
                data-testid="hero-image"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    Certificación Internacional
                  </p>
                  <p className="text-sm text-muted-foreground">
                    México y España
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
