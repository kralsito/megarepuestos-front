'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/images/fondo1.jpg",
    "/images/fondo2.png",
    "/images/fondo3.png",
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
        <div className="relative w-full h-60 md:h-80 lg:h-[40rem] overflow-hidden flex justify-center items-center bg-gray-100" 
             style={{ 
                 marginTop: 'var(--navbar-height, 0px)' 
             }}>
            <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="min-w-full flex justify-center items-center">
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        width={1920} // Ajusta el ancho
                        height={640}  // Ajusta la altura
                        className="w-full h-full object-cover" // Cambia max-w por w-full y usa object-cover
                    />
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 border border-gray-400"
            >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 border border-gray-400"
            >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
            </button>
        </div>
    );
};

export default SectionACarousel;
