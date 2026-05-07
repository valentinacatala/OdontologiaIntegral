import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#f5f0e8] to-white text-[#3d3730]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Marca */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#c9a570]">
              Odontología Integral
            </h3>
            <p className="text-[#6b665d] leading-relaxed mb-6">
              Consultorio odontológico de vanguardia en Argüello, Córdoba. Comprometidos con tu salud y bienestar bucal.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#c9a570]">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-[#6b665d] hover:text-[#c9a570] transition-colors font-medium">Servicios</a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-[#6b665d] hover:text-[#c9a570] transition-colors font-medium">Sobre Mí</a>
              </li>
              <li>
                <a href="#contacto" className="text-[#6b665d] hover:text-[#c9a570] transition-colors font-medium">Contacto</a>
              </li>
              <li>
                <a
                  href="https://wa.me/5493515498321"
                  className="text-[#6b665d] hover:text-[#c9a570] transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar Turno
                </a>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#c9a570]">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#c9a570] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#6b665d] text-sm">+54 9 3515 49-8321</p>
                  <p className="text-[#9b9389] text-xs">Llamadas y WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c9a570] flex-shrink-0 mt-0.5" />
                <p className="text-[#6b665d] text-sm">Micamerlo80@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9a570] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#6b665d] text-sm">Av. Ricardo Rojas 6685</p>
                  <p className="text-[#6b665d] text-sm">X5021 Argüello, Córdoba</p>
                </div>
              </div>
            </div>
          </div>

          {/* Síguenos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#c9a570]">Síguenos</h3>
            <p className="text-[#6b665d] text-sm mb-6">
              Conéctate con nosotros en redes sociales para tips de salud bucal y novedades.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                className="w-12 h-12 bg-[#c9a570]/20 hover:bg-[#c9a570] rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#c9a570]/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
            <div>
              <p className="text-[#6b665d] text-sm">
                © {currentYear} Odontología Integral Micaela Merlo. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex gap-6 justify-center md:justify-end text-sm">
              <a href="#" className="text-[#9b9389] hover:text-[#c9a570] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-[#9b9389] hover:text-[#c9a570] transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f5f0e8] border-t border-[#c9a570]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-[#9b9389] text-xs">
            Diseño moderno y accesible | Odontología Integral 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
