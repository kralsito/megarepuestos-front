"use client";

import React from "react";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  // Determinar qué páginas mostrar
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Si hay menos páginas que el máximo a mostrar, mostrar todas
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Si hay más páginas, mostrar un rango alrededor de la página actual
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

  return (
    <div className="flex justify-center items-center mt-6 mb-4">
      <nav className="flex items-center space-x-2">
        {/* Botón anterior */}
        <button
          onClick={() => currentPage > 0 && onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className={`px-3 py-1 rounded-md ${
            currentPage === 0
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Anterior
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
              onClick={() => onPageChange(pageNum)}
              className={`px-3 py-1 rounded-md ${
                currentPage === pageNum
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {pageNum + 1}
            </button>
          );
        })}
        
        {/* Botón siguiente */}
        <button
          onClick={() => currentPage < totalPages - 1 && onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages - 1}
          className={`px-3 py-1 rounded-md ${
            currentPage >= totalPages - 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Siguiente
        </button>
      </nav>
    </div>
  );
};

export default PaginationComponent;