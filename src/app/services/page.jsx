import TransitionLink from '@/components/transitionLink';
import data from '@/json/data';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="flex justify-center items-center mb-[8rem] bg-cover bg-center bg-no-repeat bg-fixed"
        // style={{backgroundImage : "url(/image/figure.png)"}} 
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
                    <div 
                        key={keyService}
                        className={`relative ${ServiceData.grid}`}>
                        <TransitionLink
                                href={ServiceData.url}
                                className={"w-full h-full justify-center items-start flex-col gap-5 flex text-start container__arrow__hover"}
                        >
                            <Image
                                src={`/icons/services/${ServiceData.image}.gif`}
                                width={500}
                                height={500}
                                alt={`logo`}
                                style={{ width: "5rem", height: "5rem" }}

                            />
                            <h2 className='text-xl font-semibold tracking-wide' >{ServiceData.title}</h2>
                            <p className='text-sm' >{ServiceData.description}</p>
                            <a
                                href={ServiceData.url}
                                className='text-[#347faa] hover__arrow relative hover:text-[#349aaaae] text-start'
                            >
                                VER DETALLE
                            </a>
                        </TransitionLink>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}