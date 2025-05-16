"use client"

import { motion } from 'framer-motion';
import types from './fontLetters';
import { cn } from '@/utils/cn';

export const InputAnimation = ({ 
    children, 
    className = '', 
    delay = 0 , 
    typeInput = "animationScale" 
}) => {
    return (
        <motion.div
            {...types[typeInput]}
            className = {cn(
                `${typeInput === "animationTranslate" ? 
                    "" : 
                    "",
                    "relative"
                }`,
                className
            )}
            transition={{
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
};