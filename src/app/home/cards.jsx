import Image from "next/image";
import data from "@/json/data"
import Link from "next/link";

export default function Cards() {

  return (
    <>
        {data.home[0].frontPage.map((data, key)=>(
            <div key={key} className={`mt-2 columns-${Object.keys(data).length}`}>
                {Object.entries(data).map((dataCard, keyCard)=>(
                    <Link href={`${dataCard[1][0].link}`}>
                        <div key={keyCard} className={`shadow-md h-auto backdrop-blur-sm overflow-hidden border-2 p-4 rounded-lg flex content-center hover:shadow-lg items-center flex-${dataCard[1][0].direction}`}>
                            <Image  
                                src={`/image/home/frontPage/image-${dataCard[1][0].picture}.webP`}
                                width={dataCard[1][0].width}
                                height={dataCard[1][0].height}
                                alt="Picture of the author"
                                priority={true}
                                style={{ width: "100%", height: "auto" }} 
                            />
                            <p className="p-4">{dataCard[1][0].description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        ))}
    </> 
  )
}