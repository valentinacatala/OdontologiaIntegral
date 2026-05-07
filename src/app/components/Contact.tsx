import { MapPin, Mail, Phone, Clock} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-[#3d3730]">
            Contáctanos
          </h2>
          <p className="text-xl text-[#8b8175] max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para responder tus preguntas y ayudarte a conseguir esa sonrisa que deseas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Contact Info */}
          <div>
            <div className="space-y-8">
              {/* Ubicación */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4b896] to-[#c9a570] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#3d3730]">Ubicación</h3>
                  <p className="text-[#8b8175] leading-relaxed">
                    Av. Ricardo Rojas 6685<br />
                    X5021 Argüello<br />
                    Córdoba, Argentina
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4b896] to-[#c9a570] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#3d3730]">Teléfono</h3>
                  <a
                    href="tel:+5493515498321"
                    className="text-[#c9a570] hover:text-[#b8935f] transition-colors font-semibold text-lg"
                  >
                    +54 9 3515 49-8321
                  </a>
                  <p className="text-[#8b8175] text-sm mt-1">Llamadas y WhatsApp</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4b896] to-[#c9a570] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#3d3730]">Email</h3>
                  <a
                    href="mailto:Micamerlo80@gmail.com"
                    className="text-[#c9a570] hover:text-[#b8935f] transition-colors font-semibold break-all"
                  >
                    Micamerlo80@gmail.com
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4b896] to-[#c9a570] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#3d3730]">Horarios</h3>
                  <p className="text-[#8b8175] text-sm">Lunes a Viernes</p>
                  <p className="text-[#c9a570] font-semibold mt-1">9:00 - 13:00</p>
                  <p className="text-[#c9a570] font-semibold">16:00 - 20:00</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a
                href="https://wa.me/5493515498321?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20un%20turno"
                className="inline-block w-full bg-gradient-to-r from-[#d4b896] to-[#c9a570] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar Consulta
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8977!2d-64.2477!3d-31.3597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDIxJzM1LjAiUyA2NMKwMTQnNTEuOCJX!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio odontológico Dra. Micaela Merlo en Av. Ricardo Rojas 6685, Argüello, Córdoba"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
