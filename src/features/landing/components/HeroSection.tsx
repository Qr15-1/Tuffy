import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigateToGallery?: () => void;
}

export function HeroSection({ onNavigateToGallery }: HeroSectionProps) {
  return (
    <section className="relative pt-20 lg:pt-24 bg-white min-h-[580px] sm:min-h-[700px] lg:min-h-[800px] flex flex-col justify-between overflow-hidden">
      {/* Patrón de puntos */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      {/* Ola Azul de Fondo (Curva suave de fondo) */}
      <div className="absolute bottom-0 left-0 w-full z-0 h-[9%] sm:h-[26%] lg:h-[32%] bg-[#3b5edd] rounded-t-[100%_45%]" />

      <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10 flex flex-col lg:flex-row items-stretch justify-between flex-grow pb-12">
        
        {/* Izquierda: Texto y Botones */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between text-left z-20 pt-2 lg:pt-4 pb-6">
          {/* Título y Subtítulo en la sección blanca */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-black tracking-tighter"
            >
              Prohibido<br />
              pisar<br />
              <span className="font-handwritten text-[#3b5edd] font-normal text-6xl md:text-7xl lg:text-8xl mt-2 inline-block -rotate-2 leading-none">
                aburrido
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-600 mt-4 font-medium"
            >
              Dale vida a tu espacio con color
            </motion.p>
          </div>

          {/* Tres estrellitas/destellos y Botones en la sección azul */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-start gap-4 mt-8 lg:mt-12"
          >
            {/* Tres estrellitas/cruces decorativas en color amarillo/blanco */}
            <div className="flex gap-1.5 text-yellow-300 ml-6 mb-1 text-sm font-bold opacity-90 select-none">
              <span>✦</span>
              <span>✦</span>
              <span>✦</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-[#f58220] hover:bg-[#d9721a] text-white rounded-full px-6 py-6 md:px-8 md:py-7 text-sm md:text-base font-bold shadow-lg border-2 border-transparent transition-transform hover:scale-105 active:scale-95">
                Diseñemos tu alfombra
              </Button>
              
              <Button 
                onClick={onNavigateToGallery}
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto bg-[#3b5edd]/70 hover:bg-[#3b5edd]/90 text-white border border-white/40 rounded-full px-6 py-6 md:px-8 md:py-7 text-sm md:text-base font-bold backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
              >
                Ver Galería
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Derecha: Muñeco (Con posicionamiento absoluto para desbordar y verse gigante) */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-end mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:absolute -bottom-0 lg:-bottom-10 left-0 right-0 mx-auto lg:left-auto lg:-right-16 xl:-right-28 lg:mx-0 w-[85%] sm:w-[70%] lg:w-[145%] xl:w-[155%] max-w-[450px] lg:max-w-[860px] aspect-square z-10 select-none pointer-events-none"
          >
            {/* Animación de flotar/respirar suave y voltear horizontalmente */}
            <motion.img 
              src="/mascot.png" 
              alt="Mascota Tuffty" 
              className="w-full h-full object-contain relative z-20 scale-x-[-1]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
