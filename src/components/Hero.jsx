import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white"
      data-testid="hero-section"
    >
      <div className="absolute top-40 -left-20 w-72 h-72 bg-emerald-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-100">
              <Sparkles size={16} />
              <span className="text-sm font-bold uppercase tracking-wider">Bienestar Natural</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Equilibra tu <br />
              <span className="text-emerald-600 italic">energía vital</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Acompañamos tu bienestar a través del <strong>Biomagnetismo</strong> y las 
              <strong> Flores de Bach</strong>, sistemas naturales diseñados para fomentar la 
              armonía emocional y el confort físico de manera no invasiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-10 py-7 text-lg shadow-xl shadow-emerald-200 transition-all hover:scale-105"
              >
                <a
                  href="https://wa.me/5493547446076?text=Hola%20Daniel,%20quisiera%20consultar%20por%20una%20sesión."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Sesión
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-7 text-lg border-slate-200 hover:bg-slate-50 transition-all"
              >
                <a href="#servicios">Explorar Terapias</a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-slate-100">
              <div>
                <p className="text-3xl font-bold text-emerald-600 tracking-tighter">9+</p>
                <p className="text-xs uppercase font-bold text-slate-400">Años de experiencia</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-3xl font-bold text-emerald-600 tracking-tighter">100%</p>
                <p className="text-xs uppercase font-bold text-slate-400">Enfoque Natural</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
              <img
                src="img/par-canto-canto.webp"
                alt="Sesión de bienestar profesional"
                className="w-full h-[450px] lg:h-[600px] object-cover"
                loading="eager" 
                width="600"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-2xl border border-emerald-50 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.89 0 5.26 1 7 2a1 1 0 0 1 1 1v7z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 leading-none mb-1 text-sm">
                  Certificación Oficial
                </p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                  México & España
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;