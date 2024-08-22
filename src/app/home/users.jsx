"use client"

import data from '@/json/data';
import Image from 'next/image';
import { useEffect, useRef } from "react"
import { gsap } from "gsap";

export default function Users() {
    const columnsRef = useRef([]);

    useEffect(() => {
        columnsRef.current.forEach((column, index) => {
          const totalHeight = column.scrollHeight;
          
          gsap.to(column, {
            y: `-${totalHeight / 2}px`,
            repeat: -1,
            ease: "linear",
            duration: index === 1 ? 4.5 : 4.9, // Columna central más lenta (30s) y las otras a 20s
          });
        });
      }, []);
    
    
    return (
        <div className="flex justify-center align-center pb-[10rem]">
            <div className="container flex items-center flex-col">
                <div className="title">
                    <h2 className='text-6xl font-normal tracking-tight max-lg:text-5xl leading-none flex flex-col text-center'>
                        <span>Nuestros <span className="text-[#347faa]">clientes</span></span>
                        <span className='font-semibold'>Hablan por si mismos</span>
                    </h2>
                </div>
                <div className={`grid grid-cols-3 h-[60rem] gap-5 my-14 max-lg:grid-cols-1 relative p-14 overflow-hidden`}>
                    {data.home[0].users.map((ColumnUser, ColIndex_) => (
                        <div
                            className="flex flex-col"
                            key={ColIndex_}
                            ref={(el) => (columnsRef.current[ColIndex_] = el)}
                        >
                            {/* Duplicamos el contenido para crear el efecto infinito */}
                                {[...Array(2)].map((_, i) => (
                                    <div key={i}>
                                        {Object.entries(ColumnUser).map((cardUser, index_) => (
                                            <div className="p-8 border-2 shadow-lg rounded-lg my-5" key={index_}>
                                                <div className="flex gap-8">
                                                    <div className="overflow-hidden rounded-full flex justify-center items-center w-[3rem] h-[3rem]">
                                                    <Image
                                                        src={`${cardUser[1][0].picture}`}
                                                        width={500}
                                                        height={500}
                                                        alt={`model`}
                                                        style={{ width: "100%", height: "auto" }}
                                                    />
                                                    </div>
                                                    <div>
                                                    <h2 className="text-sm text-gray-400">{cardUser[1][0].name}</h2>
                                                    <h3 className="text-sm text-gray-400">{cardUser[1][0].profession}</h3>
                                                    </div>
                                                </div>
                                                <p className="pt-4 text-md">{cardUser[1][0].description}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                        </div>
                    ))}
                    <div className={`z-50 backgroud absolute left-0 top-0 w-full h-[25rem] gradient rotate-180`}/>
                    <div className={`z-50 backgroud absolute left-0 bottom-0 w-full h-[25rem] gradient`}/>
                </div>
            </div>
        </div>
    )
}