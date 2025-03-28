'use client';

import { useState } from "react";
import SectionA from './components/sectionA';
import Table from './components/table';
import AddProductModal from './components/AddProductModal';
import SectionB from "../components/sectionB";

const Admin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <SectionA />
            <button 
                onClick={() => setIsModalOpen(true)} 
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded">
                Agregar Producto
            </button>
            <Table />
            
            <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Admin;
