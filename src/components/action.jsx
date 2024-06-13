import Image from "next/image"
import Link from "next/link"

export default function Action() {
  const dataAction = [
    {
      picture : "1",
      alt : "Imagen de soy un cliente con una gran idea a planear",
      description : "Soy un cliente con una gran idea a planear",
      src : "asdd",
    },
    {
      picture : "2",
      alt: "SImagen de sy una empresa con grandes ideales",
      description : "Soy una empresa con grandes ideales",
      src : "asdd",
    }
  ]
  return (
    <div className="fall__action flex justify-center items-center bg-[#2929290a]">
        <div className="container grid grid-cols-3 my-14 py-14 max-xl:grid-cols-1">
            <div className=" col-span-1 flex items-center justify-center">
              <h2 className="gap-2 flex flex-col croll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                <span>¿Y si nos</span>
                <span>reunimos?</span>
              </h2>
            </div>
            <div className="col-span-2 max-xl:mt-8">
              <div className="max-lg:gap-10 max-md:grid-cols-1 card grid grid-cols-2 gap-28" >
                {dataAction.map((datas, key) => (
                    <div 
                      className="max-lg:py-6 max-md:ps-[3rem] max-md:px-0 max-md:py-8 relative flex justify-center items-center border-2 rounded-3xl shadow-md hover:shadow-xl py-11 px-[5rem] " 
                      key={key}
                      style={{borderBottomLeftRadius : "0"}}
                    >
                        <div className="max-md:top-[25%] top-[20.5%] left-[-12%] absolute max-lg:w-[70px] max-lg:h-[70px] rounded-full w-[105px] h-[105px] overflow-hidden flex justify-center items-center">
                            <Image 
                              src={`/image/footer/img-${datas.picture}.webP`}
                              alt={`${datas.alt}`}
                              width={1000}
                              height={1000}
                              style={{width : "180%", height : "auto" , maxWidth : "none"}}
                            />
                        </div>
                      <div className="description">
                          <h2 className="croll-m-20 text-sm font-extrabold tracking-tight lg:text-xl mb-4">{datas.description}</h2>
                          <Link 
                            href={"/"}
                            className="ps-4  color text-md text-[#0097ff] underline underline-offset-8 hover:text-cyan-400 font-bold tracking-wider"
                          >
                            ESCRIBENOS +
                          </Link>
                      </div>
                    </div>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}
