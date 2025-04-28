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
  const [totalItems, setTotalItems] = useState(0);
  const [activeFilters, setActiveFilters] = useState({
    name: "",
    brand_id: "",
    typeReplacement_id: "",
  });

  useEffect(() => {
  }, [currentPage]);

  useEffect(() => {
    fetchReplacements();
  }, [currentPage, activeFilters]);

  const fetchReplacements = async () => {
    try {
      setLoading(true);
      
      const queryParams = new URLSearchParams();
      queryParams.append("page", currentPage.toString());
      queryParams.append("size", "20");
      
      if (activeFilters.name) queryParams.append("name", activeFilters.name);
      if (activeFilters.brand_id) queryParams.append("brand_id", activeFilters.brand_id);
      if (activeFilters.typeReplacement_id) queryParams.append("typeReplacement_id", activeFilters.typeReplacement_id);
      
      
      const response = await getReplacementsAction(queryParams.toString());

      if (response && response.data && Array.isArray(response.data)) {
        setReplacements(response.data);
        
        // Calcular el total de páginas
        const total = parseInt(response.headers?.["x-total-count"] || "0");
        setTotalItems(total);
        
        const pageSize = 20;
        const calculatedPages = Math.max(Math.ceil(total / pageSize), 1); // Mínimo 1 página
        setTotalPages(calculatedPages);
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
    setActiveFilters(newFilters);
    setCurrentPage(0); // Reset a la primera página cuando cambian los filtros
  };

  const handlePageChange = (newPage) => {
    // Asegúrate de que setCurrentPage esté actualizando el estado correctamente
    setCurrentPage(newPage);
  };

  return (
    <div className="w-full px-2 sm:px-4">
      <FilterComponent onFilterChange={handleFilterChange} />
      
      {loading ? (
        <div className="flex justify-center py-16">
          <CustomLoading />
        </div>
      ) : (
        <div className="w-full">
          {/* Tabla que siempre se ajusta al ancho disponible sin scroll horizontal */}
          <table className="w-full table-fixed border-collapse shadow-lg rounded-lg overflow-hidden bg-white text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-gray-800 text-white text-left">
                <th className="px-1 sm:px-2 md:px-4 py-2 md:py-3 w-2/5 sm:w-1/2">Nombre</th>
                <th className="px-1 sm:px-2 md:px-4 py-2 md:py-3 w-1/3 sm:w-1/4">Tipo</th>
                <th className="px-1 sm:px-2 md:px-4 py-2 md:py-3 w-1/4">Marca</th>
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
                    <td className="px-1 sm:px-2 md:px-4 py-2 md:py-3 font-medium break-words">{rep.name}</td>
                    <td className="px-1 sm:px-2 md:px-4 py-2 md:py-3 truncate">{rep.typeReplacement?.name || 'N/A'}</td>
                    <td className="px-1 sm:px-2 md:px-4 py-2 md:py-3 truncate">{rep.brand?.name || 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-4 py-4 text-center text-gray-500">
                    No se encontraron repuestos con los filtros aplicados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          
          <div className="mt-4">
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TableReplacements;