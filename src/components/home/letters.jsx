"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { FlipWords } from '../type'
import types from '../fontLetters';

function Letters() {
    const words = ['Empresa.', 'Negocio.','Marca.', 'Proyecto.'];



  return (
    <h1 className={types.h1}>
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
              className="transition-none"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                  duration: .4,
                  ease: "easeOut",
                  delay: .3

              }}
                
            >
                Tu <FlipWords words={words} />
            </motion.span>

    </h1>
    
)
}

export default Letters