import data from "@/json/data"
import Image from "next/image"
import Link from "next/link"

export default function Method() {
  return (
        <div className="flex justify-center items-center background_principal">
            <div className="container">
                <h2 className="text-center text-7xl font-medium tracking-tight max-lg:text-5xl leading-none flex flex-col mb-14">
                    <span>Designed for <span className="text-[#347faa]">premium</span></span>
                    <span className="font-bold">content experiences</span>
                </h2>
                {data.home[0].metod.map((methodData, keyData)=>(
                    <div 
                        className=" max-lg:p-0 max-md:grid-cols-1 max-md:p-0 grid grid-cols-2 mb-14 p-14"
                        key={keyData}
                    >
                        <div 
                            className={`max-md:order-first max-md:justify-center flex items-center ${methodData.direction ? 'justify-end order-first' : 'justify-start order-last'}`}
                        >
                            <Image 
                                    src={`/image/home/metod/img-${methodData.picture}.webP`}
                                    width={500}
                                    height={500}
                                    alt={`${methodData.alt}`}
                                    style={{height: "auto" }}
                                    className="max-xl:w-full w-[60%] shadow-md border-2 p-4 rounded-lg  "
                            /> 
                        </div>
                        <div className={`max-md:mt-6 max-md:p-0 max-md:justify-start flex items-center justify-${methodData.direction ? "start" : "end"} p-5 `}>
                            <div className="max-md:w-full w-4/5 flex gap-6 flex-col items-start">
                                <h2 className="scroll-m-20 text-3xl font-bold tracking-tight max-md:text-xl">{methodData.title}</h2>
                                <p className="text-lg ms-4 max-lg:text-sm">{methodData.description}</p>
                                <Link 
                                    href={methodData.action}
                                    className="hover:scale-[1.04] shadow-lg py-4 px-12 border-2 rounded-xl text-xl font-bold text-center"
                                >Ver ahora +</Link>
                            </div>
                        </div>
                    </div>
                ))}  
            </div>
        </div>
)
}