import data from '@/json/data';
import types from '@/components/fontLetters';
import Counter from '../../components/counter';
import { InputAnimation } from '@/components/inputAnimation';

export default function Average() {

  return (
    <div className="flex justify-center items-center bg-[#45454507] max-lg:px-5 max-lg:py-10 h-full w-full py-[8rem]">
      <div className="container">
        <h2 className={`${types.h2}  ${types.flex} mx-auto text-center flex flex-col`}>
          <InputAnimation delay={.1}>
            <span className='text-center'>We Focus on Efficiency and Quality</span>
          </InputAnimation>
          <InputAnimation delay={.2}>
            <span className='text-neutral-500'>In Every Project</span>
          </InputAnimation>
        </h2>
        <div className="gap-[7rem] flex items-center justify-center py-[6rem] max-lg:flex-col">
          {data.home[0].average.map((dataAverage, index) => (
            <div
              className='text-center  transition-none'
              key={index}
            >
                <InputAnimation delay={.3}>
                  <h2
                      className='text-neutral-500 text-center text-6xl tracking-tight font-light max-lg:text-4xl mb-4 flex gap-5 justify-center items-center'
                  >
                  + <Counter 
                    delay={dataAverage.transition}
                    number={dataAverage.number}
                  />
                  </h2>
                </InputAnimation>
                <InputAnimation delay={.4}>
                  <p
                      className={types.p}
                  >
                      {dataAverage.description}
                  </p>
                </InputAnimation>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}