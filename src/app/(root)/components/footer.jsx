const Footer = () => {
  return (
      <footer className="bg-black text-white py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-center md:text-left">
              <p className="text-sm">&copy; {new Date().getFullYear()} Megarepuestos. Todos los derechos reservados.</p>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
                  <a href="/terminos" className="text-sm hover:underline">Términos y Condiciones</a>
                  <a href="/politicas" className="text-sm hover:underline">Políticas de Privacidad</a>
              </div>
          </div>
      </footer>
  );
};

export default Footer;