"use client"

import React from 'react'
import { motion } from 'framer-motion';
import types from '../fontLetters';
import { Focus } from '../focus';

function Letters() {



  return (
    <h1 className={`${types.h1} gap-6`}>
            <motion.di
              className="transition-none"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                  duration: .4,
                  ease: "easeOut",
                  delay: .1

              }}
            >
                Soluciones digitales
            </motion.di>
            <motion.span
              className="transition-none"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                  duration: .4,
                  ease: "easeOut",
                  delay: .2

              }}
                
            >
                Para el futuro de
            </motion.span>
            <motion.span
              className="transition-none flex gap-10"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                  duration: .4,
                  ease: "easeOut",
                  delay: .3

              }}
                
            >
                Tu <Focus />
            </motion.span>

    </h1>
    
)
}

export default Letters