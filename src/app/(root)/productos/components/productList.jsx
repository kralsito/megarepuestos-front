'use client';

import { useState, useEffect } from "react";
import { getProductsAction } from "@/actions/product";
import CustomLoading from "@/app/components/customLoading";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
    }, []);

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 p-4 max-w-7xl mx-auto">
                {isLoading ? (
                    <div className="flex justify-center col-span-3">
                        <CustomLoading />
                    </div>
                ) : (
                    products.map((product, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden aspect-square flex flex-col w-72 justify-center items-center p-4">
                            <img src={product.s3Url} alt={product.name} className="w-4/5 h-1/2 object-contain" />
                            <div className="p-2 flex flex-col justify-center flex-grow text-center">
                                <h2 className="text-sm font-semibold">{product.name}</h2>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;

