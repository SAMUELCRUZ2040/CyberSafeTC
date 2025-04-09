"use client"

import data from "@/json/data";
import Link from "next/link";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { useScreenStore } from "@/hooks/useScreenStore";

export default function MobileNabvar() {
    const width = useScreenStore((state) => state.width)

    const [state, setstate] = useState({
        toggle : false,
    })
    const toggleActive = ()=>{
        setstate(prevState =>({
            ...prevState,
            toggle: !prevState.toggle,
        }))
    }

    useEffect(() => {
        if (width > 768) {
          setstate(prev => ({
            ...prev,
            toggle: false,
          }))
        }
      }, [width])

  return (
    <>
        <div className={`toggle max-md:gap-2 max-md:flex-col z-50 max-md:flex hidden cursor-pointer justify-center items-center w-[3rem] h-[3rem]  ${state.toggle ? "animate" : "" }`} onClick={toggleActive}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={cn(
            `${state.toggle ? "scale-y-100" : "scale-y-0" }`,
            `fixed top-0 left-0 origin-top-left !z-[-1] transition_navbar`,
            `overflow-hidden h-screen w-screen p-8 bg-white`
        )}>
            <ul className="list_item flex justify-center items-center flex-col gap-5 py-14 h-full">
                {data.navigation.map((item, key)=> (
                    <motion.li
                        className="text-6xl font-extrabold" key={key}
                        onClick={toggleActive}
                        animate={state.toggle ? {y: 0, opacity: 1} : {y: 80, opacity: 0}}
                        transition={{
                            delay: item.transition
                        }}
                    >
                        <Link className="gap-4 transition-75 flex justify-center items-center" href={`${item.url}`}>{item.name}</Link>
                    </motion.li>
                ))}
            </ul>
        </div>
    </>
  )
}