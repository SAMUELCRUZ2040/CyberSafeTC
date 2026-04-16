"use client";
import { motion } from "framer-motion";
import { Headphones, Shield, Check } from "lucide-react";

export const CustomerService = () => {
  // Variantes para los bloques de datos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const blockVariants = {
    hidden: { y: 10, opacity: 0, scaleY: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scaleY: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="relative w-full h-full bg-[#000] overflow-hidden flex flex-col items-center justify-center px-6">
      
      {/* 1. Visualizador Cinético (Se activa al ver en pantalla) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // Se activa una sola vez
        className="flex items-end gap-1.5 h-12 mb-6"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            variants={blockVariants}
            className={`w-2 rounded-t-sm ${
              i < 4 ? "bg-white/10" : i < 9 ? "bg-primaryColor/40" : "bg-primaryColor"
            }`}
            style={{ height: `${20 + (i * 6)}%` }} // Altura progresiva
          />
        ))}
      </motion.div>

      {/* 2. Info Card Minimalista */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-3"
      >
        <div className="flex items-center gap-3 px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full backdrop-blur-md">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Headphones size={14} className="text-primaryColor" />
          </motion.div>
          <span className="text-[10px] font-mono text-white/60 tracking-[0.3em] uppercase">
            Support_Protocol_v3
          </span>
          <motion.div
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 2, type: "spring" }}
             className="bg-primaryColor/20 p-0.5 rounded-full"
          >
            <Check size={10} className="text-primaryColor" />
          </motion.div>
        </div>

        {/* 3. Texto Descriptivo (Aparece al final) */}
        <p className="text-[8px] font-mono text-white/20 uppercase tracking-widest text-center max-w-[180px]">
          Sincronización de soporte técnico en tiempo real completada.
        </p>
      </motion.div>

      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-primaryColor/5 blur-[80px] rounded-full pointer-events-none" />
    </div>
  );
};