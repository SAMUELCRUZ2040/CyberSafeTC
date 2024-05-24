"use client"

import data from "@/json/data";
import {DescriptionServices, PictureServices } from "./descriptionServices";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCircleNodes, faComputer, faCode,  faHuse, faPaperPlane, faSpinner, faArrowsToCircle } from '@fortawesome/free-solid-svg-icons';

export default function ControllerServices() {
    const [service, setService] = useState(0);

    const icons = [
        {name: "infraestructure", icon : faPaperPlane},//
        {name: "technologyTI", icon : faSpinner},
        {name: "telephonieIp", icon : faCircleNodes},//
        {name: "pageWeb", icon : faComputer},//
        {name: "software", icon : faCode},//
        {name: "seo", icon : faArrowsToCircle}
      ];


    // useEffect(()=>{
    //     console.log(service)
    // },[service]);

  return (
        <section>
            <div className="container grid grid-cols-3 bg-[blue]">
                <div className="w-[30%] controllerService flex flex-col justify-between items-center p-9 bg-black">
                    {data.home[0].summaryServices[0].controllerServices.map((data, key)=>{
                        //obtener el id del servicio
                        const iconData = icons.find(icon => icon.name === data.icon);
                        const icon = iconData ? iconData.icon : null;
                        return(
                            <div 
                                className="text-[#2ca2fd] p-4 cursor-pointer border-2 text-center flex items-center justify-center rounded-lg"
                                key={key} 
                                onClick={()=>setService(data.id)}
                            >
                                {icon && <FontAwesomeIcon icon={icon} />}
                            </div>
                        );
                    })}
                </div>
                <div className="descriptionService -[%] p-8 ">
                    <DescriptionServices 
                        idService={service}
                    />
                </div>
                <div className="pictureService w-[30%]">
                    <PictureServices 
                        idService={service}
                    />
                </div>
            </div>
        </section>
  )
}

