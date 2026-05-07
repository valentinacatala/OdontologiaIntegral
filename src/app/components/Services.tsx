import * as React from 'react';
import { 
  ArrowRight, 
  Stethoscope, 
  Syringe, 
  Sparkles 
} from 'lucide-react';

// Importa tus imágenes aquí (ajusta los nombres de archivo según los que guardes en la carpeta imports)
import endodonciaImg from '../../imports/endodoncia.png';
import ortodonciaImg from '../../imports/ortodoncia.png';
import rehabilitacionImg from '../../imports/rehabilitacionbucal.png';
import protesisImg from '../../imports/protesisdental.png';
import blanqueamientoImg from '../../imports/blanqueamiento.png';
import ortopediaImg from '../../imports/ortopediamaxilar.png';

interface Service {
  title: string;
  description: string;
  color: string;
  icon?: React.ElementType;
  image?: any;
}

const services: Service[] = [
  { icon: Stethoscope, title: 'Odontología General', description: 'Cuidado preventivo y tratamiento integral para la salud bucal de toda la familia', color: 'from-[#d4b896]' },
  { image: endodonciaImg, title: 'Endodoncia', description: 'Tratamientos de conducto con tecnología avanzada y máxima precisión', color: 'from-[#c9a570]' },
  { image: ortodonciaImg, title: 'Ortodoncia', description: 'Alineación dental para la sonrisa que siempre quisiste tener', color: 'from-[#d4b896]' },
  { image: ortopediaImg, title: 'Ortopedia Maxilar', description: 'Corrección del crecimiento óseo facial en edades tempranas', color: 'from-[#c9a570]' },
  { image: rehabilitacionImg, title: 'Rehabilitación Bucal', description: 'Restauración completa de función y estética dental', color: 'from-[#d4b896]' },
  { image: protesisImg, title: 'Prótesis Dental', description: 'Soluciones personalizadas de reemplazo dental fija y removible', color: 'from-[#c9a570]' },
  { icon: Syringe, title: 'Implantología', description: 'Implantes dentales de última generación con tasa de éxito superior', color: 'from-[#d4b896]' },
  { icon: Sparkles, title: 'Estética Dental', description: 'Diseño de sonrisa y carillas estéticas para resultados naturales', color: 'from-[#c9a570]' },
  { image: blanqueamientoImg, title: 'Blanqueamiento', description: 'Tratamientos profesionales para sonrisas más blancas y radiantes', color: 'from-[#d4b896]' },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-white to-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-[#3d3730] mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-[#8b8175] max-w-2xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de tratamientos dentales con los más altos estándares de calidad, 
            <span className="text-[#c9a570] font-medium"> tecnología de punta y atención personalizada</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#e8dfd2] overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color} to-transparent`}></div>
                
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c9a570]/20 to-[#a67c52]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      Icon && <Icon className="w-10 h-10 text-[#c9a570]" />
                    )}
                  </div>
                
                <h3 className="text-xl font-semibold text-[#3d3730] mb-3">
                  {service.title}
                </h3>
                
                <p className="text-[#8b8175] leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>
                
                <a
                  href={`https://wa.me/5493515498321?text=${encodeURIComponent(`Hola! Me gustaría consultar sobre el servicio de ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#c9a570] font-medium text-sm group-hover:translate-x-2 transition-transform hover:underline"
                >
                  Conocer más <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          );
        })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-[#3d3730] rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a570]/10 rounded-full -mr-32 -mt-32 blur-3xl transition-all group-hover:bg-[#c9a570]/20"></div>
          <h3 className="text-3xl font-light text-white mb-4 relative z-10">
            ¿Tienes dudas sobre algún tratamiento?
          </h3>
          <p className="text-[#f5f0e8]/80 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
            Contacta con nosotros y te asesoraremos sin compromiso. Tu salud bucal es nuestra prioridad.
          </p>
          <a
            href="https://wa.me/5493515498321?text=Hola%2C%20tengo%20dudas%20sobre%20tratamientos"
            className="inline-block bg-[#c9a570] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#b8935f] transition-all hover:scale-105 shadow-lg relative z-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
