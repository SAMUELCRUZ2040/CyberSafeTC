"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRight, Cpu, Layers } from "lucide-react";

export const CodeComparisonDemo = ({ beforeCode, afterCode, label = "Refactor v2.0" }) => {
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setIsNew(!isNew), 3500);
    return () => clearInterval(timer);
  }, [isNew]);

  return (
    <div className="relative w-full max-w-sm h-full bg-[#000] border border-white/5 rounded-xl overflow-hidden group">
      
      {/* 1. Fondo de Rejilla Dinámico */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:14px_14px]" />
      
      {/* 2. Header Minimalista */}
      <div className="absolute top-0 inset-x-0 h-8 px-3 flex items-center justify-between bg-black/40 backdrop-blur-md z-30 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className={`w-1 h-1 rounded-full ${isNew ? 'bg-primaryColor animate-pulse' : 'bg-white/20'}`} />
          <span className="text-[8px] font-mono text-white/40 uppercase tracking-tighter">System.Process // {label}</span>
        </div>
        <Layers size={10} className="text-white/20" />
      </div>

      {/* 3. Contenedor de Código (Cuerpo) */}
      <div className="absolute inset-0 pt-10 pb-2 px-4 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={isNew ? "after" : "before"}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col gap-1"
          >
            {/* Tag de Estado */}
            <div className="flex items-center gap-2 mb-1">
                <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded ${isNew ? 'bg-primaryColor/10 text-primaryColor border border-primaryColor/20' : 'bg-white/5 text-white/40 border border-white/10'}`}>
                    {isNew ? "OPTIMIZED_CORE" : "LEGACY_STRUCTURE"}
                </span>
            </div>

            {/* El Código (Snippet resumido) */}
            <div className="font-mono text-[9px] leading-relaxed text-white/60 bg-white/[0.02] p-2 rounded border border-white/5">
                <div className="opacity-30 tracking-tighter whitespace-nowrap overflow-hidden italic mb-1">
                    {isNew ? "> // Runtime: 12ms (Faster)" : "> // Standard Logic"}
                </div>
                <div className="line-clamp-3 text-white/80">
                    {isNew ? afterCode : beforeCode}
                </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Barra de Progreso Inferior */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-white/5 w-full z-40">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          className="h-full bg-primaryColor shadow-[0_0_8px_#fff]" 
        />
      </div>

      {/* Decoración: Scanner line */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
         <motion.div 
            animate={{ y: [-20, 200] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-full h-10 bg-gradient-to-b from-transparent via-primaryColor/[0.03] to-transparent"
         />
      </div>
    </div>
  );
};