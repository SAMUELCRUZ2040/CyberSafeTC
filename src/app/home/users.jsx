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
            <div className="grid grid-cols-3 gap-5 my-14 max-lg:grid-cols-1 relative p-14">
                {data.home[0].users.map((ColumnUser, ColIndex_)=>(
                    <div className='flex flex-col gap-8' key={ColIndex_}>
                        {Object.entries(ColumnUser).map((cardUser, index_)=>(
                            <div className="card p-8 border-2 shadow-lg rounded-lg" key={index_}>
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
                <span className="z-50 backgroud absolute left-0 bottom-0 w-full h-[50rem]"
                    style={{background : "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.01) 6.67%, rgba(255, 255, 255, 0.04) 13.33%, rgba(255, 255, 255, 0.08) 20%, rgba(255, 255, 255, 0.15) 26.67%, rgba(255, 255, 255, 0.23) 33.33%, rgba(255, 255, 255, 0.33) 40%, rgba(255, 255, 255, 0.44) 46.67%, rgba(255, 255, 255, 0.56) 53.33%, rgba(255, 255, 255, 0.67) 60%, rgba(255, 255, 255, 0.77) 66.67%, rgba(255, 255, 255, 0.85) 73.33%, rgba(255, 255, 255, 0.92) 80%, rgba(255, 255, 255, 0.96) 86.67%, rgba(255, 255, 255, 0.99) 93.33%, #fff 100%);"}}
                ></span>
            </div>
        </div>
    </div>
  )
}