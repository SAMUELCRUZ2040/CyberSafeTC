"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import data from '@/json/data'
import  types  from "@/components/fontLetters";
import RotatingText from "../rotatingTextHome";


export const LoaderWords = ({ text = "", delay }) => {
  return (
    <></>
  )
}

export const AnimationTextFlex = ({ text = "" , className}) => {
    const letters = text.split("");
  
    return (
      <div className="flex gap-1">
        {letters.map((char, i) => {
          if (char === " ") {
            return (
              <span key={i} className="inline-block w-10">
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
        className="mx-6"
    >
        {text}
    </motion.div>
    )
};
