"use client"

import types from '@/components/fontLetters';
import { Timeline } from '@/components/timeline';
import { Squares } from '@/components/squares';

export default  function FrontPage() {
  return (
    <section className='pt-64 py-40 space flex flex-col relative z-50'>
        <div className="flex flex-col gap-8 justify-center items-center">
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
        <Timeline />
    </section>
  )
}
