import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "../components/ui/card";
import { Magnet, History, Baby, Zap, Waves, Activity } from "lucide-react";

const BiomagnetismoPage = () => {
  const subtemas = [
    { title: "El Par Biomagnético", path: "/par-biomagnetico", icon: Magnet, img: "/img/iman-terapeutico-biomagnetismo.webp" },
    { title: "Origen del Biomagnetismo", path: "/origen-biomagnetismo", icon: History, img: "/img/sesion-dr-goitz.webp" },
    { title: "Biomagnetismo Infantil", path: "/biomagnetismo-infantil", icon: Baby, img: "/img/biomagnetismo-infantil.webp" },
    { title: "Pares Temporales", path: "/pares-temporales", icon: Zap, img: "/img/par-hombro-hombreo-1.webp" },
    { title: "Campos Magnéticos", path: "/campos-magneticos", icon: Waves, img: "/img/Campo-magnetico.webp" },
    { title: "Alergias y Biomagnetismo", path: "/alergias", icon: Activity, img: "/img/estomago-pancreas-alerg-alimentaria.webp" },
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Guía de Biomagnetismo</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {subtemas.map((tema) => (
            <Link key={tema.path} to={tema.path}>
              <Card className="hover:shadow-lg transition-all group overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={tema.img} alt={tema.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <tema.icon className="text-emerald-600" size={20} />
                    <h3 className="font-bold text-xl">{tema.title}</h3>
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