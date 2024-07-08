import data from '@/json/data';
import Image from 'next/image';
import Link from 'next/link';


export default function FrontPage() {
  return (
    <div className="flex justify-center items-center mb-[8rem] ">
        <div className="container px-[5rem]">
            <div className="title py-[10rem]">
                <h1 className='text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl flex flex-col  font-extrabold tracking-tight  leading-none'>
                    <span className='font-normal'>Somos especialistas</span>    
                    <span>En lo que hacemos</span>    
                </h1>
            </div>
            <div className="services grid grid-cols-3 gap-[10rem] my-14">
                {data.services[0].servicesLogo.map((ServiceData, keyService)=>(
                    <div className="card flex flex-col gap-5" key={keyService}>
                        <Image
                            src={"/icons/enter.webp"}
                            width={500}
                            height={500}
                            alt={`logo`}
                            style={{ width: "4rem", height: "auto" }}

                        />
                        <h2 className='text-2xl font-semibold tracking-wide' >{ServiceData.title}</h2>
                        <p className='text-md' >{ServiceData.description}</p>
                        <Link className='text-[#347faa] underline underline-offset-8'  href={ServiceData.url}>VER DETALLE</Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
