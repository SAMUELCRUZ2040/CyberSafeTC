"use client"

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const NeonLetters = ({ text }) => {

    const letter = Object.entries(text)
    useEffect(() => {
        console.log(letter)
    }, []);
    return (
        <div className="flex relative me-96">
            <motion.div 
                initial = { {x : 40, y: -180, rotate : -20, opacity: 0 }}
                whileInView = {{ y: 0, opacity: 1, rotate : 0} }
                transition = {{
                    ease: "easeOut",
                }}
                className={cn(
                    "rounded-3xl p-5 bg-gradient-to-r from-sky-400 to-cyan-200 leading-tight whitespace-nowrap shadow-2xl",
                )}
            >
                 Create and
            </motion.div>
            <motion.div 
                initial = { {x : 40, y: -180, rotate : -20, opacity: 0 }}
                whileInView = {{ y: 0, opacity: 1, rotate : 0} }
                transition = {{
                    ease: "easeOut",
                    delay : 0.2
                }}
                className={cn(
                    "rounded-3xl p-6 !text-6xl absolute -right-36 -top-11 rotate-2 z-10 shadow-2xl",
                )} style={{background : "linear-gradient(153.58deg,#f7bdf8 32.25%,#2f3cc0 92.68%)"}}
            >
                ease
            </motion.div>
            <motion.div 
                initial = { {x : 40, y: -180, rotate : -20, opacity: 0 }}
                whileInView = {{ y: 0, opacity: 1, rotate : 0} }
                transition = {{
                    ease: "easeOut",
                    delay : 0.4
                }}
                className={cn(
                    "rounded-3xl p-6 !text-6xl absolute -right-72 top-10 rotate-12 z-0 shadow-2xl",
                )} style={{background : "linear-gradient(153.58deg,#e8ad3e 32.25%,#98139b40 92.68%)"}}
            >
                easing
            </motion.div>
        </div>
    );
}

