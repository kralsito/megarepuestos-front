import Footer from "./components/footer";
import Navbar from "./components/navbar";
import WhatsAppButton from "./components/whatsappbutton";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Aumentamos el padding para pantallas grandes */}
      <main className="flex-grow pt-[calc(4rem+48px)] md:pt-[calc(5rem+64px)] lg:pt-[calc(6rem+72px)]">
        {children}
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout;