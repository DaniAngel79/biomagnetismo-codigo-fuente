
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { ArrowUpRight, BookOpen } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "Historia del Biomagnetismo",
      excerpt: "Conoce el origen del Par Biomagnético y el legado del Dr. Isaac Goiz en el equilibrio del pH bioenergético.",
      image: "img/sesion-dr-goitz.webp",
      category: "Historia",
      path: "/origen-biomagnetismo"
    },
    {
      title: "La Ciencia del Par Biomagnético",
      excerpt: "Explora cómo los campos magnéticos interactúan con las sustancias de nuestro cuerpo para fomentar la homeostasis.",
      image: "img/par-canto-canto.webp",
      category: "Biofísica",
      path: "/par-biomagnetico"
    },
    {
      title: "Bienestar en la Infancia",
      excerpt: "Los niños responden con asombrosa rapidez a los estímulos energéticos. Descubre este enfoque suave y no invasivo.",
      image: "img/biomagnetismo-infantil.webp",
      category: "Especialidades",
      path: "/biomagnetismo-infantil"
    },
    {
      title: "El Sistema de Edward Bach",
      excerpt: "Explora la relación entre las emociones y la vitalidad a través del sistema de esencias florales desarrollado en 1930.",
      image: "img/esencias-naturales-biomagnetismo.webp",
      category: "Sistemas Florales",
      path: "/flores-bach"
    },
    {
      title: "Bioelectricidad del Corazón",
      excerpt: "¿Sabías que el corazón genera el campo magnético más potente del cuerpo? Entiende su impacto en tu equilibrio diario.",
      image: "img/biomagnetismo-corazon-emociones.webp",
      category: "Ciencia",
      path: "/campos-magneticos"
    },
    {
      title: "Apoyo en el Confort Físico",
      excerpt: "Conoce cómo la aplicación de imanes en zonas específicas asiste al cuerpo en la recuperación de su nivel energético neutral.",
      image: "img/par-hombro-hombro-1.webp",
      category: "Bienestar",
      path: "/pares-temporales"
    },
  ];

  return (
    <section id="articulos" className="py-24 lg:py-32 bg-slate-50/50" data-testid="articles-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black tracking-[0.2em] uppercase text-emerald-600 mb-4 block">
            Biblioteca de Bienestar
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Aprende sobre <span className="text-emerald-600">Equilibrio Natural</span>
          </h2>
          <p className="text-lg text-slate-600">
            Artículos seleccionados para profundizar en los fundamentos científicos y biofísicos de nuestras sesiones.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link 
              key={article.title} 
              to={article.path}
              className="group block focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-[2.5rem]"
            >
              <Card className="h-full border-none shadow-xl shadow-slate-200/40 overflow-hidden bg-white transition-all duration-500 hover:-translate-y-2 rounded-[2.5rem]">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                    width="400"
                    height="250"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-emerald-700 text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      {article.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center translate-y-12 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    <ArrowUpRight className="text-white" size={20} />
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                    <BookOpen size={14} />
                    <span>Continuar leyendo</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;