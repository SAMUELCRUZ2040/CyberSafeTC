import { Details } from '@/components/details';
import data from '@/json/data';
import Image from 'next/image';

export default  function Template({ params }) {
  
  const counter = (id)=>{
    const services = data.services[0].informationService,
          consult = services.find(iterator => iterator.id === id);  
    return consult;
  },
  service = counter(params.service);
  
  return (
    <div className="flex justify-center items-center relative">
      <div className="container py-14 my-14 px-14 max-lg:px-0">
        <div className="title my-8">
          <h1 className='"text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl flex flex-col  font-extrabold tracking-tight  leading-none'>
            <span>{service.title}</span>
            <span>{service.addTitle}</span>
          </h1>
        </div>
        <div className="body">
            <p className='w-3/6 text-xl mb-14'>{service.description}</p>
            <div className="container_image bg-[blue]  w-full relative h-[50rem] overflow-hidden">
              <Image
                  src={service.image}
                  width={400}
                  height={400}
                  alt={`check`}
                  style={{ width: "100%", height: "auto" }}
              />
            </div>
            <Details />
        </div>
      </div>
    </div>
  )
}
