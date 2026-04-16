"use client"

import types from '@/components/fontLetters';
import data from '@/json/data';
import { useState, useEffect } from 'react';

export const CardAnimate = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="w-full px-4 mt-12">
      <div className="container max-w-7xl mx-auto">
        {/* Cambiamos Grid por Flex para una transición mucho más suave */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
          {data.about[0].informationCards.map((item, index) => (
            <div 
              key={item.id || index}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              style={{
                flex: isMobile 
                  ? "1 1 auto" 
                  : hoveredCard === index ? "2 1 0%" : "1 1 0%"
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] min-h-[400px]"
            >
              {/* Overlay de gradiente para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              <div className="relative z-20 flex flex-col justify-between h-full p-8">
                {/* Header de la Card */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-widest text-white/30 uppercase">
                    Phase // 0{index + 1}
                  </span>
                  <div className={`w-2 h-2 rounded-full bg-white/20 transition-all duration-500 ${hoveredCard === index ? 'scale-[2] bg-sky-400 shadow-[0_0_15px_#87CEFA]' : ''}`} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter uppercase italic leading-none">
                    {item.title}
                  </h3>
                  
                  {/* El contenido extra solo se siente "pesado" si no hay espacio, 
                      aquí lo animamos para que aparezca suave */}
                  <div className={`grid transition-all duration-500 ${hoveredCard === index || isMobile ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] pt-4 border-t border-white/10">
                        {item.description || item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video de Fondo */}
              <div className="absolute inset-0 z-0">
                <video 
                  className="w-full h-full object-cover opacity-50 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  autoPlay muted loop playsInline
                >
                  <source src={item.video} type="video/webm" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}