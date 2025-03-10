"use client"

import types from '@/components/fontLetters';
import data from '@/json/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Summary() {
  return (
    <div className="flex justify-center align-center max-lg:px-5">
        <div className="container flex items-center flex-col space">
            <div className="title">
                <h2 className={`${types.h2} ${types.flex} text-center flex flex-col`}>
                    <span  className='text-center'>¿Quieres saber <span className="text-[#347faa] text-center">porque somos</span></span>
                    <span className='font-semibold text-center'>La mejor opción para tu negocio?</span>
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-5 my-14 py-14 max-lg:grid-cols-1 max-lg:my-0">
                {data.home[0].summary.map((dataSummary, keySummary)=>(
                    <motion.div
                    key={keySummary}
                    className="max-lg:gap-2 p-5 h-full rounded-2xl flex flex-col max-lg:items-center max-lg:justify-center gap-14 w-[22rem] max-xl:w-full backdrop-blur-sm transition-none"
                    style={{background : `#${dataSummary.background}`}}
                    initial={{  y: 80, opacity: 0 }}
                    whileInView={{  y: 0, opacity: 1 }}
                    transition={{
                        duration: .4,
                        ease: "easeOut",
                        delay: dataSummary.transition
                    }}
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
                    <span className='max-lg:text-lg font-semibold text-3xl my-3'>{dataSummary.title}</span>
                    <p className={types.p}>{dataSummary.description}</p>
                </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}