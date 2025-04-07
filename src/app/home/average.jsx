"use client";

import data from '@/json/data';
import { motion } from 'framer-motion';
import types from '@/components/fontLetters';
import Counter from '../../components/counter';

export default function Average() {

  return (
    <div className="flex justify-center items-center bg-[#828c8c07] max-lg:px-5 max-lg:py-10 h-full w-full py-[20rem]">
      <div className="container">
        <h2 className={`${types.h2}  ${types.flex} mx-auto text-center flex flex-col`}>
          <span className='text-center'>We Focus on <span className="font-bold text-[#347faa] text-center">Efficiency and Quality</span></span>
          <span><span className="font-bold text-[#347faa] text-center">In Every</span> Project</span>
        </h2>
        <div className="gap-[7rem] flex items-center justify-center py-[6rem] max-lg:flex-col">
          {data.home[0].average.map((dataAverage, index) => (
            <motion.div
              className='text-center  transition-none'
              key={index}
            >
                <h2 
                    className='text-[#347faa] text-center text-6xl tracking-tight font-light max-lg:text-4xl mb-4 flex gap-5 justify-center items-center'
                >
                + <Counter 
                  delay={dataAverage.transition}
                  number={dataAverage.number}
                />
                </h2>
                <p
                    className={types.p}
                >
                    {dataAverage.description}
                </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}