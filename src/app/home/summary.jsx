"use client"

import types from '@/components/fontLetters';
import data from '@/json/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Summary() {
return (
    <div className="flex justify-center align-center max-lg:px-5">
        <div className="container flex items-center flex-col">
            <div className="title flex flex-col justify-center items-center">
                <h2 className={`${types.h2} ${types.flex} text-center flex flex-col`}>
                    <span>Do you know Why we're</span>
                    <span>The better option for your business?</span>
                </h2>
                <p className={`${types.smallP} text-center mt-5`}>
                    You can build your dreams in seconds with us in the fastest and easiest way. You just have to call us and we will be there for you.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-3 my-14 py-14 max-lg:grid-cols-1 max-lg:my-0">
                {data.home[0].summary.map((dataSummary, keySummary) => (
                    <motion.div
                        key={keySummary}
                        className="max-lg:gap-2 p-10 h-full rounded-2xl flex flex-col max-lg:items-center max-lg:justify-center gap-8 w-[25rem] max-xl:w-full backdrop-blur-[1.5px] border-2 bg-[#46464604]"
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
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
                            <h4 className={`${types.extraP} my-3`}>{dataSummary.subtitle}</h4>
                        </div>
                        <span className={`${types.h4} my-3`}>{dataSummary.title}</span>
                        <p className={types.smallP}>{dataSummary.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
)
}