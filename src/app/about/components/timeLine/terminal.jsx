"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ShieldCheck, Server, Activity } from "lucide-react";

export const TerminalDemo = () => {
  const [isInView, setIsInView] = useState(false);
  const [status, setStatus] = useState("deploying");

  // Iniciamos la secuencia de tiempos solo cuando el componente entra en el viewport
  useEffect(() => {
    if (isInView) {
      const timer1 = setTimeout(() => setStatus("encrypting"), 2000);
      const timer2 = setTimeout(() => setStatus("success"), 4500);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isInView]);

  return (
    <motion.div 
      // Detectamos cuando entra en pantalla
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center group"
    >
      
      {/* Fondo: Rejilla de radar sutil */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        
        {/* Orbe Central de Estado */}
        <div className="relative flex items-center justify-center w-20 h-20">
          <AnimatePresence mode="wait">
            {status !== "success" ? (
              <motion.div
                key="loading"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                exit={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Anillo de carga dinámico */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="40" cy="40" r="32"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="transparent"
                    className="text-white/5"
                  />
                  {isInView && (
                    <motion.circle
                      cx="40" cy="40" r="32"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="transparent"
                      strokeDasharray="200"
                      initial={{ strokeDashoffset: 200 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 4.5, ease: "linear" }}
                      className="text-primaryColor"
                    />
                  )}
                </svg>
                <Server size={18} className="text-white/20 animate-pulse" />
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative z-10 w-12 h-12 rounded-full border border-primaryColor/50 flex items-center justify-center bg-primaryColor/5">
                  <ShieldCheck size={22} className="text-primaryColor" />
                </div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 1 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 border border-primaryColor rounded-full"
                />
                
                <div className="absolute inset-0 bg-primaryColor/10 blur-xl rounded-full animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Textos de Feedback */}
        <div className="h-6 flex flex-col items-center gap-1">
          <AnimatePresence mode="wait">
            {isInView && (
              <motion.div
                key={status}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center"
              >
                <span className={`text-[10px] font-mono uppercase tracking-[0.4em] text-center ${status === 'success' ? 'text-primaryColor font-bold' : 'text-white/40'}`}>
                  {status === "deploying" && "Initializing_Core"}
                  {status === "encrypting" && "Security_Layers_Active"}
                  {status === "success" && "Infrastructure_Online"}
                </span>
                
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 0.5 }} 
                    className="flex items-center gap-1"
                  >
                    <Activity size={10} className="text-primaryColor" />
                    <span className="text-[7px] text-primaryColor font-mono tracking-widest italic">STABLE_SIGNAL</span>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Decoración Inferior */}
      <div className="absolute bottom-3 inset-x-6 flex justify-between items-center opacity-30">
          <div className="flex gap-2">
            <div className={`w-1 h-1 rounded-full transition-colors duration-500 ${status === 'success' ? 'bg-primaryColor' : 'bg-white/40'}`} />
            <div className="w-8 h-[1px] bg-white/20 self-center" />
          </div>
          <span className="text-[7px] font-mono text-white/20 tracking-tighter">NODE_01 // SECURE_STATUS: 100%</span>
      </div>
    </motion.div>
  );
};