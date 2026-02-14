import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MessageSquare, Brain, Zap, CheckCircle2, Sparkles, History, Plus, Gift, MapPin, Monitor, ShieldAlert } from "lucide-react";

const GRUPOS_EMOCIONALES = [
  { id: 1, titulo: "Temor", color: "text-red-600", bg: "bg-red-50", negativo: "Terror paralizante, miedos conocidos, miedo a perder el control o a lo oculto.", positivo: "Valentía, calma interior y confianza ante los desafíos." },
  { id: 2, titulo: "Incertidumbre", color: "text-amber-600", bg: "bg-amber-50", negativo: "Inestabilidad emocional, depresión identificable, duda o cansancio mental.", positivo: "Determinación, seguridad en uno mismo y sabiduría interna." },
  { id: 3, titulo: "Falta de Interés", color: "text-blue-600", bg: "bg-blue-50", negativo: "Distracción, nostalgia, diálogo interno excesivo o repetición de errores.", positivo: "Presencia plena, vitalidad y conexión con el aquí y ahora." },
  { id: 4, titulo: "Soledad", color: "text-purple-600", bg: "bg-purple-50", negativo: "Orgullo, reserva, impaciencia o habla excesiva con poca escucha.", positivo: "Empatía, paciencia y conexión armoniosa con los demás." },
  { id: 5, titulo: "Hipersensibilidad", color: "text-emerald-600", bg: "bg-emerald-50", negativo: "Falsa alegría, sometimiento, influenciabilidad, rabia o celos.", positivo: "Protección emocional, firmeza y paz interior auténtica." },
  { id: 6, titulo: "Desesperación", color: "text-slate-600", bg: "bg-slate-50", negativo: "Inseguridad, culpa, abrumación, shock, resentimiento o impureza.", positivo: "Autoaceptación, resiliencia y esperanza renovada." },
  { id: 7, titulo: "Sufrimiento por otros", color: "text-orange-600", bg: "bg-orange-50", negativo: "Posesividad, entusiasmo desbordado, autoritarismo o soberbia.", positivo: "Amor incondicional, respeto a la libertad ajena y equilibrio." }
];

const FloresBachPage = () => {
  const WHATSAPP_DANIEL = "5493513492610";
  const WHATSAPP_ROMINA = "5493547446076";

  const handleWhatsAppOrder = (grupo) => {
    // MENSAJE BREVE Y CONCISO
    const text = `Hola Daniel! Quiero el preparado: "${grupo}".
---
MIS DATOS: Nombre, DNI, Dirección, Localidad, CP:
---
PAGO: Enviaré el comprobante al Alias: danimanes46 (Lemon) para confirmar el envío.`;
    
    window.open(`https://wa.me/${WHATSAPP_DANIEL}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleWhatsAppCombinada = () => {
    const text = `Hola Romina! Quiero agendar la Sesión Combinada (Biomagnetismo + Flores). Entiendo que la consulta de flores es sin cargo.`;
    window.open(`https://wa.me/${WHATSAPP_ROMINA}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>El Poder de las Emociones | Flores de Bach | Daniel Angel</title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6">
                <Sparkles size={14} /> <span>ENFOQUE TERAPÉUTICO</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 italic leading-tight">
                El Poder de las Emociones
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 italic">
                «Reflejo de la lucha interna: la ansiedad y la preocupación que enfrentamos pueden liberarse. A través de las flores de Bach encontramos herramientas para soltar estas tensiones.»
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleWhatsAppCombinada} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-7 rounded-2xl font-bold shadow-lg flex flex-col items-center leading-none">
                  <span className="text-[10px] uppercase opacity-80 mb-1">Presencial Alta Gracia</span>
                  <span>Sesión Combinada</span>
                </Button>
                <Button onClick={() => handleWhatsAppOrder("Consulta General")} variant="outline" className="border-slate-300 text-slate-600 px-8 py-7 rounded-2xl font-bold flex flex-col items-center leading-none">
                  <span className="text-[10px] uppercase opacity-80 mb-1">Solo Online</span>
                  <span>Sesión de Flores</span>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/img/emociones-dolores.webp" alt="Conexión mente-cuerpo" className="rounded-[3rem] shadow-2xl relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: CONEXIÓN EMOCIONES Y SALUD */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">La conexión entre emociones y salud física</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                La relación entre lo mental y lo corporal ha sido reconocida desde tiempos antiguos. Disciplinas como la medicina psicosomática han demostrado que las emociones influyen directamente en el cuerpo.
              </p>
              <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500 italic text-sm">
                Estados como la ira, el miedo, la tristeza, la ansiedad o el estrés generan respuestas fisiológicas que afectan glándulas, órganos, músculos y hasta el sistema inmunológico.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
             <div className="bg-emerald-900 text-white p-10 rounded-[3rem] shadow-xl">
                <ShieldAlert className="text-emerald-400 mb-6" size={40} />
                <h3 className="text-2xl font-serif font-bold mb-6">El Impacto de los Factores de Riesgo</h3>
                <ul className="space-y-4 text-emerald-100/80 text-sm">
                  <li><strong>Emociones Negativas:</strong> La ansiedad y el estrés son factores notables en la génesis de enfermedades somáticas.</li>
                  <li><strong>Cronificación:</strong> Los estados emocionales mantenidos afectan la salud al inducir hábitos conductuales poco saludables.</li>
                  <li><strong>Adhesión:</strong> El estado emocional influye en el cumplimiento de las prescripciones médicas y el proceso de curación.</li>
                </ul>
             </div>
             <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-slate-900 italic">Rol de las Emociones</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Las emociones actúan como responsables del desarrollo, agravamiento y cronificación de enfermedades como el asma, hipertensión, úlceras y procesos postquirúrgicos. 
                  
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  La psicología actual estudia las disfunciones cognitivas como piezas clave en la relación entre emociones y salud.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SINERGIA */}
      <section className="py-24 bg-emerald-900 rounded-[4rem] mx-4 text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 italic">Potencia tu Sanación</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center text-center">
            <div className="bg-white/10 p-8 rounded-[3rem] backdrop-blur-sm border border-white/10">
              <Zap className="text-emerald-400 mx-auto mb-4" size={32} />
              <h4 className="font-bold text-xl mb-2">Biomagnetismo</h4>
              <p className="text-xs text-emerald-50/80">Trata el plano físico, nivela el pH y elimina patógenos.</p>
            </div>
            <Plus size={32} className="text-emerald-500 mx-auto animate-pulse" />
            <div className="bg-white/10 p-8 rounded-[3rem] backdrop-blur-sm border border-white/10">
              <Brain className="text-emerald-400 mx-auto mb-4" size={32} />
              <h4 className="font-bold text-xl mb-2">Flores de Bach</h4>
              <p className="text-xs text-emerald-50/80">Sana la raíz mental y emocional, equilibrando la Energía Vital.</p>
            </div>
          </div>
          <div className="mt-16 bg-white rounded-[3rem] p-8 md:p-12 text-slate-900 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-md">
              <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase mb-4 inline-block tracking-widest">Ahorro por Sinergia</span>
              <h3 className="text-3xl font-serif font-bold mb-4">Beneficio Sesión Presencial</h3>
              <p className="text-slate-600 text-sm">
                Si asistes a la sesión de **Biomagnetismo presencial**, el diagnóstico de Flores es **SIN CARGO**. Solo abonas el preparado.
              </p>
            </div>
            <Button onClick={handleWhatsAppCombinada} className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-8 rounded-[2rem] font-bold text-lg flex gap-3 shadow-xl">
              <MapPin size={24} /> Agendar con Romina
            </Button>
          </div>
        </div>
      </section>

      {/* PRINCIPIO VITALISTA */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-slate-900 italic">Principio Vitalista</h2>
            <p className="text-slate-600 leading-relaxed italic border-l-4 border-emerald-500 pl-6">
              "La enfermedad consiste en un desequilibrio de la energía vital. Son síntomas que evidencian una desviación en el sentir, el pensar y el actuar."
            </p>
            <div className="space-y-4 text-slate-600 text-sm">
              <p>La mente es la responsable de este desequilibrio. La terapia floral asiste en situaciones de sufrimiento físico, psíquico y emocional.</p>
              <p className="font-bold text-slate-900">Ejemplo: La úlcera digestiva es también la manifestación de un desequilibrio en la energía vital.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
             <History className="text-emerald-600 mb-6" size={40} />
             <h3 className="text-xl font-bold mb-4">El Legado de Bach</h3>
             <p className="text-sm text-slate-500 leading-relaxed">
               Bach descubrió que los desequilibrios mentales se manifiestan con el tiempo en alteraciones físicas. Su sistema de 38 flores cubre el espectro total de desequilibrios emocionales humanos.
             </p>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE GRUPOS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4 italic">Elegí tu preparado</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GRUPOS_EMOCIONALES.map((grupo) => (
            <Card key={grupo.id} className="rounded-[3rem] border-none shadow-xl flex flex-col hover:scale-[1.02] transition-all bg-white overflow-hidden">
              <CardContent className="p-10 flex flex-col h-full text-center">
                <h2 className={`text-5xl font-serif font-bold mb-8 ${grupo.color}`}>{grupo.titulo}</h2>
                <div className="space-y-6 flex-grow text-left">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Si te sientes así:</p>
                    <p className="text-slate-600 text-sm italic">"{grupo.negativo}"</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100">
                    <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-3">Lograrás:</p>
                    <div className="flex gap-3">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-emerald-900 text-sm font-bold">{grupo.positivo}</p>
                    </div>
                  </div>
                </div>
                <Button onClick={() => handleWhatsAppOrder(grupo.titulo)} className="w-full mt-10 py-8 bg-slate-900 hover:bg-emerald-600 text-white rounded-2xl font-bold flex flex-col gap-1 shadow-lg">
                  <span className="flex items-center gap-2"><Monitor size={16}/> Solicitar Envío</span>
                  <span className="text-[10px] font-normal opacity-70">Consultas con Daniel</span>
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