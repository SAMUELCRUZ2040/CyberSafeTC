import Service from '@/components/services/service';
import data from '@/json/data';

export default function Services() {
  return (
    <section className="flex justify-center items-center mb-[7rem]"
    >
        <div className="container px-[5rem]">
            <div className="title py-[10rem] max-lg:pb-[4rem]">
                <h1 className='text-4xl lg:text-4xl xl:text-5xl 2xl:text-8xl flex flex-col  font-extrabold tracking-tight  leading-none'>
                    <span className='font-normal'>Somos especialistas</span>    
                    <span>En lo que hacemos</span>    
                </h1>
            </div>
            <div className="services grid grid-cols-3 gap-[8rem] my-14 flex-wrap max-lg:grid-cols-2 max-sm:grid-cols-1">
                {data.services[0].servicesLogo.map((ServiceData, keyService)=>(
                    <Service 
                        key={keyService}
                        ServiceData={ServiceData}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}