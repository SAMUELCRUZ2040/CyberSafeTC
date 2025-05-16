"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ConfiTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const [randomRotations, setRandomRotations] = useState([]);

  useEffect(() => {
    setRandomRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotations[index] || 0, // Usa el valor del estado
                  }}
                  animate={{
                    opacity: index === active ? 1 : 0.7,
                    scale: index === active ? 1 : 0.95,
                    z: index === active ? 0 : -100,
                    rotate: index === active ? 0 : randomRotations[index] || 0, 
                    zIndex: index === active ? 999 : testimonials.length + 2 - index,
                    y: index === active ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotations[index] || 0, 
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom transition-none">
                  <video
                    src={testimonial.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}>
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                  className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0 max-md:justify-center max-md:items-center">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button">
              <span className="bg-center bg-no-repeat bg-cover w-[1rem] h-[1rem]" style={{backgroundImage : "url(/icons/arrow-left-solid.svg)"}}/>
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button">
              <span className="bg-center bg-no-repeat bg-cover w-[1rem] h-[1rem]" style={{backgroundImage : "url(/icons/arrow-right-solid.svg)"}}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
