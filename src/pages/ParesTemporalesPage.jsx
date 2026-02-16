import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { ArrowRight, Info, ShieldCheck, Zap } from "lucide-react";

const ParesTemporalesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppTracking = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', { content_name: 'Pares_Temporales_Lesiones' });
    }
    window.open("https://wa.me/5493547446076?text=Hola%20Daniel,%20me%20interesa%20consultar%20por%20biomagnetismo%20aplicado%20a%20molestias%20f%C3%ADsicas.", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Pares Temporales | Apoyo en la Recuperación Física | Daniel Angel</title>
        <meta name="description" content="Conoce cómo los Pares Temporales ayudan a promover el bienestar y el confort en zonas de tensión muscular o molestias físicas." />
        <link rel="canonical" href="https://biomagnetismo.store/pares-temporales" />
      </Helmet>

      <article className="pt-32 pb-16 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center tracking-tight">
              Pares Temporales y Bienestar Físico
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center group">
                <div className="w-full aspect-video overflow-hidden rounded-[2rem] shadow-md mb-3 border border-slate-100">
                  <img 
                    src="img/par-hombro-hombro.webp"
                    alt="Aplicación de imanes en zona del hombro" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width="300"
                    height="200"
                  />
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Zona Hombros</span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-full aspect-video overflow-hidden rounded-[2rem] shadow-md mb-3 border border-slate-100">
                  <img 
                    src="img/par-codo-codo.webp"
                    alt="Aplicación de imanes en articulación del codo" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width="300"
                    height="200"
                  />
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Zona Codos</span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-full aspect-video overflow-hidden rounded-[2rem] shadow-md mb-3 border border-slate-100">
                  <img 
                    src="img/par-tobillo-tobillo.webp"
                    alt="Aplicación de imanes en zona del tobillo" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width="300"
                    height="200"
                  />
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Zona Tobillos</span>
              </div>
            </div>
          </header>

          <div className="prose prose-slate max-w-none space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Qué es el enfoque del Par Temporal?</h2>

            <p className="text-slate-600 leading-relaxed">
              El Par Temporal consiste en la aplicación de campos magnéticos estáticos de polaridad dual en zonas específicas que presentan molestias o tensión acumulada. El objetivo bionergético es facilitar que el tejido recupere su **Nivel Energético Neutro (NEN)**, promoviendo un ambiente propicio para el descanso y la relajación de la zona.
            </p>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 my-8 flex items-start gap-4">
              <ShieldCheck className="text-emerald-600 shrink-0 mt-1" size={24} />
              <p className="text-emerald-900 text-sm font-medium italic">
                La interacción magnética es un recurso complementario valorado en el ámbito del bienestar físico para acompañar los tiempos naturales de recuperación del cuerpo.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 italic">
              Acompañamiento en el Confort Muscular
            </h2>

            <p className="text-slate-600 leading-relaxed">
              En situaciones de alta exigencia física o deportiva, el cuerpo puede presentar zonas de fatiga extrema. Mediante la aplicación focalizada de imanes de intensidad moderada, buscamos asistir al organismo en su proceso de relajación profunda.
            </p>

            {/* CASO DE ESTUDIO (Reenfocado para compliance) */}
            <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Observaciones en el bienestar deportivo</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "En mi experiencia acompañando a deportistas con molestias agudas por sobreesfuerzo, la aplicación constante de campos magnéticos duales ha demostrado ser un aliado excepcional para promover el confort y la sensación de alivio en tiempos muy satisfactorios para el consultante."
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500">
                <Zap size={14} /> Fomento de la Homeostasis Local
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
              Situaciones de apoyo común
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Molestias musculares por tensión</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Confort en zonas articulares</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Apoyo bionergético post-esfuerzo</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Sensación de pesadez en extremidades</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Fatiga en zona lumbar y cervical</li>
            </ul>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl my-8 text-[10px] text-amber-900 leading-relaxed uppercase tracking-widest font-bold">
              <div className="flex gap-2 items-center mb-2"><Info size={14}/> AVISO DE CUMPLIMIENTO LEGAL</div>
              La aplicación del Par Temporal no sustituye el diagnóstico traumatológico, la kinesiología ni la atención médica de urgencia en caso de fracturas o lesiones graves. Estas técnicas son complementarias y buscan el equilibrio energético y el confort del consultante.
            </div>
          </div>

          {/* CTA TRACKEADO */}
          <div className="mt-16 p-10 bg-slate-900 rounded-[3.5rem] text-white text-center shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-4 relative z-10 tracking-tight">¿Necesitás recuperar tu confort físico?</h3>
            <p className="mb-8 opacity-80 max-w-lg mx-auto relative z-10">
              Consultá cómo la aplicación de pares temporales puede acompañar tu proceso de bienestar.
            </p>
            <Button 
              onClick={handleWhatsAppTracking}
              className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-12 py-8 text-lg font-black shadow-lg transition-transform hover:scale-105 relative z-10"
            >
              Consultar vía WhatsApp <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ParesTemporalesPage;
