import React from "react";
import { Card, CardContent } from "./ui/card";
import { ArrowUpRight, BookOpen } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "Origen del Biomagnetismo",
      excerpt:
        "El Dr. Isaac Goiz Durán es un médico pionero que desarrolló la técnica del Par Biomagnético para restaurar el equilibrio del pH.",
      image: "https://biomagnetismo.store/wp-content/uploads/2025/07/Captura-de-pantalla-2025-07-21-181949_1-copia.webp",
      category: "Historia",
    },
    {
      title: "El Par Biomagnético",
      excerpt:
        "Descubre qué es el par biomagnético y cómo los campos magnéticos interactúan con las sustancias paramagnéticas de nuestro cuerpo.",
      image: "https://biomagnetismo.store/wp-content/uploads/2026/02/par-canto-canto.webp",
      category: "Conceptos",
    },
    {
      title: "Biomagnetismo Infantil",
      excerpt:
        "Los niños responden con rapidez a los estímulos energéticos gracias a su mayor plasticidad celular y sistema inmunológico en desarrollo.",
      image: "https://biomagnetismo.store/wp-content/uploads/2025/11/Firefly_Gemini-Flash_pero-que-sean-en-forma-de-imanes-562242-768x560.webp",
      category: "Especialidades",
    },
    {
      title: "Flores de Bach",
      excerpt:
        "Edward Bach desarrolló este sistema terapéutico en la década de 1930, estudiando la relación entre emociones y salud.",
      image: "https://biomagnetismo.store/wp-content/uploads/2025/07/Genciana_1.png",
      category: "Terapias",
    },
    {
      title: "Campo Magnético del Corazón",
      excerpt:
        "¿Sabías que el campo magnético del corazón puede medirse a metros de distancia? Descubre la relación entre emociones positivas y salud.",
      image: "https://biomagnetismo.store/wp-content/uploads/2026/02/biomagnetismo-corazon-emociones.webp",
      category: "Ciencia",
    },
    {
      title: "Pares Temporales",
      excerpt:
        "Los osteoblastos reaccionan favorablemente al magnetismo. Conoce cómo otras células responden al Nivel Energético Natural.",
      image: "https://biomagnetismo.store/wp-content/uploads/2025/07/Captura-de-pantalla-2025-07-18-151848.png",
      category: "Tratamientos",
    },
  ];

  return (
    <section
      id="articulos"
      className="py-24 lg:py-32 bg-muted/30"
      data-testid="articles-section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
            Artículos Informativos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Aprende sobre <span className="text-primary">biomagnetismo</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            Explora nuestros artículos y descubre los fundamentos científicos
            detrás de estas terapias naturales.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={article.title}
              className={`group card-hover border-border/50 overflow-hidden cursor-pointer animate-fade-in-up animation-delay-${((index % 3) + 1) * 100}`}
              data-testid={`article-card-${index}`}
            >
              <div className="relative h-48 overflow-hidden bg-white">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-contain img-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="text-primary" size={18} />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-4 text-primary font-medium text-sm">
                  <BookOpen size={16} />
                  <span>Leer más</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
