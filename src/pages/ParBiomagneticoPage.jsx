import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { ArrowRight, Info, Magnet, Zap } from "lucide-react";

const ParBiomagneticoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppTracking = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', { content_name: 'Teoria_Par_Biomagnetico' });
    }
    window.open("https://wa.me/5493547446076?text=Hola%20Daniel,%20le%C3%AD%20sobre%20el%20Par%20Biomagn%C3%A9tico%20y%20quiero%20consultar.", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>¿Qué es el Par Biomagnético? | Biofísica y Equilibrio</title>
        <meta name="description" content="Descubre la base científica del Par Biomagnético: cómo la interacción de imanes de intensidad moderada promueve la homeostasis." />
        <link rel="canonical" href="https://biomagnetismo.store/par-biomagnetico" />
      </Helmet>

      <article className="pt-32 pb-16 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <header className="mb-12">
            <div className="bg-slate-50 rounded-[2rem] p-8 mb-8 border border-slate-100 flex justify-center">
              <img 
                src="img/par-palma-palma.webp" 
                alt="Aplicación de imanes en polaridad dual" 
                className="max-h-64 object-contain drop-shadow-md"
                width="600"
                height="300"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Teoría del Par Biomagnético
            </h1>
          </header>

          <div className="prose prose-slate max-w-none space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-lg text-slate-600 leading-relaxed">
                  El Biomagnetismo es la disciplina que investiga el efecto de los campos magnéticos en los organismos vivos. Cuando aplicamos un campo magnético, interactuamos directamente con la bioelectricidad del cuerpo, influyendo en sustancias clave como el oxígeno y las proteínas.
                </p>
              </div>
              <img 
                src="img/biomagnetismo-medicina-del-futuro-ph.webp" 
                alt="Interacción magnética celular" 
                className="w-full md:w-64 rounded-2xl shadow-lg border border-slate-100"
                width="250"
                height="250"
              />
            </div>

            <p className="text-slate-600 leading-relaxed">
              Aunque el agua es diamagnética, las moléculas disueltas en ella son paramagnéticas y altamente sensibles. El enfoque del Par Biomagnético utiliza esta sensibilidad para influir en imanes monomoleculares del cuerpo, buscando restaurar la estabilidad perdida por el estrés o factores externos.
            </p>

            {/* DIAGRAMA DE POLARIDAD */}
            

            <div className="bg-emerald-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <h2 className="text-2xl font-bold mb-6 text-emerald-400">¿En qué consiste esta técnica?</h2>
              <p className="text-emerald-50/80 leading-relaxed mb-6">
                A diferencia de otros métodos, el enfoque del Par Biomagnético es **bipolar**. Se aplican dos imanes de intensidad moderada (más de 1000 Gauss) en puntos específicos que presentan distorsiones energéticas. El objetivo es corregir el desequilibrio en la homeostasis mediante la neutralización de cargas.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
                <span className="bg-white/10 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                   <Magnet size={14} /> Polo Norte (Negativo)
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                   <Zap size={14} /> Polo Sur (Positivo)
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
              Evolución y Ciencia Energética
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Propuesto originalmente en 1988 por el Dr. Isaac Goiz Durán, este método identifica "pares" de puntos en el cuerpo que se relacionan entre sí. Al equilibrar estos puntos, se busca crear un ambiente interno estable, menos propicio para la fatiga y el malestar general.
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex items-start gap-4">
              <Info className="text-amber-600 shrink-0 mt-1" size={24} />
              <div className="text-xs text-amber-900 leading-relaxed uppercase tracking-tight">
                <strong>Nota Técnica:</strong> La aplicación de imanes se realiza de forma externa y sobre la ropa. Es una técnica de acompañamiento bionergético que se suma a la visión de figuras históricas como Mesmer o Hahnemann, quienes ya exploraban la influencia de las energías naturales en el ser humano.
              </div>
            </div>
          </div>

          {/* CTA SEGURO Y TRACKEADO */}
          <div className="mt-16 p-10 bg-slate-900 rounded-[3rem] text-white text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">¿Querés recuperar tu equilibrio energético?</h3>
            <p className="mb-8 opacity-80 max-w-lg mx-auto">
              Experimentá los beneficios de la homeostasis recuperada a través de una sesión presencial en Alta Gracia.
            </p>
            <Button 
              onClick={handleWhatsAppTracking}
              className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-12 py-7 text-lg font-bold transition-all hover:scale-105"
            >
              Agendar vía WhatsApp <ArrowRight className="ml-2" />
            </Button>
            <p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest">
              Sesiones de bienestar complementario - No constituye tratamiento médico
            </p>
          </div>

        </div>
      </article>
    </>
  );
};

export default ParBiomagneticoPage;