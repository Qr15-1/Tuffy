import * as React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  // Imagen 1: Banner ancho (Paisaje) - Alfombra Los Gutierrez
  {
    src: "/rug1.jpg",
    className: "col-span-1 md:col-span-3 aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-sm"
  },
  // Fila 2: 3 imágenes cuadradas
  {
    src: "/rug2.jpg",
    className: "aspect-square rounded-2xl overflow-hidden shadow-sm"
  },
  {
    src: "/rug3.jpg",
    className: "aspect-square rounded-2xl overflow-hidden shadow-sm"
  },
  {
    src: "/rug4.jpg",
    className: "aspect-square rounded-2xl overflow-hidden shadow-sm"
  },
  // Fila 3: 3 imágenes cuadradas (Rellenando con rug5 y alternando para consistencia visual)
  {
    src: "/rug5.jpg",
    className: "aspect-square rounded-2xl overflow-hidden shadow-sm"
  },
  {
    src: "/rug3.jpg",
    className: "aspect-square rounded-2xl overflow-hidden shadow-sm"
  },
  {
    src: "/rug4.jpg",
    className: "aspect-square rounded-2xl overflow-hidden shadow-sm"
  }
];

export function GalleryPage() {
  // Al montar la página, subimos al inicio automáticamente
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <section className="pt-32 pb-20 bg-white min-h-screen relative overflow-hidden">
      


      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        
        {/* Encabezado */}
        <div className="text-left mb-10 pl-2">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-1"
          >
            Nuestra Galería
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-slate-500 text-sm md:text-base font-medium"
          >
            Descubre algunos de nuestros proyectos más destacados.
          </motion.p>
        </div>

        {/* Grid de imágenes asimétrica usando los trabajos reales del usuario */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className={`${img.className} group relative bg-slate-100 border border-slate-100 hover:border-slate-200 transition-all duration-300`}
            >
              <img 
                src={img.src} 
                alt={`Trabajo Real de Tufting Tuffty ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
