import data from '@/json/data';
import Image from 'next/image';
import Link from 'next/link';


export default function Services() {
  return (
    <div className="flex justify-center items-center mb-[8rem] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{backgroundImage : "url(/image/figure.png)"}}
    >
        <div className="container px-[5rem]">
            <div className="title py-[10rem]">
                <h1 className='text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl flex flex-col  font-extrabold tracking-tight  leading-none'>
                    <span className='font-normal'>Somos especialistas</span>    
                    <span>En lo que hacemos</span>    
                </h1>
            </div>
            <div className="services grid grid-cols-3 gap-[8rem] my-14 flex-wrap max-lg:grid-cols-2 max-sm:grid-cols-1">
                {data.services[0].servicesLogo.map((ServiceData, keyService)=>(
                    <div className="card flex flex-col gap-5" key={keyService}>
                        <Image
                            src={`/icons/services/${ServiceData.image}.png`}
                            width={500}
                            height={500}
                            alt={`logo`}
                            style={{ width: "5rem", height: "auto" }}

                        />
                        <h2 className='text-xl font-semibold tracking-wide' >{ServiceData.title}</h2>
                        <p className='text-sm' >{ServiceData.description}</p>
                        <Link className='text-[#347faa] underline underline-offset-8 hover:text-cyan-400'  href={`${ServiceData.url}`}>VER DETALLE</Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
