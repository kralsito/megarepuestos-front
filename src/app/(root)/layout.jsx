import Footer from "./components/footer";
import Navbar from "./components/navbar";

const Layout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;
  