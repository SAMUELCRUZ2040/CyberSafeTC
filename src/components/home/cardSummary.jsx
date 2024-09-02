"use client"

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Cardsummary({ dataSummary }) {
  return (
    <motion.div 
        className="max-lg:gap-2 p-5 h-full rounded-2xl flex flex-col gap-14 w-[22rem] max-xl:w-full backdrop-blur-sm transition-none"
        style={{background : `#${dataSummary.background}`}}
        initial={{  y: 80, opacity: 0 }}
        whileInView={{  y: 0, opacity: 1 }}
        transition={{
            duration: .4,
            ease: "easeOut",
            delay: dataSummary.transition
        }}
        viewport={{ once: true }}
    >
        <div className="max-lg:gap-1 flex items-center gap-4 justify-start">
            <span className='w-16 overflow-hidden'>
                <Image
                    src={`/icons/summary/${dataSummary.icon}.webP`}
                    width={400}
                    height={400}
                    alt={`${dataSummary.alt}`}
                    unoptimized
                    className='max-lg:w-[60%] h-auto w-full'
                />
            </span>
            <h4 className='max-lg:text-sm max-lg:my-0 text-lg my-3'>{dataSummary.subtitle}</h4>
        </div>
        <span
            className='max-lg:text-lg font-semibold text-3xl my-3'>{dataSummary.title}</span>
        <p className='text-md max-lg:text-sm'>{dataSummary.description}</p>
    </motion.div>
  )
}