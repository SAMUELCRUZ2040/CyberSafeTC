'use client'

import types from '@/components/fontLetters'
import data from '@/json/data'
import { useScreenStore } from '@/hooks/useScreenStore'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimationLettersHome } from '@/core/AnimationLettersHome'
import Average from './average'

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
        <div ref={scrollRef} className="h-[400vh] relative">
          <div className="sticky top-0 overflow-hidden h-screen">
            <motion.div
              ref={contentRef}
              style={{ x }}
              className="flex h-full"
            >
              <div className="min-w-[100vw] me-60">
                <Average />
              </div>
              {data.home[0].gallery.map((data, index) => (
                
                <div
                  key={index}
                  className="w-auto flex justify-start items-center pe-6"
                >
                  <div className={`${types.h1} !text-8xl`}>
                    {data.state &&(
                      <motion.div {...types[data.animationObject]} className="w-[7rem] h-[7rem] bg-cover bg-no-repeat bg-center absolute" style={{backgroundImage : "url(/icons/hand.png)"}}/>
                    )}
                      <AnimationLettersHome letters={data.word} type={data.component} delay={data.delay}/>
                   {data.state &&(
                    <p></p>
                   )}
                  </div>
                </div>
              ))}
              <div className="min-w-[50vw]"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
