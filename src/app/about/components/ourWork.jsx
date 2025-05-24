import data from '@/json/data';
import types from "@/components/fontLetters";
import Image from "next/image";
import { InputAnimation } from '@/components/inputAnimation';

export default function OurWork() {
  return (
    <section className="flex justify-center items-center mt-40 p-24 bg-[#a19c9c0c] max-lg:p-4 mb-32">
      <div className="container">
        <div className="title flex items-center justify-center flex-col mb-20">
          <h2 className={`${types.h2} text-center flex flex-col ${types.flex}`}>
            <InputAnimation delay={0.1}>What would you</InputAnimation>
            <InputAnimation delay={0.2}>Like to create?</InputAnimation>
          </h2>
          <p className={`${types.smallP} text-center mt-5`}>
            You can build your dreams in seconds with us in the fastest and easiest way.
            You just have to call us and we will be there for you.
          </p>
        </div>

        {data.about[0].outWork.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex gap-3 mb-3 mx-32 max-lg:flex-col max-lg:mx-0"
          >
            {Object.entries(section).map(([_, itemArr], itemIndex) => {
              const { delay, SubTitle, title, description, picture } = itemArr[0];

              return (
                <InputAnimation key={itemIndex} delay={delay}>
                  <div className="w-full rounded-3xl p-16 flex flex-col gap-10 gradient_inset border-2 border-white">
                    <span className={types.smallP}>{SubTitle}</span>
                    <h4 className={types.h4}>{title}</h4>
                    <p className={types.p}>{description}</p>
                    <Image
                      src={`/image/about/${picture}.webp`}
                      alt={title}
                      width={500}
                      height={500}
                      className="w-full rounded-3xl"
                    />
                  </div>
                </InputAnimation>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}