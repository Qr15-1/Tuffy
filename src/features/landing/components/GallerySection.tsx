import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const images = [
  "/rug1.jpg",
  "/rug2.jpg",
  "/rug3.jpg",
  "/rug4.jpg",
  "/rug5.jpg"
];

export function GallerySection() {
  return (
    <section className="pt-2 pb-0 bg-white relative">
      
      {/* Decoración: Círculo Naranja arriba a la izquierda */}
      <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full border-[12px] border-[#f58220] opacity-95 pointer-events-none z-20" />
      
      {/* Decoración: Círculo Naranja abajo a la derecha */}
      <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full border-[12px] border-[#f58220] opacity-95 pointer-events-none z-20" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Encabezado con menor separación */}
        <div className="text-left max-w-4xl mx-auto mb-8 pl-4">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-1"
          >
            Nuestra Galería
          </motion.h2>
          <p className="text-slate-500 text-sm font-medium">
            Descubre algunos de nuestros proyectos más destacados.
          </p>
        </div>

        {/* Contenedor del Carrusel con Efecto de Difuminado en los Bordes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto relative px-8"
        >
          {/* Degradado para difuminar el lado izquierdo */}
          <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-20" />
          
          {/* Degradado para difuminar el lado derecho */}
          <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-20" />

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full relative z-10"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((src, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                  <div className="p-1">
                    {/* Caja de imagen cuadrada */}
                    <div className="overflow-hidden rounded-xl aspect-square relative group bg-slate-100 shadow-sm">
                      <img 
                        src={src} 
                        alt={`Alfombra Tufting ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Flechas de navegación delgadas y estilizadas */}
            <CarouselPrevious className="absolute left-1 md:-left-4 z-30 w-8 h-8 rounded-full border border-slate-200 bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm" />
            <CarouselNext className="absolute right-1 md:-right-4 z-30 w-8 h-8 rounded-full border border-slate-200 bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
