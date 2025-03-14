const Navbar = () => {
    return (
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto flex flex-col items-center px-4">
        <a href="/">
          <img src="images/megarepuestos.png" alt="Logo" className="h-48 mb-2" />
        </a>
          <hr className="w-full border-t mb-8 mt-4" />
          <div className="flex space-x-32">
            <a href="/" className="hover:underline">INICIO</a>
            <a href="/productos" className="hover:underline">PRODUCTOS</a>
            <a href="/contact" className="hover:underline">CONTACTO</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;