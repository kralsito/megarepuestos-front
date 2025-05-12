"use client";

import { useEffect, useState } from "react";
import { getTypeReplacementsAction, deleteTypeReplacementAction } from "@/actions/typereplacement";
import { Trash2 } from "lucide-react"; 
import Swal from "sweetalert2";
import CustomLoading from "@/app/components/customLoading";
import PaginationAdminComponent from "../../components/paginationAdmin";

const TableTypeReplacements = () => {
  const [typereplacements, setTypeReplacement] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0); // Página actual
  const [totalPages, setTotalPages] = useState(1);   // Total de páginas

  useEffect(() => {
    fetchTypeReplacements(currentPage); // Cargar datos de la página actual
  }, [currentPage]);

  const fetchTypeReplacements = async (page = 0) => {
    try {
      setLoading(true);
      const { data, totalPages } = await getTypeReplacementsAction(page, 20); // Pasa la página y el tamaño
      setTypeReplacement(data);
      setTotalPages(totalPages); // Establecer el total de páginas
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (typereplacement) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `Eliminarás el tipo de repuesto "${typereplacement.name}". Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        await deleteTypeReplacementAction(typereplacement.id);
        
        setTypeReplacement(typereplacements.filter(t => t.id !== typereplacement.id));
        
        Swal.fire({
            icon: "success",
            title: "Tipo de repuesto eliminado",
            text: "El tipo de repuesto se eliminó correctamente.",
            timer: 2000,
            showConfirmButton: true,
            confirmButtonText: "Cerrar",
            confirmButtonColor: "#3085d6",
          });
      } catch (error) {
        console.error("Error al eliminar el tipo de repuesto:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo eliminar el tipo de repuesto.",
        });
      }
    }
  };

  return (
    <div className="relative w-full overflow-x-auto">
      {loading ? (
        <div className="flex justify-center py-16">
          <CustomLoading />
        </div>
      ) : (
        <div className="w-full">
          <div className="block md:hidden">
            {typereplacements.map((typ) => (
              <div 
                key={typ.id} 
                className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{typ.id}</h3>
                  <button 
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => handleDelete(typ)}
                    title="Eliminar tipo de repuesto"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-1">
                  <p><span className="font-medium">Tipo de repuesto:</span> {typ.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table Layout */}
          <table className="w-full table-auto border-collapse border border-gray-300 hidden md:table">
            <thead>
              <tr className="text-left bg-gray-200">
                <th className="px-4 py-2 border">Id</th>
                <th className="px-4 py-2 border">Tipo de repuesto</th>
                <th className="px-4 py-2 border">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {typereplacements.map((typ) => (
                <tr key={typ.id} className="bg-white hover:bg-gray-100 border border-gray-300">
                  <td className="px-4 py-2 border">{typ.id}</td>
                  <td className="px-4 py-2 border">{typ.name}</td>
                  <td className="px-4 py-2 border">
                    <button 
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                      onClick={() => handleDelete(typ)}
                      title="Eliminar tipo de repuesto"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Component */}
          <PaginationAdminComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage} // Actualiza la página cuando el usuario navega
          />
        </div>
      )}
    </div>
  );
};

export default TableTypeReplacements;
