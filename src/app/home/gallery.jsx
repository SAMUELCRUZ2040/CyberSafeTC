'use client'

import types from '@/components/fontLetters'
import data from '@/json/data'
import { useScreenStore } from '@/hooks/useScreenStore'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimationLettersHome } from '@/core/AnimationLettersHome'

export default function Gallery() {
  const width = useScreenStore((state) => state.width)

  const scrollRef = useRef(null)
  const contentRef = useRef(null)
  const [offset, setOffset] = useState(-1000) // valor inicial por defecto

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  // Calcular el desplazamiento dinámico basado en el ancho real del contenido
  useEffect(() => {
    if (contentRef.current) {
      const totalScroll = contentRef.current.scrollWidth - window.innerWidth
      setOffset(-totalScroll)
    }
  }, [width])

  const x = useTransform(scrollYProgress, [0, 1], ['0px', `${offset}px`])

  return (
    <>
      <div id="gallery" className="w-screen">
        {/* Header */}
        <div className="h-[10vh] flex justify-center items-center mt-10 text-center">
          <h2 className={`${types.h2}`}>
            Let us show you how to build your dreams together.
          </h2>
        </div>

        <div ref={scrollRef} className="h-[400vh] relative">
          <div className="sticky top-0 overflow-hidden h-screen">
            <motion.div
              ref={contentRef}
              style={{ x }}
              className="flex h-full"
            >
              <div className="min-w-[100vw]"></div>
              {data.home[0].gallery.map((data, index) => (
                
                <div
                  key={index}
                  className="w-auto flex justify-start items-center pe-6"
                >
                  <span className="max-lg:text-xl text-9xl  font-semibold">
                    <AnimationLettersHome letters={data.word} type={data.component} delay={data.delay}/>
                  </span>
                </div>
              ))}
              <div className="min-w-[50vw]"></div>
            </motion.div>
          </div>
        </div>

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
