import { Award, Heart, Users, CheckCircle2 } from 'lucide-react';
import entradaUrl from '../../imports/entrada.jpeg';

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="bg-[#c9a570]/10 text-[#c9a570] px-4 py-2 rounded-full text-sm font-medium">Sobre Mí</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light text-[#3d3730] mb-8 leading-tight">
              Dra. Micaela<br />Merlo
            </h2>
            
            <p className="text-lg text-[#8b8175] mb-6 leading-relaxed">
              Bienvenidos a nuestro nuevo consultorio, un espacio pensado para brindarte la mejor atención odontológica en un ambiente moderno, cálido y profesional.
            </p>
            
            <p className="text-lg text-[#8b8175] mb-8 leading-relaxed">
              Como profesional dedicada y comprometida con la excelencia, mi objetivo es ofrecerte tratamientos de alta calidad, utilizando las últimas tecnologías y técnicas en odontología, siempre con un enfoque personalizado y humano.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-[#c9a570] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#3d3730]">Formación Continua</h4>
                  <p className="text-sm text-[#8b8175]">Siempre actualizada en las últimas técnicas odontológicas</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-[#c9a570] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#3d3730]">Tecnología Avanzada</h4>
                  <p className="text-sm text-[#8b8175]">Equipamiento de última generación para resultados óptimos</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-[#c9a570] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#3d3730]">Atención Personalizada</h4>
                  <p className="text-sm text-[#8b8175]">Cada paciente es único y merece un tratamiento especial</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c9a570] to-[#a67c52] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#3d3730] mb-1">Excelencia</h3>
                <p className="text-xs text-[#8b8175]">Profesional altamente capacitada</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c9a570] to-[#a67c52] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#3d3730] mb-1">Calidez</h3>
                <p className="text-xs text-[#8b8175]">Trato cercano y humano</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c9a570] to-[#a67c52] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#3d3730] mb-1">Dedicación</h3>
                <p className="text-xs text-[#8b8175]">Compromiso con tu salud</p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={entradaUrl}
                alt="Consultorio de odontología integral Dra. Micaela Merlo en Av. Ricardo Rojas 6685, Argüello, Córdoba"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d3730]/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-[#e8dfd2] rounded-3xl -z-10 opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-[#c9a570]/40 to-[#a67c52]/20 rounded-3xl -z-10"></div>
          </div>
        </div>

        {/* Valores CTA */}
        <div className="mt-20 pt-20 border-t border-[#e8dfd2]">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-light text-[#3d3730] mb-4">
              Nuestro Compromiso Contigo
            </h3>
            <p className="text-lg text-[#8b8175] max-w-2xl mx-auto">
              Creemos que una buena salud bucal es fundamental para tu calidad de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#f5f0e8] to-white p-8 rounded-2xl border border-[#e8dfd2]">
              <h4 className="text-xl font-semibold text-[#3d3730] mb-3">Diagnóstico Preciso</h4>
              <p className="text-[#8b8175] leading-relaxed">Utilizo tecnología de imaging avanzada para identificar problemas desde el inicio</p>
            </div>
            <div className="bg-gradient-to-br from-[#f5f0e8] to-white p-8 rounded-2xl border border-[#e8dfd2]">
              <h4 className="text-xl font-semibold text-[#3d3730] mb-3">Tratamientos Efectivos</h4>
              <p className="text-[#8b8175] leading-relaxed">Planes de tratamiento personalizados basados en tus necesidades específicas</p>
            </div>
            <div className="bg-gradient-to-br from-[#f5f0e8] to-white p-8 rounded-2xl border border-[#e8dfd2]">
              <h4 className="text-xl font-semibold text-[#3d3730] mb-3">Seguimiento Continuo</h4>
              <p className="text-[#8b8175] leading-relaxed">Acompañamiento post-tratamiento para garantizar tu satisfacción y bienestar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
