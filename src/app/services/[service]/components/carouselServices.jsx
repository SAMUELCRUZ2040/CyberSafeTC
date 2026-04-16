"use client";
import React, { useEffect, useRef, useState, createContext } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const CarouselServices = ({ items }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full group">
      {/* Contenedor de Scroll */}
      <div
        className="flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row gap-6 pb-4">
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Controles: Ahora flotan sobre el carrusel o se alinean debajo */}
      <div className="flex justify-end gap-3 mt-8">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-10 transition-all"
        >
          <ArrowLeft size={20} color="white" strokeWidth={1.5} />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-10 transition-all"
        >
          <ArrowRight size={20} color="white" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export const Card = ({ card }) => {
  const router = useRouter();
  return (
    <motion.button
      onClick={() => router.push(card.linkService)}
      className="relative flex h-[30rem] w-[20rem] md:w-[22rem] flex-col items-start justify-end overflow-hidden  order-[1px] border-[#a0a0a025] rounded-3xl opacity-70 cursor-pointer"
    >
      <div className="absolute inset-0 z-10 " />
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${card.src})` }} 
      />
      <div className="relative z-20 p-8">
        <p className="text-white text-xl font-semibold">{card.title}</p>
      </div>
      <span className="absolute left-0 bottom-0 w-full h-full backdrop-blur-[2px] pointer-events-none z-[1]" 
      style={{ WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 100%)", maskImage: "linear-gradient(to top, black 20%, transparent 100%)" }} />
    </motion.button>
  );
};