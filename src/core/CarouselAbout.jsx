"use client";

import gsap from "gsap";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const Carousel = () => {
  
  const animations = useRef([]);

  const images = [
  "https://picsum.photos/seed/a/700/700",
  "https://picsum.photos/seed/b/700/700",
  "https://picsum.photos/seed/c/700/700",
  "https://picsum.photos/seed/d/700/700",
  "https://picsum.photos/seed/e/700/700",
  "https://picsum.photos/seed/f/700/700",
  "https://picsum.photos/seed/g/700/700",
  "https://picsum.photos/seed/h/700/700",
  ];

  useEffect(() => {
    const animate = (index, initialDelay = 1.79) => {
      gsap.to(animations.current[index], {
        left: "120%",
        ease: "linear",
        duration: 5,
        delay: initialDelay, // Initial delay only
        onComplete: () => {
          gsap.set(animations.current[index], {
            right: "120%",
            left: "auto",
            ease: "linear",
            duration: 0,
          });
          animate(index); // Repeat the animation without delay
        }
      });
    };

    const ctx = gsap.context(() => {
      animations.current.forEach((_, index) => animate(index, index * 3.40));
    });

    return () => ctx.revert();
  }, []);

  return (
  <div className="flex items-center justify-end transition-none gap-2 relative h-full">
    {[...Array(2)].map((_, i) => (
    <div 
      key={i}
      className="flex items-center gap-2 transition-none bg-black absolute right-[120%]"
      ref={(el) => animations.current[i] = el}
    >
      {images.map((data, index) => (
        <motion.div
        key={index}
        className={`w-[200px] h-[200px] bg-black flex-shrink-0 transition-none `}
        >
        <img src={data} alt={`Image ${index}`} width={200} height={200} />
        </motion.div>
      ))}
    </div>
    ))}
  </div>
  );
};
