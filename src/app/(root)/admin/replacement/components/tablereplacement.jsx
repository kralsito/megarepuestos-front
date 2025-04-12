"use client";

import { useEffect, useState } from "react";
import { getReplacementsAction, deleteReplacementAction } from "@/actions/replacement";
import { Trash2 } from "lucide-react"; 
import Swal from "sweetalert2";
import CustomLoading from "@/app/components/customLoading";

//CONDICIONAL LINEA 78 PARA VER SI EXISTE O NO

const TableReplacement = () => {
  const [replacements, setReplacements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReplacements();
  }, []);

  const fetchReplacements = async () => {
    try {
      setLoading(true);
      const { data } = await getReplacementsAction();
      setReplacements(data);
      
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
        
        setReplacements(replacements.filter(r => r.id !== replacement.id));

        Swal.fire({
            icon: "success",
            title: "Repuesto eliminada",
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

          {/* Desktop View - Table Layout */}
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
              {replacements.map((rep) => (
                <tr key={rep.id} className="bg-white hover:bg-gray-100 border border-gray-300">
                  <td className="px-4 py-2 border">{rep.id}</td>
                  <td className="px-4 py-2 border">{rep.name}</td>
                  <td className="px-4 py-2 border">{rep.typeReplacement.name}</td>
                  <td className="px-4 py-2 border">{rep.brand.name}</td>
                  <td className="px-4 py-2 border">
                    <button 
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                      onClick={() => handleDelete(rep)}
                      title="Eliminar marca"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableReplacement;