
import { cn } from "@/utils/cn";
import data from "@/json/data"
import { Components } from "@/utils/componentAnimation";
import types from "@/components/fontLetters";
import { InputAnimation } from "@/components/inputAnimation";


export function Atention() {

  const className = {
    skeletonOne: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    SkeletonTwo: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    SkeletonThree: "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    SkeletonFour: "col-span-1 lg:col-span-3 border-b lg:border-none",
  };

  return (
    (<div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto max-lg:px-36 max-md:px-5">
      <div className="px-8">
        <h4
          className={`${types.h2}  mx-auto text-center`}>
          We make your dreams come true
        </h4>

        <p
          className={`${types.smallP} mx-auto text-center mt-2`}>
          You can build your dreams in seconds with us in the fastest and easiest way.
          You just have to call us and we will be there for you.
        </p>
      </div>
      <div className="relative ">
        <div
          className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {data.home[0].features.map((feature) => (
            <FeatureCard key={feature.title} className={className[feature.className]} delay={feature.delay}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{<Components search={feature.skeleton}/>}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>)
  );
}

const FeatureCard = ({
  children,
  delay,
  className
}) => {
  return (
    (<InputAnimation delay={delay} className={cn(`p-4 sm:p-8 relative overflow-hidden max-lg:my-5`, className)}>
      {children}
    </InputAnimation>)
  );
};

const FeatureTitle = ({
  children
}) => {
  return (
    (<p
      className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>)
  );
};

const FeatureDescription = ({
  children
}) => {
  return (
    (<p
      className={cn(
        `${types.smallP} !text-start mx-0 mb-5`
      )}>
      {children}
    </p>)
  );
};
