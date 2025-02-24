"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Carousel = ({ children, percent, duration, value, direction, ubication}) => {
  const animations = useRef([]);

  useEffect(() => {
    const animate = (index, initialDelay = 2.01) => {
      gsap.to(animations.current[index], {
        [percent]: `${value}`,
        ease: "linear",
        duration: [duration],
        delay: initialDelay,
        onComplete: () => {
          gsap.set(animations.current[index], {
            [percent]: `0`,
            ease: "linear",
            duration: 0,
          });
          animate(index); // Repeat the animation without delay
        }
      });
    };

    const ctx = gsap.context(() => {
      animations.current.forEach((_, index) => animate(index, index * 5.01));
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
        className={`transition-none flex h-full w-full  relative ${ubication}`}
    >
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          ref={(el) => animations.current[i] = el}
          className={`transition-none absolute  flex ${direction}`}
        >
            {children}
        </div>
      ))}
    </div>
  );
};