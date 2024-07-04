import Link from 'next/link'
import Cards from './cards'
import TypedTex from '@/components/TypedTex'

export default function FrontPage() {
  return (
    <section className='background_secondary space'>
        <div className="max-lg:grid-cols-1 max-md:gap-10 max-md:pt-10 grid grid-cols-2 container" >
            <div className="flex justify-center items-start flex-col gap-7">
                <h1 className="text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl flex flex-col  font-extrabold tracking-tight  leading-none">
                    <span>Diseñamos soluciones</span>
                    <span className='max-lg:flex max-lg:flex-col'>Tecnológicas que Impulsaran tus <TypedTex /> </span>
                </h1>
                <p className="text-xl me-4">Personalizamos soluciones tecnológicas para tu empresa, impulsando su rendimiento y eficiencia en comunicación, automatización y seguridad.</p>
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
            <div className="flex justify-center items-center">
                <div className="w-full">
                    <Cards />
                </div>
            </div>
        </div>
    </section>
  )
}