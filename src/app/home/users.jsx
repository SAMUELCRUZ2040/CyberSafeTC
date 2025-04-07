import types from '@/components/fontLetters';
import { CarouselHome } from '@/core/carouselHome';
import { CarouselDesktop, CarouselMobile } from '@/core/confiComponents/confiCarouselHome';
import { Breakpoints } from '@/layout/breakpoints';

export default function Users() {
    return (
        <div className="flex justify-center align-center max-lg:px-5">
            <div className="container flex items-center flex-col">
                <div className="title">
                    <h2 className={`${types.h2} text-center flex flex-col ${types.flex}`}>
                        <span>Ours <span className="text-[#347faa]">Clients</span></span>
                        <span className='font-semibold'>Speak for Themselves</span>
                    </h2>
                </div>
                <div className={`grid grid-cols-3 w-full h-[54rem] gap-10 my-14 relative p-14 overflow-hidden max-lg:p-0 max-lg:grid-cols-1`}>
                    {/* <CarouselMobile /> */}
                    {/* <Breakpoints /> */}
                    <CarouselHome />
                    {/* <CarouselDesktop /> */}
                    <div className={`z-50 backgroud absolute left-0 top-0 w-full h-[12rem] gradient rotate-180`}/>
                    <div className={`z-50 backgroud absolute left-0 bottom-0 w-full h-[12rem] gradient`}/>
                </div>
            </div>
        </div>
    );
}
