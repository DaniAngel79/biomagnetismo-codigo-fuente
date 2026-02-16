import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, ShoppingBag, ShieldCheck } from "lucide-react";

const Products = () => {
  // Productos Reenfocados a Recomendación de Terceros
  const products = [
    {
      id: 1,
      name: "Kit de Imanes Terapéuticos",
      description: "Set de neodimio de alta potencia para el equilibrio del pH y bienestar bionergético.",
      image: "img/Varios-imanes.webp",
      externalLink: "#", 
      category: "Equipamiento",
    },
    {
      id: 2,
      name: "Libros: Biomagnetismo Médico",
      description: "Fundamentos y aplicaciones bionergéticas del par biomagnético para profesionales.",
      image: "img/manual-biomagnetismo.webp",
      externalLink: "#",
      category: "Educación",
    },
    {
      id: 3,
      name: "Set de Esencias de Bach",
      description: "Colección de esencias naturales sugeridas para el acompañamiento emocional.",
      image: "img/esencias-naturales-biomagnetismo.webp",
      externalLink: "#",
      category: "Recursos",
    },
    {
      id: 4,
      name: "Guía de Bienestar Diario",
      description: "Recursos recomendados para la gestión del estrés y el equilibrio en situaciones críticas.",
      image: "img/Tienda-ecomers.webp",
      externalLink: "#",
      category: "Estilo de Vida",
    },
  ];

  const handleProductClick = (productName) => {
    // TRACKING DE CLIC EXTERNO (Afiliación)
    if (typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('event', 'view_item', {
          item_name: productName,
          content_type: 'producto_externo'
        });
      }
      if (window.fbq) window.fbq('track', 'AddToCart', { content_name: productName });
    }
  };

  return (
    <section id="productos" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-4 block">
            Recursos Recomendados
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Herramientas para tu <span className="text-emerald-500 italic">bienestar</span>
          </h2>
          <p className="text-lg text-slate-600">
            Una selección profesional de elementos para profundizar en el biomagnetismo y la armonización personal. 
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group border-none shadow-xl shadow-slate-200/50 overflow-hidden bg-white transition-all hover:-translate-y-2 rounded-[2rem]"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width="300"
                  height="200"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-bold uppercase tracking-tight shadow-sm border border-slate-100">
                    {product.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {product.description}
                </p>
                <Button
                  onClick={() => handleProductClick(product.name)}
                  asChild
                  variant="outline"
                  className="w-full rounded-2xl border-slate-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all font-bold py-6 shadow-sm"
                >
                  <a href={product.externalLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingBag size={16} className="mr-2" />
                    Ver en Tienda
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* UX DEFENSIVA: NOTA DE TRANSPARENCIA */}
        <div className="mt-16 p-6 bg-white border border-slate-100 rounded-3xl max-w-2xl mx-auto flex items-start gap-4 shadow-sm">
          <ShieldCheck className="text-emerald-500 shrink-0 mt-1" size={20} />
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong>Transparencia de Afiliación:</strong> Los enlaces anteriores redirigen a plataformas externas de terceros. Biomagnetismo Daniel Angel no gestiona el stock ni los envíos de estos productos. Recomendamos estos recursos basados en su calidad técnica para el apoyo de las terapias naturales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;