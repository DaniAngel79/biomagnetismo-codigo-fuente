import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { 
  ShieldCheck, 
  Info, 
  Baby, 
  ArrowRight, 
  Activity, 
  Layers,
  Zap
} from "lucide-react";

const PARES_ALERGIAS = [
  { par: "Zona Timo", desc: "Fomento del equilibrio bionergético en el sistema de defensa natural.", img: "/img/par-timo-timo.webp" },
  { par: "Eje Digestivo", desc: "Búsqueda del equilibrio de pH en zonas relacionadas con la digestión.", img: "/img/estomago-pancreas-alerg-alimentaria.webp" },
  { par: "Zona Hepática", desc: "Promoción de la homeostasis y el filtrado energético del organismo.", img: "/img/sirroscis.webp" },
  { par: "Eje Glandular", desc: "Acompañamiento en la respuesta sistémica ante factores externos.", img: "/img/suprarrenales-pulmones-pseudomona-aeuroginosa.webp" },
  { par: "Zona Axilar", desc: "Equilibrio general de la red bioeléctrica del cuerpo.", img: "/img/par-timo-axila.webp" }
];

const AlergiasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContact = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', { content_name: 'Bienestar_Sensibilidad_Alergias' });
    }
    window.open("https://wa.me/5493547446076?text=Hola!%20Le%C3%AD%20sobre%20biomagnetismo%20y%20bienestar%20ante%20sensibilidades.%20Quisiera%20consultar.", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Sensibilidad y Bienestar Bioenergético | Daniel Angel</title>
        <meta name="description" content="Descubre cómo el Biomagnetismo promueve el equilibrio del pH para mejorar la respuesta natural del cuerpo ante factores externos." />
        <link rel="canonical" href="https://biomagnetismo.store/alergias" />
      </Helmet>

      {/* Hero Section - UX Defensiva */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck size={14} /> <span>Acompañamiento Energético</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                Sensibilidad: Recupera el <span className="text-orange-600">equilibrio interno.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                El Biomagnetismo identifica desequilibrios de pH que pueden estar influyendo en la respuesta exagerada del cuerpo ante el entorno. Buscamos restaurar la armonía sistémica.
              </p>
              <Button onClick={handleContact} className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-7 rounded-2xl font-bold shadow-xl transition-all hover:scale-105">
                Consultar Sesión de Biomagnetismo <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img src="/img/intoxicación-por-metales.webp" alt="Equilibrio bioeléctrico" className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Sinergia Infantil - Enlace de Autoridad */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2.5rem] flex items-center gap-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm shrink-0">
              <Baby className="text-emerald-600" size={32} />
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              El equilibrio energético en niños es fundamental para un crecimiento saludable. Conoce más en nuestra sección de <strong>Biomagnetismo Infantil</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Pares Comunes - Reenfocados a Biofísica */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Puntos de Enfoque Comunes</h2>
            <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
              Identificamos áreas clave donde el magnetismo estático puede influir positivamente. La efectividad depende de un <strong>rastreo completo</strong> personalizado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARES_ALERGIAS.map((item, index) => (
              <Card key={index} className="rounded-[2.5rem] border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden bg-white">
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img src={item.img} alt={item.par} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" loading="lazy" />
                </div>
                <CardContent className="p-8">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Zap size={16} className="text-orange-500" /> {item.par}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* La Importancia del Rastreo Completo (Cierre Legal) */}
      <section className="py-24 bg-slate-900 rounded-[4rem] mx-4 text-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400">
              <Layers size={32} />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">El Valor de la Sesión Integral</h2>
            <p className="text-slate-400">
              No existen recetas mágicas. El bienestar real se logra mediante una evaluación exhaustiva de cada polo magnético en tu cuerpo.
            </p>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-xs text-slate-400 space-y-4">
               <p className="flex gap-3"><Info className="text-orange-400 shrink-0" size={16}/> <strong>No es tratamiento médico:</strong> Esta técnica busca la homeostasis (equilibrio natural).</p>
               <p className="flex gap-3"><Info className="text-orange-400 shrink-0" size={16}/> <strong>Complementariedad:</strong> No reemplaza la opinión de un alergista o médico clínico.</p>
            </div>
          </div>
          <div className="bg-white rounded-[3rem] p-10 text-slate-900 shadow-2xl">
            <h4 className="text-2xl font-bold mb-6 tracking-tight">Consultas y Evaluación</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Si experimentas sensibilidad ante factores externos, el primer paso es identificar tus desequilibrios de pH. Agenda una sesión integral para un rastreo profesional.
            </p>
            <Button onClick={handleContact} className="w-full bg-slate-900 hover:bg-orange-600 text-white py-8 rounded-2xl font-black transition-all">
              Agendar Sesión de Rastreo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlergiasPage;