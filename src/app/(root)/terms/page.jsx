'use client';

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
    const router = useRouter();

    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6 md:mt-16">
          <button onClick={() => router.back()} className="text-black hover:underline flex items-center" style={{ fontFamily: "'oktah', sans-serif" }}>
            <ArrowLeft className="w-5 h-5 mr-1" /> INICIO
          </button>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Términos y Condiciones</h1>
        
        <section className="mb-4">
          <h2 className="text-xl font-semibold">1. Introducción</h2>
          <p>
            Bienvenido a Megarepuestos (en adelante, "el Sitio"). Al acceder y utilizar este Sitio, 
            aceptas cumplir con los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de los términos, 
            te recomendamos no utilizar el Sitio.
          </p>
        </section>
  
        <section className="mb-4">
          <h2 className="text-xl font-semibold">2. Objetivo del Sitio</h2>
          <p>
            El Sitio tiene como objetivo proporcionar publicidad y promocionar productos de una tienda de repuestos. 
            Los precios de los productos no son visibles públicamente; para acceder a ellos, los usuarios deben completar un formulario con sus datos personales.
          </p>
        </section>
  
        <section className="mb-4">
          <h2 className="text-xl font-semibold">3. Registro y Recopilación de Datos</h2>
          <p>
            Para ver los precios de los productos, se solicita a los usuarios que completen un formulario con los siguientes datos:
          </p>
          <ul className="list-disc list-inside">
            <li>Nombre</li>
            <li>Apellido</li>
            <li>Número de celular</li>
          </ul>
          <p>
            Al completar el formulario, el usuario autoriza el almacenamiento de sus datos en nuestra base de datos y acepta ser contactado para futuras comunicaciones comerciales.
          </p>
        </section>
  
        <section className="mb-4">
          <h2 className="text-xl font-semibold">4. Uso de los Datos Personales</h2>
          <p>
            Los datos recopilados serán utilizados exclusivamente para:
          </p>
          <ul className="list-disc list-inside">
            <li>Proporcionar acceso a los precios de los productos.</li>
            <li>Enviar información sobre promociones y novedades.</li>
            <li>Contactar al usuario en caso de ser necesario.</li>
          </ul>
          <p>
            El Sitio se compromete a proteger la privacidad de los datos y no compartirlos con terceros sin el consentimiento del usuario, salvo que sea requerido por ley.
          </p>
        </section>
  
        <section className="mb-4">
          <h2 className="text-xl font-semibold">5. Responsabilidad del Usuario</h2>
          <p>
            El usuario se compromete a proporcionar información veraz y actualizada. En caso de proporcionar datos falsos o inexactos, 
            el Sitio se reserva el derecho de restringir el acceso a la información.
          </p>
        </section>
  
        <section className="mb-4">
          <h2 className="text-xl font-semibold">6. Modificaciones de los Términos y Condiciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en el Sitio y entrarán en vigencia inmediatamente.
          </p>
        </section>
  
        <section className="mb-4">
          <h2 className="text-xl font-semibold">7. Contacto</h2>
          <p>
            Para cualquier consulta o solicitud relacionada con estos Términos y Condiciones, puedes comunicarte con nosotros a través de [correo electrónico o teléfono de contacto].
          </p>
        </section>
      </div>
    );
};
  
export default TermsAndConditions;