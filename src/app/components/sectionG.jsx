const items = [
    { title: "Módulos de pantalla", image: "/images/modulos.png" },
    { title: "Baterías", image: "/images/baterias.png" },
    { title: "Placas de carga", image: "/images/placasdecarga.png" },
    { title: "Herramientas", image: "/images/herramientas.png" },
    { title: "Insumos", image: "/images/insumos.png" },
    { title: "Flex y cámaras", image: "/images/flex_camaras.png" },
];

const SectionG = () => {
    return (
        <div className="container mx-auto px-4 pt-8 pb-20 bg-white">
            <h1
                className="text-2xl md:text-3xl text-center mb-20 tracking-wider text-black md:mt-8"
                style={{ fontFamily: "'oktah', sans-serif" }}
            >
                <span className="relative inline-block">TIPOS DE PRODUCTOS</span>
            </h1>
            <div className="grid grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center text-black">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain mb-6"
                        />
                        <span
                            className="text-base md:text-lg lg:text-xl font-semibold text-center"
                            style={{ fontFamily: "'oktah', sans-serif" }}
                        >
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionG;

