import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoUrl from '../../imports/logo.ico';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/85 backdrop-blur-md shadow-sm z-50 border-b border-[#e8dfd2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo e identidad */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#c9a570] to-[#a67c52] rounded-xl flex items-center justify-center shadow-sm overflow-hidden border border-[#c9a570]/20 group-hover:shadow-md group-hover:border-[#c9a570]/40 transition-all p-3">
              <img 
                src={logoUrl}
                alt="Logo Odontología Integral" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block font-bold text-[#3d3730] text-base leading-tight group-hover:text-[#c9a570] transition-colors tracking-tight">Mica Merlo</span>
              <p className="text-[10px] font-medium uppercase tracking-wider text-[#8b8175] group-hover:text-[#c9a570] transition-colors">Odontología Integral</p>
            </div>
          </a>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#servicios" className="text-[#3d3730] hover:text-[#c9a570] px-4 py-2 rounded-lg transition-all hover:bg-[#f5f0e8]">Servicios</a>
            <a href="#sobre-mi" className="text-[#3d3730] hover:text-[#c9a570] px-4 py-2 rounded-lg transition-all hover:bg-[#f5f0e8]">Sobre Mí</a>
            <a href="#contacto" className="text-[#3d3730] hover:text-[#c9a570] px-4 py-2 rounded-lg transition-all hover:bg-[#f5f0e8]">Contacto</a>
            <a
              href="https://wa.me/5493515498321?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20un%20turno"
              className="bg-[#c9a570] text-white px-6 py-2 rounded-lg hover:bg-[#b8935f] transition-all shadow-md hover:shadow-lg ml-4 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-[#f5f0e8] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#3d3730]" />
            ) : (
              <Menu className="w-6 h-6 text-[#3d3730]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#e8dfd2]">
            <a href="#servicios" className="block px-4 py-3 text-[#3d3730] hover:bg-[#f5f0e8] rounded-lg transition-colors">Servicios</a>
            <a href="#sobre-mi" className="block px-4 py-3 text-[#3d3730] hover:bg-[#f5f0e8] rounded-lg transition-colors">Sobre Mí</a>
            <a href="#contacto" className="block px-4 py-3 text-[#3d3730] hover:bg-[#f5f0e8] rounded-lg transition-colors">Contacto</a>
            <a
              href="https://wa.me/5493515498321?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20un%20turno"
              className="block w-full mt-4 bg-[#c9a570] text-white px-6 py-3 rounded-lg hover:bg-[#b8935f] transition-all text-center font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar Turno
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
