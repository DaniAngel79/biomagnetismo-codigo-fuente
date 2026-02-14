import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingNextNav from './FloatingNextNav';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {/* El componente debe ir aquí, al final, para que flote sobre todo */}
      <FloatingNextNav />
    </div>
  );
};

export default Layout;