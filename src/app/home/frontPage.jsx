'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Testimonials } from './components/frontPage/testimonials'

export default function FrontPage() {
  const containerRef = useRef(null) 

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // Efecto de sección estática que es cubierta por la siguiente
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top', // Se mantiene fija hasta que la parte inferior llegue al tope
        pin: true,        // Clave: la sección se queda quieta
        pinSpacing: false // IMPORTANTE: Al ser false, permite que la siguiente sección suba y la cubra
      })
    }, containerRef)

    return () => ctx.revert() 
  }, [])

  return (
    /* Agregamos un z-index relativo para asegurar el orden de las capas */
    <div ref={containerRef} className="w-full h-screen bg-black overflow-hidden relative z-10">
      <div className='w-full h-full relative'>
        <div className="absolute inset-0 w-full h-full">
          <Testimonials />
        </div>
        {/* Un sutil degradado al final ayuda a que la transición no sea tan cortante al ser cubierta */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
      </div>
    </div>
  )
}