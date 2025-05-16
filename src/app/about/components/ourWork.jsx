"use client"

import Link from "next/link";
import data from '@/json/data';
import types from "@/components/fontLetters";
import { motion } from 'framer-motion';
import Image from "next/image";

export default function OurWork() {
  return (
    <section className="flex justify-center items-center space mt-40">
        <div className="container">
            <h2 
                className={`${types.h2}  mb-24`}
            >
                What would you like to create?
            </h2>
            {data.about[0].outWork.map((data, _index)=>(
                <div className="flex gap-16 mb-16">
                    {Object.entries(data).map((dataOutWok, _indexOutWork)=>(
                        <div className="w-full border-2 rounded-3xl p-8 flex flex-col justify-center items-justify gap-10 bg-[#a9a6a614]">
                            <span className={`${types.smallP}`}>{dataOutWok[1][0].SubTitle}</span>
                            <h3 className={`${types.h3}`}>{dataOutWok[1][0].title}</h3>
                            <p className={`${types.p}`}>{dataOutWok[1][0].description}</p>
                            <Image
                                src={`/image/about/${dataOutWok[1][0].picture}.webp`}
                                alt="conference_people"
                                width={500}
                                height={500}
                                className="w-full rounded-2xl"
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </section>
  )
}