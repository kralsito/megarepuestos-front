"use client";

import React from "react";
// Importa los iconos de flechas de lucide-react
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftSide = Math.floor(maxPagesToShow / 2);
      const rightSide = maxPagesToShow - leftSide - 1;
      
      if (currentPage < leftSide) {
        // Si estamos cerca del inicio
        for (let i = 0; i < maxPagesToShow - 1; i++) {
          pages.push(i);
        }
        pages.push(null); // Indicador para "..."
        pages.push(totalPages - 1);
      } else if (currentPage >= totalPages - rightSide) {
        // Si estamos cerca del final
        pages.push(0);
        pages.push(null); // Indicador para "..."
        for (let i = totalPages - maxPagesToShow + 1; i < totalPages; i++) {
          pages.push(i);
        }
      } else {
        // En medio
        pages.push(0);
        pages.push(null); // Indicador para "..."
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(null); // Indicador para "..."
        pages.push(totalPages - 1);
      }
    }
    
    return pages;
  };

  const handlePageClick = (pageNum) => {
    onPageChange(pageNum);
  };

  return (
    <div className="flex justify-center items-center mt-6 mb-4">
      <nav className="flex items-center space-x-2">
        {/* Botón anterior con icono */}
        <button
          onClick={() => currentPage > 0 && handlePageClick(currentPage - 1)}
          disabled={currentPage === 0}
          className={`p-2 rounded-md flex items-center justify-center ${
            currentPage === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-label="Página anterior"
          title="Página anterior"
        >
          <ChevronLeft size={18} />
        </button>
        
        {/* Números de página */}
        {getPageNumbers().map((pageNum, index) => {
          if (pageNum === null) {
            return (
              <span key={`ellipsis-${index}`} className="px-3 py-1">
                ...
              </span>
            );
          }
          return (
            <button
              key={`page-${pageNum}`}
              onClick={() => handlePageClick(pageNum)}
              className={`px-3 py-1 rounded-md ${
                currentPage === pageNum
                  ? "bg-primary-yellow text-black"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {pageNum + 1}
            </button>
          );
        })}
        
        {/* Botón siguiente con icono */}
        <button
          onClick={() => currentPage < totalPages - 1 && handlePageClick(currentPage + 1)}
          disabled={currentPage >= totalPages - 1}
          className={`p-2 rounded-md flex items-center justify-center ${
            currentPage >= totalPages - 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-label="Página siguiente"
          title="Página siguiente"
        >
          <ChevronRight size={18} />
        </button>
      </nav>
    </div>
  );
};

export default PaginationComponent;