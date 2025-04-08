'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { getAccessTokenAction } from "@/actions/auth";
import TableBrands from "./components/tableBrands";
import SectionABrands from "./components/SectionABrands";
import AddBrandModal from "./components/addBrandModal";

const Brands = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const token = await getAccessTokenAction();
                
                if (!token) {
                    router.push('/login');
                } else {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
                router.push('/login');
            }
        };

        checkAuthentication();
    }, [router]);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <SectionABrands />
            <button 
                onClick={() => setIsModalOpen(true)} 
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded">
                Agregar Marca
            </button>
            <TableBrands />
            <AddBrandModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
};

export default Brands;