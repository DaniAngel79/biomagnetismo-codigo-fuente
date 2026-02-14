
import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";


const OrigenBiomagnetismoPage = () => {
  return (
    <>
      <Helmet>
        <title>Origen del Biomagnetismo | Dr. Isaac Goiz | Daniel Angel</title>
        <meta name="description" content="El Dr. Isaac Goiz Durán es un médico pionero que desarrolló la técnica del Par Biomagnético para restaurar el equilibrio del pH." />
      </Helmet>

      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <header className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <img 
                src="img/sesion-dr-goitz.webp" 
                alt="Dr. Isaac Goiz" 
                className="w-full rounded-2xl"
              />
              <img 
                src="img/adn-biomagnetismo-energia-celular.webp" 
                alt="ADN y Biomagnetismo" 
                className="w-full rounded-2xl"
              />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Origen del Biomagnetismo
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              El Biomagnetismo ha estado presente a lo largo de la historia y en diversas civilizaciones. Existen vestigios documentados en culturas tan antiguas como la china, hindú, egipcia y árabe. Un ejemplo notable es el de Cleopatra, quien utilizaba imanes para realzar y mantener su belleza.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Sin embargo, fue el destacado médico cirujano mexicano <strong>Isaac Goiz</strong> quien investigó y descubrió lo que hoy conocemos como el Par Biomagnético en su totalidad. A través de diversas investigaciones, logró establecer la conexión entre los campos magnéticos que existen en nuestro interior y el desarrollo de enfermedades humanas.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
              Fundamentos del Biomagnetismo
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              El biomagnetismo fue descubierto por el Dr. Isaac Goiz y se utiliza para tratar una amplia gama de patologías, desde resfriados hasta tumores. A través de los imanes, se busca aliviar síntomas como la depresión y las jaquecas, que pueden afectar la calidad de vida.
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 my-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                El cuerpo y el pH
              </h3>
              <p className="text-muted-foreground">
                El cuerpo presenta distorsiones en el pH de los órganos cuando hay enfermedad. En un estado de alcalinidad, pueden existir disfunciones, bacterias patógenas o no patógenas, y parásitos. En un estado de acidez, pueden presentarse disfunciones orgánicas, virus patógenos y hongos.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
              Proceso de Tratamiento
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              El objetivo del biomagnetismo es restaurar el pH, creando un ambiente desfavorable para los microorganismos patógenos, lo que facilita su eliminación. Durante las sesiones, que tienen una duración aproximada de una hora, se evalúa la necesidad de múltiples sesiones según el caso; algunos pacientes pueden responder favorablemente tras una sola sesión.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Es fundamental señalar que el biomagnetismo es una <strong>terapia complementaria</strong> que busca acompañar los tratamientos de la medicina tradicional, mejorando así la evolución de los pacientes.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
              ¿Cómo se desequilibra el pH?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              El pH puede alterarse por diversas emociones. El Dr. Ryke Geerd Hamer, oncólogo, investigó esta relación y descubrió que el pH se distorsiona debido a emociones que cumplen con cuatro criterios:
            </p>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Emoción estresante</li>
              <li>• Vivida en soledad</li>
              <li>• Sin solución aparente</li>
              <li>• Desestabilizadora</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
              ¿Quiénes pueden beneficiarse de la terapia?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              El biomagnetismo está indicado para todas las personas, así como para animales y plantas, ya que todos poseemos energía eléctrica. Esta terapia es energética, similar a la homeopatía y la acupuntura, y no requiere medicación para que el paciente alcance la homeostasis.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 my-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Aplicaciones en la vida cotidiana
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Niños:</strong> Ayuda a tratar patologías que no pueden expresar verbalmente.</li>
                <li><strong>Adultos:</strong> Alivia dolencias relacionadas con el trabajo, problemas de sueño, estrés, mala digestión, fatiga extrema, obesidad, infecciones, jaquecas, vértigos y mareos.</li>
                <li><strong>Enfermedades autoinmunes:</strong> VIH, artritis, lupus, hipertiroidismo.</li>
                <li><strong>Sistema digestivo:</strong> Colon irritable y enfermedades hepáticas.</li>
              </ul>
            </div>
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

export default OrigenBiomagnetismoPage;