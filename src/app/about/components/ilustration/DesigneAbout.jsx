"use client"

import React, { forwardRef, useRef } from "react"
import { cn } from "@/utils/cn"
import { ConfiDesigneAbout } from "@/app/about/components/ilustration/confiDesigneAbout"
import { 
  GitBranch, 
  Cloud, 
  Zap, 
  Box, 
  Atom, 
  Server, 
  User 
} from "lucide-react"

// Círculo mejorado con estilo Cyber
const Circle = forwardRef(({ className, children, status }, ref) => {
  return (
    <div className="relative group">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-10 md:size-14 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md p-2 md:p-3 shadow-2xl transition-all duration-500 hover:scale-110 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
          className,
        )}
      >
        {children}
      </div>
      {/* Pequeña etiqueta de estado opcional */}
      {status && (
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/20 uppercase tracking-widest whitespace-nowrap">
          {status}
        </span>
      )}
    </div>
  )
})

Circle.displayName = "Circle"

export default function DesigneAbout({ className }) {
  const containerRef = useRef(null)
  const div1Ref = useRef(null)
  const div2Ref = useRef(null)
  const div3Ref = useRef(null)
  const div4Ref = useRef(null)
  const div5Ref = useRef(null)
  const div6Ref = useRef(null) 
  const div7Ref = useRef(null) 

  // Estilo para los iconos
  const iconProps = {
    size: 20,
    className: "text-white/70 group-hover:text-white transition-colors duration-300"
  }

  const largeIconProps = {
    size: 28,
    className: "text-white group-hover:text-cyan-400 transition-colors duration-300"
  }

  return (
    <div
      className={cn(
        "relative flex h-[350px] md:h-[450px] w-full items-center justify-center overflow-hidden bg-[#000] rounded-xl border border-white/5", 
        className
      )}
      ref={containerRef}
    >
      {/* Fondo decorativo (Grid de fondo muy sutil) */}
      <div className="absolute opacity-40 inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 flex size-full max-w-sm md:max-w-xl flex-row items-stretch justify-between gap-6 md:gap-12 px-6">
        
        {/* Columna Izquierda: Input Stack */}
        <div className="flex flex-col justify-center gap-4">
          <Circle ref={div1Ref}><Cloud {...iconProps} /></Circle>
          <Circle ref={div2Ref}><Zap {...iconProps} /></Circle>
          <Circle ref={div3Ref}><Box {...iconProps} /></Circle>
          <Circle ref={div4Ref}><Atom {...iconProps} /></Circle>
          <Circle ref={div5Ref}><GitBranch {...iconProps} /></Circle>
        </div>

        {/* Columna Central: Core Server */}
        <div className="flex flex-col justify-center">
          <div className="relative">
             {/* Efecto de pulso detrás del servidor */}
             <div className="absolute inset-0 animate-ping rounded-full bg-white/5" />
             <Circle 
                ref={div6Ref} 
                status="Processing"
                className="size-14 md:size-20 border-white/20 bg-white/5 ring-4 ring-white/5"
              >
                <Server {...largeIconProps} className="text-white animate-pulse" />
              </Circle>
          </div>
        </div>

        {/* Columna Derecha: Client/User */}
        <div className="flex flex-col justify-center">
          <Circle 
            ref={div7Ref} 
            status="End_User"
            className="size-14 md:size-20 border-white/20 bg-white/5"
          >
            <User {...largeIconProps} />
          </Circle>
        </div>
      </div>

      {/* IMPORTANTE: En ConfiDesigneAbout asegúrate de que el color 
          de la línea sea blanco o cian con baja opacidad 
          para que se vea bien sobre el fondo negro.
      */}
      <ConfiDesigneAbout containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} color="rgba(255,255,255,0.1)" />
      <ConfiDesigneAbout containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} color="rgba(255,255,255,0.1)" />
      <ConfiDesigneAbout containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} color="rgba(255,255,255,0.1)" />
      <ConfiDesigneAbout containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} color="rgba(255,255,255,0.1)" />
      <ConfiDesigneAbout containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} color="rgba(255,255,255,0.1)" />
      <ConfiDesigneAbout containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} color="rgba(255,255,255,0.2)" />

      {/* Adorno técnico en la esquina */}
      <div className="absolute bottom-8 right-4 font-mono text-[10px] text-white/10 uppercase tracking-[0.3em]">
        Infra_Module v2.0
      </div>
    </div>
  )
}