"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { FlipWords } from '../type'

function Letters() {
    const words = ['Empresa.', 'Negocio.','Marca.', 'Proyecto.'];

  return (
    <h1 className="text-7xl max-sm:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl flex flex-col font-bold tracking-tight  leading-none">
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