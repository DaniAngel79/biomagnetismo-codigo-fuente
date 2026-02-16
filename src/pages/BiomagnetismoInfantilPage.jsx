import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { Baby, ShieldCheck, Heart, Smile, ArrowRight, Info } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const BiomagnetismoInfantilPage = () => {
  const beneficios = [
    { icon: <Heart className="text-pink-500" />, title: "Confort Natural", desc: "Ayuda a relajar tensiones corporales de forma suave." },
    { icon: <Smile className="text-amber-500" />, title: "Bienestar Emocional", desc: "Ideal para niños inquietos o con dificultades de descanso." },
    { icon: <ShieldCheck className="text-emerald-500" />, title: "No Invasivo", desc: "Se aplica sobre la ropa, sin contacto directo ni molestias." }
  ];

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined') {
      if (window.fbq) window.fbq('track', 'Contact', { content_category: 'Infantil' });
    }
    window.open("https://wa.me/5493547446076?text=Hola%20Daniel,%20quisiera%20consultar%20sobre%20la%20sesi%C3%B3n%20de%20biomagnetismo%20para%20ni%C3%B1os.", "_blank");
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      <Helmet>
        <title>Biomagnetismo Infantil | Bienestar para los más chicos</title>
        <meta name="description" content="Técnicas naturales y no invasivas para promover la relajación y el equilibrio en niños y bebés en Alta Gracia." />
        <link rel="canonical" href="https://biomagnetismo.store/biomagnetismo-infantil" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase">
              <Baby size={14} /> <span>Cuidado Respetuoso</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Equilibrio y Calma para <span className="text-blue-600">tu hijo.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              El biomagnetismo infantil es una técnica suave que utiliza campos magnéticos de baja intensidad para ayudar a los niños a recuperar su equilibrio natural, mejorar el descanso y reducir la irritabilidad.
            </p>
            <Button onClick={handleWhatsApp} size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl">
              Consultar por una sesión <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-[4rem] rotate-3 -z-10"></div>
            <img 
              src="/img/biomagnetismo-infantil.webp" 
              alt="Niño recibiendo sesión de equilibrio energético" 
              className="rounded-[3rem] shadow-2xl w-full object-cover h-[400px]"
              loading="eager"
            />
          </div>
        </div>

        {/* TARJETAS DE BENEFICIOS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {beneficios.map((b, i) => (
            <Card key={i} className="border-none shadow-md bg-slate-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {b.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* UX DEFENSIVA: SECCIÓN DE PREGUNTAS CLAVE */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl font-bold mb-8">¿Es seguro para niños?</h2>
            <div className="space-y-6 text-blue-100/80">
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-500/20 p-1 rounded-full text-blue-400"><Info size={20} /></div>
                <p><strong>Absolutamente no invasivo:</strong> No se utilizan agujas, no se ingieren sustancias y no se requiere contacto directo con la piel.</p>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-500/20 p-1 rounded-full text-blue-400"><Info size={20} /></div>
                <p><strong>Sesiones dinámicas:</strong> Entendemos que los niños no pueden estar quietos. La técnica se adapta al movimiento y comodidad del pequeño.</p>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-500/20 p-1 rounded-full text-blue-400"><Info size={20} /></div>
                <p><strong>Sin efectos secundarios:</strong> Al ser campos magnéticos naturales de baja potencia, el cuerpo los integra sin reacciones adversas.</p>
              </div>
            </div>
            
            {/* DISCLAIMER LEGAL OBLIGATORIO */}
            <div className="mt-12 pt-8 border-t border-white/10 text-[10px] text-blue-200/50 leading-relaxed uppercase tracking-wider">
              IMPORTANTE: Estas sesiones son complementarias y orientadas al bienestar. No sustituyen la consulta con el pediatra ni los tratamientos médicos convencionales. No suspendemos medicaciones ni diagnósticos clínicos.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiomagnetismoInfantilPage;