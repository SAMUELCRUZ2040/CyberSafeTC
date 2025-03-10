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
                className={`${types.h3} transition-none text-center`}
                {...types.animation}
            >
                What would you like to create?
            </motion.h2>
            {data.about[0].outWork.map((data, _index)=>(
                <div 
                    className="grid grid-cols-2 my-12 max-lg:grid-cols-1 max-lg:gap-12 max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col max-lg:px-0 px-[13rem] py-5"
                    key={_index}
                >
                    <motion.div
                        {...types.animation}
                        className="bg-cover bg-no-repeat bg-center w-11/12 h-[23rem] rounded-xl overflow-hidden shadow-lg transition-none"
                        style={{order : data.direction ? 1 : 2, backgroundImage : `url(/image/about/${data.picture}.jpg)`}}

                    />
                    <div
                        className="flex flex-col gap-5 items-start justify-center max-lg:items-center origin__order"
                        style={{order : data.direction ? 2 : 1}}
                    >
                        <motion.h3
                            {...types.animation}
                            className={`${types.h3} transition-none`}
                        >
                            {data.title}
                        </motion.h3>
                        <motion.p
                            {...types.animation}
                            className={`${types.p} transition-none`}
                        >
                            {data.description}
                        </motion.p>
                        <motion.p
                            {...types.animation}
                            className={`${types.p} text-[#5c5c5c] transition-none`}
                        >
                            {data.miniDescription}
                        </motion.p>
                        <motion.div
                            {...types.animation}
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