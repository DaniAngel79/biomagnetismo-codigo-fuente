import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { 
  ShieldCheck, 
  AlertCircle, 
  Stethoscope, 
  Baby, 
  ArrowRight, 
  Activity, 
  Layers,
  Zap
} from "lucide-react";

const PARES_ALERGIAS = [
  { par: "Timo - Timo", desc: "Levantar defensas, promueve producción de linfocitos T.", img: "/img/par-timo-timo.webp" },
  { par: "Estómago - Páncreas", desc: "Especial para Alergias Alimenticias.", img: "/img/estomago-pancreas-alerg-alimentaria.webp" },
  { par: "Retrohepático - Retrohepático", desc: "Eficaz para alergia al pelo de animales.", img: "/img/sirroscis.webp" },
  { par: "Lóbulo Post Hepático - Riñón Izq", desc: "Tratamiento para alergias al gluten.", img: "/img/intoxicación-por-metales.webp" },
  { par: "Suprarrenales - Pulmones", desc: "Indicado para Alergia Asmática.", img: "/img/suprarrenales-pulmones-pseudomona-aeuroginosa.webp" },
  { par: "Timo - Axila", desc: "Tratamiento de Alergias en general.", img: "/img/par-timo-axila.webp" }
];

const AlergiasPage = () => {
  const WHATSAPP_ROMINA = "5493547446076";

  const handleContact = () => {
    const text = "Hola! Leí sobre el tratamiento de Alergias con Biomagnetismo y me gustaría agendar una sesión completa.";
    window.open(`https://wa.me/${WHATSAPP_ROMINA}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Alergias y Biomagnetismo | Tratamiento Natural | Daniel Angel</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-6">
                <ShieldCheck size={14} /> <span>TRATAMIENTO COMPLEMENTARIO EFICAZ</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 italic leading-tight">
                Alergias: Una respuesta <span className="text-orange-600">alterada del organismo</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 italic">
                El Biomagnetismo busca identificar los desequilibrios de pH en órganos clave que facilitan esta respuesta exagerada del sistema inmunitario.
              </p>
              <Button onClick={handleContact} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 rounded-2xl font-bold shadow-lg flex gap-2">
                Consultar por WhatsApp <ArrowRight size={18} />
              </Button>
            </div>
            <div className="relative">
              <img src="/img/intoxicación-por-metales.webp" alt="Alergias y Biomagnetismo" className="rounded-[3rem] shadow-2xl relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Sinergia Infantil */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <Baby className="text-emerald-600" size={32} />
            </div>
            <p className="text-slate-700 italic text-sm leading-relaxed">
              «Mantener el equilibrio energético es vital desde temprana edad. Conoce cómo aplicamos estas técnicas en los más pequeños en nuestro artículo especializado sobre <strong>Biomagnetismo Infantil</strong>.»
            </p>
          </div>
        </div>
      </section>

      {/* Pares Comunes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 italic">Pares comunes para Alergias</h2>
            <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
              A continuación, se enumeran algunos de los pares que han mostrado una notable eficacia en el tratamiento de alergias en general. Es importante destacar que <strong>siempre se requiere la realización de una sesión completa</strong> para lograr resultados satisfactorios. Esta información es solo una representación de los procedimientos que se realizan en una sesión.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARES_ALERGIAS.map((item, index) => (
              <Card key={index} className="rounded-[2.5rem] border-none shadow-xl shadow-slate-200/50 overflow-hidden hover:scale-[1.02] transition-transform">
                <div className="h-48 overflow-hidden bg-slate-200">
                  <img src={item.img} alt={item.par} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-8">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Zap size={16} className="text-orange-500" /> {item.par}
                  </h3>
                  <p className="text-sm text-slate-500 italic leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Importancia de la Sesión Completa */}
      <section className="py-24 bg-slate-900 rounded-[4rem] mx-4 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-orange-400">
                <Layers size={32} />
              </div>
              <h2 className="text-4xl font-serif font-bold italic">La Importancia de una Sesión Completa</h2>
              <p className="text-slate-300 leading-relaxed">
                El biomagnetismo es una terapia alternativa que utiliza imanes para restablecer el equilibrio del pH en el cuerpo y mejorar la salud general. Sin embargo, es fundamental entender que la efectividad no radica únicamente en colocar algunos pares aislados.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Activity className="text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Comprendiendo el Proceso</h4>
                    <p className="text-sm text-slate-300">Cada persona presenta un perfil único de salud. Las condiciones de salud, incluidas las alergias, son el resultado de desequilibrios en el organismo que varían significativamente entre individuos.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Stethoscope className="text-emerald-400 shrink-0" />
                  <p className="text-sm text-slate-300">Una evaluación exhaustiva es esencial para identificar las áreas específicas que requieren atención mediante el rastreo completo, permitiendo resultados óptimos.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[3rem] p-10 text-slate-900">
              <AlertCircle className="text-orange-500 mb-4" size={32} />
              <h4 className="text-2xl font-serif font-bold mb-4">Conclusión Integral</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Para quienes buscan alivio de alergias y otros síntomas, es crucial entender que el biomagnetismo es un enfoque integral que necesita una sesión completa para ser efectivo. Consultar con un profesional certificado asegurará que se reciba el tratamiento adecuado y se maximicen los beneficios de esta terapia.
              </p>
              <Button onClick={handleContact} className="w-full bg-slate-900 hover:bg-orange-600 text-white py-8 rounded-2xl font-bold transition-colors">
                Agendar Sesión Integral
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-20 text-center">
        <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6 italic">¿Deseas más información sobre cómo el biomagnetismo puede ayudarte?</h3>
        <p className="text-slate-500 mb-8 max-w-xl mx-auto">
          Estamos aquí para guiarte en tu camino hacia el bienestar con terapias naturales y profesionales certificados.
        </p>
        <Button onClick={handleContact} variant="outline" className="border-slate-300 px-10 py-6 rounded-2xl font-bold">
          Contactar ahora
        </Button>
      </section>
    </div>
  );
};

export default AlergiasPage;