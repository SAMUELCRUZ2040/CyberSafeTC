"use client"

import React from 'react'
import { delay, motion } from 'framer-motion';
import Link from 'next/link';

export default function SubDescription() {
  return (
    <>
        <motion.p 
              className="text-xl me-4 max-lg:text-sm transition-none"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                  duration: .4,
                  ease: "easeOut",
                  delay: .4

              }}
        >
            Personalizamos soluciones tecnológicas para tu empresa, impulsando su rendimiento y eficiencia en comunicación, automatización y seguridad.</motion.p>
        <motion.div 
            className="max-lg:flex-col flex gap-5 w-full transition-none"
        >
            <motion.div 
                className="transition-none"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: .4,
                    ease: "easeOut",
                    delay: .5

                }}
            >
                <Link 
                    className='transition-none hover:scale-[1.05] max-sm:px-5 max-sm:py-4 max-sm:text-sm max-lg:text-center px-10 py-5 bg-black border-2 rounded-3xl text-md border-transparent text-white ' 
                    href={"/"}
                >
                    Conoce acerca de tu futuro
                </Link>
            </motion.div>
            <motion.div 
                className="transition-none"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: .4,
                    ease: "easeOut",
                    delay: .6

                }}
            >
                <Link 
                    className='transition-none hover:scale-[1.05] max-sm:px-5 max-sm:py-4 max-sm:text-sm max-lg:text-center px-10 py-5 border-2 rounded-3xl text-md border-[#a7a2a259]  bg-white' 
                    href={"/"}
                >
                    Conoce acerca de Nosotros
                </Link>
            </motion.div>
        </motion.div>
    </>
  )
}