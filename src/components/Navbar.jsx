import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Flower, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: "Inicio", path: "/" },
    {
      title: "Biomagnetismo",
      submenu: [
        { title: "¿Qué es?", path: "/biomagnetismo" },
        { title: "El Par Biomagnético", path: "/par-biomagnetico" },
        { title: "Pares Temporales", path: "/pares-temporales" },
        { title: "Alergias", path: "/alergias" },
        { title: "Origen", path: "/origen-biomagnetismo" },
        { title: "Infantil", path: "/biomagnetismo-infantil" },
        { title: "Campos Magnéticos", path: "/campos-magneticos" },
      ]
    },
    {
      title: "Flores de Bach",
      submenu: [
        { title: "Terapia Floral", path: "/flores-bach" },
        { title: "Catálogo de Flores", path: "/catalogo-flores" },
        { title: "Consultas Online", path: "/consultas-online" },
      ]
    },
    { title: "Contacto", path: "/contacto" }
  ];

  return (
    <nav className="fixed w-full z-[100] bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-[110]">
          <Flower className="text-emerald-600 h-8 w-8" />
          <span className="text-xl font-bold text-slate-800">Biomagnetismo</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {menuItems.map((item) => (
            <div key={item.title} className="relative group h-full flex items-center">
              {item.submenu ? (
                <>
                  <button className="flex items-center gap-1 text-sm font-bold text-slate-600 group-hover:text-emerald-600 transition-colors py-8">
                    {item.title} <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-[80px] left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg ${
                          location.pathname === sub.path ? "bg-emerald-50 text-emerald-700" : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                        }`}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={item.path} className={`text-sm font-bold ${location.pathname === item.path ? "text-emerald-600" : "text-slate-600 hover:text-emerald-600"}`}>
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden p-2 text-slate-600 z-[110]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-white z-[100] transition-transform duration-300 lg:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="pt-24 px-6 h-full overflow-y-auto">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <div key={item.title} className="border-b border-slate-50 pb-4">
                {item.submenu ? (
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{item.title}</span>
                    <div className="grid grid-cols-1 gap-2 pl-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`py-2 text-base font-medium ${location.pathname === sub.path ? "text-emerald-700" : "text-slate-600"}`}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-bold ${location.pathname === item.path ? "text-emerald-600" : "text-slate-800"}`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;