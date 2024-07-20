"use client"
import data from '@/json/data';
import { useState } from 'react';


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
    <div className="flex justify-center items-center mb-14">
        <div className="container flex justify-center items-center flex-col">
            <ul className="flex justify-center gap-14 w-full pt-[10rem] mt-[10rem] max-md:justify-start max-md:overflow-hidden max-md:overflow-x-scroll">
                {resultInformation.map((options, keyOptions)=>(
                    <li 
                        className='item cursor-pointer border-2 border-[#347faa] w-[11rem] h-[11rem]  justify-center text-center p-2 rounded-full flex justify-center items-center hover:bg-[#0000000f] max-lg:w-[8rem] max-lg:h-[8rem] max-lg:text-sm p-8 ' 
                        key={keyOptions} 
                        onClick={()=>updateState(options.id)}
                    >
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
            <div className="flex justify-between w-full my-14 max-lg:flex-col px-[12rem]">
                <h2 className='w-2/5 text-5xl tracking-tight max-lg:text-3xl max-lg:w-full'>{inyectInformation.title}</h2>
                <p className='text-lg w-3/6 max-lg:w-full max-lg:text-sm max-lg:mt-8'>{inyectInformation.description}</p>
            </div>
            <div 
                className="container_image w-full relative h-[30rem]  bg-cover bg-no-repeat bg-center max-lg:w-full max-lg:h-[18rem] grayscale"
                style={{backgroundImage : `url(/image/services/${inyectInformation.image}.webp)`, width : "69%"}}
            />
        </>
    )
}