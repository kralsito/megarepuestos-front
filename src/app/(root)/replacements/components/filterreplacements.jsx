"use client";

import { useState, useEffect } from "react";
import { getBrandsDropdownAction } from "@/actions/brand";
import { getTypeReplacementsDropdownAction } from "@/actions/typereplacement";

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
        const brandsData = await getBrandsDropdownAction();
        const typesData = await getTypeReplacementsDropdownAction();

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
    setIsFilterOpen(false);
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

  const activeFiltersCount = [
    filters.name,
    filters.brand_id,
    filters.typeReplacement_id,
  ].filter(Boolean).length;

  return (
    <div className="mb-6">
      {/* Botón de toggle mejorado */}
      <button
        type="button"
        onClick={toggleFilter}
        className="group relative flex items-center gap-3 px-5 py-2.5 bg-primary-yellow rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-black font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform duration-300 ${
            isFilterOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        <span>Filtros</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform duration-300 ${
            isFilterOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        {activeFiltersCount > 0 && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[24px] h-6 bg-red-500 text-white text-xs font-bold px-2 rounded-full shadow-md animate-pulse">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {/* Panel de filtros con animación */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isFilterOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
        >
          {/* Grid de filtros responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Filtro por nombre */}
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Nombre
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={filters.name}
                  onChange={handleInputChange}
                  placeholder="Buscar por nombre..."
                  className="w-full px-4 py-2.5 pl-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-yellow focus:ring-4 focus:ring-primary-yellow/20 transition-all duration-200 text-black placeholder:text-gray-400"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Filtro por marca */}
            <div className="group">
              <label
                htmlFor="brand_id"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Marca
              </label>
              <div className="relative">
                <select
                  id="brand_id"
                  name="brand_id"
                  value={filters.brand_id}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 pl-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-yellow focus:ring-4 focus:ring-primary-yellow/20 transition-all duration-200 text-black appearance-none bg-white cursor-pointer"
                >
                  <option value="">Todas las marcas</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Filtro por tipo de repuesto */}
            <div className="group sm:col-span-2 lg:col-span-1">
              <label
                htmlFor="typeReplacement_id"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Tipo de Repuesto
              </label>
              <div className="relative">
                <select
                  id="typeReplacement_id"
                  name="typeReplacement_id"
                  value={filters.typeReplacement_id}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 pl-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-yellow focus:ring-4 focus:ring-primary-yellow/20 transition-all duration-200 text-black appearance-none bg-white cursor-pointer"
                >
                  <option value="">Todos los tipos</option>
                  {types.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="group relative px-6 py-2.5 bg-red-800 text-white rounded-xl font-medium hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Limpiar filtros
            </button>
            <button
              type="submit"
              className="group relative px-6 py-2.5 bg-primary-yellow text-black rounded-xl font-medium hover:bg-yellow-400 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Aplicar filtros
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterComponent;