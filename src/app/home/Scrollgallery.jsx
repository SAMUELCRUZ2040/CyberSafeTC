"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// --- Configuración de Contenido (Sin repeticiones) ---
const LAYER_1 = [
  "/image/home/scrollgallery/aventure.jpg",
  "/image/home/scrollgallery/forest.jpg",
  "/image/home/scrollgallery/elements.avif",
  "/image/home/scrollgallery/explore.jpg",
  "/image/home/scrollgallery/beach.jpg",
  "/image/home/scrollgallery/restaurant.jpg", // Imagen 6
];

const LAYER_2 = [
  "/image/home/scrollgallery/moon.jpg",
  "/image/home/scrollgallery/invoice.jpg",
  "/image/home/scrollgallery/spacial.jpg",
  "/image/home/scrollgallery/gymWorkOut.jpg",
  "/image/home/scrollgallery/elements.avif",
  "/image/home/scrollgallery/aventure.jpg", // Puedes cambiar estas rutas por tus archivos nuevos
];

// Unimos ambas para el mapeo del grid
const ALL_IMAGES = [...LAYER_1, ...LAYER_2];

const CENTER_VIDEO = "/media/slideCarousel4.mp4";

export default function ScrollGallery() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transformaciones del video central
  const videoWidth = useTransform(scrollYProgress, [0.1, 0.4], ["90vw", "300px"]);
  const videoHeight = useTransform(scrollYProgress, [0.1, 0.4], ["80vh", "420px"]);
  const videoRadius = useTransform(scrollYProgress, [0.1, 0.4], ["0px", "16px"]);
  
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div className="relative bg-black">
            {/* Cierre de Sección */}
      <div className="h-[60vh] flex flex-col items-center justify-center bg-black relative z-50">
        <div className="h-[1px] w-20 bg-white/20 mb-8" />
        <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase text-center leading-none">
          Ready to <br /> <span className="text-white/20">Archive?</span>
        </h2>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
          className="mt-12 px-12 py-4 border border-white text-white font-bold uppercase tracking-[0.3em] text-[10px] transition-all"
        >
          Contact Now
        </motion.button>
      </div>
      <div ref={sectionRef} className="relative h-[250vh] w-full">
        <motion.div 
          style={{ opacity: sectionOpacity }}
          className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        >
          {/* Overlay Estético */}
          <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-white" />

          {/* GRID DE FONDO (12 imágenes únicas en 6 columnas x 2 filas) */}
          <div className="absolute inset-0 z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 p-4 md:p-10">
            {ALL_IMAGES.map((src, i) => (
              <motion.div
                key={i}
                style={{ 
                  // Reducimos el movimiento en móvil para que no se pierdan las fotos
                  y: useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -80 : 80]),
                  opacity: useTransform(scrollYProgress, [0, 0.2], [0, 0.3])
                }}
                className="aspect-[3/4] rounded-xl overflow-hidden border border-white/5 bg-white/5"
              >
                <img src={src} className="w-full h-full object-cover grayscale" alt="" />
              </motion.div>
            ))}
          </div>

          {/* CONTENEDOR CENTRAL */}
          <motion.div
            ref={containerRef}
            style={{
              width: ready ? videoWidth : "90vw",
              height: ready ? videoHeight : "80vh",
              borderRadius: videoRadius,
            }}
            className="relative z-30 overflow-hidden border border-white/20 bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            <video
              src={CENTER_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            
            <div className="absolute top-4 right-4 flex gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[9px] font-mono text-white/60 tracking-tighter uppercase">Live_Feed.raw</span>
            </div>
            
            <div className="absolute bottom-4 left-4">
              <p className="text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">
                Ref_ID: 004-Beta
              </p>
            </div>
          </motion.div>

          {/* Decoración de Fondo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] border border-white/5 rounded-full scale-[1.5] opacity-20" />
            <div className="w-[300px] h-[300px] border border-white/5 rounded-full scale-[2] opacity-10" />
          </div>
        </motion.div>
      </div>


    </div>
  );
}