import ProductCarousel from "./components/productcarousel";
import SectionACarousel from "./components/SectionACarousel";
import SectionFooter from "./components/sectionFooter";
import SectionB from "./components/SectionB";
import SectionC from "./components/sectionC";
import SectionE from "./components/sectionE";
import SectionF from "./components/sectionF";
import SectionG from "./components/sectionG";

export const metadata = {
  title: "Repuestos para Celulares en Berazategui | Mega Repuestos",
  description: "✅ Repuestos para celulares en Berazategui: pantallas, baterías, flex, pines de carga. ⚡ Entrega inmediata ⚡ Mejores precios zona sur. ¡Visitanos!",
  keywords: "repuestos para celulares, repuestos celular berazategui, pantallas celular, baterias celular, repuestos samsung, repuestos iphone, zona sur",
  robots: "index, follow",
  openGraph: {
    title: "🔧 Repuestos para Celulares en Berazategui | Stock Completo",
    description: "✅ Todos los repuestos para tu celular: pantallas, baterías, flex, cargadores. ⚡ Stock permanente ⚡ Zona sur GBA. ¡Consultá ahora!",
    type: "website",
    url: "https://repuestosmega.com.ar",
    images: [
      {
        url: "/images/megarepuestos.png",
        width: 1200,
        height: 630,
        alt: "Mega Repuestos - Repuestos para celulares en Berazategui",
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
      {/* Contenido SEO optimizado con keywords principales */}
      <div className="absolute -left-[10000px] w-0 h-0 overflow-hidden" aria-hidden="true">
        <h1>Repuestos Para Celulares en Berazategui - Mega Repuestos</h1>
        <h2>Stock Completo de Repuestos para Celulares en Zona Sur</h2>
        <p>Mega Repuestos es tu tienda especializada en repuestos para celulares en Berazategui. Contamos con el stock más completo de repuestos para celulares en zona sur del Gran Buenos Aires.</p>
        
        <h3>Repuestos para Celulares - Todas las Marcas</h3>
        <p>Tenemos repuestos para celulares Samsung, iPhone, Motorola, Xiaomi, LG, Huawei y todas las marcas del mercado. Nuestros repuestos para celulares incluyen:</p>
        <ul>
          <li>Pantallas para celulares LCD y OLED</li>
          <li>Baterías para celulares originales y compatibles</li>
          <li>Flex de carga para celulares</li>
          <li>Cámaras para celulares traseras y frontales</li>
          <li>Altavoces y auriculares para celulares</li>
          <li>Conectores de carga para celulares</li>
          <li>Tapas traseras para celulares</li>
        </ul>
        
        <h3>¿Por qué elegir nuestros repuestos para celulares?</h3>
        <p>En Mega Repuestos Berazategui ofrecemos repuestos para celulares con garantía, stock permanente y atención personalizada. Somos especialistas en repuestos para celulares en zona sur hace más de 10 años.</p>
        
        <h3>Repuestos para Celulares en Berazategui - Ubicación</h3>
        <p>Visitanos en nuestro local de repuestos para celulares en Berazategui. Estamos ubicados estratégicamente para atender toda la zona sur: Quilmes, Florencio Varela, La Plata y alrededores.</p>
        
        <h3>Marcas de Repuestos para Celulares</h3>
        <p>Repuestos Samsung Galaxy, iPhone Apple, Motorola Moto, Xiaomi Redmi, LG, Huawei, Nokia, Sony Xperia y más marcas de repuestos para celulares.</p>
      </div>

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

      {/* Tu contenido original sin cambios */}
      <SectionACarousel />
      <SectionC />
      <ProductCarousel />
      <SectionB />
      <SectionG />
      <SectionF />
      <SectionC />
      <SectionE />
      <SectionFooter />
    </>
  );
}