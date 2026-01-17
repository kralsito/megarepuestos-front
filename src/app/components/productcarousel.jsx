'use client';

import { useState, useEffect, useRef } from "react";
import { getProductsAction } from "@/actions/product";
import CustomLoading from "@/app/components/customLoading";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);
    const [isMobile, setIsMobile] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const carouselRef = useRef(null);
    const cardsContainerRef = useRef(null);
    
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
    const minSwipeDistance = 50;
    const [isDragging, setIsDragging] = useState(false);

    const updateCardsToShow = () => {
        const width = window.innerWidth;
        setIsMobile(width < 640);
        
        if (width < 640) {
            setCardsToShow(2);
        } else if (width < 768) {
            setCardsToShow(2);
        } else if (width < 1024) {
            setCardsToShow(3);
        } else if (width < 1280) {
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

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchEndX.current = e.touches[0].clientX;
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        touchEndX.current = e.touches[0].clientX;
        
        if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
            e.preventDefault();
        }
    };

    const handleTouchEnd = (e) => {
        if (!isDragging) return;
        
        setIsDragging(false);
        
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const distance = touchStartX.current - touchEndX.current;
            
            if (Math.abs(distance) > minSwipeDistance) {
                if (distance > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
        
        touchStartX.current = null;
        touchEndX.current = null;
    };

    const handleMouseDown = (e) => {
        touchStartX.current = e.clientX;
        touchEndX.current = e.clientX;
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        touchEndX.current = e.clientX;
    };

    const handleMouseUp = () => {
        handleTouchEnd();
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            handleTouchEnd();
        }
    };

    return (
        <div className="relative w-full max-w-screen-2xl mx-auto pt-16 sm:pt-14 md:pt-12 pb-12 md:pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <div className="relative text-center mb-12 sm:mb-10 md:mb-12 animate-fade-in">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-yellow-400/10 border border-yellow-400/30 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                    <span className="text-yellow-600 text-sm font-semibold tracking-wide" style={{ fontFamily: "'oktah', sans-serif" }}>
                        ÚLTIMOS LANZAMIENTOS
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ fontFamily: "'oktah', sans-serif" }}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800">
                        PRODUCTOS NUEVOS
                    </span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative w-full">
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-yellow-400 shadow-lg hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 z-20 group hover:scale-110 active:scale-95"
                    aria-label="Producto anterior"
                >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 group-hover:text-yellow-500 transition-colors" strokeWidth={2.5} />
                </button>
                
                <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-yellow-400 shadow-lg hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 z-20 group hover:scale-110 active:scale-95"
                    aria-label="Siguiente producto"
                >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 group-hover:text-yellow-500 transition-colors" strokeWidth={2.5} />
                </button>

                {/* Cards Container */}
                <div className="px-14 sm:px-16 md:px-20" ref={cardsContainerRef}>
                    <div 
                        className="relative w-full overflow-visible touch-pan-x select-none" 
                        ref={carouselRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                    >
                        {isLoading ? (
                            <div className="flex justify-center py-16">
                                <CustomLoading />
                            </div>
                        ) : (
                            <div 
                                className="flex transition-transform duration-500 ease-out"
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
                                        onMouseEnter={() => setHoveredCard(index)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        {isMobile ? (
                                            // Mobile Card
                                            <div className="group relative bg-white border-2 border-gray-200 hover:border-yellow-400 shadow-md hover:shadow-xl hover:shadow-yellow-400/20 rounded-2xl overflow-hidden p-3 m-1 transition-all duration-300 flex flex-col h-full">
                                                {/* Gradient overlay on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                
                                                {/* Image container */}
                                                <div className="relative w-full h-36 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-gray-50 to-white rounded-xl p-2 mb-3 overflow-hidden">
                                                    <img 
                                                        src={product.s3Url} 
                                                        alt={product.name} 
                                                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                                        draggable="false"
                                                    />
                                                    
                                                    {/* Corner accent */}
                                                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-2xl"></div>
                                                </div>

                                                {/* Divider */}
                                                <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex-shrink-0 mb-3"></div>

                                                {/* Product name */}
                                                <div className="relative w-full px-1 py-2 flex-grow flex flex-col justify-center items-center">
                                                    <p className="text-sm font-semibold tracking-wide text-center text-gray-700 group-hover:text-gray-900 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                                        {product.name}
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            // Desktop Card
                                            <div className="group relative bg-white border-2 border-gray-200 hover:border-yellow-400 shadow-lg hover:shadow-2xl hover:shadow-yellow-400/20 rounded-3xl overflow-hidden p-4 sm:p-5 m-1 sm:m-2 transition-all duration-500 flex flex-col h-full">
                                                {/* Gradient overlay on hover */}
                                                <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-yellow-500/5 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
                                                
                                                {/* "Nuevo" badge */}
                                                {index < 3 && (
                                                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold rounded-full shadow-lg">
                                                        NUEVO
                                                    </div>
                                                )}

                                                {/* Image container */}
                                                <div className="relative w-full h-44 sm:h-48 md:h-56 lg:h-56 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 mb-4 overflow-hidden">
                                                    <img 
                                                        src={product.s3Url} 
                                                        alt={product.name} 
                                                        className={`w-full h-full object-contain transition-all duration-500 ${hoveredCard === index ? 'scale-105' : 'scale-100'}`}
                                                        draggable="false"
                                                    />
                                                    
                                                    {/* Corner accent */}
                                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-3xl"></div>
                                                    
                                                    {/* Glow effect on hover */}
                                                    <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 rounded-2xl blur-xl transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
                                                </div>

                                                {/* Divider */}
                                                <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full flex-shrink-0 mb-4"></div>
                                                
                                                {/* Product name */}
                                                <div className="relative w-full px-3 py-3 md:py-4 flex-grow flex flex-col justify-center items-center">
                                                    <p className="text-sm md:text-base lg:text-lg font-bold tracking-wide text-center text-gray-700 group-hover:text-gray-900 transition-colors leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                                        {product.name}
                                                    </p>
                                                </div>

                                                {/* Animated bottom line */}
                                                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500 ${hoveredCard === index ? 'w-full' : 'w-0'}`}></div>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {products.length === 0 && !isLoading && (
                                    <div className="w-full py-16 text-center">
                                        <div className="inline-flex flex-col items-center gap-4 p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
                                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                                <Sparkles className="w-8 h-8 text-gray-400" />
                                            </div>
                                            <p className="text-gray-500 font-medium">No hay productos disponibles</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Progress indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: Math.max(0, products.length - cardsToShow + 1) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                currentIndex === index 
                                    ? 'w-8 bg-gradient-to-r from-yellow-400 to-yellow-500' 
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Ir a la página ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
            `}</style>
        </div>
    );
};

export default ProductCarousel;