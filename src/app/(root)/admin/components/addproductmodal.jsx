import { useState } from "react";
import { createProductAction } from "@/actions/product";

const AddProductModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("image", image); 

        try {
            await createProductAction(formData);
            alert("Producto agregado con éxito");
            onClose(); 
        } catch (error) {
            console.error("Error al agregar el producto:", error);
            alert("Error al agregar el producto");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Agregar Producto</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">
                        Imagen:
                        <input 
                            type="file" 
                            className="block w-full border p-2 rounded mt-1"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                        />
                    </label>

                    <label className="block mb-2">
                        Nombre:
                        <input 
                            type="text" 
                            className="block w-full border p-2 rounded mt-1"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>

                    <label className="block mb-4">
                        Descripción:
                        <textarea 
                            className="block w-full border p-2 rounded mt-1"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>

                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="bg-gray-400 px-4 py-2 rounded">Cancelar</button>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductModal;
