'use client';

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { createTypeReplacementAction } from '@/actions/typereplacement';

const AddTypeReplacementModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        let swalInstance;
        
        if (isOpen) {
            swalInstance = Swal.fire({
                title: 'Agregar Tipo de Repuesto',
                html:
                    '<div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">' +
                    '<input id="name" class="swal2-input" placeholder="Nombre" style="width: 100%;">' +
                    '</div>',
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                customClass: {
                    popup: 'swal-wide'
                },
                allowOutsideClick: true,
                preConfirm: () => {
                    const name = document.getElementById('name').value;

                    if (!name) {
                        Swal.showValidationMessage('Todos los campos son obligatorios');
                    }

                    return { name };
                }
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { name } = result.value;
                    const formData = new FormData();
                    formData.append('name', name);

                    try {
                        await createTypeReplacementAction(formData);
                        Swal.fire({
                            icon: 'success',
                            title: 'Tipo de repuesto agregado',
                            text: 'El tipo de repuesto se agregó con éxito',
                            toast: true,
                            position: 'top-end',
                            timer: 3000,
                            showConfirmButton: false
                        });
                        onClose();
                        setTimeout(() => {
                            window.location.href = '/admin/typereplacement';
                        }, 1000);
                    } catch (error) {
                        console.error('Error al agregar el tipo de repuesto:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'No se pudo agregar el tipo de repuesto',
                            toast: true,
                            position: 'top-end',
                            timer: 3000,
                            showConfirmButton: false
                        });
                    }
                } else {

                    onClose();
                }
            });
        }
        
        return () => {
            if (swalInstance && swalInstance.close) {
                swalInstance.close();
            }
        };
    }, [isOpen, onClose]);

    return null;
};
export default AddTypeReplacementModal;