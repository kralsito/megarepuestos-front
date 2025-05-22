"use client";

import { useEffect, useState } from "react";
import { getProductsAdminAction, deleteProductAction } from "@/actions/product";
import { Trash2 } from "lucide-react"; 
import Swal from "sweetalert2";
import CustomLoading from "@/app/components/customLoading";
import PaginationAdminComponent from "../../components/paginationAdmin";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const size = 10; 


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (page = 0) => {
    try {
      setLoading(true);
      const { data, totalPages } = await getProductsAdminAction(page, size);
      setProducts(data);
      setTotalPages(totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
          showConfirmButton: true,
          confirmButtonText: "Cerrar",
          confirmButtonColor: "#3085d6",
        });

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
    <div className="relative w-full overflow-x-auto">
      {loading ? (
        <div className="flex justify-center py-16">
          <CustomLoading />
        </div>
      ) : (
        <div className="w-full">
          {/* Mobile View - Card Layout */}
          <div className="block md:hidden">
            {products.map((prod) => (
              <div 
                key={prod.id} 
                className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-black text-black">{prod.name}</h3>
                  <button 
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => handleDelete(prod)}
                    title="Eliminar producto"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex justify-center mb-2">
                  <img 
                    src={prod.s3Url} 
                    alt={prod.name} 
                    className="w-48 h-48 object-cover rounded-md"
                  />
                </div>
                <div className="space-y-1 text-black">
                  <p><span className="font-medium">ID:</span> {prod.id}</p>
                  <p><span className="font-medium">Descripción:</span> {prod.description}</p>
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
                <th className="px-4 py-2 border">Descripción</th>
                <th className="px-4 py-2 border">Imagen</th>
                <th className="px-4 py-2 border">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr key={prod.id} className="bg-white hover:bg-gray-100 border border-gray-300">
                  <td className="px-4 py-2 border text-black">{prod.id}</td>
                  <td className="px-4 py-2 border text-black">{prod.name}</td>
                  <td className="px-4 py-2 border text-black">{prod.description}</td>
                  <td className="px-4 py-2 border text-black">
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
          <PaginationAdminComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Table;