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
    <div className="flex justify-center items-center relative">
      <div className="container py-14 my-14 px-14 max-lg:px-0 max-lg:my-0 max-lg:py-0">
        <div className="title my-14">
          <h1 className='text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl flex flex-col  font-extrabold tracking-tight  leading-none'>
            <span>{service.title}</span>
            <span>{service.addTitle}</span>
          </h1>
        </div>
        <div className="body">
            <p className='w-3/6 text-xl mb-14 max-lg:w-full max-lg:text-sm'>{service.description}</p>
            <div 
              className="bg-[blue] w-full relative overflow-hidden bg-cover bg-no-repeat bg-center h-[50rem] max-lg:h-[20rem]"
              style={{backgroundImage : `url(${service.image})`}}
            ></div>
            <Details 
              idPage = {params.service}
            />
        </div>
      </div>
    </div>
  )
}