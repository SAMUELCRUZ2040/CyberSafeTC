"use client"

import React from 'react'
import data from '@/json/data';
import Image from 'next/image';
import TransitionLink from './transitionLink';

export default function Combobox() {
  return (
    <div>
        <ul className={`bg-[#ffffff05] transition-none ease-in-out backdrop-blur-lg absolute top-[109%] left-8 hidden py-8 p-2 border-2 rounded-3xl  flex-col gap-5 w-[25rem] h-[23rem] overflow-y-scroll`} style={{borderTopLeftRadius : "0"}}>
            {data.services[0].servicesLogo.map((data, _index)=>(
                <li className='px-8 py-1 hover:bg-[#8e8e8e5f] rounded-lg relative' key={_index}>
                    <div className="title flex items-center justify-start gap-2">
                        <Image
                            src={`/icons/check.webp`}
                            width={400}
                            height={400}
                            alt={`check`}
                            style={{ width: "14px", height: "14px" }}
                        />
                        <p className='text-md'>{data.title}</p>
                    </div>
                    <p className='text-sm'>{data.miniDescription}</p>
                    <Link  className='absolute w-full h-full top-0 left-0' href={`${data.url}`}/>
                </li>
            ))}
        </ul>
    </div>
  )
}