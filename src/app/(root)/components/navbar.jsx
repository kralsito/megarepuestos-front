"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Iconos de Lucide

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="/">
          <img src="images/megarepuestos.png" alt="Logo" className="h-20 md:h-48" />
        </a>

        {/* Botón de menú (visible solo en móviles) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Menú de escritorio (visible en pantallas grandes) */}
        <div className="hidden md:flex space-x-32">
          <a href="/" className="hover:underline">INICIO</a>
          <a href="/productos" className="hover:underline">PRODUCTOS</a>
          <a href="/contact" className="hover:underline">CONTACTO</a>
        </div>
      </div>

      {/* Menú móvil desplegable (visible solo en pantallas pequeñas) */}
      <div
        className={`md:hidden flex flex-col items-center bg-black py-4 space-y-4 transition-all duration-300 ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <a href="/" className="hover:underline" onClick={() => setIsOpen(false)}>INICIO</a>
        <a href="/productos" className="hover:underline" onClick={() => setIsOpen(false)}>PRODUCTOS</a>
        <a href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>CONTACTO</a>
      </div>
    </nav>
  );
};

export default Navbar;
