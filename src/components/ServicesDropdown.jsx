"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import types from "@/components/fontLetters";

export default function ServicesDropdown({ services }) {
  return (
    <motion.div
      // Centrado absoluto respecto al padre
      initial={{ opacity: 0, y: 15, x: "-50%", scale: 0.95 }}
      animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
      exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="absolute top-full left-1/2 mt-4 w-[600px] bg-[#0e0e0eb6] backdrop-blur-[4px] border border-white/[0.08] rounded-3xl p-4 shadow-[0_30px_60px_rgba(0,0,0,0.9)] z-[9999]"
    >
      <div className="grid grid-cols-2 gap-2">
        {services.map((service, index) => {
          const IconComponent = LucideIcons[service.icon] || LucideIcons.Layers;

          return (
            <Link
              key={index}
              href={service.url}
              className="group flex items-center gap-4 border border-[#a0a0a025] rounded-3xl p-3 transition-all duration-200  border-transparent hover:border-white/[0.05]"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#141414] border border-white/[0.05] flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              
              <div className="flex flex-col">
                <span className={`${types.pHero} text-[14px] font-semibold text-[#F5F5F7] group-hover:text-gray-400 transition-colors`}>
                  {service.title}
                </span>
                <span className="text-gray-500 text-[11px] uppercase tracking-wider mt-0.5">
                  {service.miniDescription}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      
      {/* Puente invisible para evitar que se cierre al bajar el mouse */}
      <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
    </motion.div>
  );
}