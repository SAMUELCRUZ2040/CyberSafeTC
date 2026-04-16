"use client"

import { motion } from 'framer-motion';

export default function Grid ({ children , delay, className, style}) {
    return(
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: .4,
                ease: "easeOut",
                delay: delay
            }}
            className={`border-[1px] border-purple-200 rounded-2xl  shadow-md transition-none py-8 backdrop-blur-[4px] h-[25rem] ${className} overflow-hidden relative  max-lg:w-full`}
            style={{width : `${style}`}}
        >            
            {children}
        </motion.div>
    )
}