const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-center md:text-left">
                <p className="text-sm">&copy; {new Date().getFullYear()} Megarepuestos. Todos los derechos reservados.</p>
  
                <a 
                  href="https://www.linkedin.com/in/franco-kral-323aa2272" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm hover:underline text-gray-400 md:ml-auto"
                >
                  Creado por Kral Franco
                </a>
            </div>
        </footer>
    );
};

export default Footer;
