import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Video, MessageCircle, Clock, CheckCircle, ArrowRight } from "lucide-react";

const ConsultasOnlinePage = () => {
  const pasos = [
    {
      icon: MessageCircle,
      title: "1. Contacto inicial",
      description: "Escribime por WhatsApp contándome brevemente tu situación y qué te gustaría trabajar."
    },
    {
      icon: Video,
      title: "2. Consulta por videollamada",
      description: "Realizamos una sesión de 45-60 minutos donde evaluamos tu estado emocional actual."
    },
    {
      icon: CheckCircle,
      title: "3. Fórmula personalizada",
      description: "Preparo tu fórmula con las flores que necesitás y te la envío junto con las indicaciones."
    },
    {
      icon: Clock,
      title: "4. Seguimiento",
      description: "Hacemos seguimiento de tu evolución y ajustamos la fórmula si es necesario."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultas Online Flores de Bach | Daniel Angel</title>
        <meta name="description" content="Recibe tu fórmula personalizada de Flores de Bach desde cualquier lugar. Consultas online por videollamada." />
      </Helmet>

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                Flores de Bach
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Consultas Online
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                No importa dónde estés. Recibe tu fórmula personalizada de Flores de Bach a través de una consulta por videollamada. 
                Trabajo contigo para identificar los estados emocionales que necesitan equilibrarse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                  <a href="https://wa.me/5493513492610?text=Hola%20Daniel,%20me%20interesa%20una%20consulta%20online%20de%20Flores%20de%20Bach" target="_blank" rel="noopener noreferrer">
                    Solicitar Consulta <ArrowRight className="ml-2" size={18} />
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-muted/30 rounded-3xl p-8">
              <img 
                src="img/bach-consult.webp" 
                alt="Flores de Bach - Consulta Online" 
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              ¿Cómo funciona?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pasos.map((paso, index) => (
                <Card key={index} className="border-border/50 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <paso.icon className="text-primary" size={28} />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{paso.title}</h3>
                    <p className="text-sm text-muted-foreground">{paso.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-3xl p-8 lg:p-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
              Beneficios de la consulta online
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Desde la comodidad de tu casa",
                "Sin necesidad de trasladarte",
                "Misma calidad que presencial",
                "Fórmula enviada a tu domicilio",
                "Seguimiento personalizado",
                "Horarios flexibles"
              ].map((beneficio, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">{beneficio}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Las Flores de Bach pueden ayudarte a equilibrar tus emociones de forma natural y sin efectos secundarios.
            </p>
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full px-8">
              <a href="https://wa.me/5493513492610?text=Hola%20Daniel,%20me%20interesa%20una%20consulta%20online%20de%20Flores%20de%20Bach" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} />
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConsultasOnlinePage;