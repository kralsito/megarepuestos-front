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
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/95 backdrop-blur-lg shadow-2xl shadow-black/50" 
          : "bg-gradient-to-b from-black via-black/95 to-black/80 backdrop-blur-sm"
      }`}>
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className={`flex justify-center relative transition-all duration-500 ${
            scrolled ? "py-2" : "py-4"
          }`}>
            {/* Logo */}
            <a href="/" className="flex justify-center group relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 rounded-2xl blur-xl transition-opacity duration-500 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}></div>
              <img 
                src="/images/navbar.png" 
                alt="Logo" 
                className={`relative transition-all duration-500 rounded-lg ${
                  scrolled ? "h-12 sm:h-16 md:h-20" : "h-16 sm:h-24 md:h-40 lg:h-48"
                } group-hover:scale-105`} 
              />
            </a>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/50 flex items-center justify-center transition-all duration-300 group"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu hamburguesa"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors" />
              ) : (
                <Menu className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors" />
              )}
            </button>

            {/* Desktop logout button */}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-400/50 transition-all duration-300 group"
                title="Cerrar sesión"
              >
                <LogOut className="w-5 h-5 text-white group-hover:text-red-400 transition-colors" />
                <span className="text-sm text-white/80 group-hover:text-red-400 font-medium transition-colors">Salir</span>
              </button>
            )}
          </div>

          {/* Desktop navigation menu */}
          <div className={`hidden md:flex justify-center items-center gap-8 transition-all duration-500 ${
            scrolled ? "pb-3 pt-2" : "pb-4 pt-2"
          }`}>
            {/* Home link */}
            <a 
              href="/" 
              className="relative px-2 py-2 text-white/90 hover:text-yellow-400 font-semibold text-sm tracking-wide transition-all duration-300 group"
              style={{ fontFamily: "'oktah', sans-serif" }}
            >
              INICIO
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
            
            {/* Replacements link */}
            <a 
              href="/replacements" 
              className="relative px-2 py-2 text-white/90 hover:text-yellow-400 font-semibold text-sm tracking-wide transition-all duration-300 group"
              style={{ fontFamily: "'oktah', sans-serif" }}
            >
              REPUESTOS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
            
            {/* Admin dropdown */}
            {isLoggedIn && (
              <div className="relative">
                <button 
                  onClick={() => setAdminMenuOpen(!adminMenuOpen)}
                  className="flex items-center gap-2 px-2 py-2 text-white/90 hover:text-yellow-400 font-semibold text-sm tracking-wide transition-all duration-300 group"
                  style={{ fontFamily: "'oktah', sans-serif" }}
                >
                  ADMIN 
                  {adminMenuOpen ? (
                    <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  )}
                </button>
                
                {/* Desktop dropdown menu */}
                <div className={`absolute top-full left-0 mt-3 w-56 transition-all duration-300 origin-top ${
                  adminMenuOpen 
                    ? "opacity-100 scale-100 pointer-events-auto" 
                    : "opacity-0 scale-95 pointer-events-none"
                }`}>
                  <div className="backdrop-blur-xl bg-black/95 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
                    {/* Decorative top accent */}
                    <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
                    
                    <div className="py-2">
                      <a 
                        href="/admin/product" 
                        className="block px-4 py-3 text-white/80 hover:text-yellow-400 hover:bg-white/5 transition-all duration-200 border-b border-white/5"
                        style={{ fontFamily: "'oktah', sans-serif" }}
                      >
                        <span className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50"></div>
                          PRODUCTOS
                        </span>
                      </a>
                      <a 
                        href="/admin/clients" 
                        className="block px-4 py-3 text-white/80 hover:text-yellow-400 hover:bg-white/5 transition-all duration-200 border-b border-white/5"
                        style={{ fontFamily: "'oktah', sans-serif" }}
                      >
                        <span className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50"></div>
                          CLIENTES
                        </span>
                      </a>
                      <a 
                        href="/admin/replacement" 
                        className="block px-4 py-3 text-white/80 hover:text-yellow-400 hover:bg-white/5 transition-all duration-200 border-b border-white/5"
                        style={{ fontFamily: "'oktah', sans-serif" }}
                      >
                        <span className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50"></div>
                          REP-ADMIN
                        </span>
                      </a>
                      <a 
                        href="/admin/brand" 
                        className="block px-4 py-3 text-white/80 hover:text-yellow-400 hover:bg-white/5 transition-all duration-200 border-b border-white/5"
                        style={{ fontFamily: "'oktah', sans-serif" }}
                      >
                        <span className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50"></div>
                          MARCAS
                        </span>
                      </a>
                      <a 
                        href="/admin/typereplacement" 
                        className="block px-4 py-3 text-white/80 hover:text-yellow-400 hover:bg-white/5 transition-all duration-200"
                        style={{ fontFamily: "'oktah', sans-serif" }}
                      >
                        <span className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50"></div>
                          TIPO-REP
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
      </nav>

      {/* Mobile menu sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] transform transition-all duration-500 ease-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full backdrop-blur-2xl bg-gradient-to-b from-black via-slate-950 to-black border-l border-white/10 shadow-2xl">
          {/* Decorative side accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-400"></div>
          
          {/* Header */}
          <div className="relative p-6 border-b border-white/10">
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-400/50 flex items-center justify-center transition-all duration-300 group"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5 text-white group-hover:text-red-400 transition-colors" />
            </button>
            
            <div className="pr-12">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400" style={{ fontFamily: "'oktah', sans-serif" }}>
                MENÚ
              </h3>
              <p className="text-xs text-white/50 mt-1">Megarepuestos</p>
            </div>
          </div>
          
          {/* Menu items */}
          <div className="flex flex-col p-6 space-y-2 overflow-y-auto h-[calc(100%-120px)]">
            <a 
              href="/" 
              className="group relative px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/50 transition-all duration-300" 
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center gap-3 text-white/90 group-hover:text-yellow-400 font-semibold text-sm transition-colors" style={{ fontFamily: "'oktah', sans-serif" }}>
                <div className="w-2 h-2 rounded-full bg-yellow-400/50 group-hover:bg-yellow-400 transition-colors"></div>
                INICIO
              </span>
            </a>
            
            <a 
              href="/replacements" 
              className="group relative px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/50 transition-all duration-300" 
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center gap-3 text-white/90 group-hover:text-yellow-400 font-semibold text-sm transition-colors" style={{ fontFamily: "'oktah', sans-serif" }}>
                <div className="w-2 h-2 rounded-full bg-yellow-400/50 group-hover:bg-yellow-400 transition-colors"></div>
                REPUESTOS
              </span>
            </a>
            
            {isLoggedIn && (
              <>
                {/* Admin section */}
                <div className="pt-2">
                  <button 
                    onClick={() => setAdminMenuOpen(!adminMenuOpen)}
                    className="w-full group relative px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
                  >
                    <span className="flex items-center justify-between text-white/90 group-hover:text-yellow-400 font-semibold text-sm transition-colors" style={{ fontFamily: "'oktah', sans-serif" }}>
                      <span className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-400/50 group-hover:bg-yellow-400 transition-colors"></div>
                        ADMIN
                      </span>
                      {adminMenuOpen ? (
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                      )}
                    </span>
                  </button>
                  
                  {/* Mobile admin submenu */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    adminMenuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}>
                    <div className="space-y-1 pl-4">
                      <a 
                        href="/admin/product" 
                        className="block px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-yellow-400 text-sm transition-all duration-200" 
                        onClick={() => setIsOpen(false)}
                        style={{ fontFamily: "'oktah', sans-serif" }}
                      >
                        <span className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-yellow-400/50"></div>
                          PRODUCTOS
                        </span>
                      </a>
                      <a 
                        href="/admin/clients" 
                        className="block px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-yellow-400 text-sm transition-all duration-200" 
                        onClick={() => setIsOpen(false)}
                        style={{ fontFamily: "'oktah', sans-serif" }}
                      >
                        <span className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-yellow-400/50"></div>
                          CLIENTES
                        </span>
                      </a>
                      <a 
                        href="/admin/replacement" 
                        className="block px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-yellow-400 text-sm transition-all duration-200" 
                        onClick={() => setIsOpen(false)}
                        style={{ fontFamily: "'oktah', sans-serif" }}
                      >
                        <span className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-yellow-400/50"></div>
                          REP-ADMIN
                        </span>
                      </a>
                      <a 
                        href="/admin/brand" 
                        className="block px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-yellow-400 text-sm transition-all duration-200" 
                        onClick={() => setIsOpen(false)}
                        style={{ fontFamily: "'oktah', sans-serif" }}
                      >
                        <span className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-yellow-400/50"></div>
                          MARCAS
                        </span>
                      </a>
                      <a 
                        href="/admin/typereplacement" 
                        className="block px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-yellow-400 text-sm transition-all duration-200" 
                        onClick={() => setIsOpen(false)}
                        style={{ fontFamily: "'oktah', sans-serif" }}
                      >
                        <span className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-yellow-400/50"></div>
                          TIPO-REP
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Logout button */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full group px-4 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-400/20 hover:border-red-400/50 transition-all duration-300"
                  >
                    <span className="flex items-center gap-3 text-red-400 group-hover:text-red-300 font-semibold text-sm transition-colors" style={{ fontFamily: "'oktah', sans-serif" }}>
                      <LogOut className="w-5 h-5" />
                      CERRAR SESIÓN
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;