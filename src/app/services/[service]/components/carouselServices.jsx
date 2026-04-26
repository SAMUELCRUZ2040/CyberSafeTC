"use client";
import React, { useEffect, useRef, useState, createContext } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const CarouselServices = ({ items }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full group">
      {/* GRADIENTES DE DESVANECIMIENTO (Fading Overlays)
          Ajusté el color a black (#000000) para que coincida con el fondo de tu página.
      */}
      
      {/* Gradiente Derecho */}
      <div 
        className={`absolute right-0 top-0 bottom-0 z-30 w-40 pointer-events-none bg-gradient-to-l from-black to-transparent transition-opacity duration-300 ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`} 
      />

      {/* Contenedor de Scroll */}
      <div
        className="flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        {/* Padding lateral para que la primera y última card 
            no queden ocultas bajo el gradiente al inicio/final 
        */}
        <div className="flex flex-row gap-6 pb-4 px-4">
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="flex justify-end gap-3 mt-8">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-10 transition-all"
        >
          <ArrowLeft size={20} color="white" strokeWidth={1.5} />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-10 transition-all"
        >
          <ArrowRight size={20} color="white" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export const Card = ({ card, index }) => {
  const router = useRouter();
  
  // Transición única para entrada y salida
  const fastTransition = { duration: 0.1, ease: "linear" };

  return (
    <motion.button
      initial="rest"
      whileHover="active"
      // Quitamos animate="rest" para dejar que whileHover maneje el ciclo natural
      onClick={() => router.push(card.linkService)}
      className="group relative h-[350px] w-[220px] md:w-[380px] overflow-hidden rounded-[2rem] border border-white/5 bg-[#0a0a0a] cursor-pointer text-left transition-colors duration-100 hover:border-primaryColor/50"
    >
      {/* Fondo con imagen */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          variants={{
            rest: { scale: 1, opacity: 0.2, filter: "grayscale(100%)" },
            active: { scale: 1.1, opacity: 0.6, filter: "grayscale(0%)" }
          }}
          transition={fastTransition}
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${card.src})` }} 
        />
      </div>

      <div className="relative z-20 h-full p-10 flex flex-col justify-end items-start">
        {/* Título y Unidad */}
        <div className="mb-4 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-primaryColor/50" />
          <p className="font-mono text-[9px] text-primaryColor tracking-[0.3em] uppercase">
            Unit_0{index + 1}
          </p>
        </div>

        <motion.h4 
          variants={{
            rest: { color: "#ffffff" },
            active: { color: "var(--primaryColor)" }
          }}
          transition={fastTransition}
          className="text-xl font-black italic leading-tight uppercase"
        >
          {card.title} 
          <span className="ms-2 text-white/40">{card.subtitle}</span>
        </motion.h4>

        {/* BOTÓN FLECHA: Animación de salida instantánea */}
        <motion.div 
          variants={{
            rest: { opacity: 0, y: 20 },
            active: { opacity: 1, y: 0 }
          }}
          transition={fastTransition}
          className="mt-8 flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-full border border-primaryColor/50 flex items-center justify-center bg-primaryColor/10">
            <ArrowUpRight size={16} className="text-primaryColor" />
          </div>
          <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest">Access_Module</span>
        </motion.div>
      </div>

      {/* ESQUINAS HUD: Animación de salida instantánea */}
      <motion.div 
        variants={{ 
          rest: { opacity: 0 }, 
          active: { opacity: 1 } 
        }}
        transition={fastTransition}
        className="absolute top-0 right-0 p-6 pointer-events-none"
      >
        <div className="w-4 h-4 border-t-2 border-r-2 border-primaryColor/50 rounded-tr-md" />
      </motion.div>
      
      <motion.div 
        variants={{ 
          rest: { opacity: 0 }, 
          active: { opacity: 1 } 
        }}
        transition={fastTransition}
        className="absolute bottom-0 left-0 p-6 pointer-events-none"
      >
        <div className="w-4 h-4 border-b-2 border-l-2 border-primaryColor/50 rounded-bl-md" />
      </motion.div>
    </motion.button>
  );
};