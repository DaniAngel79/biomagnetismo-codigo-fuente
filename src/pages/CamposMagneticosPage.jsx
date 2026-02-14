import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";


const CamposMagneticosPage = () => {
  // Aseguramos que el scroll esté arriba al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Los Campos Magnéticos en nuestro cuerpo | Biomagnetismo Daniel Angel</title>
        <meta name="description" content="Explora el fascinante mundo de la energía magnética en el cuerpo humano." />
      </Helmet>

      <article className="pt-32 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <header className="mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Los Campos Magnéticos en Nuestro Cuerpo
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Al igual que todos los seres vivos que habitan en el planeta, los humanos también estamos formados por campos magnéticos. Cada uno de nuestros órganos, incluso los más sutiles, genera un campo energético que lo conecta con el resto y lo mantiene en equilibrio con el universo.
            </p>

            {/* CONTENEDOR DE IMAGEN CON SEGURIDAD ANTI-TITILEO */}
            <div className="my-12 relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 min-h-[300px] flex items-center justify-center">
              <img 
                src="img/acido-base.webp" 
                alt="Representación de campos magnéticos" 
                className="w-full h-auto object-cover max-h-[500px] block"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.style.display = 'none';
                  console.error("Error crítico: La imagen /acido-base.webp no existe en la carpeta public.");
                }}
              />
              {/* Mensaje de respaldo si la imagen no carga */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm italic p-4 text-center">
                [ Imagen de terapia de Biomagnetismo ]
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              La alteración de esta estabilidad es lo que provoca diversas enfermedades y disfunciones que podemos experimentar a lo largo de nuestra vida. A través del Biomagnetismo y la utilización de imanes terapéuticos, se logra restaurar esa armonía, permitiendo que el cuerpo humano se recupere desde su interior.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 my-8">
              <p className="text-muted-foreground font-medium text-center">
                El biomagnetismo es una técnica <strong>no invasiva</strong>, <strong>sin efectos secundarios</strong> y completamente <strong>indolora</strong>.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
              Beneficios del Biomagnetismo
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-accent/10 rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Mejora la circulación</h3>
                <p className="text-sm text-muted-foreground">
                  En las áreas donde se aplican los imanes, se genera una corriente energética que provoca un ligero aumento de la temperatura, lo que contribuye a mejorar la circulación sanguínea.
                </p>
              </div>
              <div className="bg-accent/10 rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Optimiza la hemoglobina</h3>
                <p className="text-sm text-muted-foreground">
                  La actividad de la hemoglobina se optimiza, facilitando un mejor suministro de oxígeno a los tejidos.
                </p>
              </div>
              <div className="bg-accent/10 rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Regeneración celular</h3>
                <p className="text-sm text-muted-foreground">
                  Al potenciar el flujo de iones hacia las células, se favorece su activación y regeneración, eliminando aquellas que son innecesarias.
                </p>
              </div>
              <div className="bg-accent/10 rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Sistema inmunológico</h3>
                <p className="text-sm text-muted-foreground">
                  Refuerza y estimula el sistema inmunológico, ayudando al cuerpo a defenderse mejor.
                </p>
              </div>
              <div className="bg-accent/10 rounded-xl p-6 sm:col-span-2">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Alivio del dolor</h3>
                <p className="text-sm text-muted-foreground">
                  El flujo de energía en los tejidos ayuda a aliviar diversos tipos de dolor, actuando como un eficaz antiinflamatorio.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary rounded-2xl text-primary-foreground text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">¿Querés experimentar los beneficios?</h3>
            <p className="mb-6 opacity-90">Agenda tu consulta y descubrí cómo el biomagnetismo puede ayudarte.</p>
            <Button asChild className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
              <a href="https://wa.me/5493547446076?text=Hola,%20quisiera%20un%20turno%20para%20la%20terapia%20de%20biomagnetismo.%20Mi%20nombre%20es%20" target="_blank" rel="noopener noreferrer">
                Agendar por WhatsApp <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </div>

        </div>
      </article>
    </>
  );
};

export default CamposMagneticosPage;