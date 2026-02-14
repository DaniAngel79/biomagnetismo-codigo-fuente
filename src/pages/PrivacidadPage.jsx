import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacidadPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Biomagnetismo Daniel Angel</title>
        <meta name="description" content="Política de privacidad y protección de datos de Biomagnetismo Daniel Angel." />
      </Helmet>

      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg">
              En <strong>Biomagnetismo Daniel Angel</strong> nos tomamos muy en serio la protección de tus datos personales. 
              Esta política describe cómo recopilamos, usamos y protegemos tu información.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
              1. Responsable del Tratamiento
            </h2>
            <p>
              <strong>Daniel Rosa</strong><br />
              Belisario Roldan 53, Alta Gracia, Córdoba, Argentina<br />
              Email: contacto@biomagnetismo.store<br />
              Teléfono: +54 9 3547 446076
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
              2. Datos que Recopilamos
            </h2>
            <p>Podemos recopilar los siguientes datos personales:</p>
            <ul>
              <li>Nombre y apellido</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Información de salud proporcionada voluntariamente durante las consultas</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
              3. Finalidad del Tratamiento
            </h2>
            <p>Utilizamos tus datos para:</p>
            <ul>
              <li>Gestionar las citas y consultas</li>
              <li>Proporcionar los servicios de terapia solicitados</li>
              <li>Mantener un historial de tratamiento</li>
              <li>Comunicarnos contigo sobre tu tratamiento</li>
              <li>Enviar información relevante sobre nuestros servicios (solo con tu consentimiento)</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
              4. Base Legal
            </h2>
            <p>
              El tratamiento de tus datos se basa en tu consentimiento expreso y en la necesidad 
              de ejecutar el servicio solicitado.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
              5. Confidencialidad
            </h2>
            <p>
              Toda la información proporcionada durante las consultas es <strong>estrictamente confidencial</strong>. 
              No compartimos tus datos personales ni de salud con terceros bajo ninguna circunstancia, 
              excepto cuando sea requerido por ley.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
              6. Seguridad de los Datos
            </h2>
            <p>Implementamos medidas de seguridad para proteger tus datos:</p>
            <ul>
              <li>Acceso restringido a la información personal</li>
              <li>Almacenamiento seguro de registros físicos y digitales</li>
              <li>Conexiones seguras (HTTPS) en nuestro sitio web</li>
              <li>No almacenamos datos de pago en nuestros sistemas</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
              7. Tus Derechos
            </h2>
            <p>Tenés derecho a:</p>
            <ul>
              <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
            </ul>
            <p>
              Para ejercer estos derechos, contactanos a contacto@biomagnetismo.store
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
              8. Cookies
            </h2>
            <p>
              Este sitio web utiliza cookies técnicas necesarias para su funcionamiento. 
              No utilizamos cookies de seguimiento ni publicidad.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
              9. Conservación de Datos
            </h2>
            <p>
              Conservamos tus datos mientras mantengas una relación con nosotros y durante el 
              tiempo necesario para cumplir con obligaciones legales.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
              10. Cambios en la Política
            </h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios 
              significativos a través de nuestro sitio web.
            </p>

            <p className="mt-8 text-sm">
              <strong>Última actualización:</strong> Febrero 2026
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default PrivacidadPage;
