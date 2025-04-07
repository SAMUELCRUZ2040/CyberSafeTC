import types from "@/components/fontLetters";
import { TooltipHome } from "@/core/tooltipHome";
import Link from "next/link";

export default function Action() {
  return (
    <div className="flex items-center justify-center">
      <div className="container grid grid-cols-2 max-md:grid-cols-1">
        <div className="flex items-start flex-col justify-start gap-6 max-md:items-center max-md:text-center max-md:gap-9">
          <h3 className={`${types.h3} flex flex-col items-start justify-start text-start max-md:items-center`}>
            <span >Host your websites</span>
            <span >with zero friction today.</span>
          </h3>
          <p className={`${types.smallP} text-start w-80 max-md:text-center`}>
            Experience lightning-fast hosting with unparalleled reliability. Our cutting-edge infrastructure ensures your website stays online 24/7, with 99.9% uptime guaranteed.
          </p>
          <div className="flex flex-col items-start max-md:items-center ">
            <TooltipHome />
            <p className={`${types.smallP} max-md:text-center`}>Trusted by 27,000+ developers</p>
          </div>
        </div>
        <div className=" flex items-center justify-end max-md:justify-center max-md:mt-8">
          <Link href={"/"} className="py-5 px-16 bg-[#0000000f] border-2 rounded-xl shadow-xl hover">
              let's meet
          </Link>
        </div>
      </div>
    </div>
  )
}
