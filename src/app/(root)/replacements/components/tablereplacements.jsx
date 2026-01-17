"use client";

import { useEffect, useState } from "react";
import { getReplacementsAction } from "@/actions/replacement";
import CustomLoading from "@/app/components/customLoading";
import FilterComponent from "./filterreplacements";
import PaginationComponent from "./pagination";
import { Package } from "lucide-react";

const TableReplacements = () => {
  const [replacements, setReplacements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [hoveredRow, setHoveredRow] = useState(null);
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
        const calculatedPages = Math.max(Math.ceil(total / pageSize), 1);
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
    setCurrentPage(0);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="w-full px-2 sm:px-4 lg:px-6">
      <FilterComponent onFilterChange={handleFilterChange} />
      
      {loading ? (
        <div className="flex justify-center py-16">
          <CustomLoading />
        </div>
      ) : (
        <div className="w-full">
          {/* Modern table container */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white">
            {/* Decorative gradient header accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
            
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse text-xs sm:text-sm md:text-base">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white">
                    <th className="px-2 sm:px-3 md:px-6 py-3 md:py-4 w-2/5 sm:w-1/2 text-left font-bold tracking-wide">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-yellow-400" />
                        <span>Nombre</span>
                      </div>
                    </th>
                    <th className="px-2 sm:px-3 md:px-6 py-3 md:py-4 w-1/3 sm:w-1/4 text-left font-bold tracking-wide">
                      Tipo
                    </th>
                    <th className="px-2 sm:px-3 md:px-6 py-3 md:py-4 w-1/4 text-left font-bold tracking-wide">
                      Marca
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {replacements.length > 0 ? (
                    replacements.map((rep, index) => (
                      <tr
                        key={rep.id}
                        className={`relative transition-all duration-300 ${
                          hoveredRow === index 
                            ? "bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-md" 
                            : index % 2 === 0 
                              ? "bg-gray-50" 
                              : "bg-white"
                        }`}
                        onMouseEnter={() => setHoveredRow(index)}
                        onMouseLeave={() => setHoveredRow(null)}
                      >
                        {/* Left accent bar on hover */}
                        <td className="relative px-2 sm:px-3 md:px-6 py-3 md:py-4 font-semibold break-words text-slate-800">
                          {hoveredRow === index && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-500"></div>
                          )}
                          <span className={`${hoveredRow === index ? 'ml-2' : ''} transition-all duration-300`}>
                            {rep.name}
                          </span>
                        </td>
                        <td className="px-2 sm:px-3 md:px-6 py-3 md:py-4 text-slate-600">
                          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium">
                            {rep.typeReplacement?.name || 'N/A'}
                          </span>
                        </td>
                        <td className="px-2 sm:px-3 md:px-6 py-3 md:py-4 text-slate-600">
                          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-medium">
                            {rep.brand?.name || 'N/A'}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="px-4 py-12 text-center">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                            <Package className="w-8 h-8 text-gray-400" />
                          </div>
                          <div>
                            <p className="text-gray-600 font-semibold mb-1">No se encontraron repuestos</p>
                            <p className="text-gray-400 text-sm">Intenta ajustar los filtros de búsqueda</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Bottom info bar */}
            {replacements.length > 0 && (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 py-3 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                  <span className="font-medium">
                    Mostrando {replacements.length} de {totalItems} repuestos
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-gray-200 font-semibold">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Página {currentPage + 1} de {totalPages}
                  </span>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6">
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