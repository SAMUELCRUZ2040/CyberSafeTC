"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { FlipWords } from '../type'

function Letters() {
    const words = ['Empresa.', 'Negocio.','Marca.', 'Proyecto.'];

  return (
    <h1 className="text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl flex flex-col font-bold tracking-tight  leading-none">
            <motion.div
                className='origin-top ease-linear '
                style={{transitionDuration: ".2s"}}
                initial={{ scaleY: 0, opacity: 0}}
                whileInView={{ scaleY: 1, opacity: 1}}
                viewport={{ once: true }}
            >
                Soluciones digitales
            </motion.div>
            <motion.span 
                className='delay-100 origin-top ease-linear'
                style={{transitionDuration: ".4s"}}
                initial={{ scaleY: 0, opacity: 0}}
                whileInView={{ scaleY: 1, opacity: 1}}
                viewport={{ once: true }}
                
            >
                Para el futuro de
            </motion.span>
            <motion.span 
                className='delay-100 origin-top ease-linear'
                style={{transitionDuration: ".6s"}}
                initial={{ scaleY: 0, opacity: 0}}
                whileInView={{ scaleY: 1, opacity: 1}}
                viewport={{ once: true }}
                
            >
                Tu <FlipWords words={words} />
            </motion.span>

    </h1>
)
}

export default Letters