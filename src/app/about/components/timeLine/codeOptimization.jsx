"use client";
import { motion } from "framer-motion";
import { CloudRainWind, Cpu, Activity } from "lucide-react";
import types from "@/components/fontLetters";

export const CodeOptimization = () => {
  // Definimos las rutas de los "conductos" de datos
  const paths = [
    { id: 1, top: "25%", delay: 0 },
    { id: 2, top: "45%", delay: 0.5 },
    { id: 3, top: "65%", delay: 1.2 },
  ];

  return (
    <div className="w-full h-full rounded-2xl relative bg-[#020202] overflow-hidden border border-white/10 flex flex-col justify-end p-6 group">
      
      {/* 1. Fondo Dinámico: Conductos de Datos */}
      <div className="absolute inset-0 z-0 opacity-20">
        {paths.map((path) => (
          <div key={path.id} className="absolute w-full h-[1px] bg-white/5" style={{ top: path.top }}>
            {/* Partícula de Luz (El Código siendo optimizado) */}
            <motion.div
              initial={{ left: "-10%" }}
              whileInView={{ left: "110%" }}
              viewport={{ once: false }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                delay: path.delay,
                ease: "linear" 
              }}
              className="absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-primaryColor to-transparent shadow-[0_0_15px_#primaryColor]"
            />
          </div>
        ))}
      </div>

      {/* 2. Escáner Vertical Sutil */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-0 h-[40%] bg-gradient-to-b from-transparent via-primaryColor/5 to-transparent z-10 pointer-events-none"
      />

      {/* 3. Contenido Principal */}
      <div className="relative z-20 flex flex-col gap-5">
        
        {/* Header con Icono Animado */}
        <div className="flex flex-col gap-2">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-10 h-10 rounded-xl bg-primaryColor/10 border border-primaryColor/20 flex items-center justify-center"
          >
            <CloudRainWind size={22} className="text-primaryColor" />
          </motion.div>
          
          <motion.h4 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`${types.p} font-bold text-white tracking-tight uppercase italic`}
          >
            Refactor_Core
          </motion.h4>
        </div>

        {/* Párrafo con efecto de revelado */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.4 }}
          className={`${types.pSmall} text-white leading-relaxed max-w-[200px] font-light`}
        >
          Eliminamos la fricción técnica para alcanzar una arquitectura de respuesta instantánea.
        </motion.p>

        {/* 4. Monitor de Estado (UI de Sistema) */}
        <div className="flex items-center gap-4 pt-2 border-t border-white/5">
          <div className="flex flex-col gap-1">
            <span className="text-[7px] text-white/30 font-mono tracking-widest uppercase">System_Load</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                  className="w-2 h-1 bg-primaryColor rounded-full"
                />
              ))}
            </div>
          </div>
          <div className="h-4 w-[1px] bg-white/10" />
          <div className="flex flex-col gap-0.5">
             <span className="text-[7px] text-primaryColor font-mono flex items-center gap-1">
               <Activity size={8} /> 99.9% OPTIMIZED
             </span>
          </div>
        </div>
      </div>

      {/* Glow ambiental */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primaryColor/10 blur-[60px] rounded-full pointer-events-none" />
    </div>
  );
};