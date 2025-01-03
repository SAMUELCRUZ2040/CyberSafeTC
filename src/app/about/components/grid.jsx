"use client"

import { motion } from 'framer-motion';

export default function Grid ({ children , delay, className, backgroundColor, style}) {
    return(
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: .4,
                ease: "easeOut",
                delay: delay
            }}
            className={`border-2 border-gray-300 rounded-2xl p-8 pb-0 shadow-lg transition-none py-8 backdrop-blur-[4px] ${className} size`}
            style={{background : `${backgroundColor}`, width : `${style}`}}
        >
            {children}
        </motion.div>
    )
}