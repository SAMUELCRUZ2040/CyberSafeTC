import Image from "next/image"
import Link from "next/link"

export default function Action() {
  const dataAction = [
    {
      picture : "https://img.freepik.com/foto-gratis/colegas-reunion-negocios-juntos_23-2148738290.jpg?t=st=1717038512~exp=1717042112~hmac=22240c8d073184df0c22fe05c77132d5e1589536749463357abad5158556c618&w=1380",
      description : "Soy un cliente con una gran idea a planear",
      src : "asdd",
      alt : ""
    },
    {
      picture : "https://img.freepik.com/foto-gratis/manos-escribiendo-documentos-comerciales-concepto-escritorio_53876-146452.jpg?t=st=1717038535~exp=1717042135~hmac=a46f8c6039e1ed051a0fc395fda8a10d318bc1886bd631735c2094e575a96d50&w=900",
      description : "Soy una empresa con grandes ideales",
      src : "asdd",
      alt : ""
    }
  ]
  return (
    <div className="fall__action flex justify-center items-center bg-[#2929290a]">
        <div className="container grid grid-cols-3 my-14 py-14 max-sm:grid-cols-1">
            <div className=" col-span-1 flex items-center justify-center">
              <h2 className=" max-sm:flex-row gap-2 flex flex-col croll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                <span>¿Y si nos</span>
                <span>reunimos?</span>
              </h2>
            </div>
            <div className="col-span-2 max-sm:mt-8">
              <div className="card grid grid-cols-2 max-sm:grid-cols-1 gap-28" >
                {dataAction.map((datas, key) => (
                    <div 
                      className="relative flex justify-center items-center border-2 rounded-3xl shadow-md hover:shadow-xl py-11 px-[5rem] max-sm:ps-[3rem] max-sm:px-0 max-sm:py-8" 
                      key={key}
                      style={{borderBottomLeftRadius : "0"}}
                    >
                        <div className="max-sm:top-[25%] top-[18.5%] left-[-12.5%] absolute max-sm:w-[70px] max-sm:h-[70px] rounded-full w-[105px] h-[105px] overflow-hidden flex justify-center items-center">
                            <Image 
                              src={datas.picture}
                              width={1000}
                              height={1000}
                              style={{width : "180%", height : "auto" , maxWidth : "none"}}
                              alt="asd"
                            />
                        </div>
                      <div className="description">
                          <h2 className="croll-m-20 text-sm font-extrabold tracking-tight lg:text-xl mb-4">{datas.description}</h2>
                          <Link 
                            href={"/"}
                            className="ps-4 color text-xs text-[#008ced] underline underline-offset-8 hover:text-cyan-400"
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
