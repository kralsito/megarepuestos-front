const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Megarepuestos. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/terminos" className="text-sm hover:underline">Términos y Condiciones</a>
            <a href="/politicas" className="text-sm hover:underline">Políticas de Privacidad</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;