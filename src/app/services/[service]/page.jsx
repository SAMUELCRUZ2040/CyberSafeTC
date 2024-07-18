import { Details } from '@/components/details';
import data from '@/json/data';
import Link from 'next/link';

export default  function Template({ params }) {
  
  const counter = (id)=>{
    const services = data.services[0].informationService,
          consult = services.find(iterator => iterator.id === id);  
    return consult;
  },
  service = counter(params.service);
  
  return (
    <div 
      className="flex justify-center items-center relative flex-col"
      style={{backgroundImage : "url(/image/figure.png)"}}
    >
        <div className="container pt-14 mt-14">
          <h1 className='text-4xl lg:text-4xl xl:text-5xl 2xl:text-8xl flex flex-col   tracking-tight  leading-none w-3/4'>
            <span>{service.title}</span>
            <span>{service.addTitle}</span>
          </h1>
          <p className='w-3/5 text-lg my-[8rem] max-lg:w-full max-lg:text-sm ps-14 text-[#555555] container'>{service.description}</p>
        </div>
        <div className="w-full relative overflow-hidden h-[60rem] max-lg:h-[20rem]">
          <div 
            className="bg-[blue] absolute right-0 bg-cover bg-no-repeat bg-center h-full"
            style={{backgroundImage : `url(/image/services/${service.image}.webp)`, width : "calc(100% - 257px)"}}
          />
        </div>
        <Details 
          idPage = {params.service}
        />
        <div className="container flex flex-col items-center gap-5 p-14 my-14">
          <h2 className='text-center text-7xl tracking-tight max-lg:text-5xl flex flex-col '>
            <span>Quieres saber más,</span>
            <span>Contactanos</span>
          </h2>
          <Link href={"/contact"} className='hover:scale-[1.04] shadow-xl py-4 px-12 border-2 rounded-xl text-xl font-bold text-center text-[#347faa]'>Contactar asesor</Link>
        </div>
    </div>
  )
}