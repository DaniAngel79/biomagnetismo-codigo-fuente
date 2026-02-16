import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "../components/ui/card";
import { Magnet, History, Baby, Zap, Waves, Activity } from "lucide-react";

const BiomagnetismoPage = () => {
  const subtemas = [
    { title: "El Par Biomagnético", path: "/par-biomagnetico", icon: Magnet, img: "/img/iman-terapeutico-biomagnetismo.webp" },
    { title: "Origen del Enfoque", path: "/origen-biomagnetismo", icon: History, img: "/img/sesion-dr-goitz.webp" },
    { title: "Biomagnetismo Infantil", path: "/biomagnetismo-infantil", icon: Baby, img: "/img/biomagnetismo-infantil.webp" },
    { title: "Pares Temporales", path: "/pares-temporales", icon: Zap, img: "/img/par-hombro-hombreo-1.webp" },
    { title: "Campos Magnéticos", path: "/campos-magneticos", icon: Waves, img: "/img/Campo-magnetico.webp" },
    { title: "Alergias y Equilibrio", path: "/alergias", icon: Activity, img: "/img/estomago-pancreas-alerg-alimentaria.webp" },
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>Guía de Biomagnetismo | Daniel Angel</title>
        <meta name="description" content="Aprende sobre el uso de campos magnéticos estáticos para promover el equilibrio y confort físico." />
        <link rel="canonical" href="https://biomagnetismo.store/biomagnetismo" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-900 tracking-tight">Guía de Biomagnetismo</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {subtemas.map((tema) => (
            <Link key={tema.path} to={tema.path} aria-label={`Leer más sobre ${tema.title}`} className="focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl">
              <Card className="hover:shadow-xl transition-all group overflow-hidden border-slate-200">
                <div className="h-48 overflow-hidden bg-slate-200">
                  <img 
                    src={tema.img} 
                    alt="" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <tema.icon className="text-emerald-600 shrink-0" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-xl text-slate-800">{tema.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiomagnetismoPage;