"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import data from '@/json/data';
import types from "@/components/fontLetters";
import { Terminal, Cpu, ArrowUpRight } from "lucide-react";

/**
 * SUB-COMPONENT: ProjectNode
 * Maneja las animaciones de entrada para cada proyecto individual.
 */
function ProjectNode({ section, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const isEven = index % 2 === 0;

  // Variantes para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2, // Hace que los hijos animen uno tras otro
        delayChildren: 0.3 
      }
    }
  };

  // Variantes para elementos de texto y botones
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // Variantes específicas para la imagen (efecto de escala)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  return (
    <motion.section 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative min-h-screen flex items-center justify-center w-full px-6 lg:px-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center w-full max-w-7xl mx-auto">
        
        {/* IMAGE SIDE (6/12) */}
        <motion.div 
          variants={imageVariants}
          className={`lg:col-span-6 relative group ${isEven ? "lg:order-1" : "lg:order-2"}`}
        >
          {/* HUD Accents */}
          <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-primaryColor/30 rounded-tl-2xl z-20 group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-primaryColor/30 rounded-br-2xl z-20 group-hover:scale-110 transition-transform duration-500" />

          <div className="relative overflow-hidden rounded-2xl bg-[#080808] border border-white/5 aspect-video shadow-2xl">
            <Image
              src={section.picture}
              alt={section.title}
              fill
              className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            
            {/* Tag animado */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute top-6 left-6 z-20"
            >
              <div className="flex items-center gap-2 bg-black/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-primaryColor animate-pulse" />
                <span className="font-mono text-[10px] text-white/80 uppercase tracking-[0.2em]">
                  DEPL_UNIT_0{index + 1}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CONTENT SIDE (6/12) */}
        <div className={`lg:col-span-6 flex flex-col ${isEven ? "lg:order-2 lg:pl-10" : "lg:order-1 lg:pr-10"} text-center lg:text-left items-center lg:items-start`}>
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 font-mono text-[10px] text-primaryColor/50 tracking-[0.5em] uppercase font-bold">
            <Cpu size={16} />
            SYSTEM_ACTIVE
          </motion.div>

          <motion.h3 
            variants={itemVariants}
            className={`${types.h3} font-black italic uppercase leading-[0.85] mb-8 tracking-tighter text-white group-hover:text-primaryColor transition-colors duration-500`}
          >
            {section.title}
          </motion.h3>

          <motion.p 
            variants={itemVariants}
            className={`${types.p} text-white/40 leading-relaxed font-light mb-10 max-w-lg text-lg`}
          >
            {section.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
            {["Next.js", "React", "Node"].map((tech) => (
              <div key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-white/30 tracking-widest uppercase">
                {`> ${tech}`}
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn relative flex items-center justify-between w-[280px] p-5 bg-black border border-white/10 rounded-2xl hover:border-primaryColor/50 transition-all shadow-2xl"
            >
              <div className="flex flex-col items-start text-left">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest mb-1">Secure Protocol</span>
                <span className="text-sm font-black text-white group-hover/btn:text-primaryColor transition-colors">LAUNCH PROJECT</span>
              </div>
              <ArrowUpRight size={22} className="text-white group-hover/btn:text-primaryColor transition-colors" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default function OurWork({ idPage }) {
  const searchOption = data.services[0].informationService;
  const inyectId = searchOption.find((iterator) => iterator.id === idPage);
  const resultInformation = inyectId?.OurWork || [];

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div className="bg-black">
      {/* HEADER SECTION */}
      <motion.section 
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative pt-32 pb-10 px-6 lg:px-0"
      >
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col gap-8 border-l-2 border-primaryColor pl-8 md:pl-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 font-mono text-sm text-white/20 uppercase tracking-[0.6em]"
            >
              <Terminal size={18} className="text-primaryColor" /> 02 // LOG_HISTORY
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className={`${types.h2} text-white font-black italic uppercase leading-[0.8] tracking-tighter text-6xl md:text-8xl`}
            >
              OUR <span className="text-primaryColor">PROVEN IMPACT</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className={`${types.p} max-w-2xl text-white/30 font-light text-xl leading-relaxed`}
            >
              Every deployment is a verified node in our digital infrastructure.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* PROJECT LIST */}
      <div className="flex flex-col">
        {resultInformation.map((section, index) => (
          <ProjectNode key={index} section={section} index={index} />
        ))}
      </div>
    </div>
  );
}