import Image from "next/image";
import data from "@/json/data"
import Link from "next/link";

export default function Cards() {

  return (
    <>
        {data.home[0].frontPage.map((data, key)=>(
            // crear el numero de columnas 
            <div key={key} 
                className={`max-lg:mt-8 max-sm:grid-cols-1 mt-4 grid grid-cols-${Object.keys(data).length} gap-5 `}
            >
                {Object.entries(data).map((dataCard, keyCard)=>(
                    //crear el numero de comonentes que hay dentro de cada columna
                    <Link 
                        href={`${dataCard[1][0].link}`} 
                        key={keyCard}
                    >
                        <div 
                            className={`
                                max-md:flex-col max-lg:flex-row max-md:mt-4
                                flex items-center flex-${dataCard[1][0].direction}
                                bg-[#dfdfdf08] shadow-md border-2 h-auto backdrop-blur-[3px]  p-4 rounded-lg hover:shadow-lg overflow-hidden 
                            `}
                        >
                            <Image  
                                src={`/image/home/frontPage/image-${dataCard[1][0].picture}.webP`}
                                width={dataCard[1][0].width}
                                height={dataCard[1][0].height}
                                alt={`${dataCard[1][0].alt}`}
                                priority={true}
                                style={{ width: "100%", height: "auto" }}
                            />
                            <p 
                                className="p-4 max-xl:text-sm"
                            >   
                                {dataCard[1][0].description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        ))}
    </> 
  )
}