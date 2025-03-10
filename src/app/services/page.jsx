"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import data from '@/json/data';
import Image from 'next/image';

export default function Services() {
    const [gridState, setGridState] = useState(false);

    const animateGrid = ()=>{
        return setGridState(true);
    }
  return (
    <section className="flex justify-center items-center mb-[7rem]"
    >
        <div className="container px-[5rem]">
            <div className="title py-[10rem] max-lg:pb-[4rem]">
                <h1 className='text-4xl lg:text-4xl xl:text-5xl 2xl:text-8xl flex flex-col  font-extrabold tracking-tight  leading-none'>
                    <span className='font-normal'>Somos especialistas</span>    
                    <span>En lo que hacemos</span>    
                </h1>
            </div>
            <div className="services grid grid-cols-3 gap-[8rem] my-14 flex-wrap max-lg:grid-cols-2 max-sm:grid-cols-1">
                {data.services[0].servicesLogo.map((ServiceData, keyService)=>(
                    <motion.div
                    key={keyService}
        viewport={{ once: true }}
        whileInView={animateGrid}
        className={`relative ${ServiceData.grid} ${gridState ? "gridUpdateBe gridUpdateAf origin-top" : ""} `}

    >
        <Link
            href={ServiceData.url}
            className={"w-full h-full justify-center items-start flex-col gap-5 flex text-start container__arrow__hover"}
        >
            <motion.span
                className='transition-none'
                viewport={{ once: true }}
                initial={{  y: 50, opacity: 0 }}
                whileInView={{  y: 0, opacity: 1 }}
                transition={{
                    duration: .4,
                    ease: "easeOut",
                    delay: ServiceData.transition
                }}
            >
                <Image
                    src={`/icons/services/${ServiceData.image}.webp`}
                    width={500}
                    height={500}
                    alt={`logo`}
                    className="w-[7rem] h-[7rem] max-xl:h-[6rem] max-xl:w-[6rem] max-lg:h-[5rem] max-lg:w-[5rem] max-sm:h-[4rem] max-sm:w-[4rem]"
                    unoptimized

                />
            </motion.span>
            <motion.h2 
                viewport={{ once: true }}
                initial={{  y: 50, opacity: 0 }}
                whileInView={{  y: 0, opacity: 1 }}
                transition={{
                    duration: .4,
                    ease: "easeOut",
                    delay: ServiceData.transition
                }}
                className='transition-none font-semibold tracking-wide text-[1.5rem] max-lg:text-3xl' 
            >
                {ServiceData.title}
            </motion.h2>
            <motion.p 
                viewport={{ once: true }}
                initial={{  y: 50, opacity: 0 }}
                whileInView={{  y: 0, opacity: 1 }}
                transition={{
                    duration: .4,
                    ease: "easeOut",
                    delay: ServiceData.transition
                }}
                className='transition-none text-lg ' 
            >
                {ServiceData.description}
            </motion.p>
            <motion.span
                viewport={{ once: true }}
                initial={{  y: 50, opacity: 0 }}
                whileInView={{  y: 0, opacity: 1 }}
                transition={{
                    duration: .4,
                    ease: "easeOut",
                    delay: ServiceData.transition
                }}
                className='transition-none text-[#347faa] hover__arrow relative '
            >
                VER DETALLE
            </motion.span>
        </Link>
    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}