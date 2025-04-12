"use client";

import { useEffect, useState } from "react";
import { getReplacementsAction } from "@/actions/replacement";
import CustomLoading from "@/app/components/customLoading";
import FilterComponent from "./filterreplacements";
import PaginationComponent from "./pagination";

const TableReplacements = () => {
  const [replacements, setReplacements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [activeFilters, setActiveFilters] = useState({
    name: "",
    brand_id: "",
    typeReplacement_id: "",
  });

  useEffect(() => {
    fetchReplacements();
  }, [currentPage, activeFilters]);

  const fetchReplacements = async () => {
    try {
      setLoading(true);
      
      // Construir query params para el filtrado
      const queryParams = new URLSearchParams();
      queryParams.append("page", currentPage);
      queryParams.append("size", 20);
      
      // Añadir los filtros a los parámetros de consulta si tienen valor
      if (activeFilters.name) queryParams.append("name", activeFilters.name);
      if (activeFilters.brand_id) queryParams.append("brand_id", activeFilters.brand_id);
      if (activeFilters.typeReplacement_id) queryParams.append("typeReplacement_id", activeFilters.typeReplacement_id);
      
      console.log("Enviando filtros:", queryParams.toString());
      
      // Llamar a la API con los filtros
      const response = await getReplacementsAction(queryParams.toString());
      console.log("Respuesta recibida:", response);
      
      // Verificamos si response.data existe y es un array
      if (response && response.data && Array.isArray(response.data)) {
        setReplacements(response.data);
        
        // Calcular el total de páginas
        const totalItems = parseInt(response.headers?.["x-total-count"] || "0");
        const pageSize = 20;
        setTotalPages(Math.ceil(totalItems / pageSize) || 1); // Mínimo 1 página
      } else {
        console.error("Formato de respuesta incorrecto:", response);
        setReplacements([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.error("Error al obtener repuestos:", err);
      setReplacements([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    console.log("Aplicando filtros:", newFilters);
    setActiveFilters(newFilters);
    setCurrentPage(0); // Reset a la primera página cuando cambian los filtros
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="relative w-full overflow-x-auto px-4">
      <FilterComponent onFilterChange={handleFilterChange} />
      
      {loading ? (
        <div className="flex justify-center py-16">
          <CustomLoading />
        </div>
      ) : (
        <div className="w-full">
          <div className="mb-4">
            <h3 className="text-lg font-medium">Filtros activos:</h3>
            <ul className="text-sm text-gray-600">
              {activeFilters.name && <li>Nombre: {activeFilters.name}</li>}
              {activeFilters.brand_id && <li>Marca: {activeFilters.brand_id}</li>}
              {activeFilters.typeReplacement_id && <li>Tipo: {activeFilters.typeReplacement_id}</li>}
            </ul>
          </div>
          
          <table className="min-w-full table-auto border-collapse shadow-lg rounded-lg overflow-hidden bg-white">
            <thead>
              <tr className="bg-gray-800 text-white text-left">
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Tipo de Repuesto</th>
                <th className="px-6 py-3">Marca</th>
              </tr>
            </thead>
            <tbody>
              {replacements.length > 0 ? (
                replacements.map((rep, index) => (
                  <tr
                    key={rep.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-gray-200 transition-colors`}
                  >
                    <td className="px-6 py-3">{rep.name}</td>
                    <td className="px-6 py-3">{rep.typeReplacement?.name || 'N/A'}</td>
                    <td className="px-6 py-3">{rep.brand?.name || 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                    No se encontraron repuestos con los filtros aplicados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default TableReplacements;