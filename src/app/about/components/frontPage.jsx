"use client";

import types from '@/components/fontLetters';
import { Highlighter } from './frontPage/fontsAnimation';
import { CardAnimate } from './frontPage/cardAnimate';

export default function FrontPage() {
  return (
    <section className='flex flex-col relative z-50 pt-32 md:pt-56 pb-20 bg-black overflow-visible'>
      <div className="flex flex-col gap-6 md:gap-8 justify-center items-center container mx-auto mb-12 px-4">
        
        {/* Etiqueta de sistema minimalista */}
        <div className="flex items-center gap-3 mb-2 animate-pulse">
          <span className="h-[1px] w-8 bg-gray-400/50" />
          <span className="text-[10px] tracking-[0.5em] text-gray-400 uppercase font-mono">Archive_Entry.01</span>
          <span className="h-[1px] w-8 bg-gray-400/50" />
        </div>

        <h1 className={`${types.h1} tracking-tighter font-black w-full flex gap-1 text-center justify-center items-center flex-col text-5xl md:text-7xl lg:text-8xl text-white italic pr-4`}>
          <div className="leading-tight py-2 px-4">
            Design and {" "}
            <Highlighter action="underline" color="#99a1af ">
              performance
            </Highlighter>
          </div>
          <div className='text-white/20 leading-tight py-2 px-4'>
            without compromise.
          </div>
        </h1>
        
        <div className="text-center max-w-2xl border-l border-white/10 pl-6 mt-4">
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
            Especializados en la creación de {" "}
              ecosistemas digitales
            que escalan. No solo construimos sitios, archivamos el futuro del desarrollo moderno.
          </p>
        </div>
      </div>

      <CardAnimate />

      {/* Fondo de red de datos sutil */}
      <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  )
}