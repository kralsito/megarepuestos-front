'use client';

import { useState, useEffect, useRef } from "react";
import { getProductsAction } from "@/actions/product";
import CustomLoading from "@/app/components/customLoading";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);
    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef(null);

    const updateCardsToShow = () => {
        const width = window.innerWidth;
        setIsMobile(width < 640);
        if (width < 640) {
            setCardsToShow(2);
        } else if (width < 768) {
            setCardsToShow(2);
        } else if (width < 1024) {
            setCardsToShow(3);
        } else {
            setCardsToShow(4);
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProductsAction();
                setProducts(data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => {
            window.removeEventListener('resize', updateCardsToShow);
        };
    }, []);

    useEffect(() => {
        if (currentIndex > products.length - cardsToShow && products.length > 0) {
            setCurrentIndex(Math.max(0, products.length - cardsToShow));
        }
    }, [cardsToShow, products, currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex >= products.length - (cardsToShow - 1) ? 0 : newIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? Math.max(0, products.length - cardsToShow) : newIndex;
        });
    };

    return (
        <div className="relative w-full max-w-full">
            {!isMobile && (
                <div className="absolute w-full px-6 flex justify-between items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                    <button
                        onClick={prevSlide}
                        className="absolute left-8 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 border border-gray-400 hover:bg-gray-100 z-10"
                    >
                        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-8 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 border border-gray-400 hover:bg-gray-100 z-10"
                    >
                        <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                    </button>
                </div>
            )}

            <div className="w-full max-w-screen-2xl bg-white mx-auto py-8 md:py-12 px-4 md:px-8">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 tracking-wider">
                    <span className="relative inline-block">
                        PRODUCTOS NUEVOS
                    </span>
                </h1>
                <div className="relative w-full bg-white overflow-hidden" ref={carouselRef}>
                    {isLoading ? (
                        <div className="flex justify-center py-16">
                            <CustomLoading />
                        </div>
                    ) : (
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ 
                                width: products.length > 0 ? `${(100 * products.length) / cardsToShow}%` : '100%',
                                transform: `translateX(-${(currentIndex * 100) / (products.length || 1)}%)`
                            }}
                        >
                            {products.map((product, index) => (
                                <div 
                                key={index} 
                                className="px-2 sm:px-3 md:px-4" 
                                style={{ width: `${100 / products.length}%` }}
                            >
                                <div className="bg-white border-2 border-gray-300 shadow-md rounded-lg overflow-hidden p-2 sm:p-3 m-1 sm:m-2 flex flex-col items-center
                                    w-40 sm:w-56 md:w-64 lg:w-72
                                    h-60 sm:h-72 md:h-80 lg:h-96
                                    hover:shadow-lg transition-shadow duration-300">
                                    <img 
                                        src={product.s3Url} 
                                        alt={product.name} 
                                        className="w-full h-36 sm:h-44 md:h-52 lg:h-64 object-contain"
                                    />
                                    <div className="w-full h-1 bg-yellow-400 mt-2"></div>
                                    <div className="p-1 sm:p-2 text-center flex flex-col flex-grow w-full">
                                        <h3 className="text-sm md:text-lg font-medium tracking-wide text-black-800 truncate">{product.name}</h3>
                                    </div>
                                </div>
                            </div>
                            ))}

                            {products.length === 0 && !isLoading && (
                                <div className="w-full py-16 text-center text-gray-500">
                                    No hay productos disponibles
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {isMobile && (
                <div className="absolute inset-0 flex justify-between items-center px-4">
                    <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 border border-gray-400 z-10">
                        <ChevronLeft className="w-8 h-8" strokeWidth={2} />
                    </button>
                    <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 border border-gray-400 z-10">
                        <ChevronRight className="w-8 h-8" strokeWidth={2} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductCarousel;