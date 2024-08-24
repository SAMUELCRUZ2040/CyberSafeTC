import data from '@/json/data';
import Image from 'next/image';

export default function Summary() {
  return (
    <div className="flex justify-center align-center max-lg:px-5">
        <div className="container flex items-center flex-col">
            <div className="title">
                <h2 className='max-lg:text-3xl max-lg:text-start text-7xl font-normal tracking-tight leading-none flex flex-col text-center '>
                    <span>¿Quieres saber <span className="text-[#347faa]">porque somos</span> <span className='font-semibold lg:hidden xl:hidden'>La mejor opción para tu negocio?</span></span>
                    <span className='font-semibold max-lg:hidden'>La mejor opción para tu negocio?</span>
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-5 my-14 py-14 max-lg:grid-cols-1 max-lg:my-0">
                {data.home[0].summary.map((dataSummary, keySummary)=>(
                    <div 
                        className="max-lg:gap-2 p-5 h-full rounded-2xl flex flex-col gap-14 w-[22rem] max-xl:w-full backdrop-blur-sm"
                        key={keySummary}
                        style={{background : `#${dataSummary.background}`}}
                    >
                        <div className="max-lg:gap-1 flex items-center gap-4 justify-start">
                            <span className='w-16 overflow-hidden'>
                                <Image
                                    src={`/icons/summary/${dataSummary.icon}.webP`}
                                    width={400}
                                    height={400}
                                    alt={`${dataSummary.alt}`}
                                    unoptimized
                                    className='max-lg:w-[60%] h-auto w-full'
                                />
                            </span>
                            <h4 className='max-lg:text-sm max-lg:my-0 text-lg my-3'>{dataSummary.subtitle}</h4>
                        </div>
                        <span
                            className='max-lg:text-lg font-semibold text-3xl my-3'>{dataSummary.title}</span>
                        <p className='text-md max-lg:text-sm'>{dataSummary.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}