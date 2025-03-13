"use client";

import { useEffect, useState } from "react";
import { getProductsAction } from "@/actions/product";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsAction();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="text-left bg-gray-200">
          <th className="px-4 py-2 border">Id</th>
          <th className="px-4 py-2 border">Nombre</th>
          <th className="px-4 py-2 border">Descripción</th>
          <th className="px-4 py-2 border">Imagen</th>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
