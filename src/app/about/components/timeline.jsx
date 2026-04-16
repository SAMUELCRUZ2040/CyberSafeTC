"use client";

import React, { useEffect, useRef } from "react";
// Verifica si tu carpeta es "timeLine" o "timeline". 
// Si da error, prueba cambiando la "L" a minúscula o mayúscula según tu carpeta real.
import { ConfiTimeline } from "./timeLine/confiTimeline"; 
import types from "@/components/fontLetters";
import data from '@/json/data';
import { motion, useAnimationControls, useInView, useScroll, useTransform } from "framer-motion";
import { Components } from "@/utils/componentAnimation";

const TimelineContent = ({ description, highlights = [], components = [] }) => {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 }
        }
      }}
      className="mt-4"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }
        }}
      >
        <p className={`${types.pHero} text-white/70 leading-relaxed max-lg:text-start max-w-2xl italic`}>
          {description}
        </p>
      </motion.div>

      {highlights.length > 0 && (
        <motion.div 
          className="my-6 space-y-2"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
        >
          {highlights.map((highlight, index) => (
            <motion.div 
              key={index} 
              className={`${types.pSmall} flex gap-3 items-center text-white/50 font-mono`}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <span className="h-[1px] w-4 bg-primaryColor/40" />
              {highlight}
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Grid de componentes (los configuraremos al final) */}
      <div className="grid grid-cols-2 gap-4 mt-8 max-lg:grid-cols-1">
        {components.map((component, index) => (
          <div key={index} className="rounded-2xl border border-white/5 bg-white/[0.02] h-[16rem] overflow-hidden">
             <Components search={component} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export function Timeline() {
  const containerRef = useRef(null);

  const timelineData = data.about[0].timeLine.map((item, index) => ({
    title: item.title,
    titleTwo: item.titleTwo,
    content: (
      <TimelineContent
        key={index}
        description={item.description}
        highlights={item.highlights}
        components={item.components}
      />
    ),
  }));

  return (
    <section ref={containerRef} className="w-full flex justify-center items-center relative py-20">
      <ConfiTimeline data={timelineData} />
      <div className={`z-50 background absolute left-0 bottom-0 w-full h-[15rem] bg-gradient-to-t from-black to-transparent pointer-events-none`}/>
    </section>
  );
}