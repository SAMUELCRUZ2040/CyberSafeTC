"use client"

import data from "@/json/data";
import {DescriptionServices, PictureServices } from "./descriptionServices";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCircleNodes, faComputer, faCode,  faHuse, faPaperPlane, faSpinner, faArrowsToCircle } from '@fortawesome/free-solid-svg-icons';

export default function ControllerServices() {
    const [service, setService] = useState(0);

    const icons = [
        {name: "infraestructure", icon : faPaperPlane},
        {name: "technologyTI", icon : faSpinner},
        {name: "telephonieIp", icon : faCircleNodes},
        {name: "pageWeb", icon : faComputer},
        {name: "software", icon : faCode},
        {name: "seo", icon : faArrowsToCircle}
      ];

  return (
        <section>
            <div className="container grid grid-cols-12">
                <div className="col-span-1 flex flex-col justify-between items-center p-14">
                    {data.home[0].summaryServices[0].controllerServices.map((data, key)=>{
                        //obtener el id del servicio
                        const iconData = icons.find(icon => icon.name === data.icon);
                        const icon = iconData ? iconData.icon : null;
                        return(
                            <div 
                                className="text-[#000] mt-5 p-4 cursor-pointer border-2 text-center flex items-center justify-center rounded-lg hover:scale-[1.1] hover:shadow-xl"
                                key={key} 
                                onClick={()=>setService(data.id)}
                            >
                                {icon && <FontAwesomeIcon icon={icon} />}
                            </div>
                        );
                    })}
                </div>
                <div className="col-span-6 p-8 flex flex-col justify-center items-start gap-8">
                    <DescriptionServices 
                        idService={service}
                    />
                </div>
                <div className="col-span-3">
                    <PictureServices 
                        idService={service}
                    />
                </div>
                <div className="col-span-2 flex items-center justify-center">
                    <span>1/4</span>
                </div>
            </div>
        </section>
  )
}
