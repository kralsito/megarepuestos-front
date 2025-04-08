"use client";

import { useState, useEffect } from "react";
import { Menu, X, LogOut } from "lucide-react"; 
import { isLoggedInAction, logOutAction } from "@/actions/auth";
import { useRouter } from "next/navigation"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
          
          {isLoggedIn && (
            <button
              className="md:hidden text-white focus:outline-none absolute right-0 top-1/2 transform -translate-y-1/2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          )}

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

        <div className="hidden md:flex justify-center mt-4 space-x-32">
          
          {isLoggedIn && (
            <>
              <a href="/" className="hover:underline hover:text-primary-yellow active:text-yellow-500 transition-colors duration-200" style={{ fontFamily: "'oktah', sans-serif" }}>INICIO</a>
              <a href="/admin/product" className="hover:underline hover:text-primary-yellow active:text-yellow-500 transition-colors duration-200" style={{ fontFamily: "'oktah', sans-serif" }}>PRODUCTOS</a>
              <a href="/admin/clients" className="hover:underline hover:text-primary-yellow active:text-yellow-500 transition-colors duration-200" style={{ fontFamily: "'oktah', sans-serif" }}>CLIENTES</a>
              <a href="/admin/brand" className="hover:underline hover:text-primary-yellow active:text-yellow-500 transition-colors duration-200" style={{ fontFamily: "'oktah', sans-serif" }}>MARCAS</a>
            </>
          )}
          
        </div>
      </div>

      {isLoggedIn && (
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
            
            <>
              <a href="/" className="hover:underline" onClick={() => setIsOpen(false)} style={{ fontFamily: "'oktah', sans-serif" }}>INICIO</a>
              <a href="/admin/product" className="hover:underline" onClick={() => setIsOpen(false)} style={{ fontFamily: "'oktah', sans-serif" }}>PRODUCTOS</a>
              <a href="/admin/clients" className="hover:underline" onClick={() => setIsOpen(false)} style={{ fontFamily: "'oktah', sans-serif" }}>CLIENTES</a>
              <a href="/admin/brand" className="hover:underline" onClick={() => setIsOpen(false)} style={{ fontFamily: "'oktah', sans-serif" }}>MARCAS</a>
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
            
          </div>
        </div>
      )}
      
      {isOpen && isLoggedIn && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;