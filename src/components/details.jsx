"use client"
import data from '@/json/data';
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
    useEffect(()=>{
        console.log(state)
    },[state])
  return (
    <div className="flex justify-center items-center">
        <div className="container">
            <ul className="flex gap-5 w-full justify-center items-center p-5 m-5">
                {searchOption.map((options, keyOptions)=>(
                    <li className='item cursor-pointer' key={keyOptions} onClick={()=>updateState(options.id)}>
                        {options.option}
                    </li>
                ))}
            </ul>
            <StructureDetails 
                id={state}
            />
        </div>
    </div>
  )
}

export function StructureDetails(id){
        const searchService = data.services[0].informationService[0].details[0].picture,
        inyectInformation = searchService.find( lookFor => lookFor.id === 2)
        // console.log(inyectInformation)
    return(
        <div className="flex justify-between w-full">
            {/* <h2>{inyectInformation.title}</h2> */}
            {/* <p>{inyectInformation.description}</p> */}
        </div>
    )
}