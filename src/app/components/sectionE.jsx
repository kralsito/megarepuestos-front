'use client';

import { useEffect, useRef, useState } from 'react';

const SectionE = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/fondoquienessomos.jpg')" }}
      >
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-slate-900/85"></div>
        
        {/* Animated light particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/60 rounded-full animate-float-slow blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-float-medium blur-sm"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-purple-400/40 rounded-full animate-float-fast blur-sm"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-yellow-300/70 rounded-full animate-float-slow blur-sm"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div 
            className={`w-full lg:w-3/5 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Decorative top accent */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>

            {/* Title with modern styling */}
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-tight"
              style={{ fontFamily: "'oktah', sans-serif" }}
            >
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-lg animate-gradient-shift">
                ¿Quiénes
              </span>
              <br />
              <span className="inline-block text-white drop-shadow-2xl">
                somos?
              </span>
            </h2>

            {/* Content card with glassmorphism */}
            <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">
              <p 
                className="text-white/95 text-lg md:text-xl leading-relaxed mb-6 font-light"
                style={{ fontFamily: "'oktah', sans-serif" }}
              >
                En <span className="font-bold text-yellow-400">Megarepuestos</span>, nos especializamos en la provisión de repuestos para celulares de todas las marcas y modelos. 
                Ubicados en <span className="text-yellow-300">Berazategui y Quilmes</span>, trabajamos con un amplio catálogo de piezas de alta calidad para garantizar soluciones eficientes a nuestros clientes.
              </p>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>
              
              <p 
                className="text-white/90 text-lg md:text-xl leading-relaxed font-light"
                style={{ fontFamily: "'oktah', sans-serif" }}
              >
                Nuestro compromiso es ofrecer productos confiables y un servicio excepcional, ayudando a técnicos y comercios a mantener sus dispositivos en óptimas condiciones. 
                Con años de experiencia en el rubro, somos tu mejor opción en repuestos para celulares.
              </p>

              {/* Stats or badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">+5</div>
                  <div className="text-xs md:text-sm text-white/70">Años</div>
                </div>
                <div className="text-center border-x border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">2</div>
                  <div className="text-xs md:text-sm text-white/70">Sucursales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">100%</div>
                  <div className="text-xs md:text-sm text-white/70">Calidad</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div 
            className={`w-full lg:w-2/5 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute inset-0 -m-4">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-blue-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse-slow"></div>
              </div>
              
              {/* Rotating ring */}
              <div className="absolute inset-0 -m-2 border-2 border-dashed border-yellow-400/30 rounded-full animate-spin-slow"></div>

              {/* Image container with modern effects */}
              <div className="relative backdrop-blur-sm bg-white/10 p-2 rounded-3xl border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-blue-500/10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  
                  <img 
                    src="/images/megarepuestos.png" 
                    alt="Megarepuestos" 
                    className="rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover shadow-xl transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-yellow-400/50 rounded-tr-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-yellow-400/50 rounded-bl-2xl"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-blue-400/0 group-hover:from-yellow-400/10 group-hover:via-yellow-400/20 group-hover:to-blue-400/10 transition-all duration-700"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 backdrop-blur-md bg-yellow-400/90 text-slate-900 px-6 py-3 rounded-full shadow-xl border-2 border-white/50 font-bold text-sm md:text-base transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                Tu mejor opción ✨
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(20px, -20px) scale(1.2); opacity: 1; }
        }

        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-15px, 15px) scale(1.3); opacity: 0.9; }
        }

        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(25px, 10px) scale(1.1); opacity: 0.8; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default SectionE;
