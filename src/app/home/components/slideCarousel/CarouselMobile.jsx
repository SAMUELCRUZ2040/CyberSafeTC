'use client';

import React, { useMemo, useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export const CarouselMobile = ({ slides }) => {
  const containerRef = useRef(null);

  // Limpiar ScrollTrigger al desmontar
  useEffect(() => {
    return () => {
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.getAll) {
        ScrollTrigger.getAll().forEach(st => st.kill());
      }
    };
  }, []);

  const slidesWithId = useMemo(
    () => slides.map((s, i) => ({ 
      ...s, 
      id: 'id' in s && typeof s.id === 'string' ? s.id : `slide-${i}` 
    })),
    [slides]
  );

  return (
    <div ref={containerRef} className="w-full font-[Sora,sans-serif]">
      {slidesWithId.map((slide, index) => (
        <div
          key={slide.id}
          className="min-h-screen w-full flex flex-col justify-center items-center p-8 relative"
          style={{ backgroundColor: slide.bgColor }}
        >
          <div className="absolute top-8 right-4 text-4xl font-bold border-b-4 border-black pb-2">
            0{index + 1}
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-black mb-8 text-center font-system">
            {slide.heading}
          </h2>
          
          <div className="w-full max-w-[500px] mb-8">
            <Image
              width={1600}
              height={1600}
              src={slide.image}
              alt={slide.heading}
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
          </div>
          
          <div className="w-full max-w-[500px]">
            <Image
              width={1600}
              height={1600}
              src={slide.overlayImage}
              alt={`${slide.heading} overlay`}
              className="w-full aspect-[16/9] object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};