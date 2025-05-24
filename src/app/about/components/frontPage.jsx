import types from '@/components/fontLetters';
import { InputAnimation } from '@/components/inputAnimation';
import { Squares } from '@/hooks/squares';

export default  function FrontPage() {
  return (
    <section className='flex flex-col relative z-50 py-64 max-lg:py-10'>
        <div className="flex flex-col gap-8 justify-center items-center container">
          <InputAnimation delay={.1}>
            <button className='rounded-3xl bg-[#0000000a] p-4 text-sm text-[#000000] shadow-lg'>We've raised $69M seed funding {`‎ ‎ >`}</button>
          </InputAnimation>
          <h1 className={`${types.h1} tracking-normal font-black w-full flex gap-1 text-center justify-center items-center flex-col`}>
              <InputAnimation delay={.2}>
                    Creativity and innovation
              </InputAnimation>
              <InputAnimation delay={.3}>
                    Focused in even project
              </InputAnimation>
            </h1>
            <div className="text-center">
              <InputAnimation delay={.4}>
                <p className={`${types.p}`}>Everything AI seamlessly integrated all the modern AI generation tools</p>
              </InputAnimation>
              <InputAnimation delay={.5}>
                <p className={`${types.p}`}>into one platform so that you can generate content with a single click.</p>
              </InputAnimation>
            </div>
        </div>
        <Squares/>
    </section>
  )
}