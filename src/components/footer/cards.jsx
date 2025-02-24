"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion';

export default function CardsAction({ i }) {
  return (
    <motion.div
        className="transition-none hover:translate-y-[-3px] hover__animation max-lg:py-6 max-md:ps-[5rem] max-md:pe-[1rem] max-md:px-0 max-md:py-8 relative flex justify-center items-center border-2 rounded-3xl shadow-sm hover:shadow-xl py-11 px-[5rem] bg-[#f6f6f6]" 
        style={{borderBottomLeftRadius : "0"}}
        initial={{  y: 80, opacity: 0 }}
        whileInView={{  y: 0, opacity: 1 }}
        transition={{
            duration: .4,
            ease: "easeOut",
            delay: i.transition
        }}
    >
        <div className="hover__container flex justify-end items-center rounded-full absolute top-[5%] left-[-18%] w-[150px] h-[150px] max-lg:w-[100px] max-lg:h-[100px] max-lg:top-[14%] max-lg:left-[-9.8%]">
            <Image 
                src={`/image/footer/person_waving_${i.picture}.webp`}
                alt={`${i.alt}`}
                width={1000}
                height={1000}
                style={{width : "100%", height : "auto"}}
                className="absolute transition-none"
            />
            <Image 
                src={`/image/footer/person_waving_${i.pictureTwo}.webp`}
                alt={`${i.alt}`}
                width={1000}
                height={1000}
                style={{width : "100%", height : "auto"}}
                className="absolute opacity-0 transition-none"
            />
        </div>
        <div className="description">
            <h2 className="scroll-m-20 text-sm font-extrabold tracking-tight lg:text-xl mb-4">{i.description}</h2>
            <Link 
            href={"/"}
            className="ps-4  color text-md text-[#0097ff] underline underline-offset-8 hover:text-cyan-400 font-bold tracking-wider max-lg:text-sm"
            >
            ESCRIBENOS +
            </Link>
        </div>
    </motion.div>
  )
}