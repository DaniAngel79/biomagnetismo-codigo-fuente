import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, X, Info } from 'lucide-react';
import { BACH_FLOWERS_DATA } from '../data/bachFlowers'; 

const FloresBachListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFlowers = BACH_FLOWERS_DATA.filter(flower => 
    flower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flower.spanish.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDFCFB] pt-24 md:pt-32 pb-20">
      <Helmet>
        <title>{searchTerm ? `Resultados para "${searchTerm}"` : "Las 38 Flores de Bach"} | Catálogo Daniel Angel</title>
        <meta name="description" content="Explora el vademécum completo de las 38 Flores de Bach. Encuentra la esencia natural para cada estado emocional." />
        <link rel="canonical" href="https://biomagnetismo.store/catalogo-flores" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-[10px] md:text-xs">Guía Educativa</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2 italic">Las 38 Flores de Bach</h1>
        </div>

        {/* Buscador Optimizado */}
        <div className="relative max-w-md mx-auto mb-10 px-2">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} aria-hidden="true" />
            <input 
              type="text"
              placeholder="Buscar por nombre o emoción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
              aria-label="Buscar flor de Bach"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500">
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Grid de Flores con Optimización LCP */}
        {filteredFlowers.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
            {filteredFlowers.map((flower, index) => (
              <Link 
                key={flower.id} 
                to={`/flores-de-bach/${flower.id}`}
                className="group flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-2xl p-2"
              >
                <div className="relative w-full max-w-[160px] md:max-w-none aspect-square rounded-full overflow-hidden border-2 md:border-4 border-white shadow-md group-hover:shadow-xl group-hover:border-emerald-100 transition-all duration-500 bg-slate-100">
                  <img 
                    src={`/img/${flower.id}.webp`} 
                    alt={flower.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    width="200"
                    height="200"
                    loading={index < 8 ? "eager" : "lazy"} // Las primeras 8 cargan rápido para el LCP
                    onError={(e) => { e.target.src = '/img/placeholder.webp'; }}
                  />
                </div>

                <div className="mt-4 md:mt-6 text-center w-full px-1">
                  <span className="text-[8px] md:text-[10px] font-bold text-emerald-600 uppercase tracking-tighter bg-emerald-50 px-2 py-0.5 rounded block w-fit mx-auto border border-emerald-100">
                    {flower.group}
                  </span>
                  <h3 className="text-sm md:text-xl font-serif font-bold text-slate-800 mt-1 md:mt-2 group-hover:text-emerald-700 transition-colors">
                    {flower.name}
                  </h3>
                  <p className="text-[10px] md:text-sm text-slate-400 italic font-light">
                    {flower.spanish}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-500 mb-4 font-medium">No encontramos ninguna flor con ese nombre.</p>
            <button onClick={() => setSearchTerm("")} className="text-emerald-600 font-bold underline decoration-2 underline-offset-4">
              Ver todo el catálogo
            </button>
          </div>
        )}

        {/* UX DEFENSIVA: DISCLAIMER DE CATÁLOGO */}
        <div className="mt-20 p-6 bg-slate-900 text-slate-400 rounded-[2.5rem] flex items-start gap-4 max-w-4xl mx-auto">
          <Info className="text-emerald-500 shrink-0 mt-1" size={24} aria-hidden="true" />
          <p className="text-[10px] md:text-xs leading-relaxed uppercase tracking-wider">
            <strong>Vademécum Educativo:</strong> Este catálogo tiene fines exclusivamente informativos sobre el sistema floral de Bach. Las imágenes y descripciones ilustran estados emocionales y el equilibrio buscado mediante el acompañamiento natural. No constituyen una oferta de venta de fármacos ni sustituyen la opinión de un profesional de la salud matriculado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloresBachListPage;