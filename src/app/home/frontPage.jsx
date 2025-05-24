
import { Focus } from '@/components/focus'
import types from '@/components/fontLetters'
import { InputAnimation } from '@/components/inputAnimation'
import { Testimonials } from '@/core/testimonialsHome'
import { Treads } from '@/hooks/treads'

export default function FrontPage() {
  return (
    <>
    <Treads />
    <section className='max-lg:px-5 max-lg:pb-14 relative mb-[15rem] mt-[20rem] max-lg:mt-[10rem] max-lg:mb-[8rem]'>
        <div className={`flex ${types.flexCenter} flex-col text-center`}>
            <h1 className={`${types.flexCenter} ${types.h1}`}>
                <InputAnimation delay={.0}>
                  <span className={``}>Digital Solutions for the Future</span>
                </InputAnimation>
                <InputAnimation delay={.1}>
                  <span className={`flex gap-5 mt-3 max-lg:flex-col`}> Of Your<Focus sentence='Business  Project' /></span>
                </InputAnimation>
            </h1>
            <InputAnimation delay={.2}>
              <Testimonials />
            </InputAnimation>
        </div>
    </section>
    </>
  )
}