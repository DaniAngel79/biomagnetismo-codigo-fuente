import React from "react";
import { Button } from "./ui/button";
import { Award, MapPin, Clock, GraduationCap } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formación Internacional",
      description: "Academias en México y España",
    },
    {
      icon: Award,
      title: "Certificación",
      description: "Bioenergía magnética por Lic. Alonso Hernández Cedillo",
    },
    {
      icon: Clock,
      title: "Experiencia",
      description: "9 años de práctica profesional",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      description: "Alta Gracia, Córdoba, Argentina",
    },
  ];

  return (
    <section
      id="sobre-mi"
      className="py-24 lg:py-32"
      data-testid="about-section"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - Par Cervical Sacro original */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 bg-white">
              <img
                src="https://biomagnetismo.store/wp-content/uploads/2026/02/Par-cervical-sacro.webp"
                alt="Par Cervical-Sacro: Equilibrio del sistema nervioso y regulación orgánica"
                className="w-full h-[400px] lg:h-[500px] object-contain"
                data-testid="about-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-heading font-bold">9+</p>
              <p className="text-sm opacity-90">Años de experiencia</p>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up animation-delay-200">
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
                Sobre Mí
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Daniel Rosa
              </h2>
              <p className="text-xl text-primary font-medium mb-4">
                Terapeuta en Biomagnetismo y Flores de Bach
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy Daniel Rosa, terapeuta especializado en biomagnetismo,
                residenciado en Alta Gracia, Córdoba, donde se encuentra mi
                consultorio. He recibido formación en diversas academias
                internacionales en México y España, destacando mi certificación
                en bioenergía magnética por el licenciado Alonso Hernández
                Cedillo.
              </p>
              <p>
                Con nueve años de experiencia en esta hermosa profesión, he sido
                testigo de transformaciones significativas en la salud de mis
                consultantes. He ayudado a personas a liberarse de dolores y
                síntomas debilitantes, así como a mejorar su bienestar general.
              </p>
              <p>
                Mi compromiso con la terapia es profundo; creo firmemente que
                esta práctica debería ser explorada por todos, ya que todos
                somos energía.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {credentials.map((credential) => (
                <div
                  key={credential.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/50"
                  data-testid={`credential-${credential.title.toLowerCase().replace(' ', '-')}`}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <credential.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {credential.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              data-testid="about-cta"
            >
              <a
                href="https://wa.me/5493547446076?text=Hola,%20quisiera%20un%20turno%20para%20la%20terapia%20de%20biomagnetismo.%20Mi%20nombre%20es%20"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar para Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
