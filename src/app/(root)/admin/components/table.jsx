"use client";

import { useEffect, useState } from 'react';
import { getProductsAction } from '@/actions/product';

const Table = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedUrls, setExpandedUrls] = useState({});

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
    
      const toggleUrl = (id) => {
        setExpandedUrls((prev) => ({
          ...prev,
          [id]: !prev[id],
        }));
      };

    return (
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Imagen URL</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id} className="bg-white shadow-md hover:bg-gray-300 border my-2">
                <td className="px-4 py-2">{prod.id}</td>
                <td className="px-4 py-2">{prod.name}</td>
                <td className="px-4 py-2">{prod.description}</td>
                <td className="px-4 py-2">
                  {expandedUrls[prod.id] ? prod.s3Url : `${prod.s3Url.slice(0, 20)}...`}
                  <button
                    onClick={() => toggleUrl(prod.id)}
                    className="text-blue-500 ml-2"
                  >
                    {expandedUrls[prod.id] ? 'Ver menos' : 'Ver más'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    )
};

export default Table;