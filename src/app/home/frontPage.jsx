import { Focus } from '@/components/focus'
import types from '@/components/fontLetters'
import { Testimonials } from '@/core/testimonialsHome'
import { Treads } from '@/hooks/treads'

export default function FrontPage() {
  return (
    <section className='max-lg:px-5 max-lg:pb-14 relative my-[20rem] max-lg:my-[10rem] max-lg:mb-[0rem]'>
        <div className={`flex ${types.flexCenter} flex-col text-center`}>
            <h1 className={`${types.flexCenter} ${types.h1}`}>
                <span className={``}>Digital Solutions for the Future</span>
                <span className={`flex gap-5 mt-3 max-lg:flex-col`}>Of Your<Focus sentence='Bussines Project' /></span>
            </h1>
            <Testimonials />
        </div>
        <div className="absolute w-full h-full left-0 top-0 z-[-1]">
            <Treads />
        </div>
    </section>
  )
}