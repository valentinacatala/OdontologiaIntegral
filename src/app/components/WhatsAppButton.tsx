import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = '5493515498321';
  const message = 'Hola! Me gustaría reservar un turno en Odontología Integral Micaela Merlo';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-[#c9a570] to-[#a67c52] text-white p-4 rounded-full shadow-2xl hover:shadow-xl transition-all group"
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      aria-label="Contactar por WhatsApp"
    >
      <div className="flex items-center justify-center">
        <MessageCircle className="w-6 h-6" />
      </div>
      
      {/* Tooltip con animación */}
      <motion.div
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#3d3730] to-[#5a5045] text-white px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-[#c9a570]/30 backdrop-blur-sm"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        ¿Necesitas agendar?
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#3d3730] transform rotate-45"></div>
      </motion.div>

      {/* Pulse animation indicator */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#c9a570]/40"
        animate={{ scale: [1, 1.3], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
}
