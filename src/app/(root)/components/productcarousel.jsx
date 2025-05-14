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
    const cardsContainerRef = useRef(null);
    
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
    const minSwipeDistance = 50;
    const [isDragging, setIsDragging] = useState(false);

    // Importación de la fuente Poppins en el componente (opcional, también puedes hacerlo globalmente)
    useEffect(() => {
        // Verificamos si la fuente ya está cargada para evitar duplicados
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap';
        document.head.appendChild(linkElement);
        
        return () => {
            // Limpieza (opcional)
            document.head.removeChild(linkElement);
        };
    }, []);

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
            setCardsToShow(3); // Reducir a 3 tarjetas en pantallas más pequeñas de desktop
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
        <div className="w-full max-w-screen-2xl bg-white mx-auto pt-16 sm:pt-14 md:pt-12 pb-8 md:pb-12">
            <h1 className="text-2xl md:text-3xl text-center mb-10 sm:mb-8 md:mb-8 tracking-wider text-black md:mt-8"
            style={{ fontFamily: "'oktah', sans-serif" }}>
                <span className="relative inline-block">
                    PRODUCTOS NUEVOS
                </span>
            </h1>

            <div className="mt-8 sm:mt-6 md:mt-4"></div>

            <div className="relative w-full">
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 sm:p-2 rounded-full text-gray-200 border border-gray-200 z-20"
                    aria-label="Producto anterior"
                >
                    <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                </button>
                
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 sm:p-2 rounded-full text-gray-200 border border-gray-200 z-20"
                    aria-label="Siguiente producto"
                >
                    <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                </button>

                {/* Contenedor con padding horizontal para dejar espacio a los botones */}
                <div className="px-14 sm:px-16 md:px-20" ref={cardsContainerRef}>
                    <div 
                        className="relative w-full bg-white overflow-hidden touch-pan-x" 
                        ref={carouselRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                    >
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
                                        {isMobile ? (
                                            <div className="bg-white border-2 border-gray-300 shadow-md rounded-lg overflow-hidden p-2 m-1
                                                w-full max-w-full
                                                h-auto min-h-64
                                                hover:shadow-lg transition-shadow duration-300 flex flex-col">
                                                <div className="w-full h-36 flex items-center justify-center flex-shrink-0">
                                                    <img 
                                                        src={product.s3Url} 
                                                        alt={product.name} 
                                                        className="w-full h-full object-contain"
                                                        draggable="false"
                                                    />
                                                </div>
                                                

                                                <div className="w-full h-1 bg-yellow-400 flex-shrink-0 my-1"></div>

                                                <div className="w-full px-1 py-2 flex-grow flex flex-col justify-center items-center min-h-16">
                                                    <div className="flex items-center h-full">
                                                        <p className="text-sm tracking-wide text-center text-black font-poppins">
                                                            {product.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="bg-white border-2 border-gray-300 shadow-md rounded-lg overflow-hidden p-2 sm:p-3 m-1 sm:m-2
                                                w-full max-w-full
                                                h-auto min-h-72 sm:min-h-80 md:min-h-96 lg:min-h-112
                                                hover:shadow-lg transition-shadow duration-300 flex flex-col">

                                                <div className="w-full h-44 sm:h-48 md:h-56 lg:h-56 flex items-center justify-center flex-shrink-0">
                                                    <img 
                                                        src={product.s3Url} 
                                                        alt={product.name} 
                                                        className="w-full h-full object-contain"
                                                        draggable="false"
                                                    />
                                                </div>
                                                

                                                <div className="w-full h-1 bg-yellow-400 flex-shrink-0 my-2"></div>
                                                
                                                <div className="w-full px-2 py-3 md:py-4 lg:py-4 flex-grow flex flex-col justify-center items-center min-h-20">
                                                    <div className="flex items-center h-full">
                                                        <p className="text-sm md:text-base lg:text-base  tracking-wide text-center text-gray-600 break-words font-poppins">
                                                            {product.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
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
            </div>
        </div>
    );
};

export default ProductCarousel;