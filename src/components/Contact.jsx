import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación en Localhost para que puedas probar la experiencia de usuario
    if (window.location.hostname === "localhost") {
      setTimeout(() => {
        toast.success("¡Formulario validado! (Simulación en localhost)");
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
        setIsSubmitting(false);
      }, 800);
      return;
    }

    try {
      const response = await fetch("./send_mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        toast.success("¡Mensaje enviado! Te responderé a la brevedad.");
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Error al enviar. Por favor, intenta por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">¿Listo para comenzar?</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card border rounded-xl">
                <Phone className="text-primary" size={22} />
                <div><p className="text-sm text-muted-foreground">WhatsApp</p><p className="font-medium">+54 9 3547 446076</p></div>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <Input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
                <Textarea name="mensaje" placeholder="Mensaje" rows={4} value={formData.mensaje} onChange={handleChange} required />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"} <Send className="ml-2" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;