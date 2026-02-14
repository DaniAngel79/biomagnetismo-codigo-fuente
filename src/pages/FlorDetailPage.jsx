import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
// 1. Verificado: Nombre de exportación correcto según error de consola
import { BACH_FLOWERS_DATA } from "../data/bachFlowers";

const FlorDetailPage = () => {
  const { id } = useParams();
  const flor = BACH_FLOWERS_DATA.find((f) => f.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!flor) return null;

  // 2. Lógica de imagen: Carpeta corregida a /img/ y extensión .webp
  const imagePath = flor.image || `/img/${id}.webp`;

  return (
    <>
      <Helmet>
        <title>{flor.name} | Flores de Bach</title>
      </Helmet>

      <section className="pt-32 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/flores-de-bach/lista" className="inline-flex items-center text-primary mb-8 hover:-translate-x-1 transition-transform font-medium">
            <ArrowLeft size={20} className="mr-2" /> Volver a la lista
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full">
                {flor.group}
              </span>
              <h1 className="text-5xl font-black text-slate-900 mt-4 mb-2 tracking-tighter">
                {flor.name}
              </h1>
              <h2 className="text-2xl text-slate-400 italic mb-6 font-light">{flor.spanish}</h2>
              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-primary/10 pl-6">
                {flor.description}
              </p>
            </div>
            
            <div className="relative group">
              <div className="aspect-square bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  key={id} 
                  src={imagePath} 
                  alt={flor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Si falla el .webp en /img/, intentamos buscarlo en la raíz de /img/ con .png
                    if (!e.target.src.includes('.png') && !e.target.src.includes('placehold')) {
                        e.target.src = `/img/${id}.png`;
                    } else {
                        // Fallback final: Placeholder con nombre (lo que ves en tus capturas)
                        e.target.src = `https://placehold.co/600x600/f8fafc/0f172a?text=${encodeURIComponent(flor.name)}`;
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 text-red-500 mb-4 font-bold uppercase text-[10px] tracking-[0.2em]">
                <AlertCircle size={18}/> Estado Negativo
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{flor.negative}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 text-emerald-500 mb-4 font-bold uppercase text-[10px] tracking-[0.2em]">
                <CheckCircle2 size={18}/> Estado Positivo
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{flor.positive}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 text-blue-500 mb-4 font-bold uppercase text-[10px] tracking-[0.2em]">
                <Lightbulb size={18}/> Consideración
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{flor.therapeutic || flor.considerations}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlorDetailPage;