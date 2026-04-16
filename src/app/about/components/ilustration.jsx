"use client"

import data from '@/json/data';
import Grid from './ilustration/grid';
import types from "@/components/fontLetters";
import { cn } from '@/utils/cn';
import { Components } from '@/utils/componentAnimation';

export default function Ilustration() {
  return (
    <section className='relative'>
      <div className="container max-w-7xl relative">
        {/* ENCABEZADO DE SECCIÓN - Toque de Elegancia */}
        <div className="mb-16 space-y-3">
          <div className="flex items-center gap-3 opacity-60">
            <span className="h-[1px] w-8 bg-gray-400" />
            <span className="text-[10px] tracking-[0.5em] text-gray-400 uppercase font-mono italic">Verificaciones_De_Sistema</span>
          </div>
          <h2 className={`${types.h2} text-5xl md:text-6xl font-black italic tracking-tighter uppercase`}>
            Infraestructura <span className="text-white/20">Modular</span>
          </h2>
        </div>
        {data.about[0].ilustration.map((sectionData, index) => (
          <div
            key={index}
            className={cn(
              "flex gap-3 my-3 ",
              "max-lg:flex-col "
            )}
          >
            {Object.entries(sectionData).map(([_, columnData], indexCol) => {
              const {
                transition,
                background,
                className,
                title,
                directionText,
                component,
                descriptionTwo,
                titleTwo,
                image
              } = columnData[0];

              return (
                <Grid
                  key={indexCol}
                  delay={transition}
                  backgroundColor={background}
                  className="max-lg:!w-full  max-w-7xl border-[1px] !border-[#a0a0a025] rounded-3xl relative overflow-hidden  backdrop-blur-[3px] z-50"
                  style={className}
                >
                  <div
                    className={cn(
                      className === "58%" ? types.longTextLong : types.longTextSmall,
                      types[directionText],
                      "z-[0] p-6"
                    )}
                  >
                    <h4 className={`${types.h6} text-white font-bold tracking-tight uppercase italic`}>{title}</h4>
                    <p className={`${types.pSmall} text-gray-500 leading-relaxed max-w-[280px]`}>
                      Optimización de procesos mediante arquitectura modular de última generación.
                    </p>
                  </div>
                  <div className={`absolute w-full h-full top-0 left-0 flex justify-center items-center z-[-1]`}>
                    <Components search={component} />
                  </div>
                </Grid>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}