import Footer from "./components/footer";
import Navbar from "./components/navbar";
import WhatsAppButton from "./components/whatsappbutton";

const Layout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppButton />
        <Footer />
      </div>
    );
  };
  
  export default Layout;
  