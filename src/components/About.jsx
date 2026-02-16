import React from "react";
import { Button } from "./ui/button";
import { Award, MapPin, Clock, GraduationCap, ShieldCheck } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formación Internacional",
      description: "Academias en México y España",
    },
    {
      icon: Award,
      title: "Certificación Oficial",
      description: "Bioenergía Magnética - Lic. Alonso Hernández Cedillo",
    },
    {
      icon: Clock,
      title: "Trayectoria",
      description: "9 años de práctica profesional",
    },
    {
      icon: MapPin,
      title: "Consultorio",
      description: "Alta Gracia, Córdoba, Argentina",
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-white overflow-hidden" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Imagen - Par Cervical Sacro (Optimización SEO/LCP) */}
          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-50">
              <img
                src="https://biomagnetismo.store/wp-content/uploads/2026/02/Par-cervical-sacro.webp"
                alt="Esquema de equilibrio bioenergético: Par Cervical-Sacro"
                className="w-full h-[400px] lg:h-[500px] object-contain"
                loading="lazy"
                width="600"
                height="500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl border-4 border-white">
              <p className="text-4xl font-bold tracking-tighter">9+</p>
              <p className="text-xs uppercase font-black tracking-widest opacity-90">Años de Práctica</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-black tracking-[0.2em] uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Especialista Certificado
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Daniel Rosa
              </h2>
              <p className="text-xl text-emerald-700 font-medium italic">
                Terapeuta en Biomagnetismo y Sistemas Florales
              </p>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
              <p>
                Residente en <strong>Alta Gracia, Córdoba</strong>, he dedicado casi una década al estudio de la energía humana. Mi formación se ha consolidado en academias internacionales de <strong>México y España</strong>, obteniendo la certificación en Bioenergía Magnética de la mano del Lic. Alonso Hernández Cedillo.
              </p>
              <p>
                A lo largo de estos nueve años, he acompañado a numerosos consultantes en su camino hacia el <strong>equilibrio bioenergético</strong>, facilitando procesos de armonización natural que promueven un estado de confort y vitalidad renovada.
              </p>
              <p className="bg-slate-50 p-4 rounded-xl border-l-4 border-emerald-500 italic text-slate-500">
                "Entiendo el bienestar como un flujo armónico de energía; mi compromiso es ayudarte a restaurar ese equilibrio para mejorar tu calidad de vida diaria."
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((credential) => (
                <div key={credential.title} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <credential.icon className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{credential.title}</p>
                    <p className="text-xs text-slate-500 leading-tight">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA SEGURO */}
            <Button asChild size="lg" className="bg-slate-900 hover:bg-emerald-600 text-white rounded-full px-10 py-7 text-lg font-bold shadow-xl transition-all hover:scale-105 group">
              <a href="https://wa.me/5493547446076?text=Hola%20Daniel,%20quisiera%20consultar%20por%20un%20turno.">
                Solicitar Entrevista de Evaluación <ShieldCheck className="ml-2 group-hover:animate-pulse" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;