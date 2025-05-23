import types from '@/components/fontLetters';
import { InputAnimation } from '@/components/inputAnimation';
import { CarouselHome } from '@/core/carouselHome';

export default function Users() {
    return (
        <div className="flex justify-center align-center max-lg:px-5 mt-12">
            <div className="container flex items-center flex-col">
                <div className="title">
                    <h2 className={`${types.h2} text-center flex flex-col ${types.flex}`}>
                        <InputAnimation delay={.1}>Ours Clients</InputAnimation>
                        <InputAnimation delay={.2}>Speak for Themselves</InputAnimation>
                    </h2>
                    <p className={`${types.smallP} text-center mt-5`}>You can build your dreams in seconds with us in the fastest and easiest way. You just have to call us and we will be there for you.</p>
                </div>
                <div className={`grid grid-cols-3 w-full h-[54rem] gap-10 my-14 relative p-14 overflow-hidden max-lg:p-0 max-lg:grid-cols-1`}>
                    <CarouselHome />
                    <div className={`z-50 backgroud absolute left-0 top-0 w-full h-[12rem] gradient rotate-180`}/>
                    <div className={`z-50 backgroud absolute left-0 bottom-0 w-full h-[12rem] gradient`}/>
                </div>
            </div>
        </div>
    );
}
