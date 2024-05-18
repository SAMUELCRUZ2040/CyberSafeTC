import Link from 'next/link'
import Cards from './cards'
import TypedTex from '@/components/TypedTex'

export default function Portada() {
  return (
    <section >
        <div className="columns-2 h-full container px-5">
            <div className={`information h-full flex justify-center flex-col  overflow-hidden gap-7`}>
                <h1 className="flex flex-col text-6xl font-bold font-sans leading-none">
                    <span>Diseñamos soluciones</span>
                    <span>Tecnológicas que</span>
                    <span>Impulsaran tus <TypedTex /> </span>
                </h1>
                <p className="text-xl">Personalizamos soluciones tecnológicas para tu empresa, impulsando su rendimiento y eficiencia en comunicación, automatización y seguridad.</p>
                <div className="action mt-8">
                    <Link className='tracking-widest bg-black py-6 px-12 border-2 rounded-xl text-xl  font-bold border-transparent text-white' href={"/"}>
                        Visitanos
                    </Link>
                    <Link className='ms-4 bg-slate-100 py-6 px-12 border-2 rounded-xl text-xl border-black font-bold' href={"/"}>
                        Contactanos
                    </Link>
                </div>
            </div>
            <div className="pictures h-full flex justify-center items-center">
                <div className="w-full">
                    <Cards />
                </div>
            </div>
        </div>
    </section>
  )
}