import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingNextNav from './FloatingNextNav';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Sin esta prop de children, las páginas no se renderizan */}
        {children} 
      </main>
      <Footer />
      <FloatingNextNav />
    </div>
  );
};

export default Layout;