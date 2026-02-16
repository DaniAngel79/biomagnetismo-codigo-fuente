import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Brain, Zap, CheckCircle2, Sparkles, History, Plus, MapPin, Monitor, ShieldAlert } from "lucide-react";

const GRUPOS_EMOCIONALES = [
  { id: 1, titulo: "Temor", color: "text-red-600", bg: "bg-red-50", negativo: "Miedos conocidos, sensación de pérdida de control o aprensión.", positivo: "Calma interior y confianza ante los desafíos diarios." },
  { id: 2, titulo: "Incertidumbre", color: "text-amber-600", bg: "bg-amber-50", negativo: "Inestabilidad emocional, duda constante o fatiga mental.", positivo: "Determinación, seguridad y claridad en la toma de decisiones." },
  { id: 3, titulo: "Falta de Interés", color: "text-blue-600", bg: "bg-blue-50", negativo: "Distracción, desconexión del presente o agotamiento.", positivo: "Presencia plena, vitalidad y conexión con el aquí y ahora." },
  { id: 4, titulo: "Soledad", color: "text-purple-600", bg: "bg-purple-50", negativo: "Sensación de aislamiento, impaciencia o dificultad para conectar.", positivo: "Empatía, paciencia y conexión armoniosa con el entorno." },
  { id: 5, titulo: "Hipersensibilidad", color: "text-emerald-600", bg: "bg-emerald-50", negativo: "Influenciabilidad, ocultar preocupación bajo falsa alegría.", positivo: "Firmeza, límites sanos y paz interior auténtica." },
  { id: 6, titulo: "Desesperación", color: "text-slate-600", bg: "bg-slate-50", negativo: "Inseguridad, autoexigencia extrema, abrumación o resentimiento.", positivo: "Autoaceptación, resiliencia y renovación de energía." },
  { id: 7, titulo: "Sobrecarga por otros", color: "text-orange-600", bg: "bg-orange-50", negativo: "Exceso de entusiasmo que agota, hiper-responsabilidad.", positivo: "Equilibrio, respeto por el espacio propio y ajeno." }
];

const FloresBachPage = () => {
  const WHATSAPP_DANIEL = "5493513492610";
  const WHATSAPP_ROMINA = "5493547446076";

  // TRACKING DE CONVERSIÓN
  const trackConversion = (tipo_sesion) => {
    if (typeof window !== 'undefined') {
      if (window.fbq) window.fbq('track', 'Lead', { content_name: tipo_sesion });
      if (window.gtag) window.gtag('event', 'generate_lead', { content_name: tipo_sesion });
    }
  };

  const handleWhatsAppConsultation = (grupo) => {
    trackConversion(`Sesion_Online_${grupo}`);
    const text = `Hola Daniel. Quiero agendar una Sesión de Orientación Online para trabajar el área de: "${grupo}". ¿Qué horarios tienes disponibles?`;
    window.open(`https://wa.me/${WHATSAPP_DANIEL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppCombinada = () => {
    trackConversion('Sesion_Combinada_Presencial');
    const text = `Hola Romina. Quiero agendar la Sesión Combinada Presencial (Equilibrio Físico + Orientación).`;
    window.open(`https://wa.me/${WHATSAPP_ROMINA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Orientación Emocional | Sistema de Bach | Daniel Angel</title>
        <meta name="description" content="Descubre cómo gestionar el estrés y la ansiedad a través de la orientación en sistemas florales." />
        <link rel="canonical" href="https://biomagnetismo.store/flores-bach" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6">
                <Sparkles size={14} aria-hidden="true" /> <span>ASESORÍA Y BIENESTAR</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 italic leading-tight">
                Gestión Activa de las Emociones
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                El agotamiento y la preocupación constante bloquean tu energía. A través de la orientación en sistemas florales, diseñamos un esquema para que recuperes tu claridad mental.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleWhatsAppCombinada} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-7 rounded-2xl font-bold shadow-lg flex flex-col items-center leading-none">
                  <span className="text-[10px] uppercase opacity-80 mb-1">Presencial Alta Gracia</span>
                  <span>Sesión Combinada</span>
                </Button>
                <Button onClick={() => handleWhatsAppConsultation("Evaluación General")} variant="outline" className="border-slate-300 text-slate-600 px-8 py-7 rounded-2xl font-bold flex flex-col items-center leading-none">
                  <span className="text-[10px] uppercase opacity-80 mb-1">100% Online</span>
                  <span>Sesión de Orientación</span>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/emociones-dolores.webp" 
                alt="Conexión mente y cuerpo" 
                className="rounded-[3rem] shadow-2xl relative z-10" 
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: CONEXIÓN EMOCIONES Y ESTRÉS (Purgada de afirmaciones médicas) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">La conexión entre tensión emocional y fatiga física</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                El estrés prolongado genera respuestas en el cuerpo que agotan nuestra vitalidad. La tensión acumulada se manifiesta en nuestro nivel de energía, calidad de descanso y confort general.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
             <div className="bg-emerald-900 text-white p-10 rounded-[3rem] shadow-xl">
                <ShieldAlert className="text-emerald-400 mb-6" size={40} aria-hidden="true" />
                <h3 className="text-2xl font-serif font-bold mb-6">El Impacto del Estrés Diario</h3>
                <ul className="space-y-4 text-emerald-100/80 text-sm">
                  <li><strong>Sobrecarga:</strong> La ansiedad y el ritmo acelerado disminuyen nuestra capacidad de relajación profunda.</li>
                  <li><strong>Cronificación:</strong> Estados de tensión prolongados inducen a hábitos poco saludables y fatiga crónica.</li>
                  <li><strong>Recuperación:</strong> Un estado emocional equilibrado es fundamental para mantener la vitalidad y el confort del cuerpo.</li>
                </ul>
             </div>
             <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-slate-900 italic">El Enfoque Natural</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  En lugar de tapar los síntomas del agotamiento, la orientación en sistemas florales busca identificar la emoción raíz que está causando el bloqueo energético.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Es un sistema educativo y de acompañamiento que te empodera para recuperar el control de tus reacciones ante los desafíos diarios.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SINERGIA (Ajuste Legal) */}
      <section className="py-24 bg-emerald-900 rounded-[4rem] mx-4 text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 italic">Potencia tu Bienestar</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center text-center">
            <div className="bg-white/10 p-8 rounded-[3rem] backdrop-blur-sm border border-white/10">
              <Zap className="text-emerald-400 mx-auto mb-4" size={32} aria-hidden="true" />
              <h4 className="font-bold text-xl mb-2">Biomagnetismo</h4>
              <p className="text-xs text-emerald-50/80">Promueve el confort físico y fomenta la relajación estructural.</p>
            </div>
            <Plus size={32} className="text-emerald-500 mx-auto animate-pulse" aria-hidden="true" />
            <div className="bg-white/10 p-8 rounded-[3rem] backdrop-blur-sm border border-white/10">
              <Brain className="text-emerald-400 mx-auto mb-4" size={32} aria-hidden="true" />
              <h4 className="font-bold text-xl mb-2">Asesoría Floral</h4>
              <p className="text-xs text-emerald-50/80">Acompaña la gestión mental y emocional, estabilizando tu energía.</p>
            </div>
          </div>
          <div className="mt-16 bg-white rounded-[3rem] p-8 md:p-12 text-slate-900 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-md">
              <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase mb-4 inline-block tracking-widest">Enfoque 360</span>
              <h3 className="text-3xl font-serif font-bold mb-4">Sesión Combinada</h3>
              <p className="text-slate-600 text-sm">
                Al agendar una sesión presencial, evaluamos tanto los bloqueos de tensión física como el aspecto emocional en una misma visita.
              </p>
            </div>
            <Button onClick={handleWhatsAppCombinada} className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-8 rounded-[2rem] font-bold text-lg flex gap-3 shadow-xl">
              <MapPin size={24} aria-hidden="true" /> Agendar con Romina
            </Button>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE GRUPOS - REENFOCADO A SERVICIO */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4 italic">Áreas de Trabajo Emocional</h2>
          <p className="text-slate-500">Identifica el área donde sientes mayor bloqueo y agendemos una sesión para abordarlo.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GRUPOS_EMOCIONALES.map((grupo) => (
            <Card key={grupo.id} className="rounded-[3rem] border-none shadow-xl flex flex-col hover:scale-[1.02] transition-all bg-white overflow-hidden">
              <CardContent className="p-10 flex flex-col h-full text-center">
                <h2 className={`text-4xl font-serif font-bold mb-8 ${grupo.color}`}>{grupo.titulo}</h2>
                <div className="space-y-6 flex-grow text-left">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Si experimentas:</p>
                    <p className="text-slate-600 text-sm italic">"{grupo.negativo}"</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100">
                    <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-3">Enfoque de la Sesión:</p>
                    <div className="flex gap-3">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-emerald-900 text-sm font-bold">Fomentar {grupo.positivo.toLowerCase()}</p>
                    </div>
                  </div>
                </div>
                <Button onClick={() => handleWhatsAppConsultation(grupo.titulo)} className="w-full mt-10 py-8 bg-slate-900 hover:bg-emerald-600 text-white rounded-2xl font-bold flex flex-col gap-1 shadow-lg">
                  <span className="flex items-center gap-2"><Monitor size={16} aria-hidden="true" /> Agendar Sesión Online</span>
                  <span className="text-[10px] font-normal opacity-70">Evaluación con Daniel</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FloresBachPage;