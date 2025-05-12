"use client";

import { useEffect, useState } from "react";
import { getReplacementsAction, deleteReplacementAction } from "@/actions/replacement";
import { Trash2 } from "lucide-react"; 
import Swal from "sweetalert2";
import CustomLoading from "@/app/components/customLoading";
import PaginationAdminComponent from "../../components/paginationAdmin";
import FilterReplacementsAdmin from "../../components/filterreplacements";

const TableReplacement = () => {
  const [replacements, setReplacements] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Estados para la paginación
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  
  // Estado para almacenar los filtros actuales
  const [activeFilters, setActiveFilters] = useState({
    name: "",
    brand_id: "",
    typeReplacement_id: "",
  });

  useEffect(() => {
    fetchReplacements();
  }, [currentPage, pageSize, activeFilters]); // Refetch cuando cambia la página, el tamaño o los filtros

  const fetchReplacements = async () => {
    try {
      setLoading(true);
      
      // Construimos los parámetros de consulta incluyendo filtros y paginación
      let queryParams = `page=${currentPage}&size=${pageSize}`;
      
      // Agregamos los filtros activos a la consulta
      if (activeFilters.name) {
        queryParams += `&name=${encodeURIComponent(activeFilters.name)}`;
      }
      if (activeFilters.brand_id) {
        queryParams += `&brand_id=${activeFilters.brand_id}`;
      }
      if (activeFilters.typeReplacement_id) {
        queryParams += `&typeReplacement_id=${activeFilters.typeReplacement_id}`;
      }
      
      // Llamamos a la acción con los parámetros completos
      const { data, headers } = await getReplacementsAction(queryParams);
      
      setReplacements(data);
      
      // Manejo de la paginación desde la respuesta
      if (headers && headers["x-total-pages"]) {
        setTotalPages(parseInt(headers["x-total-pages"], 10));
      } else if (headers && headers["total-pages"]) {
        setTotalPages(parseInt(headers["total-pages"], 10));
      } else {
        const totalItems = headers["x-total-count"] || headers["total-count"] || data.length;
        setTotalPages(Math.ceil(totalItems / pageSize) || 1);
      }
      
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    // No es necesario llamar a fetchReplacements aquí ya que el useEffect se activará
  };

  // Manejador para cuando cambian los filtros
  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
    setCurrentPage(0); // Resetear a la primera página cuando se cambian los filtros
  };

  const handleDelete = async (replacement) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `Eliminarás el repuesto "${replacement.name}". Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        await deleteReplacementAction(replacement.id);
        
        if (replacements.length === 1 && currentPage > 0) {
          setCurrentPage(currentPage - 1);
        } else {
          fetchReplacements();
        }

        Swal.fire({
          icon: "success",
          title: "Repuesto eliminado",
          text: "El repuesto se eliminó correctamente.",
          timer: 2000,
          showConfirmButton: true,
          confirmButtonText: "Cerrar",
          confirmButtonColor: "#3085d6",
        });

      } catch (error) {
        console.error("Error al eliminar el repuesto:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo eliminar el repuesto.",
        });
      }
    }
  };

  return (
    <div className="relative w-full overflow-x-auto">
      {/* Componente de filtros */}
      <FilterReplacementsAdmin onFilterChange={handleFilterChange} />
      
      {loading ? (
        <div className="flex justify-center py-16">
          <CustomLoading />
        </div>
      ) : (
        <div className="w-full">
          <div className="block md:hidden"> 
            {replacements.map((rep) => (
              <div 
                key={rep.id} 
                className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{rep.id}</h3>
                  <button 
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => handleDelete(rep)}
                    title="Eliminar repuesto"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-1">
                  <p><span className="font-medium">Nombre:</span> {rep.name}</p>
                  <p><span className="font-medium">Tipo de repuesto:</span> {rep.typeReplacement.name}</p>
                  <p><span className="font-medium">Marca:</span> {rep.brand.name}</p>
                </div>
              </div>
            ))}
          </div>

          <table className="w-full table-auto border-collapse border border-gray-300 hidden md:table">
            <thead>
              <tr className="text-left bg-gray-200">
                <th className="px-4 py-2 border">Id</th>
                <th className="px-4 py-2 border">Nombre</th>
                <th className="px-4 py-2 border">Tipo de repuesto</th>
                <th className="px-4 py-2 border">Marca</th>
                <th className="px-4 py-2 border">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {replacements.length > 0 ? (
                replacements.map((rep) => (
                  <tr key={rep.id} className="bg-white hover:bg-gray-100 border border-gray-300">
                    <td className="px-4 py-2 border">{rep.id}</td>
                    <td className="px-4 py-2 border">{rep.name}</td>
                    <td className="px-4 py-2 border">{rep.typeReplacement.name}</td>
                    <td className="px-4 py-2 border">{rep.brand.name}</td>
                    <td className="px-4 py-2 border">
                      <button 
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                        onClick={() => handleDelete(rep)}
                        title="Eliminar repuesto"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                    No hay repuestos disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          
          {!loading && replacements.length > 0 && (
            <PaginationAdminComponent 
              currentPage={currentPage}
              totalPages={totalPages || 1} 
              onPageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TableReplacement;