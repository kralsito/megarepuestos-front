"use client";

import { useEffect, useState } from "react";
import { getFormsAction, deleteFormAction } from "@/actions/form";
import { Trash2 } from "lucide-react"; 
import Swal from "sweetalert2";
import CustomLoading from "@/app/components/customLoading";

const TableClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const data = await getFormsAction();
      setClients(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (client) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `Eliminarás el cliente "${client.firstName} ${client.lastName}". Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        await deleteFormAction(client.id);
        
        setClients(clients.filter(c => c.id !== client.id));

        Swal.fire({
          icon: "success",
          title: "Cliente eliminado",
          text: "El cliente se eliminó correctamente.",
          timer: 2000,
          showConfirmButton: true,
          confirmButtonText: "Cerrar",
          confirmButtonColor: "#3085d6",
        });

      } catch (error) {
        console.error("Error al eliminar el cliente:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo eliminar el cliente.",
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
            {clients.map((cli) => (
              <div 
                key={cli.id} 
                className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{cli.id}</h3>
                  <button 
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => handleDelete(cli)}
                    title="Eliminar cliente"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-1">
                  <p><span className="font-medium">Nombre:</span> {cli.firstName}</p>
                  <p><span className="font-medium">Apellido:</span> {cli.lastName}</p>
                  <p><span className="font-medium">Número de celular:</span> {cli.phoneNumber}</p>
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
                <th className="px-4 py-2 border">Apellido</th>
                <th className="px-4 py-2 border">Número de telefono</th>
                <th className="px-4 py-2 border">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((cli) => (
                <tr key={cli.id} className="bg-white hover:bg-gray-100 border border-gray-300">
                  <td className="px-4 py-2 border">{cli.id}</td>
                  <td className="px-4 py-2 border">{cli.firstName}</td>
                  <td className="px-4 py-2 border">{cli.lastName}</td>
                  <td className="px-4 py-2 border">{cli.phoneNumber}</td>
                  <td className="px-4 py-2 border">
                    <button 
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                      onClick={() => handleDelete(cli)}
                      title="Eliminar cliente"
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

export default TableClients;