import ProductCarousel from "./components/productcarousel";
import SectionACarousel from "./components/SectionACarousel";
import SectionFooter from "./components/sectionFooter";
import SectionB from "./components/SectionB";
import SectionC from "./components/sectionC";
import SectionE from "./components/sectionE";
import SectionF from "./components/sectionF";
import SectionG from "./components/sectionG";
import SectionI from "./components/SectionI";
import SectionJ from "./components/SectionJ";
import VisualSeparator from "./components/separator";

export const metadata = {
  title: "Repuestos para Celulares en Zona Sur | Mega Repuestos",
  description: "✅ Repuestos para celulares en Berazategui y Quilmes: pantallas, baterías, flex, pines de carga. ⚡ Entrega inmediata ⚡ Mejores precios zona sur. ¡Visitanos!",
  keywords: "repuestos para celulares, repuestos celular berazategui, repuestos celular quilmes, pantallas celular, baterias celular, repuestos samsung, repuestos iphone, zona sur, repuestos, celular",
  robots: "index, follow",
  openGraph: {
    title: "🔧 Repuestos para Celulares en Berazategui y Quilmes | Stock Completo",
    description: "✅ Todos los repuestos para tu celular: pantallas, baterías, flex, cargadores. ⚡ Stock permanente ⚡ Zona sur GBA. ¡Consultá ahora!",
    type: "website",
    url: "https://repuestosmega.com.ar",
    images: [
      {
        url: "/images/megarepuestos.png",
        width: 1200,
        height: 630,
        alt: "Mega Repuestos - Repuestos para celulares en Berazategui y Quilmes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Repuestos para Celulares Berazategui | Mega Repuestos",
    description: "Stock completo de repuestos para celulares en zona sur. Pantallas, baterías y más.",
    images: ["/images/megarepuestos.png"],
  },
  alternates: {
    canonical: "https://repuestosmega.com.ar",
  },
};

export default function Home() {
  return (
    <>
      {/* Header principal con contenido mínimo pero visible */}
      <header className="absolute top-0 left-0 w-1 h-1 overflow-hidden opacity-0 pointer-events-none">
        <h1>Repuestos Para Celulares - Mega Repuestos</h1>
        <p>Stock completo de repuestos para celulares: pantallas, baterías, flex de carga, cámaras. Atendemos en zona sur GBA con garantía y entrega inmediata. Samsung, iPhone, Motorola, Xiaomi.</p>
      </header>

      {/* Contenido principal de la página - mantiene tu diseño original */}
      <main>
        <SectionACarousel />
        <SectionI />
        <SectionC />
        <ProductCarousel />
        <SectionB />
        <SectionG />
        <SectionF />
        <section className="bg-black py-16">
          <VisualSeparator variant="animated" />
        </section>

        <SectionJ />
        <SectionE />
      </main>

      {/* Schema.org mejorado para SEO local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mega Repuestos",
            "alternateName": "Mega Repuestos Berazategui",
            "description": "Venta de repuestos para celulares en Berazategui. Stock completo de pantallas, baterías, flex y todos los repuestos para celulares.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle 150 N°1485",
              "addressLocality": "Berazategui",
              "addressRegion": "Buenos Aires",
              "postalCode": "1884",
              "addressCountry": "AR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-34.76104301170231",
              "longitude": "-58.20687349857045"
            },
            "url": "https://repuestosmega.com.ar",
            "telephone": "011-3654-6874",
            "priceRange": "$$",
            "image": "https://repuestosmega.com.ar/images/megarepuestos.png",
            "openingHours": [
              "Mo-Fr 09:00-18:00",
              "Sa 09:00-13:00"
            ],
            "areaServed": [
              "Berazategui",
              "Quilmes",
              "Florencio Varela",
              "La Plata",
              "Zona Sur GBA"
            ],
            "sameAs": [
              "https://www.facebook.com/megacelularesberazategui",
              "https://www.instagram.com/megacelularesberazategui/"
            ]
          })
        }}
      />

      {/* FAQ Schema para aparecer en búsquedas con preguntas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Dónde comprar repuestos para celulares en Berazategui?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En Mega Repuestos Berazategui tenemos el stock más completo de repuestos para celulares: pantallas, baterías, flex y más. Visitanos en nuestro local."
                }
              },
              {
                "@type": "Question", 
                "name": "¿Qué repuestos para celulares tienen en stock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tenemos pantallas, baterías, flex de carga, cámaras, altavoces y todos los repuestos para celulares Samsung, iPhone, Motorola, Xiaomi y más marcas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Los repuestos para celulares tienen garantía?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, todos nuestros repuestos para celulares cuentan con garantía. Trabajamos con repuestos originales y compatibles de primera calidad."
                }
              }
            ]
          })
        }}
      />

      <SectionFooter />
    </>
  );
}