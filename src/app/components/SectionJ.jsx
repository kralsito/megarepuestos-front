'use client';

import { useState } from 'react';
import { Smartphone, CheckCircle, Sparkles } from 'lucide-react';

const SectionJ = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const repuestos = [
    { icon: "📱", text: "Pantallas LCD y OLED de alta calidad" },
    { icon: "🔋", text: "Baterías originales y compatibles" },
    { icon: "🔌", text: "Flex de carga y conectores" },
    { icon: "📷", text: "Cámaras traseras y frontales" },
    { icon: "🔊", text: "Altavoces y auriculares premium" },
    { icon: "⚡", text: "Conectores de carga universales" },
    { icon: "🛡️", text: "Tapas traseras resistentes" }
  ];

  const marcas = [
    "Samsung", "iPhone", "Motorola", "Xiaomi", 
    "LG", "Huawei", "TCL", "Alcatel", 
    "ZTE", "TecnoSpark", "Nokia", "Yaxun"
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: "'oktah', sans-serif" }}>
            <span className="text-white">¿Por qué elegir nuestros</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 animate-gradient-shift">
              repuestos para celulares?
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'oktah', sans-serif" }}>
            En <span className="text-yellow-400 font-bold">Mega Repuestos</span> ofrecemos repuestos para celulares con garantía, 
            stock permanente y atención personalizada para técnicos.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Card 1 - Repuestos disponibles */}
          <div 
            className="group relative"
            onMouseEnter={() => setHoveredCard('repuestos')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-full backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 transition-opacity duration-500 ${hoveredCard === 'repuestos' ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Header */}
              <div className="relative flex items-center mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 mr-4 ${hoveredCard === 'repuestos' ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
                  <Smartphone className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400" style={{ fontFamily: "'oktah', sans-serif" }}>
                  Repuestos disponibles
                </h3>
              </div>
              
              {/* List of repuestos */}
              <div className="relative space-y-3">
                {repuestos.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-4 rounded-xl bg-white/5 hover:bg-yellow-400/10 border border-white/5 hover:border-yellow-400/30 transition-all duration-300 group/item"
                  >
                    <span className="text-2xl sm:text-3xl mr-4 transition-transform duration-300 group-hover/item:scale-110">
                      {item.icon}
                    </span>
                    <span className="text-white/80 group-hover/item:text-white font-medium text-sm sm:text-base" style={{ fontFamily: "'oktah', sans-serif" }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full"></div>
            </div>
          </div>
              
          {/* Card 2 - Marcas */}
          <div 
            className="group relative"
            onMouseEnter={() => setHoveredCard('marcas')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-full backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 transition-opacity duration-500 ${hoveredCard === 'marcas' ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Header */}
              <div className="relative flex items-center mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 mr-4 ${hoveredCard === 'marcas' ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
                  <CheckCircle className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400" style={{ fontFamily: "'oktah', sans-serif" }}>
                  Marcas que manejamos
                </h3>
              </div>
              
              {/* Description */}
              <p className="relative text-white/70 leading-relaxed mb-8 text-base sm:text-lg" style={{ fontFamily: "'oktah', sans-serif" }}>
                Trabajamos con repuestos para todas las marcas principales del mercado. 
                Nuestro stock se mantiene actualizado con los modelos más nuevos y populares.
              </p>
              
              {/* Grid de marcas */}
              <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3">
                {marcas.map((marca, index) => (
                  <div 
                    key={index} 
                    className="group/marca backdrop-blur-sm bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/30 hover:border-yellow-400/50 rounded-xl px-4 py-3 text-center transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-sm sm:text-base font-bold text-yellow-400 group-hover/marca:text-yellow-300 transition-colors" style={{ fontFamily: "'oktah', sans-serif" }}>
                      {marca}
                    </span>
                  </div>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full"></div>
            </div>
          </div>
        </div>
        
        {/* Call to action badge */}
        <div className="text-center animate-fade-in animation-delay-400">
          <div className="inline-flex items-center gap-3 backdrop-blur-md bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 sm:px-8 py-4 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 hover:scale-105">
            <div className="relative">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping absolute"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
            <span className="text-yellow-400 font-bold text-sm sm:text-base" style={{ fontFamily: "'oktah', sans-serif" }}>
              Stock actualizado diariamente - Garantía en todos nuestros productos
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default SectionJ;