"use client"

import Link from "next/link";
import data from '@/json/data';
import types from "@/components/fontLetters";
import { motion } from 'framer-motion';

export default function OurWork() {
  return (
    <section className="flex justify-center items-center space mt-40">
        <div className="container">
            <motion.h2 
                className={`${types.h2} transition-none`}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: .4,
                    ease: "easeOut",
                    delay: .1

                }}
            >
                ¿Qué te gustaría crear?
            </motion.h2>
            {data.about[0].outWork.map((data, _index)=>(
                <div 
                    className="grid grid-cols-2 my-12 max-lg:grid-cols-1 max-lg:gap-12 max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col"
                    key={_index}
                >
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: .4,
                            ease: "easeOut",
                            delay: .5
        
                        }}
                        className="bg-cover bg-no-repeat bg-center w-11/12 h-[33rem] rounded-xl overflow-hidden shadow-lg transition-none"
                        style={{order : data.direction ? 1 : 2, backgroundImage : `url(/image/about/${data.picture}.jpg)`}}

                    />
                    <div
                        className="flex flex-col gap-5 items-start justify-center max-lg:items-center origin__order"
                        style={{order : data.direction ? 2 : 1}}
                    >
                        <motion.h3
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: .4,
                                ease: "easeOut",
                                delay: .2

                            }}
                            className={`${types.h3} transition-none`}
                        >
                            {data.title}
                        </motion.h3>
                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: .4,
                                ease: "easeOut",
                                delay: .3

                            }}
                            className={`${types.p} transition-none`}
                        >
                            {data.description}
                        </motion.p>
                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: .4,
                                ease: "easeOut",
                                delay: .4

                            }}
                            className={`${types.p} text-[#5c5c5c] transition-none`}
                        >
                            {data.miniDescription}
                        </motion.p>
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: .4,
                                ease: "easeOut",
                                delay: .5

                            }}
                            className={`transition-none my-4`}
                        >
                        <Link className="px-8 py-4 hover:scale-[1.05] transition-none bg-black text-white" href={"/"}>{data.submit}</Link>
                        </motion.div>
                    </div>
                </div> 
            ))}
        </div>
    </section>
  )
}