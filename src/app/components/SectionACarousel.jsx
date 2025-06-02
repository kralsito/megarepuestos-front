'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    {
        src: "/images/fondo1.png",
        alt: "Repuestos para celulares Samsung iPhone Motorola en Berazategui - Stock completo"
    },
    {
        src: "/images/fondo3.png", 
        alt: "Pantallas baterías flex de carga para celulares zona sur - Mega Repuestos"
    },
    {
        src: "/images/fondo2.png",
        alt: "Repuestos celulares todas las marcas Berazategui - Entrega inmediata"
    }
];

const SectionACarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section 
            className="relative w-full h-60 md:h-80 lg:h-[40rem] overflow-hidden flex justify-center items-center bg-gray-100" 
            style={{ 
                marginTop: 'var(--navbar-height, 0px)' 
            }}
            aria-label="Carrusel de repuestos para celulares"
        >
            {/* Contenido SEO invisible pero presente */}
            <div className="absolute -left-full -top-full w-1 h-1 overflow-hidden opacity-0">
                <h2>Mega Repuestos Berazategui - Repuestos para Celulares</h2>
                <p>Stock completo de repuestos para celulares: pantallas, baterías, flex de carga. Samsung, iPhone, Motorola, Xiaomi. Zona sur GBA.</p>
            </div>

            <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                role="region"
                aria-live="polite"
                aria-label="Galería de productos"
            >
                {images.map((image, index) => (
                    <div key={index} className="min-w-full flex justify-center items-center">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={1920}
                            height={640}
                            className="w-full h-full object-cover"
                            priority={index === 0} // Prioridad para la primera imagen
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                    </div>
                ))}
            </div>

            {/* Indicadores de navegación */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                            index === currentIndex 
                                ? 'bg-white' 
                                : 'bg-white bg-opacity-50'
                        }`}
                        aria-label={`Ir a imagen ${index + 1} de ${images.length}`}
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 border border-gray-400 hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
                aria-label="Imagen anterior del carrusel"
            >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 border border-gray-400 hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
                aria-label="Siguiente imagen del carrusel"
            >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
            </button>
        </section>
    );
};

export default SectionACarousel;