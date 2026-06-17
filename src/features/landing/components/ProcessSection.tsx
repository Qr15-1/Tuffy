import { motion } from "framer-motion";
import { MessageSquare, FileText, Scissors, Heart } from "lucide-react";

export function ProcessSection() {
  return (
    <section className="pt-6 pb-20 bg-white relative">
      
      {/* Decoración: Hilo naranja de estambre en el lado derecho (oculto en móvil) */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 pointer-events-none z-20">
        <svg viewBox="0 0 200 400" className="w-full h-full text-[#f58220] opacity-90 stroke-current fill-none stroke-[12] stroke-linecap-round">
          <path d="M 200,50 C 50,20 20,150 120,200 C 220,250 180,380 50,380" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2"
          >
            ¿Cómo es el proceso de pedido?
          </motion.h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            De la idea a la realidad en 4 simples pasos.
          </p>
        </div>

        {/* Layout de Pasos */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Columna 1: Consulta (Verde) y Diseño (Naranja) */}
            <div className="flex flex-col gap-6">
              {/* Paso 1: Consulta Inicial */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#2e7d32] text-white p-6 rounded-2xl flex flex-col justify-center min-h-[140px] shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">Consulta inicial</h3>
                </div>
                <p className="text-emerald-100 text-sm font-medium leading-relaxed">
                  Hablamos contigo para conocer tu visión y necesidad.
                </p>
              </motion.div>

              {/* Paso 2: Diseño y Aprobación */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#f58220] text-white p-6 rounded-2xl flex flex-col justify-center min-h-[140px] shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">Diseño y aprobación</h3>
                </div>
                <p className="text-orange-100 text-sm font-medium leading-relaxed">
                  Creamos diseños digitales para que apruebes antes de producir.
                </p>
              </motion.div>
            </div>

            {/* Columnas 2 y 3: Diseño de L invertida/unificada para Fabricación (Amarillo) y Entrega (Rosa) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-0 md:col-span-2 relative">
              
              {/* Paso 3: Fabricación (Amarillo) - Con espacio/gap abajo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#fbc02d] text-white p-6 rounded-2xl shadow-md z-20 flex flex-col justify-start h-auto sm:h-[80%]"
              >
                <div className="flex items-center gap-3 mb-3 mt-1">
                  <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center">
                    <Scissors className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">Fabricación</h3>
                </div>
                <p className="text-yellow-50 text-sm font-medium leading-relaxed">
                  Elaboramos tu pedido con productos de alta calidad.
                </p>
              </motion.div>

              {/* Paso 4 (Parte Superior): Entrega - Bloque rosa superior que se une a la base */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#ec4899] text-white p-6 rounded-2xl sm:rounded-t-2xl shadow-sm z-10 flex flex-col justify-start h-auto sm:h-[96%]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">Entrega</h3>
                </div>
                <p className="text-pink-100 text-sm font-medium leading-relaxed">
                  Coordinamos la entrega de tu alfombra de forma personalizada.
                </p>
              </motion.div>

              {/* L-Shape base: Bloque rosa inferior que unifica la sección de entrega */}
              <div className="hidden sm:block col-span-1 sm:col-span-2 bg-[#ec4899] rounded-b-2xl rounded-tl-2xl h-16 sm:h-20 -mt-6 sm:-mt-8 z-0 shadow-md" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
