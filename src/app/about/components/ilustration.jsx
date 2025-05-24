"use client"

import data from '@/json/data';
import Grid from '../../../components/grid';
import types from "@/components/fontLetters";
import { Components } from '../../../utils/componentAnimation';
import { cn } from '@/utils/cn';
import { InputAnimation } from '@/components/inputAnimation';
import { useScreenStore } from '@/hooks/useScreenStore';

export default function Ilustration() {
  const width = useScreenStore((state) => state.width);

  return (
    <section>
      <div className="container">
        <div className="title flex items-center justify-center flex-col mb-20">
          <h2 className={cn(types.h2, "text-center flex flex-col", types.flex)}>
            <InputAnimation delay={0.1}>A complete website builder</InputAnimation>
            <InputAnimation delay={0.2}>with all the features you need.</InputAnimation>
          </h2>
          <span className={cn(types.p, "flex flex-col text-center")}>
            <InputAnimation delay={0.3}>
              <span>Framer is packed with powerful features, making it easy</span>
            </InputAnimation>
            <InputAnimation delay={0.4}>
              <span>to grow and expand your website to fit your needs.</span>
            </InputAnimation>
          </span>
        </div>

        {data.about[0].ilustration.map((sectionData, index) => (
          <div
            key={index}
            className={cn(
              "flex gap-3 my-3 px-[18rem]",
              "max-lg:flex-col max-lg:px-0 max-2xl:px-10"
            )}
          >
            {Object.entries(sectionData).map(([_, columnData], indexCol) => {
              const {
                transition,
                background,
                className,
                title,
                directionText,
                directionComponent,
                value,
                component,
                extraComponent
              } = columnData[0];

              return (
                <Grid
                  key={indexCol}
                  delay={transition}
                  backgroundColor={background}
                  className="max-lg:!w-full relative"
                  style={className}
                >
                  <div
                    className={cn(
                      className === "58%" ? types.longTextLong : types.longTextSmall,
                      types[directionText],
                      "z-[0] p-8"
                    )}
                  >
                    <h4 className="text-2xl !font-black">{title}</h4>
                    <p className="text-md w-full">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, suscipit!
                    </p>
                  </div>

                  {value && width >= 568 && (
                    <div className={cn("h-auto p-8", types[directionComponent])}>
                      <Components search={extraComponent} />
                    </div>
                  )}

                  <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-[-1] p-10 opacity-80">
                    <Components search={component} />
                  </div>
                </Grid>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
