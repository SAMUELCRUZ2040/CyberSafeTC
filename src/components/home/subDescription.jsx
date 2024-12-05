"use client"

import React from 'react'
import {  motion } from 'framer-motion';
import Link from 'next/link';
import types from '../fontLetters';

export default function SubDescription() {
  return (
    <>
        <motion.p 
              className={types.p}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                  duration: .4,
                  ease: "easeOut",
                  delay: .4

              }}
        >
            Personalizamos soluciones tecnológicas para tu empresa, impulsando su rendimiento y eficiencia en comunicación, automatización y seguridad.</motion.p>
        <div 
            className="max-lg:flex-col flex gap-5 w-full transition-none pe-14 max-lg:pe-0"
        >
            <motion.div 
                className=" w-full transition-none flex text-center rounded-3xl py-5 bg-black text-white"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: .4,
                    ease: "easeOut",
                    delay: .5

                }}
            >
                <Link
                    className='w-full h-full hover:scale-[1.1]'
                    href={"/"}
                >
                    Conoce acerca de tu futuro
                </Link>
            </motion.div>
            <motion.div 
                className=" w-full transition-none flex text-center rounded-3xl py-4 bg-white text-black border-2"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: .4,
                    ease: "easeOut",
                    delay: .6

                }}
            >
                <Link
                    className='w-full h-full hover:scale-[1.1]'
                    href={"/"}
                >
                    Conoce acerca de Nosotros
                </Link>
            </motion.div>
        </div>
    </>
  )
}