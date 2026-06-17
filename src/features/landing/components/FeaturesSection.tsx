import { motion } from "framer-motion";
import { Palette, Ruler, Truck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Diseño personalizado",
    description: "Elige colores, patrones, diseño y estilos que se adapten a ti.",
    bgColor: "bg-[#f58220]", // Naranja
  },
  {
    icon: Ruler,
    title: "Medidas",
    description: "Realizamos tu alfombra en las medidas exactas que necesitas.",
    bgColor: "bg-[#d9383a]", // Rojo
  },
  {
    icon: Truck,
    title: "Envíos",
    description: "Realizamos envíos a toda Venezuela por tu agencia de preferencia.",
    bgColor: "bg-[#8b5cf6]", // Morado
  },
  {
    icon: Sparkles,
    title: "Materiales Premium",
    description: "Trabajamos con materiales de calidad.",
    bgColor: "bg-[#16a34a]", // Verde
  },
];

export function FeaturesSection() {
  return (
    <section className="relative w-full bg-white">
      {/* Parte superior azul: contiene el título y la descripción */}
      <div className="bg-[#3b5edd] text-white text-center pt-6 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            ¿Por qué elegirnos?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-blue-100 mt-3 text-base md:text-lg max-w-xl mx-auto font-medium"
          >
            Hacemos que cada alfombra sea una obra de arte única.
          </motion.p>
        </div>
      </div>

      {/* Parte inferior blanca: contiene las tarjetas que se superponen */}
      <div className="container mx-auto px-6 lg:px-24 relative z-10 -mt-10 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center max-w-[260px]"
            >
              {/* Contenedor del Icono Redondeado de Color */}
              <div className={`${item.bgColor} w-20 h-20 rounded-[24px] flex items-center justify-center text-white shadow-lg mb-6 transform transition-transform hover:scale-110 duration-300`}>
                <item.icon className="w-10 h-10 stroke-[2]" />
              </div>

              {/* Título de la característica */}
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Descripción */}
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
