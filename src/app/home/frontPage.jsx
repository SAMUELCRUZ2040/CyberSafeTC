import Link from 'next/link'
import Cards from './cards'
import Letters from '@/components/home/letters';
import SubDescription from '@/components/home/subDescription';

export default function FrontPage() {
  return (
<section className='grid__home max-lg:px-5 max-lg:mb-14 max-lg:pb-14 space py-60'>
        <div className="max-lg:grid-cols-1 max-md:gap-10 max-md:pt-10 grid grid-cols-2 container" >
            <div className="max-lg:items-center flex justify-center items-start flex-col gap-8 max-lg:py-14">
                <Letters />
                <SubDescription />
            </div>
            <div className="flex justify-center items-center max-lg:hidden">
                <div className="w-full card__home">
                    <Cards />
                </div>
            </div>
        </div>
    </section>
  )
}