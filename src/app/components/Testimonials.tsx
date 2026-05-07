import { Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Paciente',
    text: 'Excelente atención, muy profesional y considerada. El consultorio es moderno y limpio. Recomendado!',
    rating: 5
  },
  {
    name: 'Juan Martínez',
    role: 'Paciente',
    text: 'La Dra. Merlo es muy atenta y explica bien cada procedimiento.',
    rating: 5
  },
  {
    name: 'Martina Percello',
    role: 'Paciente',
    text: 'Excelente atención, muy profesional y atenta la doctora.',
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f0e8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-[#3d3730] mb-6">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-xl text-[#8b8175] max-w-2xl mx-auto">
            Las experiencias reales de personas que confían en nosotros para su salud bucal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#e8dfd2] group"
            >
              {/* Stars */}
              <div className="flex gap-2 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#c9a570] text-[#c9a570]"
                  />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-[#8b8175] mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-[#3d3730]">{testimonial.name}</h4>
                  <p className="text-sm text-[#8b8175]">{testimonial.role}</p>
                </div>
                <MessageCircle className="w-5 h-5 text-[#c9a570] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[#8b8175] mb-6">
            ¿Listo para tener tu propia experiencia?
          </p>
          <a
            href="https://wa.me/5493515498321?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
            className="inline-block bg-[#c9a570] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#b8935f] transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Mi Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
