"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Transition({ children }) {
  const animation = (variants) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    transition: {
      duration: 0.5,
    },
  });

  const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const slide = {
    initial: { top: "100vh" },
    enter: { top: 0 },
    exit: { top: "100vh" },
  };

  return (
    <AnimatePresence mode="wait">
      <div className="inner">
        <motion.div {...animation(slide)} className="slide" key="slide" />
        <motion.div {...animation(opacity)} className="page" key="page">
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

