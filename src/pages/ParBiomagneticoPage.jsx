import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";


const ParBiomagneticoPage = () => {
  return (
    <>
      <Helmet>
        <title>El Par Biomagnético, ¿Qué es? | Biomagnetismo Daniel Angel</title>
        <meta name="description" content="Explora el biomagnetismo, la medicina del futuro. Descubre cómo los campos magnéticos positivo y negativo interactúan con el cuerpo humano." />
      </Helmet>

      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <header className="mb-12">
            <img 
              src="img/par-palma-palma.webp" 
              alt="El Par Biomagnético" 
              className="w-full h-64 object-contain bg-muted/30 rounded-2xl mb-8"
            />
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Teoría del Par Biomagnético
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <img 
              src="img/biomagnetismo-medicina-del-futuro-ph.webp" 
              alt="Campos magnéticos en el cuerpo" 
              className="float-right w-64 ml-8 mb-4 rounded-xl"
            />
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              El Biomagnetismo se puede definir como la rama de la biofísica que investiga el efecto de los campos magnéticos en los organismos vivos. Es fundamental comprender que cuando un campo magnético interactúa con nuestro organismo, lo hace sobre un conjunto de sustancias, siendo el agua la más abundante.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              A nivel macroscópico, el agua es diamagnética y parece no ser afectada por un imán. Sin embargo, esta percepción cambia debido a las moléculas disueltas en ella, que son sustancias paramagnéticas y altamente sensibles a la influencia de los campos magnéticos. Entre estas se encuentran el oxígeno, las proteínas, las enzimas, los catalizadores, los radicales libres, los clatratos y, especialmente, lo que hoy se conoce como imanes monomoleculares, como las metaloproteínas.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
              ¿Qué es la medicina del Par Biomagnético?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Las fuerzas magnéticas son las que más impactan a todos los seres vivos. Como mencionó el premio Nobel de física Richard Feynman, "ahora comprendemos que la vida misma debe ser entendida en términos de biomagnetismo".
            </p>

            <p className="text-muted-foreground leading-relaxed">
              La Medicina del Par Biomagnético representa un enfoque innovador y distinto a cualquier otro método médico conocido hasta ahora. Su objetivo es tratar las enfermedades que nos afectan mediante la aplicación de fuerzas magnéticas de intensidad moderada en puntos específicos del cuerpo, utilizando un enfoque bipolar y manteniendo una relación clara entre las fuerzas aplicadas.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 my-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Par Biomagnético: Uno de los descubrimientos más importantes de la historia de la medicina
              </h3>
              <p className="text-muted-foreground">
                El Par Biomagnético representa un avance significativo en la medicina energética. Se caracteriza por la corrección de los desequilibrios en la homeostasis del cuerpo mediante la aplicación de energías magnéticas de manera bipolar en puntos específicos durante un corto período de tiempo.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
              Expansión y difusión del Par Biomagnético
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              En 1988, el Dr. Isaac Goiz Duran, tras una capacitación con el Dr. Broeringmeyer, propuso la aplicación de fuerzas magnéticas de forma bipolar, dando origen al concepto de Par Biomagnético. Este término describe las distorsiones energéticas en el cuerpo que se relacionan entre sí y surgen ante desequilibrios que provocan enfermedades.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              La corrección de estas alteraciones se realiza mediante fuerzas magnéticas que coincidan en signo con la distorsión, utilizando imanes de más de 1000 Gauss, lo que ha demostrado ser efectivo en diversas patologías.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
              Médicos Históricos y el Magnetismo en la Salud
            </h2>

            <ul className="space-y-4 text-muted-foreground">
              <li><strong>Franz Mesmer:</strong> Considerado el pionero del magnetismo, desarrolló la teoría del "magnetismo animal".</li>
              <li><strong>Samuel Hahnemann:</strong> Fundador de la homeopatía, se interesó en el magnetismo y su influencia en la salud.</li>
              <li><strong>James Braid:</strong> Se interesó en el magnetismo antes de desarrollar su técnica de hipnosis.</li>
              <li><strong>Richard von Krafft-Ebing:</strong> Psiquiatra que exploró el magnetismo en el contexto de la salud mental.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary rounded-2xl text-primary-foreground text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">¿Querés experimentar los beneficios del Biomagnetismo?</h3>
            <p className="mb-6 opacity-90">Agenda tu consulta y comienza tu camino hacia el bienestar.</p>
            <Button asChild className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
              <a href="https://wa.me/5493547446076?text=Hola,%20quisiera%20un%20turno%20para%20la%20terapia%20de%20biomagnetismo.%20Mi%20nombre%20es%20" target="_blank" rel="noopener noreferrer">
                Agendar por WhatsApp <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </div>

        </div>
      </article>
    </>
  );
};

export default ParBiomagneticoPage;