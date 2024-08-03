"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Transition({ children }) {
    const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500); // Tiempo antes de ocultar el div

    return () => clearTimeout(timer);
  }, []); // El arreglo vacío asegura que useEffect se ejecute solo una vez al montar

  return (
    <AnimatePresence mode="wait">
      {isVisible&&(
          <motion.div 
          initial={{scaleY: 0}}
          animate={{scaleY: 1}}
          exit={{scaleY: 1}}
          transition={{duration : 0.6, ease : [0.22, 1, 0.36, 1]}}
          className={`fixed top-0 left-0 w-full h-full bg-black origin-bottom z-[99999] `}
          key={"enter"}
      />
      )}
      {!isVisible&&(
          <motion.div 
          initial={{scaleY: 1}}
          animate={{scaleY: 0}}
          exit={{scaleY: 1}}
          transition={{duration : 0.6, ease : [0.22, 1, 0.36, 1], delay: 0.6}}
          className={`fixed top-0 left-0 w-full h-full bg-black origin-top z-[99999]`}
          key={"exit"}
        />
      )}
        {children}
    </AnimatePresence>
  );
}

