"use client"

import types from '@/components/fontLetters';
import { Squares } from '@/hooks/squares';

export default  function FrontPage() {
  return (
    <section className='flex flex-col relative z-50 space'>
        <div className="flex flex-col gap-8 justify-center items-center container">
          <button className='rounded-3xl bg-[#0000000a] p-4 text-sm text-[#000000] shadow-lg'>We've raised $69M seed funding {`‎ ‎ >`}</button>
          <h1 className={`${types.h1} tracking-normal font-black w-full flex gap-1 text-center justify-center items-center flex-col`}>
              <span>
                  Creativity and innovation
              </span>
              <span>
                  Focused in even project
              </span>
            </h1>
            <div className="text-center">
              <p className={`${types.p}`}>Everything AI seamlessly integrated all the modern AI generation tools</p>
              <p className={`${types.p}`}>into one platform so that you can generate content with a single click.</p>
            </div>
        </div>
        <Squares/>
    </section>
  )
}
