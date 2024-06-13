import data from "@/json/data"
import Image from "next/image"
import Link from "next/link"

export default function Method() {
  return (
        <div className="flex justify-center items-center background_principal">
            <div className="container">
                <h2 className="text-center text-5xl font-medium tracking-tight lg:text-7xl leading-none flex flex-col mb-14">
                    <span>Designed for <span className="text-[#347faa]">premium</span></span>
                    <span className="font-bold">content experiences</span>
                </h2>
                {data.home[0].metod.map((methodData, keyData)=>(
                    <div 
                        className="max-sm:grid-cols-1 max-sm:p-0 grid grid-cols-2 mb-14 p-14"
                        key={keyData}
                    >
                        <div 
                            className={`max-sm:order-first max-sm:justify-center flex items-center ${methodData.direction ? 'justify-end order-first' : 'justify-start order-last'}`}
                        >
                            <Image 
                                    src={methodData.picture}
                                    width={500}
                                    height={500}
                                    alt=""
                                    style={{height: "auto" }}
                                    className="shadow-md border-2 p-4 rounded-lg max-sm:w-full w-[60%]"
                            /> 
                        </div>
                        <div className={`max-sm:mt-6 max-sm:p-0 max-sm:justify-start flex items-center justify-${methodData.direction ? "start" : "end"} p-5 `}>
                            <div className="max-sm:w-full w-4/5 flex gap-6 flex-col items-start">
                                <h2 className="scroll-m-20 text-4xl font-bold tracking-tight max-sm:text-xl">{methodData.title}</h2>
                                <p className="text-lg ms-4 max-sm:text-sm">{methodData.description}</p>
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