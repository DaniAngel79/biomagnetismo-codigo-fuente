import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
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
        <title>Las 38 Flores de Bach | Catálogo Visual</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-[10px] md:text-xs">Vademécum</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2 italic">Las 38 Flores de Bach</h1>
        </div>

        <div className="relative max-w-md mx-auto mb-10 px-2">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Buscar flor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500">
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
          {filteredFlowers.map((flower) => (
            <Link 
              key={flower.id} 
              to={`/flores-de-bach/${flower.id}`}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full max-w-[160px] md:max-w-none aspect-square rounded-full overflow-hidden border-2 md:border-4 border-white shadow-md group-hover:shadow-xl group-hover:border-emerald-100 transition-all duration-500 bg-slate-100">
                <img 
                  src={`/img/${flower.id}.webp`} 
                  alt={flower.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.src = '/img/placeholder.webp'; }}
                />
              </div>

              <div className="mt-4 md:mt-6 text-center w-full px-1">
                <span className="text-[8px] md:text-[10px] font-bold text-emerald-600 uppercase tracking-tighter bg-emerald-50 px-2 py-0.5 rounded block w-fit mx-auto">
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
      </div>
    </div>
  );
};

export default FloresBachListPage;