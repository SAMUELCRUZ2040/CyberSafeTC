'use client'

import types from '@/components/fontLetters'
import data from '@/json/data'
import { useScreenStore } from '@/hooks/useScreenStore'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Gallery() {

  const width = useScreenStore((state) => state.width);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['50vw', '-170vw']);

  return (
    <>
      <div id="gallery" className="w-screen">
        {/* Header */}
        <div className="h-[10vh] flex justify-center items-center mt-10 text-center">
          <h2 className={`${types.h2}`}>
          Let us show you how to build your dreams together.
          </h2>
        </div>

        {/* Scroll-controlled section */}
        <div ref={scrollRef} className="h-[400vh] relative">
          <div className="sticky top-0 overflow-hidden h-screen">
            <motion.div
              style={{ x }}
              className="flex  h-full"
            >
              {data.home[0].gallery.map(( data, _index ) => (
                <div className={`w-auto flex justify-start items-center bg-slate-400 pe-6`} key={_index}>
                    <span className='max-lg:text-xl text-[8rem] leading-tight whitespace-nowrap'>{data.word}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="h-[10vh] flex justify-center items-center">
          <p className="text-center">
            Photos by{' '}
            <a
              href="https://twitter.com/mattgperry"
              target="_blank"
              className="text-purple-600 underline"
              rel="noopener noreferrer"
            >
              Matt Perry
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
