import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | Biomagnetismo Daniel Angel</title>
      </Helmet>

      <section className="pt-32 pb-16 min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-heading text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Página no encontrada
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Lo sentimos, la página que buscás no existe o fue movida.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-8">
            <Link to="/">
              <Home className="mr-2" size={18} />
              Volver al Inicio
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
