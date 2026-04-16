"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import types from "@/components/fontLetters";

const videoSlides = [
  { id: "01", src: "/media/homeTestimonial_1.webm", text: "CORE ARCHITECTURE", sub: "Next-Gen Web Infrastructure" },
  { id: "02", src: "/media/homeTestimonial_2.webm", text: "MOTION DESIGN", sub: "Inmersive Visual Experiences" },
  { id: "03", src: "/media/homeTestimonial_3.webm", text: "SECURE SYSTEMS", sub: "End-to-End Data Encryption" },
  { id: "04", src: "/media/homeTestimonial_4.webm", text: "BRAND EVOLUTION", sub: "Digital Transformation Strategy" },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + videoSlides.length) % videoSlides.length);
  };

const textVariants = {
  enter: (direction) => ({
    y: direction > 0 ? "100%" : "-100%", // Si es adelante, viene de abajo (100%)
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction) => ({
    y: direction > 0 ? "-100%" : "100%", // Si es adelante, se va hacia arriba (-100%)
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

  return (
    <div className="relative w-full h-screen overflow-hidden select-none bg-black font-sans">
      
      {/* 1. HUD / UI - OPTIMIZADO PARA MÓVIL */}
      <div className="absolute inset-0 pointer-events-none z-40 p-4 md:p-12">
        
        {/* Top Bar */}
        <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 flex justify-between items-start">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white animate-pulse" />
            <p className="text-[7px] md:text-[9px] text-white/50 tracking-[0.3em] md:tracking-[0.4em] uppercase font-light">
              CYBER ARCHIVE <span className="hidden sm:inline">/ ENGINE ACTIVE</span>
            </p>
          </div>
          <p className="text-[7px] md:text-[9px] text-white/50 tracking-[0.3em] md:tracking-[0.4em] uppercase font-light text-right">
            EST. 2026 <span className="hidden xs:inline mx-1 md:mx-2 opacity-20">|</span> <span>SOLUTIONS</span>
          </p>
        </div>

        {/* Lateral Derecho - Se oculta en móviles muy pequeños para evitar ruido visual */}
        <div className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 md:gap-6">
          <motion.p 
            key={`index-${currentIndex}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[8px] md:text-[10px] text-white font-mono tracking-wider rotate-90 origin-right"
          >
            REF_{videoSlides[currentIndex].id}
          </motion.p>
          <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-white/40 to-transparent" />
          <p className="text-[7px] md:text-[8px] text-white/30 tracking-[0.5em] uppercase rotate-90 origin-right whitespace-nowrap">
            Scroll
          </p>
        </div>
      </div>

{/* 2. VIDEO BACKGROUND - AHORA INSTANTÁNEO */}
<div className="absolute inset-0 w-full h-full z-10">
  <AnimatePresence initial={false} mode="popLayout"> {/* popLayout ayuda a evitar saltos de posición */}
    <motion.div
      key={`video-container-${currentIndex}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: "linear" }} // Transición casi imperceptible
      className="w-full h-full"
    >
      <video
        key={videoSlides[currentIndex].src}
        src={videoSlides[currentIndex].src}
        autoPlay 
        muted 
        loop 
        playsInline
        className="w-full h-full object-cover grayscale-[0.2]"
      />
    </motion.div>
  </AnimatePresence>
</div>

{/* 4. TEXTO CENTRAL */}
<div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none px-6">
  
  {/* CONTENEDOR DEL H1 - Aumentamos la altura y el padding vertical */}
  <div className="relative overflow-hidden w-full flex justify-center h-[1.5em] sm:h-[1.8em] md:h-[4.2em] py-4"> 
    <AnimatePresence custom={direction} mode="wait">
      <motion.h1 
        key={`title-${currentIndex}`}
        custom={direction}
        variants={textVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className={`${types.h1} absolute top-1/2 -translate-y-1/2 text-[clamp(1.5rem,7vw,5.5rem)] font-bold text-white leading-none tracking-tighter uppercase text-center italic break-words w-full`}
      >
        {videoSlides[currentIndex].text}
      </motion.h1>
    </AnimatePresence>
  </div>

  {/* CONTENEDOR DEL SUBTÍTULO - Ajustamos altura para que no se corte el texto pequeño */}
  <div className="relative overflow-hidden w-full flex flex-col items-center h-20 mt-2">
    <AnimatePresence custom={direction} mode="wait">
      <motion.div 
        key={`sub-${currentIndex}`}
        custom={direction}
        variants={textVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="absolute inset-0 flex flex-col items-center w-full"
      >
        <div className="w-8 md:w-12 h-[1px] bg-white/40 my-4" />
        <p className="text-white/70 text-[8px] md:text-[11px] tracking-[0.4em] md:tracking-[0.8em] uppercase font-light text-center px-4">
          {videoSlides[currentIndex].sub}
        </p>
      </motion.div>
    </AnimatePresence>
  </div>
</div>

    {/* 5. NAVEGACIÓN INFERIOR - ESTILO INDUSTRIAL / ARCHIVE */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-6 px-6 py-3 select-none">
        
        {/* NÚMERO ACTUAL */}
        <div className="overflow-hidden h-4 flex items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              className="text-[10px] font-mono text-white/50 tracking-widest"
            >
              0{currentIndex + 1}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* SEPARADORES VERTICALES (DECORATIVOS) */}
        <div className="flex gap-1.5">
          <div className="w-[1px] h-3 bg-white/20" />
          <div className="w-[1px] h-3 bg-white/20" />
        </div>

        {/* CONTENEDOR DE SLOTS (RECTÁNGULOS) */}
        <div className="flex items-center gap-3">
          {videoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className="relative w-6 h-4 flex items-center justify-center group"
            >
              {/* El marco rectangular para el activo */}
              {index === currentIndex ? (
                <motion.div
                  layoutId="activeBox"
                  className="absolute inset-0 border border-white/80 z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              ) : (
                <div className="w-full h-[1px] bg-white/10 group-hover:bg-white/30 transition-colors" />
              )}
            </button>
          ))}
        </div>

        {/* TOTAL DE SLOTS */}
        <div className="text-[10px] font-mono text-white/20 tracking-widest">
          0{videoSlides.length}
        </div>
      </div>

      {/* Áreas de Click Laterales */}
      <div className="absolute inset-0 z-[55] pointer-events-none flex justify-between">
        <div onClick={() => paginate(-1)} className="w-[20%] h-full pointer-events-auto cursor-pointer" data-cursor="left"/>
        <div onClick={() => paginate(1)} className="w-[20%] h-full pointer-events-auto cursor-pointer" 
          data-cursor="right"  
        />
      </div>

      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black z-20 pointer-events-none opacity-80" />
    </div>
  );
}