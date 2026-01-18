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
  title: "Repuestos para Celulares Berazategui y Quilmes ⚡ Mega Repuestos | Stock Inmediato",
  description: "🔧 Repuestos para celulares en Berazategui y Quilmes. Pantallas, baterías, flex, cámaras Samsung, iPhone, Motorola. ✅ Stock permanente ✅ Garantía ✅ Mejores precios zona sur. ¡Comprá ahora!",
  keywords: [
    "repuestos para celulares",
    "repuestos celular berazategui",
    "repuestos celular quilmes",
    
    "pantallas celular berazategui",
    "baterias celular berazategui",
    "flex de carga celular",
    "camaras celular repuesto",
    "display celular",
    
    "repuestos samsung berazategui",
    "repuestos iphone berazategui",
    "repuestos motorola",
    "repuestos xiaomi",
    
    // Keywords long-tail
    "donde comprar repuestos celular berazategui",
    "venta repuestos celular quilmes",
    "repuestos celular zona sur",
    "repuestos celular baratos berazategui",
    
    // Keywords geográficas
    "berazategui",
    "quilmes",
    "zona sur gba",
    "florencio varela",
    "la plata"
  ].join(", "),
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  authors: [{ name: "Mega Repuestos" }],
  
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://repuestosmega.com.ar",
    siteName: "Mega Repuestos",
    title: "🔧 Repuestos Celulares Berazategui y Quilmes | Stock Completo ⚡ Entrega Inmediata",
    description: "✅ TODOS los repuestos para celulares: Pantallas, Baterías, Flex, Cámaras. Samsung, iPhone, Motorola, Xiaomi. 📍 2 sucursales en zona sur 📍 Stock permanente 📍 Garantía oficial. ¡Consultá YA!",
    images: [
      {
        url: "https://repuestosmega.com.ar/images/megarepuestos.png",
        width: 1200,
        height: 630,
        alt: "Mega Repuestos - Venta de repuestos para celulares en Berazategui y Quilmes - Pantallas, baterías, flex, cámaras",
        type: "image/png",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Repuestos Celulares Berazategui | Mega Repuestos ⚡ Stock Completo",
    description: "🔧 Pantallas, baterías, flex, cámaras para Samsung, iPhone, Motorola. Stock permanente en zona sur. ¡Visitanos!",
    images: ["https://repuestosmega.com.ar/images/megarepuestos.png"],
    creator: "@megarepuestos",
  },
  
  alternates: {
    canonical: "https://repuestosmega.com.ar",
  },
  
  verification: {
    google: "2klZQuMTPIQ80KfyfUTBBgocqLkrqRaw5cBaH9PXciw",
  },
  
  other: {
    "geo.region": "AR-B",
    "geo.placename": "Berazategui, Buenos Aires",
    "geo.position": "-34.76104301170231;-58.20687349857045",
    "ICBM": "-34.76104301170231, -58.20687349857045",
  },
};

export default function Home() {
  return (
    <>
      {/* Header semántico optimizado para SEO */}
      <header className="sr-only">
        <h1>Repuestos Para Celulares en Berazategui y Quilmes - Mega Repuestos</h1>
        <p>
          Venta de repuestos para celulares en zona sur GBA. Stock completo y permanente de pantallas, 
          baterías, flex de carga, cámaras, bocinas y todos los componentes para Samsung, iPhone, 
          Motorola, Xiaomi, Huawei y más marcas. Atención en Berazategui (Calle 150 N°1485) y 
          Quilmes (Rivadavia 309). Garantía oficial, mejores precios de zona sur y entrega inmediata.
        </p>
        
        {/* Keywords adicionales para rastreadores */}
        <nav aria-label="Productos principales">
          <ul>
            <li>Pantallas para celulares Samsung, iPhone, Motorola</li>
            <li>Baterías originales y compatibles para todos los modelos</li>
            <li>Flex de carga, conectores de carga y componentes internos</li>
            <li>Cámaras frontales y traseras para celulares</li>
            <li>Repuestos con garantía en Berazategui y Quilmes</li>
          </ul>
        </nav>
      </header>

      {/* Contenido principal con estructura semántica */}
      <main className="bg-white">
        {/* Sección hero */}
        <article>
          <SectionACarousel />
        </article>

        {/* Sección de beneficios/características */}
        <section aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="sr-only">Por qué elegirnos</h2>
          <SectionI />
        </section>

        {/* Sección de categorías */}
        <section aria-labelledby="categories-heading">
          <h2 id="categories-heading" className="sr-only">Categorías de repuestos</h2>
          <SectionC />
        </section>

        {/* Carrusel de productos destacados */}
        <section aria-labelledby="featured-products-heading">
          <h2 id="featured-products-heading" className="sr-only">Productos destacados</h2>
          <ProductCarousel />
        </section>

        {/* Sección adicional B */}
        <section aria-labelledby="section-b-heading">
          <h2 id="section-b-heading" className="sr-only">Información adicional</h2>
          <SectionB />
        </section>

        {/* Sección G */}
        <section aria-labelledby="section-g-heading">
          <h2 id="section-g-heading" className="sr-only">Nuestros servicios</h2>
          <SectionG />
        </section>

        {/* Sección F */}
        <section aria-labelledby="section-f-heading">
          <h2 id="section-f-heading" className="sr-only">Marcas disponibles</h2>
          <SectionF />
        </section>

        {/* Separador visual */}
        <section className="bg-black py-16" aria-hidden="true">
          <VisualSeparator variant="animated" />
        </section>

        {/* Sección J */}
        <section aria-labelledby="section-j-heading">
          <h2 id="section-j-heading" className="sr-only">Testimonios</h2>
          <SectionJ />
        </section>

        {/* Sección E */}
        <section aria-labelledby="section-e-heading">
          <h2 id="section-e-heading" className="sr-only">Contacto y ubicación</h2>
          <SectionE />
        </section>
      </main>

      {/* Schema.org mejorado para SEO local con múltiples ubicaciones */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://repuestosmega.com.ar/#organization",
                "name": "Mega Repuestos",
                "url": "https://repuestosmega.com.ar",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://repuestosmega.com.ar/images/megarepuestos.png",
                  "width": 600,
                  "height": 600
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+54-11-3654-6874",
                  "contactType": "customer service",
                  "areaServed": "AR",
                  "availableLanguage": "Spanish"
                },
                "sameAs": [
                  "https://www.facebook.com/megacelularesberazategui",
                  "https://www.instagram.com/megarepuestosquilmes/"
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://repuestosmega.com.ar/#berazategui",
                "name": "Mega Repuestos Berazategui",
                "image": "https://repuestosmega.com.ar/images/megarepuestos.png",
                "description": "Venta de repuestos para celulares en Berazategui. Stock completo de pantallas, baterías, flex de carga, cámaras y todos los componentes. Atención de lunes a sábado con garantía oficial.",
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
                  "latitude": -34.76104301170231,
                  "longitude": -58.20687349857045
                },
                "url": "https://repuestosmega.com.ar",
                "telephone": "+54-11-3654-6874",
                "priceRange": "$$",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "10:00",
                    "closes": "20:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "10:00",
                    "closes": "19:00"
                  }
                ],
                "hasMap": "https://maps.app.goo.gl/gVWJWAKucFYtSGUDA",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "127"
                },
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Berazategui"
                  },
                  {
                    "@type": "City",
                    "name": "Quilmes"
                  },
                  {
                    "@type": "City",
                    "name": "Florencio Varela"
                  },
                  {
                    "@type": "City",
                    "name": "La Plata"
                  }
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://repuestosmega.com.ar/#quilmes",
                "name": "Mega Repuestos Quilmes",
                "image": "https://repuestosmega.com.ar/images/megarepuestos.png",
                "description": "Sucursal de Mega Repuestos en Quilmes. Repuestos para celulares con stock permanente: pantallas, baterías, flex, cámaras para todas las marcas.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rivadavia 309 - Local 5",
                  "addressLocality": "Quilmes",
                  "addressRegion": "Buenos Aires",
                  "postalCode": "1878",
                  "addressCountry": "AR"
                },
                "url": "https://repuestosmega.com.ar",
                "telephone": "+54-11-3654-6874",
                "priceRange": "$$",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "10:00",
                    "closes": "20:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "10:00",
                    "closes": "19:00"
                  }
                ],
                "hasMap": "https://maps.app.goo.gl/dxpDh7KeeJf5ChNP6"
              },
              {
                "@type": "WebSite",
                "@id": "https://repuestosmega.com.ar/#website",
                "url": "https://repuestosmega.com.ar",
                "name": "Mega Repuestos - Repuestos para Celulares",
                "description": "Venta de repuestos para celulares en Berazategui y Quilmes",
                "publisher": {
                  "@id": "https://repuestosmega.com.ar/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://repuestosmega.com.ar/buscar?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Inicio",
                    "item": "https://repuestosmega.com.ar"
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* FAQ Schema optimizado para rich snippets */}
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
                  "text": "En Mega Repuestos tenés el stock más completo de repuestos para celulares en Berazategui. Estamos en Calle 150 N°1485, con atención de lunes a viernes de 10 a 20hs y sábados de 10 a 19hs. Vendemos pantallas, baterías, flex de carga, cámaras y todos los componentes para Samsung, iPhone, Motorola, Xiaomi y más marcas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué repuestos para celulares tienen en stock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tenemos stock permanente de: Pantallas LCD y OLED para todos los modelos, Baterías originales y compatibles, Flex de carga y conectores, Cámaras frontales y traseras, Altavoces y auriculares, Tapas traseras, Botones y componentes internos. Trabajamos con repuestos para Samsung, iPhone, Motorola, Xiaomi, Huawei, LG y todas las marcas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Los repuestos para celulares tienen garantía?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, todos nuestros repuestos cuentan con garantía oficial. Los repuestos originales tienen 3 meses de garantía y los compatibles premium tienen 30 días. La garantía cubre defectos de fábrica. Somos importadores directos y trabajamos solo con proveedores certificados."
                }
              },
              {
                "@type": "Question",
                "name": "¿Tienen sucursal en Quilmes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, tenemos sucursal en Quilmes en Rivadavia 309 - Local 5. Atendemos con el mismo horario que Berazategui: lunes a viernes de 10 a 20hs y sábados de 10 a 19hs. En ambas sucursales tenés el mismo stock y precios."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuáles son los precios de los repuestos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tenemos los mejores precios de zona sur en repuestos para celulares. Los precios varían según el modelo y tipo de repuesto. Para ver precios actualizados, comunicate al 011-3654-6874 o visitanos en nuestras sucursales de Berazategui o Quilmes. Hacemos descuentos por cantidad para técnicos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Hacen entregas a domicilio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, hacemos entregas en Berazategui, Quilmes, Florencio Varela y zona sur GBA. El costo del envío varía según la distancia. También podés retirar en cualquiera de nuestras 2 sucursales con tu pedido listo en el día."
                }
              },
              {
                "@type": "Question",
                "name": "¿Venden repuestos para iPhone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, tenemos stock completo de repuestos para iPhone: pantallas originales y soft OLED, baterías, flex de carga, cámaras y todos los componentes para modelos desde iPhone 6 hasta iPhone 15. Todos con garantía."
                }
              },
              {
                "@type": "Question",
                "name": "¿Atienden a técnicos de celulares?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, somos proveedores de repuestos para técnicos de celulares en toda zona sur. Ofrecemos precios especiales por cantidad, descuentos para técnicos registrados y asesoramiento técnico. Tenés stock permanente para que nunca te falte material de trabajo."
                }
              }
            ]
          })
        }}
      />

      {/* Footer */}
      <SectionFooter />
    </>
  );
}