import Link from 'next/link'
import Cards from './cards'
import TypedTex from '@/components/TypedTex'
import { AnimatedTooltipPreview } from '@/components/tooltip'

export default function FrontPage() {
  return (
    <section className='background_principal'>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full container max-lg:gap-10 max-lg:pt-10" >
            <div className="information h-full flex justify-center items-start flex-col gap-7">
                <h1 className="flex flex-col scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl leading-none">
                    <span>Diseñamos soluciones</span>
                    <span>Tecnológicas que</span>
                    <span className='flex flex-col'>Impulsaran tus <TypedTex /> </span>
                </h1>
                <p className="text-xl">Personalizamos soluciones tecnológicas para tu empresa, impulsando su rendimiento y eficiencia en comunicación, automatización y seguridad.</p>
                <div className="mt-8 flex gap-5">
                    <Link className='max-sm:px-5 max-sm:py-4 max-sm:text-sm px-10 py-5 bg-black border-2 rounded-xl text-xl border-transparent text-white font-bold' 
                          href={"/"}
                    >
                        Ver más
                    </Link>
                    <Link className='max-sm:px-5 max-sm:py-4 max-sm:text-sm px-10 py-5 border-2 rounded-xl text-xl border-black font-bold' 
                          href={"/"}
                    >
                        Contactanos
                    </Link>
                </div>
            </div>
            <div className="pictures h-full flex justify-center items-center">
                <div className="w-full">
                    <Cards />
                    <AnimatedTooltipPreview />
                </div>
            </div>
        </div>
    </section>
  )
}