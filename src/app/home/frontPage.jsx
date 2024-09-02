
import Link from 'next/link'
import Cards from './cards'
import { FlipWords } from '@/components/type';
import Animation from '@/utils/animation';
import Letters from '@/components/home/letters';

export default function FrontPage() {
  return (
    <section className='background_secondary max-lg:px-5 max-lg:mb-14 max-lg:pb-14'>
        <div className="max-lg:grid-cols-1 max-md:gap-10 max-md:pt-10 grid grid-cols-2 container" >
            <div className="flex justify-center items-start flex-col gap-8 max-lg:py-14">
                <Letters /> 
                <p className="text-xl me-4 max-lg:text-sm">Personalizamos soluciones tecnológicas para tu empresa, impulsando su rendimiento y eficiencia en comunicación, automatización y seguridad.</p>
                <div className="max-lg:flex-col flex gap-5 w-full">
                    <Link className='transition-none hover:scale-[1.05] max-sm:px-5 max-sm:py-4 max-sm:text-sm max-lg:text-center px-10 py-5 bg-black border-2 rounded-3xl text-md border-transparent text-white ' 
                          href={"/"}
                    >
                        Conoce acerca de tu futuro
                    </Link>
                    <Link className='transition-none hover:scale-[1.05] max-sm:px-5 max-sm:py-4 max-sm:text-sm max-lg:text-center px-10 py-5 border-2 rounded-3xl text-md border-[#a7a2a259]  bg-white' 
                          href={"/"}
                    >
                        Conoce acerca de Nosotros
                    </Link>
                </div>
            </div>
            <div className="flex justify-center items-center max-lg:hidden">
                <div className="w-full">
                    <Cards />
                </div>
            </div>
        </div>
    </section>
  )
}