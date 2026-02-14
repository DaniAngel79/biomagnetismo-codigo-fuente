import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, ShoppingBag } from "lucide-react";

const Products = () => {
  // Productos de ejemplo - Daniel puede cambiar estos enlaces después
  const products = [
    {
      id: 1,
      name: "Kit de Imanes Terapéuticos",
      description: "Set completo de imanes de neodimio para terapia biomagnética profesional.",
      image: "img/Varios-imanes.webp",
      externalLink: "#", // Enlace externo a tienda
      category: "Equipamiento",
    },
    {
      id: 2,
      name: "Flores de Bach - Set Básico",
      description: "Colección de 12 esencias florales fundamentales para el equilibrio emocional.",
      image: "img/esencias-naturales-biomagnetismo.webp",
      externalLink: "#",
      category: "Esencias",
    },
    {
      id: 3,
      name: "Libro: Biomagnetismo Médico",
      description: "Guía completa sobre los fundamentos y aplicaciones del par biomagnético.",
      image: "img/manual-biomagnetismo.webp",
      externalLink: "#",
      category: "Libros",
    },
    {
      id: 4,
      name: "Cuidado Diario y Estilo de Vida",
      description: "Fórmula de emergencia con 5 flores de Bach para situaciones de estrés.",
      image: "img/Tienda-ecomers.webp",
      externalLink: "#",
      category: "Esencias",
    },
  ];

  return (
    <section
      id="productos"
      className="py-24 lg:py-32"
      data-testid="products-section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
            Productos Recomendados
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Recursos para tu <span className="text-primary">bienestar</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            Selección de productos relacionados con biomagnetismo y terapia
            floral. Haz clic para ver más detalles en la tienda.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`group card-hover border-border/50 overflow-hidden animate-fade-in-up animation-delay-${((index % 4) + 1) * 100}`}
              data-testid={`product-card-${product.id}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover img-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary/90 text-secondary-foreground text-xs font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  data-testid={`product-link-${product.id}`}
                >
                  <a
                    href={product.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingBag size={16} className="mr-2" />
                    Ver Producto
                    <ExternalLink size={14} className="ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          <span className="inline-flex items-center gap-2">
            <ExternalLink size={14} />
            Los enlaces te llevarán a tiendas externas de confianza.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Products;
