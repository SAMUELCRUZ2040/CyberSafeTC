"use client"

import { motion } from 'framer-motion';

export const InputAnimation = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            className={className}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
                delay: delay,
                transition: {duration : 0.1}
            }}
        >
            {children}
        </motion.div>
    );
};