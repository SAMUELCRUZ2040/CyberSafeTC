"use client"
import data from '@/json/data';
import Image from 'next/image';
import { useState, useEffect } from 'react';


export function Details() {
    const searchOption = data.services[0].informationService[0].details[0].options;
    const [state, setState] = useState({
        detail : 1
    });

    const updateState = (id)=>{
        setState(prevState =>({
            ...prevState,
            detail: id,
        }))
    }
    
  return (
    <div className="flex justify-center items-center">
        <div className="container">
            <ul className="flex gap-5 w-full justify-center items-center p-5 m-5 my-14">
                {searchOption.map((options, keyOptions)=>(
                    <li className='item cursor-pointer border-2 w-[11rem] h-[11rem] text-center p-2 rounded-full flex justify-center items-center hover:bg-[#0000000f]' key={keyOptions} onClick={()=>updateState(options.id)}>
                        {options.option}
                    </li>
                ))}
            </ul>
            <StructureDetails 
                id={state.detail}
            />
        </div>
    </div>
  )
}

export function StructureDetails({id}){
        const searchService = data.services[0].informationService[0].details[1].picture,
              inyectInformation = searchService.find( lookFor => lookFor.id === id);

    return(
        <>
            <div className="flex justify-between w-full my-14">
                <h2 className='text-4xl w-1/4'>{inyectInformation.title}</h2>
                <p className='text-xl w-3/6'>{inyectInformation.description}</p>
            </div>
            <div className="container_image w-full relative h-[50rem] overflow-hidden">
                <Image
                    src={inyectInformation.image}
                    width={500}
                    height={500}
                    alt={`logo`}
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </>
    )
}