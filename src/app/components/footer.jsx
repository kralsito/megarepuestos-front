const Footer = () => {
  return (
      <footer className="bg-black text-white py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-center md:text-left">
              <p className="text-sm">&copy; {new Date().getFullYear()} Megarepuestos. Todos los derechos reservados.</p>
              
              <div className="flex flex-col md:flex-row items-center md:ml-auto space-y-2 md:space-y-0 md:space-x-6">
                  <a 
                    href="/terms" 
                    className="text-sm hover:underline text-gray-400"
                  >
                    Términos y Condiciones
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/franco-kral-323aa2272" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm hover:underline text-gray-400"
                  >
                    Creado por Kral Franco
                  </a>
              </div>
          </div>
      </footer>
  );
};

export default Footer;