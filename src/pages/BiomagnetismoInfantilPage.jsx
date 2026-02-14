import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Baby, Shield, Heart, Zap, CheckCircle2, Star, Quote, Leaf, Info } from 'lucide-react';

const BiomagnetismoInfantilPage = () => {
  const systems = [
    { title: "Sistema Nervioso", desc: "Irritabilidad, hiperactividad, dificultades de concentración." },
    { title: "Sistema Respiratorio", desc: "Alergias, asma, congestión nasal." },
    { title: "Sistema Digestivo", desc: "Cólicos, estreñimiento, intolerancias." },
    { title: "Sistema Renal", desc: "Infecciones urinarias, enuresis." },
    { title: "Sistema Musculoesquelético", desc: "Dolores de crecimiento, tensión muscular." }
  ];

  const testimonials = [
    {
      text: "Mi hijo tenía 8 años y tosía desde los 2. Ese mismo día, después de la sesión de biomagnetismo, dejó de toser por completo. Fue un alivio enorme.",
      author: "Juan Pablo",
      sub: "Papá de consultante de 8 años"
    },
    {
      text: "Mi hijo vivía con amígdalas inflamadas y fiebre. Nos habían sugerido cirugía. Después de la terapia, no volvió a enfermarse.",
      author: "Sergio",
      sub: "Papá de Augusto (4 años)"
    },
    {
      text: "Mi hija estaba por ser operada de apéndice. Después de la sesión, el dolor desapareció, los estudios salieron normales y no fue necesario operar.",
      author: "Romina",
      sub: "Mamá de consultante de 14 años"
    }
  ];

  const stages = [
    { title: "Desde bebés", color: "bg-blue-50 border-blue-100", text: "El llanto como comunicación. Ansiedad de separación a los 8 meses. Uso de objetos de seguridad." },
    { title: "De 1 a 3 años", color: "bg-amber-50 border-amber-100", text: "Exploración de límites y rabietas. Búsqueda de independencia y el uso frecuente del 'no'." },
    { title: "Etapa preescolar", color: "bg-emerald-50 border-emerald-100", text: "Juego social y de fantasía. Amigos imaginarios para expresar emociones y resolver conflictos." },
    { title: "De 7 a 12 años", color: "bg-purple-50 border-purple-100", text: "Autoestima y vínculos con pares. Necesidad de apoyo familiar y prevención de riesgos." }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Helmet>
        <title>Biomagnetismo en Niños: Recuperación Natural y Rápida | Daniel Angel</title>
        <meta name="description" content="Terapia de biomagnetismo y Flores de Bach para niños. Recuperación rápida, natural y efectiva." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO PRINCIPAL */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-6">
            <Baby size={16} />
            <span>Terapia Pediátrica Natural</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Biomagnetismo en Niños: <span className="italic text-emerald-600 underline decoration-emerald-200">Recuperación Rápida</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-emerald-500 pl-6 mb-8">
            En el mundo del biomagnetismo infantil, los niños ocupan un lugar especial. Su organismo responde con sorprendente rapidez a los estímulos energéticos.
          </p>
        </div>

        {/* SECCIÓN 1: IMAGEN Y POR QUÉ FUNCIONA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/img/biomagnetismo-en-niños.webp" 
                alt="Biomagnetismo Infantil" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full -z-10 opacity-60 blur-2xl" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">¿Por qué funciona tan bien en niños?</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Los niños tienen una mayor plasticidad celular, un sistema inmunológico más activo y menos bloqueos emocionales acumulados.
            </p>
            <div className="grid gap-4">
              {[
                "Recuperación más rápida ante infecciones comunes.",
                "Mejora del sueño y reducción de despertares.",
                "Alivio de problemas digestivos e intolerancias.",
                "Reducción de estrés y ansiedad escolar."
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECCIÓN 2: APOYO POR SISTEMAS (CUADRÍCULA CON COLOR) */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Apoyo Integral por Sistemas</h2>
            <p className="text-slate-500 text-sm">El biomagnetismo es útil para tratar síntomas en todos los sistemas del cuerpo infantil.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((system, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all group text-center">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield size={24} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{system.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN 3: ETAPAS DE DESARROLLO (CEBRA DE COLORES) */}
        <div className="bg-slate-50 py-20 -mx-6 px-6 rounded-[4rem] mb-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Desarrollo Emocional y Comportamiento</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((etapa, i) => (
                <div key={i} className={`${etapa.color} p-8 rounded-[2.5rem] border shadow-sm hover:shadow-md transition-all`}>
                  <h3 className="font-bold text-slate-800 text-lg mb-3">{etapa.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{etapa.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECCIÓN 4: FLORES DE BACH (BLOQUE DESTACADO) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 bg-emerald-900 rounded-[3.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-emerald-400" size={24} />
              <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase">Sinergia Natural</span>
            </div>
            <h2 className="text-4xl font-serif font-bold mb-6 italic">Complemento: Flores de Bach</h2>
            <p className="text-emerald-100/80 mb-8 text-lg leading-relaxed">
              Las esencias naturales actúan sobre el plano emocional, ayudando a equilibrar estados como el miedo, la ansiedad o la irritabilidad. Junto con el biomagnetismo infantil se obtienen resultados increíbles.
            </p>
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700/50 flex gap-4">
              <Info className="text-emerald-400 flex-shrink-0" size={20} />
              <p className="text-sm text-emerald-50 leading-relaxed italic">
                "Las esencias pueden tomarse en gotas, aplicarse en cremas o agregarse al agua del baño. Son un excelente complemento emocional."
              </p>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/5">
              <span className="text-emerald-300 font-bold block mb-2 text-xs uppercase">Bebés</span>
              <p className="text-sm">Llanto excesivo y ansiedad de separación.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/5">
              <span className="text-emerald-300 font-bold block mb-2 text-xs uppercase">1 a 3 años</span>
              <p className="text-sm">Rabietas y frustración constante.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/5">
              <span className="text-emerald-300 font-bold block mb-2 text-xs uppercase">Preescolar</span>
              <p className="text-sm">Celos e inseguridad al dormir solo.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/5">
              <span className="text-emerald-300 font-bold block mb-2 text-xs uppercase">7 a 12 años</span>
              <p className="text-sm">Presión escolar y miedo al rechazo.</p>
            </div>
          </div>
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-48 -mt-48 blur-3xl" />
        </div>

        {/* SECCIÓN 5: TESTIMONIOS (CARROUSEL VISUAL) */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center italic">Padres que confían en nosotros</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative italic hover:-translate-y-2 transition-transform duration-300">
                <Quote className="text-emerald-50 absolute top-6 right-6" size={60} />
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 mb-8 relative z-10 leading-relaxed text-sm">"{t.text}"</p>
                <div className="border-t border-slate-50 pt-6">
                  <p className="font-bold text-slate-800">{t.author}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mt-1">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NOTA DE SEGURIDAD Y CIERRE */}
        <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif mb-6 italic">Seguridad y Profesionalismo</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Las sesiones son más cortas (20 a 25 min), suaves y adaptadas a su edad. Es fundamental que siempre esté presente alguno de los padres durante la sesión.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5493547446076" 
                className="inline-flex items-center justify-center px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold transition-all shadow-xl hover:scale-105"
              >
                Agendar Sesión Infantil
              </a>
              <button className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold transition-all border border-white/10 backdrop-blur-sm">
                Ver más testimonios
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BiomagnetismoInfantilPage;