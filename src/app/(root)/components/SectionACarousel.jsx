'use client';

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/images/xiaomi.jpg",
    "/images/megacel.jpg",
    "/images/megarepuestos.png",
];

const SectionACarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-60 md:h-80 lg:h-96 overflow-hidden flex justify-center items-center bg-gray-100">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full flex justify-center items-center transition-opacity duration-700 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        width={800}
                        height={400}
                        className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] object-contain"
                    />
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 border border-gray-400 transition-none"
            >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 border border-gray-400 transition-none"
            >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
            </button>
        </div>
    );
};

export default SectionACarousel;
