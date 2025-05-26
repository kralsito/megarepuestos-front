"use client";

import { useState, useEffect } from "react";
import { Menu, X, LogOut, ChevronDown, ChevronUp } from "lucide-react"; 
import { isLoggedInAction, logOutAction } from "@/actions/auth";
import { useRouter } from "next/navigation"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedIn = await isLoggedInAction();
        setIsLoggedIn(loggedIn);
      } catch (error) {
        console.error("Error al verificar estado de login:", error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await logOutAction();
      setIsLoggedIn(false);
      router.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className={`bg-black text-white py-4 fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? "py-2" : "py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center relative">
          <a href="/" className="flex justify-center">
            <img 
              src="/images/navbar.jpg" 
              alt="Logo" 
              className={`transition-all duration-300 ${
                scrolled ? "h-16 md:h-24" : "h-20 md:h-48"
              }`} 
            />
          </a>
          
          <button
            className="md:hidden text-white focus:outline-none absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu hamburguesa"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-yellow focus:outline-none"
              title="Cerrar sesión"
            >
              <LogOut className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Menú de navegación para escritorio */}
        <div className="hidden md:flex justify-center mt-4 space-x-16">
          <a href="/" className="hover:underline hover:text-primary-yellow active:text-yellow-500 transition-colors duration-200" style={{ fontFamily: "'oktah', sans-serif" }}>INICIO</a>
          
          <a href="/replacements" className="hover:underline hover:text-primary-yellow active:text-yellow-500 transition-colors duration-200" style={{ fontFamily: "'oktah', sans-serif" }}>REPUESTOS</a>
          
          {isLoggedIn && (
            <div className="relative group">
              <button 
                onClick={() => setAdminMenuOpen(!adminMenuOpen)}
                className="flex items-center hover:underline hover:text-primary-yellow focus:outline-none transition-colors duration-200"
                style={{ fontFamily: "'oktah', sans-serif" }}
              >
                ADMIN {adminMenuOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
              </button>
              
              {adminMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-black border border-gray-800 shadow-lg rounded-md py-2 z-50">
                  <a href="/admin/product" className="block px-4 py-2 hover:bg-gray-800 hover:text-primary-yellow" style={{ fontFamily: "'oktah', sans-serif" }}>PRODUCTOS</a>
                  <a href="/admin/clients" className="block px-4 py-2 hover:bg-gray-800 hover:text-primary-yellow" style={{ fontFamily: "'oktah', sans-serif" }}>CLIENTES</a>
                  <a href="/admin/replacement" className="block px-4 py-2 hover:bg-gray-800 hover:text-primary-yellow" style={{ fontFamily: "'oktah', sans-serif" }}>REP-ADMIN</a>
                  <a href="/admin/brand" className="block px-4 py-2 hover:bg-gray-800 hover:text-primary-yellow" style={{ fontFamily: "'oktah', sans-serif" }}>MARCAS</a>
                  <a href="/admin/typereplacement" className="block px-4 py-2 hover:bg-gray-800 hover:text-primary-yellow" style={{ fontFamily: "'oktah', sans-serif" }}>TIPO-REP</a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full bg-black w-64 pt-16 px-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg z-50`}
        aria-label="Menu hamburguesa"
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={() => setIsOpen(false)}
          aria-label="Menu hamburguesa"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col space-y-6 items-start mt-8">
          <a href="/" className="hover:underline" onClick={() => setIsOpen(false)} style={{ fontFamily: "'oktah', sans-serif" }}>INICIO</a>
          
          <a href="/replacements" className="hover:underline" onClick={() => setIsOpen(false)} style={{ fontFamily: "'oktah', sans-serif" }}>REPUESTOS</a>
          
          {isLoggedIn && (
            <>
              <div className="w-full">
                <button 
                  onClick={() => setAdminMenuOpen(!adminMenuOpen)}
                  className="flex items-center hover:underline focus:outline-none"
                  style={{ fontFamily: "'oktah', sans-serif" }}
                >
                  ADMIN {adminMenuOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                </button>
                
                {adminMenuOpen && (
                  <div className="pl-4 mt-2 space-y-4">
                    <a href="/admin/product" className="block hover:underline" onClick={() => setIsOpen(false)} style={{ fontFamily: "'oktah', sans-serif" }}>PRODUCTOS</a>
                    <a href="/admin/clients" className="block hover:underline" onClick={() => setIsOpen(false)} style={{ fontFamily: "'oktah', sans-serif" }}>CLIENTES</a>
                    <a href="/admin/replacement" className="block hover:underline" onClick={() => setIsOpen(false)} style={{ fontFamily: "'oktah', sans-serif" }}>REP-ADMIN</a>
                    <a href="/admin/brand" className="block hover:underline" onClick={() => setIsOpen(false)} style={{ fontFamily: "'oktah', sans-serif" }}>MARCAS</a>
                    <a href="/admin/typereplacement" className="block hover:underline" onClick={() => setIsOpen(false)} style={{ fontFamily: "'oktah', sans-serif" }}>TIPO-REP</a>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 hover:underline"
                style={{ fontFamily: "'oktah', sans-serif" }}
              >
                <LogOut className="w-5 h-5" />
                <span>CERRAR SESIÓN</span>
              </button>
            </>
          )}
        </div>
      </div>
      
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