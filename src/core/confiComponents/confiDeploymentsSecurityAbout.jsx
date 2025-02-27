"use client"

import Counter from "@/app/about/components/counter";
import { cn } from "@/utils/cn";

export const ConfiDeploymentsSecurityAbout = ({number, delay, sign ,description, className}) => {
  return (
    <div className={cn(
      "border-2 w-[11rem] h-[11rem] rounded-full",
      "flex justify-center items-center flex-col text-center"
    , className)}>
      <div className="flex gap-2">
      <Counter
        number={number}
        delay={delay}
      />
      {sign}
      </div>
      <span>{description}</span>
    </div>
  );
};