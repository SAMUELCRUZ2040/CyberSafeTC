"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import types from '../fontLetters';
import TransitionLink from '../transitionLink';

export function OptionStrategies({ strategieData }) {
  return (
    <motion.div 
        className="flex gap-5 items-center max-lg:p-0 transition-none"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            duration: .4,
            ease: "easeOut",
            delay: strategieData.transition

        }}
    >
        <Image
            src={`/icons/check.webp`}
            width={400}
            height={400}
            alt={`check`}
            style={{ width: "15px", height: "15px" }}
        />
        <p className={types.p}>{strategieData.description}</p>
    </motion.div>
  )
}

export function SubStrategies({subStrategiesData}) {
  return (
    <motion.div
        className="p-4 flex flex-col gap-5 transition-none" 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            duration: .4,
            ease: "easeOut",
            delay: subStrategiesData.transition

        }}
    >
        <h4 className={types.h4}>
            {subStrategiesData.title}
        </h4>
        <p className={types.p}>
            {subStrategiesData.description}
        </p>
        <div className="flex justify-between">
            <div className="flex gap-3">
                {Array.from({ length: subStrategiesData.punctuation }, (_, index) => (
                    <Image
                        src={`/icons/start.webP`}
                        width={400}
                        height={400}
                        alt={`start`}
                        key={index}
                        className='max-lg:w-[15px] h-auto w-[22px]'
                    />
                ))}
            </div>
            <TransitionLink
                href={"/Contact"}
            >
                <Image
                        src={`/icons/arrow.svg`}
                        width={400}
                        height={400}
                        alt={`start`}
                        className='max-lg:w-[8px] h-auto w-[10px]'
                />
            </TransitionLink>
        </div>
    </motion.div>
  )
}