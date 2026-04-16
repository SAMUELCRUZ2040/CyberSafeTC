"use client";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import types from "@/components/fontLetters";
import { ConfiAnimatedList } from "./ConfiAnimatedList";
import { Globe, Zap, ShieldCheck, Cpu } from "lucide-react";

const notifications = [
  {
    name: "Node Deployment",
    description: "Cloud Infrastructure",
    time: "Just now",
    icon: <Cpu size={14} />,
    color: "rgba(30, 134, 255, 0.2)",
    textColor: "#1E86FF"
  },
  {
    name: "Security Protocol",
    description: "Encryption Active",
    time: "2m ago",
    icon: <ShieldCheck size={14} />,
    color: "rgba(0, 201, 167, 0.2)",
    textColor: "#00C9A7"
  },
  {
    name: "Traffic Optimized",
    description: "Global Network",
    time: "5m ago",
    icon: <Zap size={14} />,
    color: "rgba(255, 184, 0, 0.2)",
    textColor: "#FFB800"
  },
  {
    name: "Edge Update",
    description: "System Synchronized",
    time: "10m ago",
    icon: <Globe size={14} />,
    color: "rgba(255, 61, 113, 0.2)",
    textColor: "#FF3D71"
  },
];

// Replicamos la lista para el scroll infinito
const repeatedNotifications = Array.from({ length: 4 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, textColor, time }) => {
  return (
    <motion.figure
      initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-xl p-3 mb-3",
        "transition-all duration-300 ease-out hover:bg-white/[0.05]",
        "border border-white/5 bg-white/[0.01] backdrop-blur-md"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <div
          className="flex size-9 items-center justify-center rounded-lg border"
          style={{ backgroundColor: color, borderColor: `${textColor}33`, color: textColor }}
        >
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-sm font-medium">
            <span className="text-white/90 text-[11px] font-mono uppercase tracking-wider">{name}</span>
            <span className="mx-2 text-white/20">·</span>
            <span className="text-[9px] text-white/40 font-mono italic">{time}</span>
          </figcaption>
          <p className="text-[10px] text-white/50 font-light tracking-wide">
            {description}
          </p>
        </div>
      </div>
      
      {/* Indicador de actividad lateral */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <div className="flex gap-[2px]">
            {[1, 2, 3].map((i) => (
                <motion.div 
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                    className="w-[2px] h-[2px] rounded-full bg-white/20"
                />
            ))}
        </div>
      </div>
    </motion.figure>
  );
};

export function AnimatedList({ className }) {
  return (
    <div className={cn(
      "relative flex h-[450px] w-full flex-col overflow-hidden p-6 bg-[#020202] border border-white/5 rounded-3xl", 
      className
    )}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primaryColor/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Header Content */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="z-50 mb-8"
      >
        <h4 className={`${types.h6} text-white uppercase tracking-[0.3em] text-[10px] font-bold`}>
           Network_Nodes // <span className="text-primaryColor">Active</span>
        </h4>
        <div className="w-12 h-[1px] bg-primaryColor mt-2" />
      </motion.div>

      {/* La lista con scroll animado */}
      <div className="relative flex-1 overflow-hidden">
        <ConfiAnimatedList>
          {repeatedNotifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </ConfiAnimatedList>
        
        {/* Fade de salida inferior para el scroll */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020202] to-transparent z-40 pointer-events-none" />
      </div>

      {/* Footer Info */}
      <div className="z-50 flex justify-between items-end mt-4">
        <div>
           <p className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Global_Collaborations</p>
           <p className="text-[10px] text-white/60 font-light italic">Sincronizando con aliados estratégicos...</p>
        </div>
        <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primaryColor opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primaryColor"></span>
            </span>
            <span className="text-[9px] font-mono text-primaryColor">LIVE_FEED</span>
        </div>
      </div>
    </div>
  );
}