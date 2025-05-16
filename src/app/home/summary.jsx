import types from '@/components/fontLetters';
import { InputAnimation } from '@/components/inputAnimation';
import data from '@/json/data';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export default function Summary() {
  const containerClass =
    'max-lg:gap-2 p-16 h-auto w-full flex items-center justify-center flex-col max-lg:items-center max-lg:justify-center gap-4 border-2 text-center';

  return (
    <div className="flex justify-center align-center max-lg:px-5 relative">
      <div className="flex items-center flex-col">
        {/* Title Section */}
        <div className="container">
          <div className="title flex flex-col justify-center items-center text-center mb-40">
            <h2 className={`${types.h2} ${types.flex} flex flex-col`}>
              {[
                { text: "Do you know Why we're", delay: 0.3 },
                { text: "The better option for your business?", delay: 0.4 },
              ].map(({ text, delay }, idx) => (
                <InputAnimation key={idx} delay={delay}>
                  <span>{text}</span>
                </InputAnimation>
              ))}
            </h2>
            <InputAnimation delay={0.5}>
              <p className={`${types.smallP} mt-5`}>
                You can build your dreams in seconds with us in the fastest and easiest way. You just have to call us and we will be there for you.
              </p>
            </InputAnimation>
          </div>
        </div>
        {/* Top Divider */}
        <span className="bg-[#e6dfdf] relative w-screen h-[1px] left-0 !z-[-1]" />

        {/* Summary Cards */}
        <div className="container px-48 max-lg:px-0">
          <div className="flex flex-col max-md:mb-10">
            {data.home[0].summary.map((dataCol, colIdx) => (
              <div className="flex max-md:flex-col" key={colIdx}>
                {Object.entries(dataCol).map(([key, value], summaryIdx) => {
                  const summary = value[0];
                  return (
                    <InputAnimation
                      key={summaryIdx}
                      className={cn(containerClass)}
                      delay={summary.transition}
                    >
                      <div className="max-lg:gap-1 flex items-center gap-4 justify-start">
                        <span className="w-16 overflow-hidden">
                          <Image
                            src={`/icons/summary/${summary.icon}.webP`}
                            width={400}
                            height={400}
                            alt={summary.alt}
                            unoptimized
                            className="max-lg:w-[60%] h-auto w-full"
                          />
                        </span>
                        <h4 className={`${types.extraP} my-3`}>{summary.subtitle}</h4>
                      </div>
                      <span className={`${types.h4} my-3`}>{summary.title}</span>
                      <p className={types.smallP}>{summary.description}</p>
                    </InputAnimation>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider */}
        <span className="bg-[#e6dfdf] relative w-screen h-[1px] left-0 !z-[-1]" />
      </div>
    </div>
  );
}
