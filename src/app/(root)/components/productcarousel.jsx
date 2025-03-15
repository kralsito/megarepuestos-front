'use client';

import { useState, useEffect, useRef } from "react";
import { getProductsAction } from "@/actions/product";
import CustomLoading from "@/app/components/customLoading";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3); 
    const carouselRef = useRef(null);


    const updateCardsToShow = () => {
        if (window.innerWidth < 640) {
            setCardsToShow(1); 
        } else if (window.innerWidth < 768) {
            setCardsToShow(2); 
        } else {
            setCardsToShow(3); 
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
        <div className="relative w-full">
            <div className="w-full relative">
                <div className="absolute w-full px-4 flex justify-between items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
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
                
                <div className="w-full max-w-6xl bg-white mx-auto py-4 md:py-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">PRODUCTOS NUEVOS</h2>
                    
                    <div className="relative w-full bg-white overflow-hidden px-2 md:px-4" ref={carouselRef}>
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
                                        className="px-1 sm:px-2" 
                                        style={{ 
                                            width: `${100 / products.length}%`
                                        }}
                                    >
                                        <div className="bg-gray shadow-lg rounded-lg overflow-hidden p-2 sm:p-3 m-1 sm:m-2 flex flex-col items-center h-48 sm:h-56 md:h-64">
                                            <img 
                                                src={product.s3Url} 
                                                alt={product.name} 
                                                className="w-3/4 h-28 sm:h-32 md:h-40 object-cover"
                                            />
                                            <div className="p-1 sm:p-2 text-center">
                                                <h3 className="text-sm md:text-md font-semibold truncate">{product.name}</h3>
                                                <p className="text-gray-600 text-xs mt-1 line-clamp-2">{product.description}</p>
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
            </div>
        </div>
    );
};

export default ProductCarousel;