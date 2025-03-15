"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Iconos de Lucide

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detector de scroll para cambiar el tamaño del logo
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`bg-black text-white py-4 fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? "py-2" : "py-4"
    }`}>
      <div className="container mx-auto px-4">
        {/* Contenedor superior para el logo */}
        <div className="flex justify-center relative">
          {/* Logo centrado */}
          <a href="/" className="flex justify-center">
            <img 
              src="images/navbar.jpg" 
              alt="Logo" 
              className={`transition-all duration-300 ${
                scrolled ? "h-16 md:h-24" : "h-20 md:h-48"
              }`} 
            />
          </a>
          
          {/* Botón de menú (ahora posicionado absolutamente) */}
          <button
            className="md:hidden text-white focus:outline-none absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Menú de escritorio (centrado debajo del logo) */}
        <div className="hidden md:flex justify-center mt-4 space-x-32">
          <a href="/" className="hover:underline">INICIO</a>
          <a href="/productos" className="hover:underline">PRODUCTOS</a>
          <a href="/contact" className="hover:underline">CONTACTO</a>
        </div>
      </div>

      {/* Menú móvil desplegable (ahora abre desde el lado) */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full bg-black w-64 pt-16 px-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg z-50`}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col space-y-6 items-start mt-8">
          <a href="/" className="hover:underline" onClick={() => setIsOpen(false)}>INICIO</a>
          <a href="/productos" className="hover:underline" onClick={() => setIsOpen(false)}>PRODUCTOS</a>
          <a href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>CONTACTO</a>
        </div>
      </div>
      
      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;