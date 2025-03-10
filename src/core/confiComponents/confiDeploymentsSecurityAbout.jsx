"use client"

import Counter from "@/components/counter";
import { cn } from "@/utils/cn";

export const ConfiDeploymentsSecurityAbout = ({number, delay, sign ,description, className, color, borderColor}) => {
  return (
    <div className={cn(
      `border-2 w-[13rem] h-[13rem] rounded-full mt-[6rem]`,
      "flex justify-center items-center flex-col text-center font-bold text-3xl"
    , className)} style={{boxShadow : `${color}`, borderColor: `${borderColor}`} }>
      <div className="flex justify-center items-center">
      + <Counter
        number={number}
        delay={delay}
      />
      {sign}
      </div>
      <span className="font-normal text-lg">{description}</span>
    </div>
  );
};