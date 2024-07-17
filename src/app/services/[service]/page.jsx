import { Details } from '@/components/details';
import data from '@/json/data';

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
        <div className="w-full relative overflow-hidden h-[50rem] max-lg:h-[20rem]">
          <div 
            className="bg-[blue] absolute right-0 bg-cover bg-no-repeat bg-center h-full"
            style={{backgroundImage : `url(https://img.freepik.com/psd-gratis/plantilla-helado-pagina-destino_23-2148782073.jpg?t=st=1721192543~exp=1721196143~hmac=7eeb6db4ce0f71582fc37fba115e315e71471d0dc3f21459c3e8c1948e1f8993&w=1800)`, width : "calc(100% - 257px)"}}
          />
        </div>
        <Details 
          idPage = {params.service}
        />
    </div>
  )
}