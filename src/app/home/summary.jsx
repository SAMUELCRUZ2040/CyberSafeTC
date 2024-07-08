import data from '@/json/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Summary() {
  return (
    <div className="flex justify-center align-center locas">
        <div className="container flex items-center flex-col">
            <div className="title">
                <h2 className='text-7xl font-normal tracking-tight max-lg:text-5xl leading-none flex flex-col text-center '>
                    <span>¿Quieres saber <span className="text-[#347faa]">porque somos</span></span>
                    <span className='font-semibold'>La mejor opción para tu negocio?</span>
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-5 my-14 py-14 max-lg:grid-cols-1">
                {data.home[0].summary.map((dataSummary, keySummary)=>(
                    <div 
                        className="p-5 h-full rounded-2xl flex flex-col gap-14 w-[22rem] max-xl:w-full backdrop-blur-sm"
                        key={keySummary}
                        style={{background : `#${dataSummary.background}`}}
                    >
                        
                        <div className="icon flex items-center gap-4 justify-start">
                            <span className='w-16 overflow-hidden'>
                                <Image
                                    src={`/icons/summary/${dataSummary.icon}.webP`}
                                    width={400}
                                    height={400}
                                    alt={`${dataSummary.alt}`}
                                    style={{ width: "100%", height: "auto" }}
                                    unoptimized
                                />
                            </span>
                            <h4 className='text-lg my-3'>{dataSummary.subtitle}</h4>
                        </div>
                        <span
                            className='font-semibold text-3xl my-3'>{dataSummary.title}</span>
                        <p className='text-md'>{dataSummary.description}</p>
                        <Link 
                            href={dataSummary.url}
                            className='hover:scale-[1.01] shadow-lg hover:shadow-xl py-3 px-4 rounded-lg text-md font-bold text-center'
                        >
                            Ver más
                        </Link> 
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}