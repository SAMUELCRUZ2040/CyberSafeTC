'use client';

import types from "@/components/fontLetters";
import { Fingerprint, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const ChromaGrid = () => {
  return (
    <div className="relative w-full h-[400px] flex flex-col items-center justify-center bg-[#000] overflow-hidden">
      
      {/* 1. Fondo de Datos sutil (Micro-grid) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* 2. Círculos concéntricos de precisión (Más finos) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0.8, 1.2, 1.6].map((scale, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.1, 0], scale: scale }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 2, ease: "linear" }}
            className="absolute w-[250px] h-[250px] border border-white/20 rounded-full"
          />
        ))}
      </div>

      {/* 3. Contenido Central Proporcionado */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[80%]">
        
        {/* Icono más pequeño y elegante */}
        <div className="mb-8 relative">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Fingerprint className="text-primaryColor" size={32} strokeWidth={1.2} />
          </motion.div>
          {/* Glow sutil contenido */}
          <div className="absolute inset-0 bg-primaryColor/10 blur-xl rounded-full -z-10" />
        </div>

        {/* Tipografía equilibrada */}
        <div className="space-y-2">
          <h4 className="text-2xl md:text-3xl font-black italic text-white uppercase tracking-tighter leading-tight">
            Seguridad <br /> 
            <span className="text-white/20">Avanzada</span>
          </h4>
          <p className="text-[11px] text-white/30 font-medium max-w-[220px] mx-auto leading-relaxed">
            Protocolos de encriptación de grado militar integrados en cada capa de la arquitectura.
          </p>
        </div>

        {/* Status Pills (Más pequeñas y limpias) */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] font-bold text-primaryColor tracking-[0.2em] uppercase">Status</span>
            <div className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">
               <span className="text-[10px] text-white/50 font-mono">ACTIVE_LINK</span>
            </div>
          </div>
          <div className="w-[1px] h-6 bg-white/10" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] font-bold text-primaryColor tracking-[0.2em] uppercase">Security</span>
            <div className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">
               <span className="text-[10px] text-white/50 font-mono">SSL_256BIT</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Detalles técnicos en las esquinas (Estilo HUD) */}
      <div className="absolute top-8 left-8 flex items-center gap-3">
        <div className="w-1 h-1 rounded-full bg-primaryColor animate-pulse" />
        <span className="text-[8px] font-mono text-white/20 tracking-[0.3em] uppercase">Secure_Environment_v1.0</span>
      </div>

      <div className="absolute bottom-8 right-8 overflow-hidden">
        <motion.div 
          animate={{ y: [20, 0, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="font-mono text-[8px] text-primaryColor/30 uppercase tracking-[0.4em] [writing-mode:vertical-lr]"
        >
          01010101010101
        </motion.div>
      </div>

      {/* Luz de escaneo lateral muy sutil */}
      <motion.div 
        animate={{ left: ['-100%', '200%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-y-0 w-[80px] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -skew-x-12 pointer-events-none"
      />
    </div>
  );
};