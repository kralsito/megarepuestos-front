import ProductCarousel from "./components/productcarousel";
import SectionACarousel from "./components/SectionACarousel";
import SectionFooter from "./components/sectionFooter";
import SectionB from "./components/SectionB";
import SectionC from "./components/sectionC";
import SectionE from "./components/sectionE";
import SectionF from "./components/sectionF";
import SectionG from "./components/sectionG";
import VisualSeparator from "./components/separator";

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
      {/* Header principal con contenido mínimo pero visible */}
      <header className="absolute top-0 left-0 w-1 h-1 overflow-hidden opacity-0 pointer-events-none">
        <h1>Repuestos Para Celulares en Berazategui - Mega Repuestos</h1>
        <p>Stock completo de repuestos para celulares: pantallas, baterías, flex de carga, cámaras. Atendemos en zona sur GBA con garantía y entrega inmediata. Samsung, iPhone, Motorola, Xiaomi.</p>
      </header>

      {/* Contenido principal de la página - mantiene tu diseño original */}
      <main>
        <SectionACarousel />
        
        {/* Sección SEO integrada de forma natural */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-4 overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary-yellow rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-yellow rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-yellow rounded-full blur-3xl opacity-30"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12 mt-12">
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-white">Stock completo de </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-primary-yellow/80">
                  repuestos para celulares
                </span>
                <span className="text-white"> en zona Sur</span>
              </h2>
              
              <div className="w-32 h-1 bg-gradient-to-r from-primary-yellow to-primary-yellow/60 mx-auto mb-8 rounded-full"></div>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <strong className="text-primary-yellow bg-clip-text bg-gradient-to-r ">
                  Mega Repuestos
                </strong> es tu tienda especializada en repuestos para celulares en Berazategui. 
                Contamos con el <span className="text-primary-yellow font-semibold">stock más completo</span> de repuestos 
                para celulares en zona sur del Gran Buenos Aires.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tarjeta 1 - Todas las marcas */}
              <div className="group relative bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 border border-primary-yellow/20">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-black/90 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-yellow/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Todas las marcas</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Repuestos para <strong>Samsung, iPhone, Motorola, Xiaomi, LG, Huawei</strong> y 
                    todas las marcas del mercado.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Samsung', 'iPhone', 'Xiaomi', 'Motorola'].map((marca, index) => (
                      <span key={index} className="bg-primary-yellow/20 backdrop-blur-sm text-primary-yellow text-xs font-medium px-3 py-1 rounded-full">
                        {marca}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Tarjeta 2 - Stock permanente */}
              <div className="group relative bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 border border-primary-yellow/20">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-black/90 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-yellow/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Stock permanente</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Pantallas LCD y OLED, baterías originales, flex de carga, 
                    cámaras y todos los repuestos disponibles.
                  </p>
                  <div className="bg-primary-yellow/10 backdrop-blur-sm rounded-lg p-3 border border-primary-yellow/20">
                    <div className="flex items-center text-primary-yellow text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      Stock actualizado
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tarjeta 3 - Zona sur GBA */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 md:col-span-2 lg:col-span-1 border border-primary-yellow/20">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-yellow/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Zona sur GBA</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Atendemos en <strong>Berazategui</strong> con entrega inmediata 
                    y los mejores precios de la zona.
                  </p>
                  <div className="bg-primary-yellow/10 backdrop-blur-sm rounded-lg p-3 border border-primary-yellow/20">
                    <div className="flex items-center text-primary-yellow text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      Entrega inmediata disponible
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Estadísticas rápidas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-700/50">
              {[
                { number: "500+", label: "Repuestos disponibles" },
                { number: "10+", label: "Marcas diferentes" },
                { number: "24h", label: "Stock actualizado" },
                { number: "100%", label: "Garantía de calidad" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-primary-yellow/80 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionC />
        <ProductCarousel />
        <SectionB />
        <SectionG />
        <SectionF />
        <section className="bg-black py-16">
          <VisualSeparator variant="animated" />
        </section>
              
        {/* Sección adicional con información útil para SEO */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-6xl mx-auto mb-8">
            {/* Header con animación sutil */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                ¿Por qué elegir nuestros 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-primary-yellow/80">
                  {" "}repuestos para celulares?
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-yellow to-primary-yellow/80 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
                En <strong className="text-primary-yellow">Mega Repuestos Berazategui</strong> ofrecemos repuestos para celulares con garantía, stock permanente y atención personalizada para técnicos.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Repuestos disponibles */}
              <div className="group relative bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 border border-primary-yellow/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-yellow/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-transform duration-300 mr-4">
                    <svg className="w-6 h-6 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-yellow">Repuestos disponibles</h3>
                </div>
                
                <div className="space-y-4 text-white">
                  {[
                    { icon: "📱", text: "Pantallas LCD y OLED de alta calidad" },
                    { icon: "🔋", text: "Baterías originales y compatibles" },
                    { icon: "🔌", text: "Flex de carga y conectores" },
                    { icon: "📷", text: "Cámaras traseras y frontales" },
                    { icon: "🔊", text: "Altavoces y auriculares premium" },
                    { icon: "⚡", text: "Conectores de carga universales" },
                    { icon: "🛡️", text: "Tapas traseras resistentes" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg hover:bg-primary-yellow/10 transition-colors duration-200">
                      <span className="text-2xl mr-4">{item.icon}</span>
                      <span className="text-gray-300 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
                  
              {/* Marcas que manejamos */}
              <div className="group relative bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 border border-primary-yellow/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-yellow/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-transform duration-300 mr-4">
                    <svg className="w-6 h-6 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-yellow">Marcas que manejamos</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Trabajamos con repuestos para todas las marcas principales del mercado. 
                  Nuestro stock se mantiene actualizado con los modelos más nuevos y populares.
                </p>
                
                {/* Grid de marcas con logos estilizados */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {[
                    "Samsung", "iPhone", "Motorola", "Xiaomi", 
                    "LG", "Huawei", "TCL", "Alcatel", 
                    "ZTE", "TecnoSpark", "Nokia", "Yaxun"
                  ].map((marca, index) => (
                    <div key={index} className="bg-primary-yellow/20 backdrop-blur-sm text-primary-yellow text-xs font-medium px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-primary-yellow hover:text-black">
                        {marca}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Call to action sutil */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center bg-primary-yellow/20 rounded-full px-6 py-3 shadow-md border border-primary-yellow/20">
                <div className="w-3 h-3 bg-primary-yellow rounded-full animate-pulse mr-3"></div>
                <span className="text-primary-yellow font-medium">
                  Stock actualizado diariamente - Garantía en todos nuestros productos
                </span>
              </div>
            </div>
          </div>
        </section>

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