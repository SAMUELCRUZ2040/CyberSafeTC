"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Carousel = ({ children, percent, duration, value, direction, ubication, delayInitial, delayGeneral}) => {
  const animations = useRef([]);

  useEffect(() => {
    const animate = (index, initialDelay = delayInitial) => {
      gsap.to(animations.current[index], {
        [percent]: `${value}`,
        ease: "linear",
        duration: [duration],
        delay: initialDelay,
        onComplete: () => {
          gsap.set(animations.current[index], {
            [percent]: `0`,
            ease: "easeOut",
            duration: 0,
          });
          animate(index); // Repeat the animation without delay
        }
      });
    };

    const ctx = gsap.context(() => {
      animations.current.forEach((_, index) => animate(index, index * delayGeneral));
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
        className={`flex h-full w-full relative ${ubication}`}
    >
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          ref={(el) => animations.current[i] = el}
          className={`absolute flex ${direction}`}
        >
            {children}
        </div>
      ))}
    </div>
  );
};