"use client"
import { motion } from "framer-motion";
import data from '@/json/data';
import types from '@/components/fontLetters';
import { ShieldCheck, Zap, Activity } from "lucide-react";

const ServiceCard = ({ item, className = "" }) => {
  if (!item) return null;

  const isVideo = item.media?.endsWith('.webm') || item.media?.endsWith('.mp4');
  const paragraphs = Object.keys(item)
    .filter(key => key.startsWith('paragraph'))
    .map(key => item[key]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#050505] group transition-all duration-500 ${className}`}
    >
      {/* 1. Media Layer con efecto de escáner */}
      <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
        {isVideo ? (
          <video className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" autoPlay muted loop playsInline>
            <source src={item.media} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-1000" style={{ backgroundImage: `url(${item.media})` }} />
        )}
        {/* Láser de escaneo */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primaryColor/40 to-transparent animate-scan z-10" />
      </div>

      {/* 2. HUD Overlay (Esquinas técnicas) */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2 font-mono text-[8px] text-white/40 tracking-[0.2em]">
          <Activity size={10} className="text-primaryColor" />
          LIVE_DATA_STREAM
        </div>
        <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">
          Mdl_{item.title?.slice(0,3)}
        </div>
      </div>

      {/* 3. Content Area */}
      <div className="relative z-20 flex flex-col h-full p-8 justify-between">
        <div className="pt-2">
            <h3 className={`${types.h6} text-white font-black italic tracking-tighter uppercase group-hover:text-primaryColor transition-colors`}>
                {item.title}
            </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mt-auto">
          {paragraphs.map((p, idx) => (
            <div key={idx} className="flex flex-col border-l border-white/5 pl-3 hover:border-primaryColor/50 transition-colors">
              <h4 className={`${types.h7} text-white/90 text-[11px] font-bold uppercase tracking-wide leading-tight`}>
                {p[0]}
              </h4>
              <p className="text-[10px] text-white/40 font-light leading-snug mt-1">
                {p[1]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Glass Gradient (Mejora de profundidad) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
    </motion.div>
  );
};

export function DetailsService({ idPage }) {
  const searchOption = data.services[0].informationService;
  const inyectId = searchOption.find((iterator) => iterator.id === idPage);
  const resultInformation = inyectId?.DetailsService || [];

  if (resultInformation.length === 0) return null;

  return (
    <section className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bloque superior principal */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <ServiceCard item={resultInformation[0]} className="min-h-[350px]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ServiceCard item={resultInformation[1]} className="h-[280px]" />
              <ServiceCard item={resultInformation[2]} className="h-[280px]" />
            </div>
          </div>
          
          <ServiceCard item={resultInformation[3]} className="h-full min-h-[654px]" />

          {/* Bloque inferior invertido */}
          <ServiceCard item={resultInformation[4]} className="h-full min-h-[654px]" />
          
          <div className="md:col-span-2 flex flex-col gap-6">
            <ServiceCard item={resultInformation[5]} className="min-h-[350px]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ServiceCard item={resultInformation[6]} className="h-[280px]" />
              <ServiceCard item={resultInformation[7]} className="h-[280px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}