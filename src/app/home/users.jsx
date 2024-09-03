"use client"

import data from '@/json/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from "react";

export default function Users() {
    const columnsRef = useRef([]);

    return (
        <div className="flex justify-center align-center max-lg:px-5">
            <div className="container flex items-center flex-col">
                <div className="title">
                    <h2 className='max-lg:text-start text-6xl font-normal tracking-tight max-lg:text-3xl leading-none flex flex-col text-center'>
                        <span>Nuestros <span className="text-[#347faa]">clientes</span></span>
                        <span className='font-semibold'>Hablan por sí mismos</span>
                    </h2>
                </div>
                <div className={`grid grid-cols-3 h-[55rem] gap-14 my-14 max-lg:grid-cols-1 relative p-14 overflow-hidden max-lg:p-0`}>
                    {data.home[0].users.map((ColumnUser, ColIndex_) => (
                        <motion.div
                            className="flex flex-col gap-14"
                            key={ColIndex_}
                            ref={(el) => (columnsRef.current[ColIndex_] = el)}
                            initial={{ y: 0 }}
                            animate={{ y: [`-50%`, `0%`] }}
                            transition={{
                                duration: ColIndex_ === 1 ? 25 : 40,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className='flex gap-14 flex-col'>
                                    {Object.entries(ColumnUser).map((cardUser, index_) => (
                                        <div className="p-8 border-2 shadow-lg rounded-3xl relative overflow-hidden" key={index_}>
                                            <div className="flex gap-8">
                                                <div className="overflow-hidden rounded-full flex justify-center items-center w-[4rem] h-[4rem]">
                                                    <Image
                                                        src={`/image/home/persons/client_${cardUser[1][0].picture}.webp`}
                                                        width={500}
                                                        height={500}
                                                        alt={`model`}
                                                        style={{ width: "100%", height: "auto" }}
                                                        className='scale-[1.49]'
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="max-lg:text-sm text-lg text-gray-400">{cardUser[1][0].name}</h2>
                                                    <h3 className="text-sm text-gray-400">@{cardUser[1][0].profession}</h3>
                                                </div>
                                            </div>
                                            <p className="max-lg:text-sm pt-4 text-md">{cardUser[1][0].description}</p>
                                            <div className="icon absolute top-5 right-5 opacity-80 cursor-pointer">
                                                <Image
                                                            src={`/icons/twitter.svg`}
                                                            width={500}
                                                            height={500}
                                                            alt={`twitter`}
                                                            style={{ width: "1.4rem", height: "1.2rem" }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    ))}
                    <div className={`z-50 backgroud absolute left-0 top-0 w-full h-[15rem] gradient rotate-180`}/>
                    <div className={`z-50 backgroud absolute left-0 bottom-0 w-full h-[15rem] gradient`}/>
                </div>
            </div>
        </div>
    );
}
