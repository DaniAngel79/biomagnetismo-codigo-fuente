import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { ArrowRight, ShieldCheck, Activity, Zap, Heart } from "lucide-react";

const CamposMagneticosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', { content_name: 'Campos_Magneticos_Info' });
    }
    window.open("https://wa.me/5493547446076?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20biomagnetismo.", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Campos Magnéticos y Bienestar | Daniel Angel</title>
        <meta name="description" content="Entiende cómo la interacción con campos magnéticos estáticos puede promover el confort y el equilibrio energético." />
        <link rel="canonical" href="https://biomagnetismo.store/campos-magneticos" />
      </Helmet>

      <article className="pt-32 pb-16 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Los Campos Magnéticos en el Bienestar
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Exploramos la interacción entre la energía magnética y el equilibrio bioenergético del cuerpo humano.
            </p>
          </header>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed">
              Cada organismo genera campos energéticos sutiles. La propuesta del Biomagnetismo es utilizar imanes de baja intensidad para influir positivamente en estos campos, buscando restaurar la sensación de armonía y confort general.
            </p>

            {/* IMAGEN OPTIMIZADA */}
            
            <div className="my-12 relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200">
              <img 
                src="img/acido-base.webp" 
                alt="Diagrama conceptual de equilibrio bioenergético" 
                className="w-full h-auto object-cover max-h-[500px]"
                loading="lazy"
                width="800"
                height="450"
              />
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 my-8 flex items-start gap-4">
              <ShieldCheck className="text-emerald-600 shrink-0 mt-1" size={24} />
              <p className="text-emerald-900 text-sm font-medium">
                Esta técnica es <strong>no invasiva</strong> y se realiza sobre la ropa. Busca el equilibrio bionergético sin el uso de sustancias ni procedimientos dolorosos.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
              Áreas de Enfoque y Beneficios
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <Activity className="text-blue-600 mb-3" size={24} />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Confort Localizado</h3>
                <p className="text-sm text-slate-600">
                  La aplicación focalizada promueve una sensación de alivio en zonas de tensión acumulada por estrés o actividad física.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <Heart className="text-red-500 mb-3" size={24} />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Armonía Energética</h3>
                <p className="text-sm text-slate-600">
                  Fomenta la homeostasis, ayudando a que el sistema recupere su punto de equilibrio natural.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <Zap className="text-amber-500 mb-3" size={24} />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Activación Vital</h3>
                <p className="text-sm text-slate-600">
                  La interacción magnética asiste en la vitalidad celular, promoviendo estados de mayor energía y menor fatiga.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <ShieldCheck className="text-emerald-600 mb-3" size={24} />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Relajación Profunda</h3>
                <p className="text-sm text-slate-600">
                  Actúa sobre el sistema nervioso relajando la respuesta ante el estrés diario.
                </p>
              </div>
            </div>

            {/* UX DEFENSIVA - DISCLAIMER CONTEXTUAL */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl my-8 text-xs text-amber-900 leading-relaxed uppercase tracking-tight font-medium">
              <strong>Importante:</strong> El biomagnetismo es un enfoque de bienestar complementario. La información sobre optimización de hemoglobina o regeneración celular se refiere a procesos bioenergéticos y no debe interpretarse como una promesa de curación médica. Consulte siempre a su médico matriculado.
            </div>
          </div>

          {/* CTA TRACKEADO */}
          <div className="mt-16 p-10 bg-slate-900 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">¿Buscas recuperar tu equilibrio?</h3>
            <p className="mb-8 opacity-80 relative z-10">Agenda una sesión de evaluación bionergética en Alta Gracia.</p>
            <Button onClick={handleWhatsAppClick} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-10 py-6 text-lg font-bold shadow-lg transition-transform hover:scale-105 relative z-10">
              Agendar vía WhatsApp <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default CamposMagneticosPage;