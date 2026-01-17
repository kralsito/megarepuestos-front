'use client';

import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next';
import Swal from 'sweetalert2';
import { createFormAction, checkPhoneNumberExistsAction } from '@/actions/form';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function SectionF() {
  const router = useRouter();
  const redirectUrl = "https://www.caddis.com.ar/megacelulares.php";

  const openModal = async () => {
    if (getCookie('formularioCompletado')) {
      window.location.href = redirectUrl;
      return;
    }

    Swal.fire({
      title: 'Completa el formulario',
      html:
        '<input id="firstName" class="swal2-input" placeholder="Nombre" required style="width: calc(100% - 40px); margin: 10px 0;">' +
        '<input id="lastName" class="swal2-input" placeholder="Apellido" required style="width: calc(100% - 40px); margin: 10px 0;">' + 
        '<input id="phoneNumber" class="swal2-input" placeholder="Celular" required type="tel" style="width: calc(100% - 40px); margin: 10px 0;">' +
        '<div class="flex items-center justify-center mt-4">' +
        '  <input type="checkbox" id="termsCheckbox" class="mr-2" />' +
        '  <label for="termsCheckbox" class="text-sm">Acepto los términos y condiciones</label>' +
        '</div>',
      width: '90%',
      maxWidth: '500px',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      customClass: {
        popup: 'custom-swal-popup',
        input: 'custom-input'
      },
      preConfirm: async () => {
        try {
          const firstName = document.getElementById('firstName').value.trim();
          const lastName = document.getElementById('lastName').value.trim();
          const phoneNumber = document.getElementById('phoneNumber').value.trim();
          const termsCheckbox = document.getElementById('termsCheckbox');

          if (!firstName || !lastName) {
            Swal.showValidationMessage('Nombre y apellido son obligatorios');
            return false;
          }
          
          // Validación de número de teléfono
          const phoneRegex = /^[0-9]+$/; 
          if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
            Swal.showValidationMessage('Ingrese un número de celular válido (solo números)');
            return false;
          }
          
          if (!termsCheckbox.checked) {
            Swal.showValidationMessage('Debes aceptar los términos y condiciones');
            return false;
          }
          
          const phoneNumberExists = await checkPhoneNumberExistsAction(phoneNumber);
          
          return { firstName, lastName, phoneNumber, phoneNumberExists };
        } catch (error) {
          console.error('Error en la validación:', error);
          Swal.showValidationMessage('Error en la validación');
          return false;
        }
      }
    }).then(async (result) => {
      if (result.isConfirmed && result.value) {
        try {
          if (result.value.phoneNumberExists) {
            await Swal.fire({
              title: 'Número de teléfono ya registrado',
              icon: 'success',
              confirmButtonText: 'Ver lista de precios'
            });

            setCookie('formularioCompletado', 'true', { maxAge: 30 * 24 * 60 * 60, path: '/' });

            window.location.href = redirectUrl;
            return;
          }
          
          const { phoneNumberExists, ...formData } = result.value;
          await createFormAction(formData);
          
          await Swal.fire({
            title: '¡Registro exitoso!',
            icon: 'success',
            text: 'Tus datos han sido registrados correctamente',
            confirmButtonText: 'Continuar'
          });

          setCookie('formularioCompletado', 'true', { maxAge: 30 * 24 * 60 * 60, path: '/' });

          window.location.href = redirectUrl;
        } catch (error) {
          console.error('Error al crear el formulario:', error);
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: 'Hubo un problema al procesar tu solicitud',
            confirmButtonText: 'Intentar nuevamente'
          });
        }
      }
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[600px] py-20 px-4 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-yellow-400/10 border border-yellow-400/30 backdrop-blur-sm animate-fade-in">
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span className="text-yellow-400 text-sm font-semibold tracking-wide" style={{ fontFamily: "'oktah', sans-serif" }}>
            ACCESO EXCLUSIVO
          </span>
        </div>

        {/* Title */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up"
          style={{ fontFamily: "'oktah', sans-serif" }}
        >
          <span className="inline-block text-white">
            Completa el formulario
          </span>
          <br />
          <span className="inline-block text-white">
            para acceder a nuestra
          </span>
          <br />
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 animate-gradient-shift">
            lista de precios
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-slide-up animation-delay-200" style={{ fontFamily: "'oktah', sans-serif" }}>
          Descubre nuestros productos y precios exclusivos para profesionales
        </p>

        {/* Eye-catching button */}
        <div className="relative inline-block animate-slide-up animation-delay-400">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-2xl blur-2xl opacity-50 animate-pulse-glow"></div>
          
          {/* Button */}
          <button 
            onClick={openModal} 
            className="relative group px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg md:text-xl font-black text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-2xl hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
            style={{ fontFamily: "'oktah', sans-serif" }}
          >
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            
            {/* Button content */}
            <span className="relative flex items-center gap-3 justify-center">
              <span className="tracking-wide">VER LISTA DE PRECIOS</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            
            {/* Border accent */}
            <div className="absolute inset-0 rounded-2xl border-2 border-yellow-300/50"></div>
          </button>

          {/* Pulsating rings */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/30 animate-ping-slow"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/20 animate-ping-slower"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }

        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slower 3s cubic-bezier(0, 0, 0.2, 1) infinite 1.5s;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </div>
  );
}