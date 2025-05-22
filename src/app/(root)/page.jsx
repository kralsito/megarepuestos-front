import ProductCarousel from "./components/productcarousel";
import SectionACarousel from "./components/SectionACarousel";
import SectionFooter from "./components/sectionFooter";
import SectionB from "./components/SectionB";
import SectionC from "./components/sectionC";
import SectionE from "./components/sectionE";
import SectionF from "./components/sectionF";
import SectionG from "./components/sectionG";


export const metadata = {
  title: "Mega Repuestos | Repuestos de Celulares en Berazategui",
  description: "Venta de repuestos para celulares en Berazategui: pantallas, baterías, cargadores, flex y más. Mega Repuestos, tu solución en repuestos.",
  keywords: "repuestos celulares Berazategui, pantallas de celulares, baterías de celulares, mega repuestos",
  robots: "index, follow",
  openGraph: {
    title: "Mega Repuestos | Repuestos de Celulares en Berazategui",
    description: "En Mega Repuestos tenemos todos los repuestos para tu celular en Berazategui. Calidad y buen precio garantizados.",
    type: "website",
    url: "https://repuestosmega.com.ar",
    images: [
      {
        url: "/images/megarepuestos.png",
        width: 800,
        height: 600,
        alt: "Mega Repuestos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega Repuestos | Repuestos de Celulares en Berazategui",
    description: "En Mega Repuestos tenemos todos los repuestos para tu celular en Berazategui.",
    images: ["/images/megarepuestos.png"],
  },
  alternates: {
    canonical: "https://repuestosmega.com.ar",
  },
};

export default function Home() {
  return (
    <>
      {/* H1 y contenido oculto para SEO - NO se ve en pantalla */}
      <div className="sr-only">
        <h1>Mega Repuestos - Repuestos de Celulares en Berazategui</h1>
        <p>Pantallas • Baterías • Pines de carga • Flex y más</p>
        <p>Venta de repuestos para celulares: pantallas, baterías, pines de carga, flex y más. Tu solución en repuestos.</p>
      </div>

      {/* Contenido principal */}
      <main>
        <SectionACarousel />
        <SectionC />
        <ProductCarousel />
        <SectionB />
        <SectionG />
        <SectionF />
        <SectionC />
        <SectionE />
      </main>

      {/* Footer */}
      <footer>
        <SectionFooter />
      </footer>
    </>
  );
}