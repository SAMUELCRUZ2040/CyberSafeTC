"use client"
import data from '@/json/data';
import Image from 'next/image';
import { useState, useEffect } from 'react';


export function Details({ idPage }) {
    
    const [state, setState] = useState({
        detail : 1
    });
    
    const updateState = (id)=>{
        setState(prevState =>({
            ...prevState,
            detail: id,
        }))
    }

    const searchOption = data.services[0].informationService;
    const inyectId =  searchOption.find(( iterator )=> iterator.id  === idPage);
    const resultInformation = inyectId.details[0].options;

  return (
    <div className="flex justify-center items-center">
        <div className="container">
            <ul className="flex gap-5 w-full justify-center items-center p-5 m-5 my-14">
                {resultInformation.map((options, keyOptions)=>(
                    <li className='item cursor-pointer border-2 w-[11rem] h-[11rem] text-center p-2 rounded-full flex justify-center items-center hover:bg-[#0000000f]' key={keyOptions} onClick={()=>updateState(options.id)}>
                        {options.option}
                    </li>
                ))}
            </ul>
            <StructureDetails 
                id={state.detail}
                idPage={idPage}
            />
        </div>
    </div>
  )
}

export function StructureDetails({id, idPage}){

        const searchOption = data.services[0].informationService;
        const inyectId =  searchOption.find(( iterator )=> iterator.id  === idPage);
        const resultInformation = inyectId.details[0].picture;
        const inyectInformation = resultInformation.find( lookFor => lookFor.id === id);

    return(
        <>
            <div className="flex justify-between w-full my-14">
                <h2 className='text-5xl w-1/3'>{inyectInformation.title}</h2>
                <p className='text-xl w-3/6'>{inyectInformation.description}</p>
            </div>
            <div className="container_image w-full relative h-[40rem] overflow-hidden flex justify-center items-center ">
                <Image
                    src={`/image/services/${inyectInformation.image}.jpg`}
                    width={500}
                    height={500}
                    alt={`logo`}
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </>
    )
}