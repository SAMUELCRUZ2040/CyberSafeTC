"use client";

import data from '@/json/data';
import { motion } from 'framer-motion';
import types from '@/components/fontLetters';
import Counter from '../about/components/counter';

export default function Average() {

  return (
    <div className="flex justify-center items-center bg-[#92c2c217] max-lg:px-5 max-lg:py-10 h-full w-full space">
      <div className="container">
        <h2 className={`${types.h2}  ${types.flex} text-center flex flex-col`}>
          <span className='text-center'>Nos Enfocamos en la <span className="font-bold text-[#347faa] text-center">Eficiencia y la Calidad</span></span>
          <span><span className="font-bold text-[#347faa] text-center">En cada</span> Proyecto</span>
        </h2>
        <div className="gap-[7rem] flex items-center justify-center py-[6rem] max-lg:flex-col">
          {data.home[0].average.map((dataAverage, index) => (
            <motion.div
              className='text-center  transition-none'
              key={index}
            >
                <h2 
                    className='text-[#347faa] text-center text-7xl tracking-tight max-lg:text-4xl mb-4 flex gap-5 justify-center items-center'

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