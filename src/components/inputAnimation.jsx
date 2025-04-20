"use client"

import { motion } from 'framer-motion';
import types from './fontLetters';

export const InputAnimation = ({ 
    children, 
    className = '', 
    delay = 0 , 
    typeInput = "animationScale" 
}) => {
    return (
        <motion.div
            {...types[typeInput]}
            className = {className}
            transition={{
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
};