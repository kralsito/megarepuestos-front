'use client';

import { Heart, Code, ExternalLink } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
      <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
          {/* Subtle animated background */}
          <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          </div>

          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>

          <div className="container mx-auto px-6 py-8 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  
                  {/* Copyright Section */}
                  <div className="flex items-center gap-3 text-center md:text-left">
                      <div>
                          <p className="text-sm text-white/90 font-medium">
                              &copy; {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Megarepuestos</span>
                          </p>
                          <p className="text-xs text-white/50 mt-0.5">
                              Todos los derechos reservados
                          </p>
                      </div>
                  </div>

                  {/* Links Section */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                      {/* Terms Link */}
                      <a 
                        href="/terms" 
                        className="group relative"
                        onMouseEnter={() => setHoveredLink('terms')}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                          <div className="relative backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-xl px-4 py-2 border border-white/10 hover:border-yellow-400/50 transition-all duration-300">
                              <span className="text-sm text-white/80 group-hover:text-yellow-400 transition-colors font-medium">
                                  Términos y Condiciones
                              </span>
                              {/* Animated underline */}
                              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-300 ${hoveredLink === 'terms' ? 'w-full' : 'w-0'}`}></div>
                          </div>
                      </a>

                      {/* Divider */}
                      <div className="hidden sm:block w-px h-8 bg-white/10"></div>

                      {/* Creator Link */}
                      <a 
                        href="https://www.linkedin.com/in/franco-kral-323aa2272" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative"
                        onMouseEnter={() => setHoveredLink('creator')}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                          <div className="relative backdrop-blur-sm bg-white/5 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-xl px-4 py-2 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                              <div className="flex items-center gap-2">
                                  <span className="text-sm text-white/80 group-hover:text-blue-400 transition-colors font-medium">
                                      Creado 
                                  </span>
                                  <span className="text-sm text-white/80 group-hover:text-blue-400 transition-colors font-medium">
                                      por
                                  </span>
                                  <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                      Kral Franco
                                  </span>
                                  <ExternalLink className={`w-3.5 h-3.5 text-white/40 group-hover:text-blue-400 transition-all duration-300 ${hoveredLink === 'creator' ? 'translate-x-1 -translate-y-1' : ''}`} />
                              </div>
                              {/* Animated underline */}
                              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 ${hoveredLink === 'creator' ? 'w-full' : 'w-0'}`}></div>
                          </div>
                      </a>
                  </div>
              </div>

              {/* Optional: Small decorative element at bottom */}
              <div className="mt-6 flex justify-center">
                  <div className="flex items-center gap-2 opacity-30">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/50"></div>
                      <Code className="w-4 h-4 text-white/50" />
                      <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/50"></div>
                  </div>
              </div>
          </div>

          <style jsx>{`
              @keyframes pulse-slow {
                  0%, 100% { opacity: 0.2; transform: scale(1); }
                  50% { opacity: 0.3; transform: scale(1.05); }
              }

              .animate-pulse-slow {
                  animation: pulse-slow 4s ease-in-out infinite;
              }

              .animation-delay-2000 {
                  animation-delay: 2s;
              }
          `}</style>
      </footer>
  );
};

export default Footer;
