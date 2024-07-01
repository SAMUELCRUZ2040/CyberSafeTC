import data from "@/json/data"
import Image from "next/image"
import Link from "next/link"

export default function Method() {
  return (
        <div className="flex justify-center items-center background_principal">
            <div className="container">
                <h2 className="text-center text-7xl font-medium tracking-tight max-lg:text-5xl leading-none flex flex-col mb-[10rem]">
                    <span>Los mejores <span className="text-[#347faa]">beneficios</span></span>
                    <span className="font-bold">para tu emprendimiento</span>
                </h2>
                {data.home[0].metod.map((methodData, keyData)=>(
                    <div 
                        className=" max-lg:p-0 max-md:grid-cols-1 max-md:p-0 grid grid-cols-3 ps-[10vw]"
                        key={keyData}
                    >
                        <div 
                            className={`max-md:order-first max-md:justify-center flex items-center justify-center  ${methodData.direction ? 'order-first max-md:order-last' : 'order-last max-md:order-last'}`}
                        >
                            <Image 
                                    src={`/image/home/metod/img-${methodData.picture}.webp`}
                                    width={500}
                                    height={500}
                                    alt={`${methodData.alt}`}
                                    style={{height: "auto" }}
                                    className="max-xl:w-[60%]"
                            /> 
                        </div>
                        <div className={`max-md:mt-6 max-md:p-0 max-md:justify-start flex items-center  col-span-2`}>
                            <div className="max-md:w-full  flex gap-6 flex-col items-start">
                                <span className="flex items-center flex-row  gap-4">
                                    <Image 
                                            src={`/icons/arrow.svg`}
                                            width={500}
                                            height={500}
                                            alt={`${methodData.alt}`}
                                            style={{height: "auto" }}
                                            className="w-auto"
                                    /> 
                                    <h2 
                                        className="text-3xl font-bold tracking-tight max-md:text-xl"
                                    >
                                        {methodData.title}
                                    </h2>
                                </span>
                                <p className="text-lg ms-4 max-lg:text-sm">{methodData.description}</p>
                            </div>
                        </div>
                    </div>
                ))}  
            </div>
        </div>
    )
}