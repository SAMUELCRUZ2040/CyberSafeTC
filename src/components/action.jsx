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
        <div className="container grid grid-cols-12 my-14 py-14">
            <div className="col-span-3 flex items-center justify-center">
              <h2 className="flex  flex-col croll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
                <span>¿Y si nos</span>
                <span>reunimos?</span>
              </h2>
            </div>
            <div className="col-span-9">
              <div className="card grid grid-cols-12 " >
                {dataAction.map((datas, key) => (
                    <div className="col-span-6 flex justify-center items-center gap-5 p-5 border-2 rounded-lg ms-4 shadow-md hover:shadow-xl overflow-hidden" key={key}>
                      <div className="picture">
                          <div className="container_picture rounded-full w-[130px] h-[130px] overflow-hidden flex justify-center items-center">
                            <Image 
                              src={datas.picture}
                              width={1000}
                              height={1000}
                              style={{width : "150%", height : "auto" , maxWidth : "none"}}
                              alt="asd"
                            />
                          </div>
                      </div>
                      <div className="description">
                          <h2 className="croll-m-20 text-lg font-extrabold tracking-tight lg:text-xl mb-4">{datas.description}</h2>
                          <Link 
                            href={"/"}
                            className="ps-4 color text-md text-[#008ced] underline underline-offset-8 hover:text-cyan-400"
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
