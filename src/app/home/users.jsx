import React from 'react'
import data from '@/json/data';
import Image from 'next/image';
import Link from 'next/link';

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
            <div className="grid grid-cols-3 gap-5 my-14 max-lg:grid-cols-1">
                {data.home[0].users.map((dataUser, userKey)=>(
                        <div 
                            className="h-full rounded-lg flex flex-col  w-[22rem] max-xl:w-full backdrop-blur-sm border-2 shadow-md" 
                            key={userKey}
                        >
                            <div className="p-8">
                                <div className="flex gap-3 pb-10">
                                    {Array.from({ length: dataUser.punctuation }, (_, index) => (
                                        <Image
                                            src={`/icons/start.webP`}
                                            width={400}
                                            height={400}
                                            alt={`start`}
                                            style={{ width: "22px", height: "auto" }}
                                            key={index}
                                        />
                                    ))}
                                </div>
                                <p className="tex-lg">
                                    {dataUser.description}
                                </p>
                            </div>
                            <hr />
                            <div className="flex p-5 items-center gap-8 bg-[#cdcde52e]">
                                <div className="container_image w-[5.8rem] h-[5.5rem] rounded-full overflow-hidden flex justify-center items-center">
                                    <Image
                                        src={`${dataUser.image}`}
                                        width={400}
                                        height={400}
                                        alt={`start`}
                                        className='w-[150%] h-[auto]'
                                    />
                                </div>
                                <div className="information">
                                    <h4>{dataUser.name}</h4>
                                    <p>{dataUser.profession}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <Link 
                href={"/"}
                className="hover:scale-[1.04] shadow-xl py-4 px-12 border-2 rounded-xl text-xl font-bold text-center text-[#347faa]"
            >
                Ver más historias
            </Link>
        </div>
    </div>
  )
}