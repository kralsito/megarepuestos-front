"use client";

import { useEffect, useState } from "react";
import { getProductsAction, deleteProductAction } from "@/actions/product";
import { Trash2 } from "lucide-react"; 
import Swal from "sweetalert2";
import CustomLoading from "@/app/components/customLoading";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProductsAction();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (product) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `Eliminarás el producto "${product.name}". Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        await deleteProductAction(product.id);
        
        setProducts(products.filter(p => p.id !== product.id));

        Swal.fire({
          icon: "success",
          title: "Producto eliminado",
          text: "El producto se eliminó correctamente.",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          window.location.reload();
        }, 2100);
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo eliminar el producto.",
        });
      }
    }
  };

  return (
    <div className="relative">
      {loading ? (
        <div className="flex justify-center py-16">
          <CustomLoading />
        </div>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="text-left bg-gray-200">
              <th className="px-4 py-2 border">Id</th>
              <th className="px-4 py-2 border">Nombre</th>
              <th className="px-4 py-2 border">Descripción</th>
              <th className="px-4 py-2 border">Imagen</th>
              <th className="px-4 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id} className="bg-white hover:bg-gray-100 border border-gray-300">
                <td className="px-4 py-2 border">{prod.id}</td>
                <td className="px-4 py-2 border">{prod.name}</td>
                <td className="px-4 py-2 border">{prod.description}</td>
                <td className="px-4 py-2 border">
                  <img 
                    src={prod.s3Url} 
                    alt={prod.name} 
                    className="w-32 h-32 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-2 border">
                  <button 
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => handleDelete(prod)}
                    title="Eliminar producto"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
