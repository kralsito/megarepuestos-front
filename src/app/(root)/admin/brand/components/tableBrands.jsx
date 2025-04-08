"use client";

import { useEffect, useState } from "react";
import { getBrandsAction, deleteBrandAction } from "@/actions/brand";
import { Trash2 } from "lucide-react"; 
import Swal from "sweetalert2";
import CustomLoading from "@/app/components/customLoading";

const TableBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      setLoading(true);
      const data = await getBrandsAction();
      setBrands(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (brand) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `Eliminarás la marca "${brand.firstName} ${brand.lastName}". Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        await deleteBrandAction(brand.id);
        
        setBrands(brands.filter(b => b.id !== brand.id));
        
        Swal.fire({
            icon: "success",
            title: "Marca eliminada",
            text: "La marca se eliminó correctamente.",
            timer: 2000,
            showConfirmButton: true,
            confirmButtonText: "Cerrar",
            confirmButtonColor: "#3085d6",
          });


      } catch (error) {
        console.error("Error al eliminar la marca:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo eliminar la marca.",
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
            {brands.map((bra) => (
              <div 
                key={bra.id} 
                className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{bra.id}</h3>
                  <button 
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => handleDelete(bra)}
                    title="Eliminar marca"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-1">
                  <p><span className="font-medium">Marca:</span> {bra.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table Layout */}
          <table className="w-full table-auto border-collapse border border-gray-300 hidden md:table">
            <thead>
              <tr className="text-left bg-gray-200">
                <th className="px-4 py-2 border">Id</th>
                <th className="px-4 py-2 border">Marca</th>
                <th className="px-4 py-2 border">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((bra) => (
                <tr key={bra.id} className="bg-white hover:bg-gray-100 border border-gray-300">
                  <td className="px-4 py-2 border">{bra.id}</td>
                  <td className="px-4 py-2 border">{bra.name}</td>
                  <td className="px-4 py-2 border">
                    <button 
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                      onClick={() => handleDelete(bra)}
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

export default TableBrands;