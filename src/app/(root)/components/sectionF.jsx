'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { createFormAction, checkPhoneNumberExistsAction } from '@/actions/form';

export default function SectionF() {
  const router = useRouter();
  const redirectUrl = "https://teletype.in/@megacelulares/U7zK_dlWbx6";

  const openModal = async () => {
    Swal.fire({
      title: 'Completa el formulario para ver la lista de precios',
      html:
        '<input id="firstName" class="swal2-input" placeholder="Nombre" required>' +
        '<input id="lastName" class="swal2-input" placeholder="Apellido" required>' + 
        '<input id="phoneNumber" class="swal2-input" placeholder="Celular" required>',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      preConfirm: async () => {
        try {
          const firstName = document.getElementById('firstName').value;
          const lastName = document.getElementById('lastName').value; 
          const phoneNumber = document.getElementById('phoneNumber').value;

          if ( !firstName || !lastName || !phoneNumber) {
            Swal.showValidationMessage('Todos los campos son obligatorios');
            return false;
          }
          
          const phoneNumberExists = await checkPhoneNumberExistsAction(phoneNumber);
          

          return {  
            firstName, 
            lastName, 
            phoneNumber,
            phoneNumberExists 
          };
        } catch (error) {
          console.error('Error en la validación:', error);
          Swal.showValidationMessage('Error en la validación');
          return false;
        }
      }
    }).then(async (result) => {
      if (result.isConfirmed && result.value) {
        try {
          if (result.value.phoneNumberExists) {
            await Swal.fire({
              title: 'Número de teléfono ya registrado',
              icon: 'success',
              confirmButtonText: 'Ver lista de precios'
            });
            
            window.location.href = redirectUrl;
            return;
          }
          
          const { phoneNumberExists, ...formData } = result.value;
          
          const response = await createFormAction(formData);
          
          await Swal.fire({
            title: '¡Registro exitoso!',
            icon: 'success',
            text: 'Tus datos han sido registrados correctamente',
            confirmButtonText: 'Continuar'
          });
          
          window.location.href = redirectUrl;
        } catch (error) {
          console.error('Error al crear el formulario:', error);
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: 'Hubo un problema al procesar tu solicitud',
            confirmButtonText: 'Intentar nuevamente'
          });
        }
      }
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button 
        onClick={openModal} 
        className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Lista de Precio
      </button>
    </div>
  );
}