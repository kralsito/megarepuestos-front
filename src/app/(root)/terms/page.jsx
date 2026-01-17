'use client';

import { useRouter } from "next/navigation";
import { ArrowLeft, Shield, Database, Users, FileText, Bell, Scale } from "lucide-react";

const TermsAndConditions = () => {
    const router = useRouter();

    const sections = [
      {
        icon: FileText,
        title: "1. Introducción",
        content: (
          <p>
            Bienvenido a <span className="font-semibold text-primary-yellow">Megarepuestos</span> (en adelante, "el Sitio"). Al acceder y utilizar este Sitio, 
            aceptas cumplir con los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de los términos, 
            te recomendamos no utilizar el Sitio.
          </p>
        )
      },
      {
        icon: Shield,
        title: "2. Objetivo del Sitio",
        content: (
          <p>
            El Sitio tiene como objetivo proporcionar publicidad y promocionar productos de una tienda de repuestos. 
            Los precios de los productos no son visibles públicamente; para acceder a ellos, los usuarios deben completar un formulario con sus datos personales.
          </p>
        )
      },
      {
        icon: Users,
        title: "3. Registro y Recopilación de Datos",
        content: (
          <>
            <p className="mb-3">
              Para ver los precios de los productos, se solicita a los usuarios que completen un formulario con los siguientes datos:
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-yellow rounded-full"></span>
                  <span>Nombre</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-yellow rounded-full"></span>
                  <span>Apellido</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-yellow rounded-full"></span>
                  <span>Número de celular</span>
                </li>
              </ul>
            </div>
            <p className="text-sm bg-yellow-50 border-l-4 border-primary-yellow p-4 rounded-r-lg">
              <span className="font-semibold">Importante:</span> Al completar el formulario, el usuario autoriza el almacenamiento de sus datos en nuestra base de datos y acepta ser contactado para futuras comunicaciones comerciales.
            </p>
          </>
        )
      },
      {
        icon: Database,
        title: "4. Uso de los Datos Personales",
        content: (
          <>
            <p className="mb-3">
              Los datos recopilados serán utilizados exclusivamente para:
            </p>
            <div className="grid gap-3 mb-3">
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                <div className="w-6 h-6 bg-primary-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-xs font-bold">1</span>
                </div>
                <span>Proporcionar acceso a los precios de los productos.</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                <div className="w-6 h-6 bg-primary-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-xs font-bold">2</span>
                </div>
                <span>Enviar información sobre promociones y novedades.</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                <div className="w-6 h-6 bg-primary-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-xs font-bold">3</span>
                </div>
                <span>Contactar al usuario en caso de ser necesario.</span>
              </div>
            </div>
            <p className="text-sm bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <span className="font-semibold">Privacidad garantizada:</span> El Sitio se compromete a proteger la privacidad de los datos y no compartirlos con terceros sin el consentimiento del usuario, salvo que sea requerido por ley.
            </p>
          </>
        )
      },
      {
        icon: Scale,
        title: "5. Responsabilidad del Usuario",
        content: (
          <p>
            El usuario se compromete a proporcionar información veraz y actualizada. En caso de proporcionar datos falsos o inexactos, 
            el Sitio se reserva el derecho de <span className="font-semibold">restringir el acceso</span> a la información.
          </p>
        )
      },
      {
        icon: Bell,
        title: "6. Modificaciones de los Términos y Condiciones",
        content: (
          <p>
            Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en el Sitio y entrarán en vigencia inmediatamente.
          </p>
        )
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {/* Header con botón de regreso */}
          <div className="mb-8 md:mt-24 lg:mt-32">
            <button 
              onClick={() => router.back()} 
              className="group inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black rounded-xl shadow-md hover:shadow-lg hover:bg-primary-yellow transition-all duration-200 active:scale-95" 
              style={{ fontFamily: "'oktah', sans-serif" }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">INICIO</span>
            </button>
          </div>
          
          {/* Contenedor principal con diseño mejorado */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header del documento */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 sm:p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary-yellow p-3 rounded-xl shadow-lg">
                  <FileText className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                    Términos y Condiciones
                  </h1>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contenido de las secciones */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="space-y-8">
                {sections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <section 
                      key={index} 
                      className="group relative bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary-yellow/30 hover:shadow-lg transition-all duration-300"
                    >
                      {/* Decoración de fondo */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-yellow/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                      
                      {/* Contenido de la sección */}
                      <div className="relative">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-gradient-to-br from-primary-yellow to-yellow-400 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-black" />
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-2">
                            {section.title}
                          </h2>
                        </div>
                        <div className="text-gray-700 leading-relaxed pl-0 sm:pl-16">
                          {section.content}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/* Sección de contacto destacada */}
                <section className="bg-gradient-to-br from-primary-yellow to-yellow-400 rounded-2xl p-6 sm:p-8 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-black/10 p-3 rounded-xl backdrop-blur-sm">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6 text-black" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">
                        7. Contacto
                      </h2>
                      <p className="text-gray-900 leading-relaxed mb-3">
                        Para cualquier consulta o solicitud relacionada con estos Términos y Condiciones, puedes comunicarte con nosotros:
                      </p>
                      <a 
                        href="mailto:Megalocal14@gmail.com"
                        className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-5 h-5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                          />
                        </svg>
                        Megalocal14@gmail.com
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer del documento */}
            <div className="bg-gray-50 px-6 sm:px-8 lg:px-10 py-6 border-t-2 border-gray-100">
              <p className="text-sm text-gray-600 text-center">
                Al utilizar nuestro sitio web, confirmas que has leído y aceptado estos términos y condiciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default TermsAndConditions;