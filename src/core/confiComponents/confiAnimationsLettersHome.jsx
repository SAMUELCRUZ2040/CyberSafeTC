"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import data from '@/json/data'
import  types  from "@/components/fontLetters";


export const NeonLetters = () => {
  return (
    <div className="flex relative me-52">
      {data.home[0].itemsGallerry.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: -180, rotate: item.rotate, opacity: 0 }}
          whileInView={{ y: 0, rotate: index === 2 ? 12 : 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: item.delay }}
          className={cn(
            "rounded-xl shadow-2xl leading-tight whitespace-nowrap z-" + item.zIndex,
            item.padding,
            item.className,
            item.position
          )}
          style={item.style}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  );
};
export const AnimationTextFlex = ({ text = "" , className}) => {
    const letters = text.split("");
  
    return (
      <div className="flex gap-1">
        {letters.map((char, i) => {
          if (char === " ") {
            return (
              <span key={i} className="inline-block w-2">
                &nbsp;
              </span>
            );
          }
  
          const isEven = i % 2 === 0;
          const direction = isEven ? -122 : 122;
  
          return (
            <motion.span
              key={i}
              initial={{ y: direction, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                delay: i * 0.04,
                type: "spring",
                stiffness: 100,
              }}
              className={className}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    );
  };

  
export const AnimationTextRise = ({ text = "" , delay}) => {
    return(
    <motion.div
        initial={{ scale: 6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
            transition : .5,
            delay: delay,
        }}
    >
        {text}
    </motion.div>
    )
};
export const AnimationTextDouble = ({ text = "", delay}) => {
    return(
        <div className="flex flex-wrap gap-5">
            {text.map((item, index) => (
                <span className={types[item.classNameLetter]} key={index}>{item.text}</span>
            ))}
        </div>
    )
};