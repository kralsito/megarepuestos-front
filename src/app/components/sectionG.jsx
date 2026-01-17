'use client';

import { useState } from 'react';

const items = [
    { title: "Módulos de pantalla", image: "/images/modulos.png" },
    { title: "Baterías", image: "/images/baterias.png" },
    { title: "Placas de carga", image: "/images/placasdecarga.png" },
    { title: "Herramientas", image: "/images/herramientas.png" },
    { title: "Insumos", image: "/images/insumos.png" },
    { title: "Flex y cámaras", image: "/images/flex_camaras.png" },
];

const SectionG = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
                {/* Title with modern styling */}
                <div className="text-center mb-20">
                    <h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 mb-4 animate-fade-in"
                        style={{ fontFamily: "'oktah', sans-serif" }}
                    >
                        TIPOS DE PRODUCTOS
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-slide-in"></div>
                </div>

                {/* Grid with modern cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group relative"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            {/* Card container */}
                            <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
                                
                                {/* Animated corner accent */}
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 opacity-10 rounded-bl-full transition-all duration-500 ${hoveredIndex === index ? 'scale-150' : 'scale-100'}`}></div>

                                {/* Content */}
                                <div className="relative flex flex-col items-center text-center h-full">
                                    {/* Image container with animation */}
                                    <div className="relative mb-6 w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44">
                                        {/* Background circle */}
                                        <div className={`absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transition-all duration-500 ${hoveredIndex === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}></div>
                                        
                                        {/* Image */}
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className={`w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain transition-all duration-500 ${hoveredIndex === index ? 'scale-110 -rotate-6' : 'scale-100 rotate-0'}`}
                                            />
                                        </div>

                                        {/* Glow effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent transition-all duration-300"
                                        style={{ fontFamily: "'oktah', sans-serif" }}
                                    >
                                        {item.title}
                                    </h3>

                                    {/* Decorative line */}
                                    <div className={`mt-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-0'}`}></div>
                                </div>
                            </div>

                            {/* Outer glow on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl transition-opacity duration-500 -z-10 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slide-in {
                    from {
                        width: 0;
                        opacity: 0;
                    }
                    to {
                        width: 6rem;
                        opacity: 1;
                    }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-slide-in {
                    animation: slide-in 1s ease-out 0.5s both;
                }
            `}</style>
        </div>
    );
};

export default SectionG;