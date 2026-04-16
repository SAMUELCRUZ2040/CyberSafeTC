"use client"

import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Carousel = ({ children, duration = 20, reverse = false }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Reset inicial para evitar saltos al cargar
    gsap.set(scroller, { xPercent: reverse ? -50 : 0 });

    const animation = gsap.to(scroller, {
      xPercent: reverse ? 0 : -50,
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    return () => animation.kill();
  }, [duration, reverse]);

  return (
    <div className="overflow-hidden w-full relative">
      <div 
        ref={scrollerRef} 
        className="flex whitespace-nowrap w-fit"
      >
        {/* Duplicamos el contenido para el loop infinito */}
        <div className="flex gap-12 px-6">{children}</div>
        <div className="flex gap-12 px-6">{children}</div>
      </div>
    </div>
  );
};