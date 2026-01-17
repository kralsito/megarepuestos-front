'use client';

import { useState } from 'react';
import { Check, Package, MapPin, Sparkles } from 'lucide-react';

const SectionI = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const brands = ['Samsung', 'iPhone', 'Xiaomi', 'Motorola'];
  
  const stats = [
    { number: "500+", label: "Repuestos disponibles" },
    { number: "10+", label: "Marcas diferentes" },
    { number: "24h", label: "Stock actualizado" },
    { number: "100%", label: "Garantía de calidad" }
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-slate-950 to-black py-20 px-4 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
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
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-yellow-400/10 border border-yellow-400/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-sm font-semibold tracking-wide" style={{ fontFamily: "'oktah', sans-serif" }}>
              STOCK COMPLETO
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: "'oktah', sans-serif" }}>
            <span className="text-white">Stock completo de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 animate-gradient-shift">
              repuestos para celulares
            </span>
            <br />
            <span className="text-white">en zona Sur</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'oktah', sans-serif" }}>
            <span className="text-yellow-400 font-bold">Mega Repuestos</span> es tu tienda especializada en repuestos para celulares en Berazategui. 
            Contamos con el <span className="text-yellow-400 font-semibold">stock más completo</span> de repuestos 
            para celulares en zona sur del Gran Buenos Aires.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1 - Todas las marcas */}
          <div 
            className="group relative"
            onMouseEnter={() => setHoveredCard('brands')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-full backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 transition-opacity duration-500 ${hoveredCard === 'brands' ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-500 ${hoveredCard === 'brands' ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
                <Check className="w-8 h-8 text-black" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'oktah', sans-serif" }}>
                  Todas las marcas
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Repuestos para <span className="text-yellow-400 font-semibold">Samsung, iPhone, Motorola, Xiaomi, LG, Huawei</span> y 
                  todas las marcas del mercado. Pantallas, baterías, cámaras y más.
                </p>

                {/* Brand tags */}
                <div className="flex flex-wrap gap-2">
                  {brands.map((marca, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 text-xs font-semibold backdrop-blur-sm"
                      style={{ fontFamily: "'oktah', sans-serif" }}
                    >
                      {marca}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full"></div>
            </div>
          </div>
          
          {/* Card 2 - Stock permanente */}
          <div 
            className="group relative"
            onMouseEnter={() => setHoveredCard('stock')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-full backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 transition-opacity duration-500 ${hoveredCard === 'stock' ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-500 ${hoveredCard === 'stock' ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
                <Package className="w-8 h-8 text-black" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'oktah', sans-serif" }}>
                  Stock permanente
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  <span className="text-yellow-400 font-semibold">Pantallas LCD y OLED</span>, baterías originales, 
                  flex de carga, cámaras y todos los repuestos disponibles.
                </p>

                {/* Status badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-400/10 border border-yellow-400/30 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                  <span className="text-yellow-400 text-sm font-semibold" style={{ fontFamily: "'oktah', sans-serif" }}>
                    Stock actualizado
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full"></div>
            </div>
          </div>
          
          {/* Card 3 - Zona sur */}
          <div 
            className="group relative md:col-span-2 lg:col-span-1"
            onMouseEnter={() => setHoveredCard('location')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-full backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 transition-opacity duration-500 ${hoveredCard === 'location' ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-500 ${hoveredCard === 'location' ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
                <MapPin className="w-8 h-8 text-black" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'oktah', sans-serif" }}>
                  Zona sur GBA
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Atendemos en <span className="text-yellow-400 font-semibold">Berazategui y Quilmes</span> con entrega inmediata 
                  y los mejores precios de la zona.
                </p>

                {/* Status badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-400/10 border border-green-400/30 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-green-400 text-sm font-semibold" style={{ fontFamily: "'oktah', sans-serif" }}>
                    Entrega inmediata disponible
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full"></div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="relative">
          {/* Decorative line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10"
              >
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-2 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: "'oktah', sans-serif" }}>
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm font-semibold tracking-wide" style={{ fontFamily: "'oktah', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
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

        .animation-delay-4000 {
          animation-delay: 4s;
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

export default SectionI;