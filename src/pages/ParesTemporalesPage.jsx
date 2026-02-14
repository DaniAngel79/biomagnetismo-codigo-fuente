import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

const ParesTemporalesPage = () => {
  return (
    <>
      <Helmet>
        <title>Pares Temporales | Biomagnetismo para Lesiones | Daniel Angel</title>
        <meta name="description" content="Descubre los beneficios de los Pares Temporales para la recuperación de dolores y lesiones. Aplicación en traumatología." />
      </Helmet>

      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <header className="mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center">
              Pares Temporales
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Imagen Hombro */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-sm mb-3">
                  <img 
                    src="img/par-hombro-hombro.webp"
                    alt="Par Temporal Hombro-Hombro" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground italic">Hombro - Hombro</span>
              </div>

              {/* Imagen Codo */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-sm mb-3">
                  <img 
                    src="img/par-codo-codo.webp"
                    alt="Par Temporal Codo-Codo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground italic">Codo - Codo</span>
              </div>

              {/* Imagen Tobillo */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-sm mb-3">
                  <img 
                    src="img/par-tobillo-tobillo.webp"
                    alt="Par Temporal Tobillo-Tobillo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground italic">Tobillo - Tobillo</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              ¿En qué consiste el Par Temporal?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Los osteoblastos son un producto final de la diferenciación celular y aún así reaccionan muy favorablemente al magnetismo. Tanto más deberán responder al mismo y especialmente al Nivel Energético Natural otras células más primitivas en cuanto a su especialización y diferenciación como son las células epiteliales y del tejido conjuntivo.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Existen numerosas publicaciones en la literatura médica especializada sobre los beneficios de la aplicación de fuerzas magnéticas para la consolidación precoz de fracturas e intervenciones traumatológicas.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 my-8">
              <p className="text-muted-foreground">
                A veces no es suficiente con la aplicación del Par Temporal clásicamente descrito y resulta muy conveniente aplicar fuerzas magnéticas de polaridad contraria para mantener el <strong>pH neutro en la zona afectada</strong> hasta que el proceso se resuelva.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
              Beneficios del Par Temporal en lesiones traumatológicas
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Recuerdo que una vez llegó un jugador de futbol a consulta, con una rotura muscular del gemelo de la pierna derecha la cual no podía ni apoyar y con un dolor muy agudo que solo cedió pobremente a la aplicación del par temporal correspondiente.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Le coloqué entonces una venda elástica y dentro de la misma introduje dos imanes enfrentados y de polaridad contraria con el objetivo de mantener el Nivel Energético Neutro (NEN) en la zona. Le indiqué que tuviera colocado el vendaje durante una semana.
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 my-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Resultado sorprendente</h3>
              <p className="text-muted-foreground">
                El consultante volvió a los <strong>cinco días</strong> completamente recuperado. Cuando esta misma lesión, normalmente necesita al menos <strong>tres meses</strong> con antiinflamatorios y reposo.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Desde entonces he seguido el mismo procedimiento en múltiples lesiones músculo-esqueléticas con un resultado siempre muy satisfactorio. Este "Par María" o Temporal, posee aplicaciones muy interesantes en las <strong>lesiones deportivas</strong> ya que pueden acelerar enormemente su resolución.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
              Aplicaciones comunes
            </h2>

            <ul className="space-y-3 text-muted-foreground">
              <li>• Lesiones musculares</li>
              <li>• Esguinces y torceduras</li>
              <li>• Fracturas (aceleración de consolidación)</li>
              <li>• Dolores articulares</li>
              <li>• Lesiones deportivas</li>
              <li>• Problemas de columna vertebral</li>
            </ul>
          </div>

          <div className="mt-16 p-8 bg-primary rounded-2xl text-primary-foreground text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">¿Tenés una lesión que no mejora?</h3>
            <p className="mb-6 opacity-90">Los pares temporales pueden acelerar tu recuperación.</p>
            <Button asChild className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
              <a href="https://wa.me/5493547446076?text=Hola,%20quisiera%20un%20turno%20para%20la%20terapia%20de%20biomagnetismo.%20Mi%20nombre%20es%20" target="_blank" rel="noopener noreferrer">
                Agendar Consulta <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ParesTemporalesPage;