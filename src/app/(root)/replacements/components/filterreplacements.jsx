"use client";

import { useState, useEffect } from "react";
import { getBrandsAction } from "@/actions/brand";
import { getTypeReplacementsAction } from "@/actions/typereplacement"; 

const FilterComponent = ({ onFilterChange }) => {
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    brand_id: "",
    typeReplacement_id: "",
  });

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const brandsData = await getBrandsAction();
        const typesData = await getTypeReplacementsAction();
        
        setBrands(brandsData);
        setTypes(typesData);
      } catch (error) {
        console.error("Error cargando datos de filtros:", error);
      }
    };

    fetchFilterData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters);
    setIsFilterOpen(false); // Cierra el panel de filtros después de aplicar
  };

  const handleReset = () => {
    const resetFilters = {
      name: "",
      brand_id: "",
      typeReplacement_id: "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="mb-6">
      <button 
        type="button" 
        onClick={toggleFilter}
        className="flex items-center px-4 py-2 bg-primary-yellow rounded-lg shadow-md hover:bg-gray-300 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filtros {isFilterOpen ? '▲' : '▼'}
        {(filters.name || filters.brand_id || filters.typeReplacement_id) && (
          <span className="ml-2 bg-primary-yellow text-black text-xs font-medium px-2 py-1 rounded-full">
            Activos
          </span>
        )}
      </button>
      
      {isFilterOpen && (
        <form onSubmit={handleSubmit} className="mt-2 bg-white p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={filters.name}
                onChange={handleInputChange}
                placeholder="Buscar por nombre"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="brand_id" className="block text-sm font-medium text-gray-700 mb-1">
                Marca
              </label>
              <select
                id="brand_id"
                name="brand_id"
                value={filters.brand_id}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todas las marcas</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="typeReplacement_id" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Repuesto
              </label>
              <select
                id="typeReplacement_id"
                name="typeReplacement_id"
                value={filters.typeReplacement_id}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos los tipos</option>
                {types.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Limpiar filtros
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-yellow text-black rounded-md hover:bg-yellow-600 transition-colors"
            >
              Aplicar filtros
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FilterComponent;