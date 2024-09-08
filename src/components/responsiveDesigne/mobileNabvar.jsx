"use client"

import data from "@/json/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { useState } from "react";

export default function MobileNabvar() {
    const [state, setstate] = useState({
        toggle : false,
    })

    const toggleActive = ()=>{
        setstate(prevState =>({
            ...prevState,
            toggle: !prevState.toggle,
        }))
    }

  return (
    <>
        <div className="tooltip z-50 max-md:flex hidden cursor-pointer justify-center items-center w-[3rem] h-[3rem]" 
            onClick={toggleActive}
        >
            <Image
                src={"/icons/enter.webp"}
                width={500}
                height={500}
                alt={`logo`}
                style={{ width: "1.3rem", height: "auto" }}
                className={`${state.toggle ?  "hidden" : "flex"  }`}

            />
            <Image
                src={"/icons/exit.webp"}
                width={500}
                height={500}
                alt={`logo`}
                style={{ width: "1.3rem", height: "auto" }}
                className={`${state.toggle ?  "flex" : "hidden"  }`}
            />
        </div>
        <div className={`${state.toggle ? "scale-y-1" : "scale-y-0" } origin-top flex flex-col bg-white p-8 overflow-hidden h-screen w-screen fixed  top-0 left-0`}>
            <div className="w-full">
                <Link 
                    onClick={toggleActive}
                    href={"/"}
                >   
                    <Image
                        src={`/icons/logo.png`}
                        width={400}
                        height={400}
                        alt={`logo`}
                        style={{ width: "10rem", height: "auto" }}
                    />
                </Link>
            </div>
            <ul className="list_item transition-none flex justify-center flex-col items-start gap-5 py-14 ">
                {data.navigation.map((item, key)=> (
                    <motion.li
                        className="text-3xl font-bold transition-none " key={key}
                        onClick={toggleActive}
                        animate={state.toggle ? {y: 0, opacity: 1} : {y: 80, opacity: 0}}
                        transition={{
                            delay: item.transition
                        }}
                    >
                        <Link className="gap-4 transition-75 flex justify-center items-center" href={`${item.url}`}><span className="text-xl">-</span> {item.name}</Link>
                    </motion.li>
                ))}
            </ul>
                <motion.div 
                    className={`transition-none bottom-32 left-[-5rem] absolute opacity-0`}
                    animate={{rotate: -90, opacity: state.toggle ? 1 : 0}}
                    transition={{
                        delay: .10
                    }}
                >
                    @2024_cybersafe_relylove ♡
                </motion.div>
        </div>
    </>
  )
}