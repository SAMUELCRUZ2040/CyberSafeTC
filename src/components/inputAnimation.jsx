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

export const InputAnimationText = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            className={className}
            initial={{ y: 90, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                transition : {duration : 0.6},
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
};