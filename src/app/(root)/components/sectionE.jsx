const SectionE = () => {
    return (
      <section 
        className="py-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fondoquienessomos.jpg')" }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
          <div className="text-center md:text-left w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary-yellow mb-6">¿Quiénes somos?</h2>
            <p className="text-white text-xl mb-6">
              En Megarepuestos, nos especializamos en la provisión de repuestos para celulares de todas las marcas y modelos. 
              Ubicados en Berazategui, trabajamos con un amplio catálogo de piezas de alta calidad para garantizar soluciones eficientes a nuestros clientes.
            </p>
            <p className="text-white text-xl mb-6 hidden sm:block">
              Nuestro compromiso es ofrecer productos confiables y un servicio excepcional, ayudando a técnicos y comercios a mantener sus dispositivos en óptimas condiciones. 
              Con años de experiencia en el rubro, somos tu mejor opción en repuestos para celulares.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/3 flex justify-end">
            <div className="p-1 rounded-lg">
              <img 
                src="/images/megarepuestos.png" 
                alt="Megarepuestos" 
                className="rounded-lg w-full md:w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SectionE;