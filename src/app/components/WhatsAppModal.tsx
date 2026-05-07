import { useState } from 'react';
import { X, Phone } from 'lucide-react';
import whatsappImage from '../../imports/whatsapp.png';

export default function WhatsAppModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-[#25d366] text-white rounded-full shadow-2xl hover:bg-[#1da851] transition-all flex items-center justify-center overflow-hidden group"
      >
        <img src={whatsappImage} alt="WhatsApp" className="w-10 h-10 object-contain" />
        <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-pulse"></div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full animate-in fade-in zoom-in duration-300">
            {/* Header con imagen */}
            <div className="relative h-48 bg-[#25d366] overflow-hidden">
              <img
                src={whatsappImage}
                alt="WhatsApp"
                className="w-full h-full object-cover opacity-90"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <X className="w-6 h-6 text-[#3d3730]" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-2xl font-light text-[#3d3730] mb-4">
                ¿Necesitas agendar?
              </h2>
              <p className="text-[#8b8175] mb-8 leading-relaxed">
                Contáctanos por WhatsApp o teléfono para reservar tu cita en los horarios disponibles.
              </p>

              {/* Contact options */}
              <div className="space-y-4 mb-6">
                <a
                  href="https://wa.me/5493515498321?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20un%20turno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25d366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1da851] transition-all flex items-center justify-center gap-3"
                >
                  <img src={whatsappImage} alt="WhatsApp" className="w-6 h-6 object-contain" />
                  Enviar WhatsApp
                </a>
                <a
                  href="tel:+5493515498321"
                  className="w-full bg-white border-2 border-[#c9a570] text-[#3d3730] px-6 py-3 rounded-xl font-semibold hover:bg-[#f5f0e8] transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
              </div>

              {/* Info */}
              <div className="text-center pt-6 border-t border-[#e8dfd2]">
                <p className="text-sm text-[#8b8175] mb-2">
                  +54 9 3515 49-8321
                </p>
                <p className="text-xs text-[#a9985e]">
                  Responden entre 9:00 - 13:00 y 16:00 - 20:00
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
