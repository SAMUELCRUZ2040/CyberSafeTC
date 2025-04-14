import types from '@/components/fontLetters'
import { InputAnimation } from '@/components/inputAnimation'
import data from '@/json/data'
import Image from 'next/image'

export default function Summary() {
  const containerClass = 'max-lg:gap-2 p-10 h-full rounded-2xl flex flex-col max-lg:items-center max-lg:justify-center gap-8 w-[25rem] max-xl:w-full backdrop-blur-[1.5px] border-2 bg-[#46464604]'

  return (
    <div className="flex justify-center align-center max-lg:px-5">
      <div className="container flex items-center flex-col">
        
        {/* Title Section */}
        <div className="title flex flex-col justify-center items-center text-center">
          <h2 className={`${types.h2} ${types.flex} flex flex-col`}>
            <InputAnimation delay={0.2}>
              <span>Do you know Why we're</span>
            </InputAnimation>
            <InputAnimation delay={0.3}>
              <span>The better option for your business?</span>
            </InputAnimation>
          </h2>
          <InputAnimation delay={0.4}>
            <p className={`${types.smallP} mt-5`}>
              You can build your dreams in seconds with us in the fastest and easiest way. You just have to call us and we will be there for you.
            </p>
          </InputAnimation>
        </div>

        {/* Summary Grid */}
        <div className="grid grid-cols-3 gap-3 my-14 py-14 max-lg:grid-cols-1 max-lg:my-0">
          {data.home[0].summary.map(({ icon, alt, subtitle, title, description, transition }, key) => (
            <InputAnimation key={key} className={containerClass} delay={transition}>
              <div className="max-lg:gap-1 flex items-center gap-4 justify-start">
                <span className="w-16 overflow-hidden">
                  <Image
                    src={`/icons/summary/${icon}.webP`}
                    width={400}
                    height={400}
                    alt={alt}
                    unoptimized
                    className="max-lg:w-[60%] h-auto w-full"
                  />
                </span>
                <h4 className={`${types.extraP} my-3`}>{subtitle}</h4>
              </div>
              <span className={`${types.h4} my-3`}>{title}</span>
              <p className={types.smallP}>{description}</p>
            </InputAnimation>
          ))}
        </div>
      </div>
    </div>
  )
}
