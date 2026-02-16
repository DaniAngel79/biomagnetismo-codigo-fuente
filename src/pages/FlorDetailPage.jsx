import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { BACH_FLOWERS_DATA } from "../data/bachFlowers";

const FlorDetailPage = () => {
  const { id } = useParams();
  const flor = BACH_FLOWERS_DATA.find((f) => f.id === id);

  useEffect(() => {
    // Forzamos scroll al inicio cada vez que cambie el ID (por flechas o lista)
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!flor) return (
    <div className="pt-32 text-center">
      <p>Flor no encontrada</p>
      <Link to="/catalogo-flores" className="text-primary underline">Volver al catálogo</Link>
    </div>
  );

  const imagePath = flor.image || `/img/${id}.webp`;

  return (
    <>
      <Helmet>
        <title>{flor.name} | Flores de Bach</title>
      </Helmet>

      <section className="pt-32 pb-16 min-h-screen bg-slate-50/30">
        <div className="max-w-4xl mx-auto px-4">
          {/* CORRECCIÓN: Ruta exacta para evitar saltos al footer */}
          <Link 
            to="/catalogo-flores" 
            className="inline-flex items-center text-emerald-600 mb-8 hover:-translate-x-1 transition-transform font-bold group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:scale-110" /> 
            Volver al catálogo de flores
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                {flor.group}
              </span>
              <h1 className="text-5xl font-black text-slate-900 mt-4 mb-2 tracking-tighter">
                {flor.name}
              </h1>
              <h2 className="text-2xl text-slate-400 italic mb-6 font-light">{flor.spanish}</h2>
              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-emerald-500/20 pl-6">
                {flor.description}
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  key={id} 
                  src={imagePath} 
                  alt={flor.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (!e.target.src.includes('.png') && !e.target.src.includes('placehold')) {
                        e.target.src = `/img/${id}.png`;
                    } else {
                        e.target.src = `https://placehold.co/600x600/f8fafc/10b981?text=${encodeURIComponent(flor.name)}`;
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