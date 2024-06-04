import data from "@/json/data"
import Image from "next/image"
import Link from "next/link"

export default function Method() {
  return (
        <div className="flex justify-center items-center">
            <div className="container">
                <h2 className="text-center text-4xl font-medium tracking-tight lg:text-7xl leading-none flex flex-col">
                    <span>Designed for <span className="text-[#347faa]">premium</span></span>
                    <span className="font-bold">content experiences</span>
                </h2>
                {data.home[0].metod.map((methodData, keyData)=>(
                    <div 
                        className="grid grid-cols-12 mb-14"
                        key={keyData}
                    >
                        <div className={`col-span-6 flex items-center justify-${methodData.direction != "last" ? "end" : "start"} p-14 order-${methodData.direction}`}>
                           <Image 
                                src={methodData.picture}
                                width={500}
                                height={500}
                                alt=""
                                style={{ width: "80%", height: "auto" }}
                                className="shadow-md border-2 p-4 rounded-lg"
                           /> 
                        </div>
                        <div className={`col-span-6 flex items-center justify-${methodData.direction != "last" ? "start" : "end"} gap-14 p-5 `}>
                            <div className="w-4/5 flex gap-6 flex-col items-start">
                                <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl">{methodData.title}</h2>
                                <p className="text-lg ms-4">{methodData.description}</p>
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