import data from '@/json/data';
import types from '@/components/fontLetters';
import Counter from '@/components/counter';
import { InputAnimation } from '@/components/inputAnimation';

export default function Average() {
  const averages = data?.home?.[0]?.average;

  if (!averages) return null;

  return (
    <section className="flex justify-center items-center w-full h-full bg-[#45454507] max-lg:px-5 max-lg:py-10 py-[8rem]">
      <div className="container">
        <h2 className={`${types.h2} ${types.flex} text-center mx-auto flex flex-col`}>
          <InputAnimation delay={0.1}>
            <span>We Focus on Efficiency and Quality</span>
          </InputAnimation>
          <InputAnimation delay={0.2}>
            <span className="text-neutral-500">In Every Project</span>
          </InputAnimation>
        </h2>

        <div className="flex justify-center items-center gap-[7rem] py-[6rem] max-lg:flex-col">
          {averages.map((item, index) => (
            <div key={index} className="text-center">
              <InputAnimation delay={0.3 + index * 0.1}>
                <h2 className="text-neutral-500 text-6xl tracking-tight font-light mb-4 flex items-center justify-center gap-2 max-lg:text-4xl">
                  + <Counter delay={item.transition} number={item.number} />
                </h2>
              </InputAnimation>
              <InputAnimation delay={0.4 + index * 0.1}>
                <p className={types.p}>{item.description}</p>
              </InputAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}