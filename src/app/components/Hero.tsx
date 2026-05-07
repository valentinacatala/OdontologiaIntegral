import { ArrowRight } from 'lucide-react';
import consultorioUrl from '../../imports/consultorio.jpeg';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={consultorioUrl}
          alt="Consultorio Odontología Integral Micaela Merlo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d3730]/80 via-[#3d3730]/60 to-[#3d3730]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fdfbf7]/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-block">
          <span className="bg-[#c9a570]/20 text-[#c9a570] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            Sonrisas que transforman vidas
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight tracking-tight">
          Una sonrisa se mantiene<br />con amor y odontología
        </h1>
        
        <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Odontología integral en Argüello, Córdoba. Calidez humana y tecnología de vanguardia para cuidar tu salud bucal.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5493515498321?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20un%20turno"
            className="flex items-center justify-center gap-2 bg-[#c9a570] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#b8935f] transition-all hover:scale-105 shadow-lg hover:shadow-xl group"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar Consulta
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicios"
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
}
