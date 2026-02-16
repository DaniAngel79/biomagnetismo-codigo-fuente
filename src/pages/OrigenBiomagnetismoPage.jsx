import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { ArrowRight, History, ShieldCheck, Activity, Brain } from "lucide-react";

const OrigenBiomagnetismoPage = () => {
  return (
    <>
      <Helmet>
        <title>Historia y Origen del Biomagnetismo | Daniel Angel</title>
        <meta name="description" content="Conoce la evolución del Biomagnetismo, desde las culturas antiguas hasta el desarrollo del Par Biomagnético por el Dr. Isaac Goiz." />
        <link rel="canonical" href="https://biomagnetismo.store/origen-biomagnetismo" />
      </Helmet>

      <article className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <header className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <img 
                src="img/sesion-dr-goitz.webp" 
                alt="Historia del Biomagnetismo" 
                className="w-full rounded-[2rem] shadow-lg"
                loading="eager"
                width="500"
                height="350"
              />
              <img 
                src="img/adn-biomagnetismo-energia-celular.webp" 
                alt="Bioenergía y magnetismo" 
                className="w-full rounded-[2rem] shadow-lg"
                loading="lazy"
                width="500"
                height="350"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Origen del Biomagnetismo
            </h1>
          </header>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed">
              El uso de imanes con fines de bienestar ha estado presente a lo largo de la historia. Civilizaciones como la china, egipcia y árabe ya documentaban el uso de campos magnéticos para promover la vitalidad.
            </p>

            <p className="text-slate-600 leading-relaxed">
              En la era moderna, el **Dr. Isaac Goiz Durán** fue el pionero que estructuró estas observaciones en lo que hoy conocemos como el **Par Biomagnético**. Su investigación permitió entender cómo los campos magnéticos externos interactúan con la bioelectricidad de nuestro cuerpo para restaurar el equilibrio.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
              <ShieldCheck className="text-emerald-500" /> El Concepto del pH
            </h2>

            

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-8">
              <p className="text-slate-600 text-sm italic">
                El enfoque del Dr. Goiz se basa en la neutralización del pH bionergético. Cuando un tejido pierde su equilibrio (tornándose demasiado ácido o alcalino), se crean condiciones favorables para la inestabilidad. Los imanes buscan devolver al organismo a su **Nivel Energético Neutral (NEN)**.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
              Enfoque Psicosomático
            </h2>

            <p className="text-slate-600 leading-relaxed">
              La relación entre las emociones y la respuesta física es una pieza clave. Se ha observado que estados de estrés agudo o emociones no procesadas pueden distorsionar el equilibrio del cuerpo.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <Brain className="text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Impacto Emocional</h4>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• Tensiones por estrés acumulado</li>
                  <li>• Factores desestabilizadores</li>
                  <li>• Estados de alerta constante</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <Activity className="text-blue-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Respuesta Física</h4>
                <p className="text-xs text-slate-600">
                  El cuerpo busca compensar estos estados emocionales alterando su equilibrio interno, lo que puede derivar en fatiga y malestar.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
              Bienestar Integral
            </h2>

            <p className="text-slate-600 leading-relaxed">
              El Biomagnetismo es una **disciplina energética y complementaria**. No requiere medicación y su objetivo final es la **homeostasis** (la capacidad del cuerpo para mantener una condición interna estable).
            </p>

            {/* UX DEFENSIVA: SECCIÓN DE APLICACIÓN SEGURA */}
            <div className="bg-slate-900 text-slate-400 p-8 rounded-[2rem] my-12">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Aviso de Aplicación</h3>
              <p className="text-xs leading-relaxed mb-4">
                Esta técnica se aplica hoy en día para acompañar el bienestar en diversas etapas de la vida:
              </p>
              <ul className="grid grid-cols-2 gap-4 text-[10px] uppercase font-bold">
                <li className="border-l border-emerald-500 pl-3">Confort en la Infancia</li>
                <li className="border-l border-emerald-500 pl-3">Gestión de Estrés Laboral</li>
                <li className="border-l border-emerald-500 pl-3">Apoyo en Procesos Digestivos</li>
                <li className="border-l border-emerald-500 pl-3">Recuperación de Vitalidad</li>
              </ul>
              <p className="mt-8 pt-6 border-t border-white/10 text-[9px] italic">
                IMPORTANTE: El biomagnetismo no sustituye diagnósticos ni tratamientos médicos para patologías crónicas o agudas. Siempre consulte a su médico sobre condiciones como Artritis, VIH o cualquier otra afección clínica.
              </p>
            </div>
          </div>

          {/* CTA TRACKEADO */}
          <div className="mt-16 p-10 bg-emerald-600 rounded-[3rem] text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">¿Querés conocer tu Nivel Energético Neutral?</h3>
            <p className="mb-8 opacity-90">Agenda una sesión de equilibrio biomagnético y experimenta el bienestar natural.</p>
            <Button 
              onClick={() => window.open("https://wa.me/5493547446076", "_blank")}
              className="bg-white text-emerald-600 hover:bg-slate-100 rounded-full px-10 py-6 font-bold"
            >
              Agendar Turno por WhatsApp <ArrowRight className="ml-2" />
            </Button>
          </div>

        </div>
      </article>
    </>
  );
};

export default OrigenBiomagnetismoPage;