'use client';

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { createReplacementAction } from '@/actions/replacement';
import { getBrandsDropdownAction } from '@/actions/brand';
import { getTypeReplacementsDropdownAction } from '@/actions/typereplacement';

const AddReplacementModal = ({ isOpen, onClose }) => {
    const [brands, setBrands] = useState([]);
    const [typeReplacements, setTypeReplacements] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (isOpen) {
                setLoading(true);
                try {
                    const [brandsData, typeReplacementsData] = await Promise.all([
                        getBrandsDropdownAction(),
                        getTypeReplacementsDropdownAction()
                    ]);
                    
                    setBrands(brandsData);
                    setTypeReplacements(typeReplacementsData);
                } catch (error) {
                    console.error('Error al cargar datos:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudieron cargar las marcas o tipos de repuestos',
                        toast: true,
                        position: 'top-end',
                        timer: 3000,
                        showConfirmButton: false
                    });
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [isOpen]);

    useEffect(() => {
        let swalInstance;
        
        if (isOpen && !loading && brands.length > 0 && typeReplacements.length > 0) {
            const brandOptions = brands.map(brand => 
                `<option value="${brand.id}">${brand.name}</option>`
            ).join('');
            
            const typeReplacementOptions = typeReplacements.map(type => 
                `<option value="${type.id}">${type.name}</option>`
            ).join('');
            
            swalInstance = Swal.fire({
                title: 'Agregar Repuesto',
                html:
                    '<div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">' +
                    '<input id="name" class="swal2-input" placeholder="Nombre" style="width: 100%;">' +
                    '<select id="brand_id" class="swal2-select" style="width: 100%;">' +
                    '<option value="" disabled selected>Selecciona una marca</option>' +
                    brandOptions +
                    '</select>' +
                    '<select id="typeReplacement_id" class="swal2-select" style="width: 100%;">' +
                    '<option value="" disabled selected>Selecciona un tipo de repuesto</option>' +
                    typeReplacementOptions +
                    '</select>' +
                    '</div>',
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar',
                customClass: {
                    popup: 'swal-wide'
                },
                allowOutsideClick: true,
                preConfirm: () => {
                    const name = document.getElementById('name').value;
                    const brand_id = document.getElementById('brand_id').value;
                    const typeReplacement_id = document.getElementById('typeReplacement_id').value;

                    if (!name || !brand_id || !typeReplacement_id) {
                        Swal.showValidationMessage('Todos los campos son obligatorios');
                        return false;
                    }

                    return { name, brand_id, typeReplacement_id };
                }
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { name, brand_id, typeReplacement_id } = result.value;
                    
                    try {
                        const formData = new FormData();
                        formData.append('name', name);
                        formData.append('brand_id', brand_id);
                        formData.append('typeReplacement_id', typeReplacement_id);
                        
                        await createReplacementAction(formData);
                        
                        Swal.fire({
                            icon: 'success',
                            title: 'Repuesto agregado',
                            text: 'El repuesto se agregó con éxito',
                            toast: true,
                            position: 'top-end',
                            timer: 3000,
                            showConfirmButton: false
                        });
                        onClose();
                        setTimeout(() => {
                            window.location.href = '/admin/replacement';
                        }, 1000);
                    } catch (error) {
                        console.error('Error al agregar el repuesto:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'No se pudo agregar el repuesto',
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
        } else if (isOpen && loading) {
            swalInstance = Swal.fire({
                title: 'Cargando datos...',
                didOpen: () => {
                    Swal.showLoading();
                },
                allowOutsideClick: false,
                showConfirmButton: false
            });
        }
        
        return () => {
            if (swalInstance && swalInstance.close) {
                swalInstance.close();
            }
        };
    }, [isOpen, onClose, brands, typeReplacements, loading]);

    return null;
};

export default AddReplacementModal;