"use client";
import { motion } from "framer-motion";
import data from '@/json/data';
import types from '@/components/fontLetters';
import { Cpu, Terminal, ShieldCheck } from "lucide-react";

export const Writer = ({ idPage }) => {
  const searchOption = data.services[0].informationService;
  const resultInformation = searchOption.find((iterator) => iterator.id === idPage);

  if (!resultInformation) return null;

  return (
    <div className="relative w-full overflow-hidden pb-32 mt-9">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 z-[-1] opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      
      <div className="container mx-auto px-6 flex flex-col gap-32 mt-20 max-w-7xl">
        
        {/* BLOQUE 1: Alineado a la derecha (HUD Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-end text-center md:text-end w-full"
        >
          <div className="max-w-2xl">
            {/* Header Técnico */}
            <div className="flex items-center justify-center md:justify-end gap-3 mb-4 text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase">
              <span className="w-8 h-[1px] bg-white/10" />
              <Terminal size={12} className="text-primaryColor" />
              System_Architecture_Core
            </div>

            <h1 className={`${types.h3} flex flex-col leading-[1.1]`}>
              <span className="text-white/30 font-light text-2xl uppercase tracking-[0.15em]">
                {resultInformation.title}
              </span>
              <span className="text-white font-black italic tracking-tighter uppercase">
                {resultInformation.addTitle}
              </span>
            </h1>

            <div className="relative mt-8">
              <p className={`${types.p} text-white/60 font-light leading-relaxed md:pr-6 border-none md:border-r border-white/10`}>
                {resultInformation.description}
              </p>
            </div>

            {/* Footer Técnico */}
            <div className="flex justify-center md:justify-end gap-4 mt-6 opacity-20 font-mono text-[8px] tracking-widest text-white uppercase">
                <span>ID: {idPage}</span>
                <span>Status: Stable</span>
                <span>Mode: Optimized</span>
            </div>
          </div>
        </motion.div>

        {/* BLOQUE 2: Alineado a la izquierda (HUD Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-start w-full"
        >
          <div className="max-w-2xl">
            {/* Header Técnico */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase">
              <Cpu size={12} className="text-primaryColor animate-pulse" />
              Process_Synchronization
              <span className="w-8 h-[1px] bg-white/10" />
            </div>

            <h1 className={`${types.h3} flex flex-col leading-[1.1]`}>
              <span className="text-white/30 font-light text-2xl uppercase tracking-[0.15em]">
                {resultInformation.title2}
              </span>
              <span className="text-primaryColor font-black italic tracking-tighter uppercase">
                {resultInformation.addTitle2}
              </span>
            </h1>

            <div className="relative mt-8">
              <p className={`${types.p} text-white/60 font-light leading-relaxed md:pl-6 border-none md:border-l border-primaryColor/20`}>
                {resultInformation.description2 || resultInformation.description}
              </p>
            </div>

            {/* Footer Técnico */}
            <div className="flex justify-center md:justify-start gap-4 mt-6 opacity-20 font-mono text-[8px] tracking-widest text-white uppercase">
                <span>Secure_Env: V1.0</span>
                <span>Deployment: Ready</span>
                <span>Latency: 1.2ms</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};