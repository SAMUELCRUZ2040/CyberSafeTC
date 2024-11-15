"use client"

import TransitionLink from '@/components/transitionLink';
import Image from 'next/image';
import { animate, delay, motion } from 'framer-motion';
import { useState } from 'react';

export default  function Service({ ServiceData }) {
    const [gridState, setGridState] = useState(false);

    const animateGrid = ()=>{
        return setGridState(true);
    }

  return (
    <motion.div
        viewport={{ once: true }}
        whileInView={animateGrid}
        className={`relative ${ServiceData.grid} ${gridState ? "gridUpdateBe gridUpdateAf origin-top" : ""} `}

    >
        <TransitionLink
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
                    src={`/icons/services/${ServiceData.image}.gif`}
                    width={500}
                    height={500}
                    alt={`logo`}
                    style={{ width: "5rem", height: "5rem" }}

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
                className='transition-none text-xl font-semibold tracking-wide' 
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
                className='transition-none text-sm' 
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
                className='transition-none text-[#347faa] hover__arrow relative hover:text-[#349aaaae] text-start'
            >
                VER DETALLE
            </motion.span>
        </TransitionLink>
    </motion.div>
  )
}