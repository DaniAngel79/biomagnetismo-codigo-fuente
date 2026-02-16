import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

const PrivacidadPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Biomagnetismo Daniel Angel</title>
        <meta name="description" content="Conozca cómo protegemos sus datos personales y garantizamos la confidencialidad en Biomagnetismo Daniel Angel." />
        <link rel="canonical" href="https://biomagnetismo.store/privacidad" />
      </Helmet>

      <article className="pt-32 pb-16 bg-white min-h-screen text-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <header className="mb-12 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-3 mb-4 text-emerald-600">
              <ShieldCheck size={32} />
              <span className="font-bold uppercase tracking-widest text-sm">Privacidad Segura</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-slate-500">
              En <strong>Biomagnetismo Daniel Angel</strong>, la confidencialidad de tu proceso de bienestar es nuestra prioridad absoluta.
            </p>
          </header>

          <div className="space-y-12">
            {/* SECCION 1 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-emerald-500" size={20} /> 1. Responsable del Tratamiento
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-sm leading-relaxed">
                <p><strong>Responsable:</strong> Daniel Angel (Daniel Rosa)</p>
                <p><strong>Domicilio Profesional:</strong> Belisario Roldan 53, Alta Gracia, Córdoba, Argentina</p>
                <p><strong>Contacto:</strong> contacto@biomagnetismo.store</p>
              </div>
            </section>

            {/* SECCION 2 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Datos y Finalidad</h2>
              <p className="mb-4">Recopilamos datos mínimos necesarios para la prestación del servicio:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Identificación:</strong> Nombre y contacto para gestión de turnos.</li>
                <li><strong>Datos Sensibles:</strong> Información de bienestar proporcionada en consulta. Estos datos se tratan bajo secreto profesional y no se almacenan en servidores web públicos.</li>
                <li><strong>Análisis:</strong> Datos de navegación (IP, dispositivo) para mejorar la UX del sitio.</li>
              </ul>
            </section>

            {/* SECCION 3 - TRACKING (CRÍTICO) */}
            <section className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Eye className="text-emerald-600" size={20} /> 3. Cookies y Tecnologías de Seguimiento
              </h2>
              <p className="text-sm leading-relaxed text-slate-700">
                Este sitio utiliza <strong>Meta Pixel</strong> y <strong>Google Analytics</strong>. Estas herramientas nos permiten medir el rendimiento de nuestras comunicaciones y entender qué servicios interesan más a nuestros usuarios. 
                <br /><br />
                Al navegar, aceptas que estas plataformas recopilen datos de interacción de forma seudonimizada para optimizar nuestra publicidad y contenidos. Puedes desactivar las cookies en la configuración de tu navegador.
              </p>
            </section>

            {/* SECCION 4 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Lock className="text-emerald-500" size={20} /> 4. Seguridad y Confidencialidad
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Aplicamos el principio de <strong>integridad y confidencialidad</strong>:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="bg-slate-50 p-4 rounded-xl text-xs font-medium">Cifrado SSL (HTTPS) en todo el sitio.</li>
                <li className="bg-slate-50 p-4 rounded-xl text-xs font-medium">Prohibición de venta de datos a terceros.</li>
                <li className="bg-slate-50 p-4 rounded-xl text-xs font-medium">Acceso restringido a historias de consulta.</li>
                <li className="bg-slate-50 p-4 rounded-xl text-xs font-medium">Cumplimiento con Ley 25.326 (Argentina).</li>
              </ul>
            </section>

            {/* SECCION 5 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Tus Derechos (ARCO)</h2>
              <p className="text-sm mb-6">
                Puedes solicitar el acceso, rectificación, cancelación u oposición al tratamiento de tus datos enviando un correo a <strong>contacto@biomagnetismo.store</strong>. Tu solicitud será procesada en un plazo máximo de 10 días hábiles.
              </p>
              <div className="p-4 bg-slate-900 text-white rounded-2xl text-center text-xs font-bold uppercase tracking-widest">
                Última actualización: 15 de Febrero, 2026
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};

export default PrivacidadPage;