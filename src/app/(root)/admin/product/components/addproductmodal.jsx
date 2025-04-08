'use client';

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { createProductAction } from '@/actions/product';

const AddProductModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            Swal.fire({
                title: 'Agregar Producto',
                html:
                    '<div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">' +
                    '<input id="image" type="file" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">' +
                    '<input id="name" class="swal2-input" placeholder="Nombre" style="width: 100%;">' +
                    '<textarea id="description" class="swal2-textarea" placeholder="Descripción" style="width: 100%; height: 100px;"></textarea>' +
                    '</div>',
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                customClass: {
                    popup: 'swal-wide'
                },
                preConfirm: () => {
                    const imageInput = document.getElementById('image');
                    const name = document.getElementById('name').value;
                    const description = document.getElementById('description').value;
                    const image = imageInput.files[0];

                    if (!name || !description || !image) {
                        Swal.showValidationMessage('Todos los campos son obligatorios');
                    }

                    return { name, description, image };
                }
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { name, description, image } = result.value;
                    const formData = new FormData();
                    formData.append('name', name);
                    formData.append('description', description);
                    formData.append('image', image);

                    try {
                        await createProductAction(formData);
                        Swal.fire({
                            icon: 'success',
                            title: 'Producto agregado',
                            text: 'El producto se agregó con éxito',
                            toast: true,
                            position: 'top-end',
                            timer: 3000,
                            showConfirmButton: false
                        });
                        onClose();
                        setTimeout(() => {
                            window.location.href = '/admin/product';
                        }, 1000);
                    } catch (error) {
                        console.error('Error al agregar el producto:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'No se pudo agregar el producto',
                            toast: true,
                            position: 'top-end',
                            timer: 3000,
                            showConfirmButton: false
                        });
                    }
                }
            });
        }
    }, [isOpen]);

    return null;
};

export default AddProductModal;