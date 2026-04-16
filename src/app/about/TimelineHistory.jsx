"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import types from '@/components/fontLetters';

const historyData = [
  {
    year: "2024",
    title: "Cyber was born",
    description: "Iniciamos con una visión clara: transformar la complejidad técnica en interfaces minimalistas y funcionales. El origen de nuestra arquitectura robusta.",
    tag: "ORIGIN_LOG"
  },
  {
    year: "2025",
    title: "Clear vision and commitment",
    description: "Consolidamos nuestra metodología de desarrollo, enfocándonos en la performance extrema y la optimización de activos digitales de alto nivel.",
    tag: "EVOLUTION_01"
  },
  {
    year: "2026",
    title: "Innovation with tech",
    description: "Liderando la integración de animaciones avanzadas y sistemas escalables. Elevando el estándar de lo que una experiencia web debe ser.",
    tag: "CURRENT_STATUS"
  }
];

export const TimelineHistory = () => {
  return (
    <section className="relative bg-black text-white py-24 px-4 overflow-visible">
      <div className="container mx-auto max-w-7xl">
        
        {/* Encabezado de la sección */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3 opacity-60">
            <span className="h-[1px] w-8 bg-gray-400" />
            <span className="text-[10px] tracking-[0.5em] text-gray-400 uppercase font-mono italic">Evolution_Timeline</span>
          </div>
          <h2 className={`${types.h2} text-5xl md:text-6xl font-black italic tracking-tighter uppercase`}>
            Nuestra <span className="text-white/20">Trayectoria</span>
          </h2>
        </div>

        {/* Contenedor del Timeline */}
        <div className="relative">
          {historyData.map((item, index) => (
            <TimelineItem key={index} item={item} isLast={index === historyData.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, isLast }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Efecto de opacidad y escala para el contenido mientras se hace scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <div ref={targetRef} className="flex flex-col md:flex-row min-h-[60vh] relative">
      
      {/* Lado Izquierdo: Año (Sticky) */}
      <div className="md:w-1/3 mb-8 md:mb-0">
        <div className="sticky top-48">
          <motion.div 
            style={{ opacity }}
            className="flex flex-col"
          >
            <span className="text-[10px] font-mono text-gray-400 mb-2 tracking-[0.3em]">[{item.tag}]</span>
            <h3 className="text-7xl md:text-9xl font-black italic text-white/10 leading-none">
              {item.year}
            </h3>
          </motion.div>
        </div>
      </div>

      {/* Lado Derecho: Contenido */}
      <div className="md:w-2/3 md:pl-20 relative pb-20">
        {!isLast && (
          <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-gray-400/50 via-white/10 to-transparent hidden md:block" />
        )}
        
        <motion.div 
          style={{ opacity, x }}
          className="space-y-6"
        >
          <h4 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight">
            {item.title}
          </h4>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-light">
            {item.description}
          </p>
          
          {/* Detalle decorativo técnico */}
          <div className="pt-8 flex gap-4">
            <div className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-white/40">
              System_Verified
            </div>
            <div className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-white/40">
              {item.year} // LOG
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};