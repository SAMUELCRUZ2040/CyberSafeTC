"use client";

import types from "@/components/fontLetters";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const ConfiTimeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  // Aplicamos un spring para que el movimiento de la línea sea más suave y "premium"
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heightTransform = useTransform(scaleY, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="max-w-7xl w-full relative bg-[#000] font-sans border border-white/5 rounded-[3rem] p-8 md:p-20 overflow-hidden"
      ref={containerRef}
    >
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      {/* Cabecera del Timeline */}
      <div className="flex flex-col gap-2 mb-32 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[1px] bg-primaryColor/50" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-primaryColor font-bold">
            Verificaciones_de_sistema
          </span>
        </div>
        <h2 className={`${types.h2} text-6xl md:text-8xl font-black italic tracking-tighter uppercase text-white leading-[0.8]`}>
          Nuestra <span className="text-white/10 italic">Historia</span>
        </h2>
        <p className={`${types.pSmall} text-white/30 max-w-md mt-6 border-l border-white/10 pl-6 leading-relaxed`}>
          Un recorrido por los hitos técnicos y creativos que definen nuestra evolución constante hacia el minimalismo funcional.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start mb-40 last:mb-0 md:gap-10">
            {/* Columna Izquierda: Indicador y Título Desktop */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-60 self-start max-w-xs lg:max-w-[20rem] md:w-full">
              
              {/* Círculo indicador con efecto de pulso técnico */}
              <div className="h-10 w-10 absolute left-[-2px] md:left-[-2px] rounded-full border border-white/10 bg-[#000] z-50 flex items-center justify-center">
                <div className="h-full w-full absolute rounded-full border border-primaryColor/20 animate-ping" />
                <motion.div 
                  className="h-2 w-2 rounded-full bg-primaryColor shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                />
              </div>

              {/* Título Principal (Año/Hito) */}
              <h3 className={`${types.h4} hidden md:block text-6xl font-black italic text-white uppercase tracking-tighter md:pl-20 transition-all duration-500 group-hover:text-primaryColor`}>
                {item.title}
              </h3>
            </div>

            {/* Columna Derecha: Contenido */}
            <div className="relative pl-16 md:pl-4 w-full group">
              <div className="flex flex-col mb-12">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-primaryColor font-mono text-xs font-bold tracking-[0.2em]">0{index + 1} //</span>
                  <h4 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter leading-none">
                    {item.title}
                  </h4>
                </div>
                <span className="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em] ml-14">
                  {item.titleTwo || "System_Insight"}
                </span>
              </div>

              <div className="relative ml-0 md:ml-12 shadow-2xl transition-all duration-500 group-hover:border-white/10">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Línea de tiempo vertical (El "Rail") */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-[19px] left-[19px] top-0 overflow-hidden w-[1px] bg-white/5 z-0"
        >
          {/* Línea de progreso activa */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[1px] bg-gradient-to-b from-transparent via-primaryColor to-transparent shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          />
        </div>
      </div>
      
      {/* Botón flotante decorativo de navegación */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 items-center">
        <div className="w-1 h-1 rounded-full bg-white/20" />
        <div className="w-1 h-1 rounded-full bg-primaryColor animate-pulse" />
        <div className="w-1 h-1 rounded-full bg-white/20" />
      </div>
    </div>
  );
};