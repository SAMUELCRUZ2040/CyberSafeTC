import React from 'react'
import data from '@/json/data';
import Image from 'next/image';

export default function Users() {
  return (
    <div className="flex justify-center align-center pb-[10rem]">
        <div className="container flex items-center flex-col">
            <div className="title">
                <h2 className='text-6xl font-normal tracking-tight max-lg:text-5xl leading-none flex flex-col text-center'>
                    <span>Nuestros <span className="text-[#347faa]">clientes</span></span>
                    <span className='font-semibold'>Hablan por si mismos</span>
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-5 my-14 max-lg:grid-cols-1 relative p-14 overflow-hidden h-[60rem]">
                {data.home[0].users.map((ColumnUser, ColIndex_)=>(
                    <div className='flex flex-col gap-8 ' key={ColIndex_}>
                        {Object.entries(ColumnUser).map((cardUser, index_)=>(
                            <div className="card p-8 border-2 shadow-lg rounded-lg animationScroll" key={index_}>
                                <div className="flex gap-8 ">
                                    <div className="overflow-hidden rounded-full flex justify-center items-center w-[3rem] h-[3rem]">
                                        <Image  
                                            src={`${cardUser[1][0].picture}`}
                                            width={500}
                                            height={500}
                                            alt={`model`}
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </div>
                                <div className="">
                                    <h2 className='text-sm text-gray-400'>{cardUser[1][0].name}</h2>
                                    <h3 className='text-sm text-gray-400'>{cardUser[1][0].profession}</h3>
                                </div>
                                </div>
                                <p className='pt-4 text-md'>{cardUser[1][0].description}</p>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="z-50 backgroud absolute left-0 bottom-0 w-full h-[25rem] gradient"
                />
                <div className="z-50 backgroud absolute left-0 top-0 w-full h-[25rem] gradient rotate-180"
                />
            </div>
        </div>
    </div>
  )
}