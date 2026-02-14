
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Send } from "lucide-react";
import { toast } from "sonner";

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Petición REAL al servidor de Hostinger
      const response = await fetch("./send_mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        toast.success("¡Mensaje enviado! Te responderé en menos de 24 horas.");
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        toast.error(result.message || "Error al enviar el mensaje. Intenta por WhatsApp.");
      }
    } catch (error) {
      console.error("Error técnico:", error);
      toast.error("Error de conexión con el servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Teléfono", value: "+54 9 351 3492610", href: "tel:+5493513492610" },
    { icon: MessageCircle, label: "WhatsApp Turnos", value: "+54 9 3547 446076", href: "https://wa.me/5493547446076?text=Hola,%20quisiera%20un%20turno%20para%20la%20terapia%20de%20biomagnetismo.%20Mi%20nombre%20es%20", highlight: true },
    { icon: Mail, label: "Email", value: "contacto@biomagnetismo.store", href: "mailto:contacto@biomagnetismo.store" },
    { icon: MapPin, label: "Dirección", value: "Belisario Roldan 53, Alta Gracia, Córdoba", href: "https://maps.google.com/?q=Belisario+Roldan+53+Alta+Gracia+Cordoba+Argentina" },
    { icon: Clock, label: "Horario", value: "Lunes a Viernes, 9:00 - 18:00" },
  ];

  return (
    <>
      <Helmet>
        <title>Contacto | Biomagnetismo Daniel Angel</title>
        <meta name="description" content="Contacta a Daniel Rosa para agendar tu consulta de biomagnetismo o flores de Bach en Alta Gracia, Córdoba." />
      </Helmet>

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">Contacto</span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                ¿Listo para tu transformación?
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Escribime para consultas o más información. Respondo en menos de 24 horas.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <Card key={info.label} className={`border-border/50 ${info.highlight ? "bg-primary/5 border-primary/20" : ""}`}>
                    <CardContent className="p-4">
                      <a
                        href={info.href}
                        target={info.href?.startsWith("http") ? "_blank" : undefined}
                        rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 hover:text-primary transition-colors"
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${info.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10"}`}>
                          <info.icon className={info.highlight ? "" : "text-primary"} size={22} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className={`font-medium ${info.highlight ? "text-primary" : "text-foreground"}`}>{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Sígueme:</span>
                <a href="https://www.instagram.com/biomagnetismodanielangel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <Instagram size={18} />
                </a>
                <a href="https://www.facebook.com/BiomagnetismoDanielAngel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Form */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Envíame un mensaje</h2>
                <p className="text-muted-foreground mb-6">Completa el formulario y te respondo pronto.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">Nombre completo</label>
                    <Input id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder="Tu nombre" className="rounded-xl" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="tu@email.com" className="rounded-xl" />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">Teléfono (opcional)</label>
                    <Input id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+54 9 ..." className="rounded-xl" />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                    <Textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={4} placeholder="¿En qué puedo ayudarte?" className="rounded-xl resize-none" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 rounded-full">
                    {isSubmitting ? "Enviando..." : <><Send className="mr-2" size={18} /> Enviar Mensaje</>}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground mb-4">O contactame directamente</p>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full">
                    <a href="https://wa.me/5493547446076?text=Hola,%20quisiera%20un%20turno%20para%20la%20terapia%20de%20biomagnetismo.%20Mi%20nombre%20es%20" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2" size={20} /> WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactoPage;