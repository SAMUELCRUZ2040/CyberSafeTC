"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Importamos los iconos

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState("default");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const fastSpring = { damping: 25, stiffness: 250, mass: 0.1 };
  const slowSpring = { damping: 15, stiffness: 80, mass: 0.6 };

  const quickX = useSpring(mouseX, fastSpring);
  const quickY = useSpring(mouseY, fastSpring);
  const circleX = useSpring(mouseX, slowSpring);
  const circleY = useSpring(mouseY, slowSpring);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest("[data-cursor]");
      setCursorType(target ? target.getAttribute("data-cursor") : "default");
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none fixed inset-0 z-[9999]"
        >
          {/* CÍRCULO CON EFECTO DE LLENADO */}
          <motion.div
            className="fixed top-0 left-0 flex items-center justify-center mix-blend-difference"
            animate={{ 
                width: cursorType !== "default" ? 40 : 30, 
                height: cursorType !== "default" ? 40 : 30 
            }}
            style={{ x: circleX, y: circleY, translateX: "-50%", translateY: "-50%" }}
          >
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute overflow-visible">
              <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
              <motion.circle
                cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"
                initial={{ pathLength: 0, rotate: -90 }}
                animate={{ 
                  pathLength: cursorType !== "default" ? 1 : 0,
                  opacity: cursorType !== "default" ? 1 : 0
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ originX: "50%", originY: "50%" }}
              />
            </svg>
          </motion.div>

          {/* CONTENEDOR DE PUNTO O ICONO LUCIDE */}
          <motion.div
            className="fixed top-0 left-0 flex items-center justify-center mix-blend-difference"
            style={{ x: quickX, y: quickY, translateX: "-50%", translateY: "-50%" }}
          >
            <AnimatePresence mode="wait">
              {cursorType === "default" ? (
                <motion.div 
                  key="dot" 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  exit={{ scale: 0 }} 
                  className="w-1.5 h-1.5 bg-white rounded-full" 
                />
              ) : (
                <motion.div
                  key="arrow"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="text-white"
                >
                  {cursorType === "right" ? (
                    <ArrowRight size={18} strokeWidth={1.5} />
                  ) : (
                    <ArrowLeft size={18} strokeWidth={1.5} />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}