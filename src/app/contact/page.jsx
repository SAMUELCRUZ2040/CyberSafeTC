"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/input";
import types from "@/components/fontLetters";
import { cn } from "@/utils/cn";

export default function Contact({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

  // Bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      // CAMBIO: items-center y justify-center para desktop, overflow-x-hidden para evitar rebotes
      className="fixed inset-0 w-full h-full flex justify-center items-start md:items-center z-[9999] backdrop-blur-xl bg-black/95 overflow-y-auto overflow-x-hidden pt-20 md:pt-10 pb-12 px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Capa de fondo para cerrar */}
      <div className="fixed inset-0 z-[-1]" onClick={onClose} />

      {/* Contenedor Principal con Breakpoints Responsivos */}
      {/* sm: 640px, md: 768px, lg: 1024px, xl: 1280px */}
      <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col gap-8 md:gap-12 items-start mx-auto">
        
        {/* Header Section */}
        <motion.div
          className="flex flex-col gap-4 w-full"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="space-y-2">
            <span className="text-white/40 text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold">
              Contacto
            </span>
            <h2 className={cn(
              types.h3, 
              "text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight !text-start"
            )}>
              Empecemos a<br className="hidden sm:block" /> hablar ahora.
            </h2>
          </div>

          <div className="flex flex-col gap-1 border-l border-white/10 pl-5 mt-2">
            <span className="text-white/20 text-[8px] md:text-[9px] tracking-widest uppercase font-bold">Tiempo de respuesta</span>
            <span className="text-white/60 text-xs font-medium">Menos de 24 horas</span>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          className="relative w-full bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 backdrop-blur-md shadow-2xl flex flex-col gap-6 md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid grid-cols-1 gap-6 md:gap-10">
            <Input type="text" name="name" placeholder="Nombre completo" className="text-sm md:text-base" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <Input type="email" name="email" placeholder="Correo electrónico" className="text-sm md:text-base" />
              <Input type="tel" name="phone" placeholder="Teléfono" className="text-sm md:text-base" />
            </div>

            <Input name="message" placeholder="¿Cómo podemos ayudarte?" inputType="textarea" className="text-sm md:text-base min-h-[120px]" />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mt-4">
            <p className="text-white/30 text-[9px] md:text-[10px] leading-relaxed text-left max-w-[240px]">
              Tu privacidad es nuestra prioridad. Tu información nunca será compartida con terceros.
            </p>

            <button
              type="submit"
              disabled={submitted}
              className={cn(
                "group relative w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 overflow-hidden",
                submitted 
                  ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                  : "bg-white text-black hover:bg-gray-200 active:scale-95"
              )}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Mensaje Enviado
                  </motion.span>
                ) : (
                  <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-3">
                    Enviar ahora <span className="text-base md:text-lg transition-transform group-hover:translate-x-1">→</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.form>

        {/* Footer Modal */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-8 mt-2 pb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col gap-3">
             <span className="text-white/20 text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold">© Staff Creativa</span>
             <a href="mailto:contacto@staffcreativa.com" className="text-white/40 text-[10px] md:text-[11px] hover:text-white transition-colors border-b border-white/5 pb-1 w-fit">
               contacto@staffcreativa.com
             </a>
          </div>
          
          <motion.button
            onClick={onClose}
            whileHover={{ rotate: 90 }}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white"
          >
            ✕
          </motion.button>
          
        </motion.div>

      </div>
    </motion.div>
  );
}