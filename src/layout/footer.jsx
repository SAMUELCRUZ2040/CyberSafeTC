import Action from "./action";
import types from "@/components/fontLetters";
import { InputAnimation } from "@/components/inputAnimation";
import data from "@/json/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-lg:px-5">
      <Action />
      <hr className="mt-12" />
      <div className="flex flex-col items-center">
        <div className="container flex justify-between items-center pe-12 pt-12 mt-12 max-md:flex-col max-md:gap-12 max-md:pe-0">
          <div className="flex flex-col items-start justify-start max-md:items-center max-md:gap-4 max-md:justify-center">
            <InputAnimation delay={0.1}>
              <div
                className="w-[12rem] h-[3rem] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/icons/logo.webp)" }}
              />
            </InputAnimation>
            <InputAnimation delay={0.2}>
              <p className={types.smallP}>© copyright Startup 2024. All rights reserved.</p>
            </InputAnimation>
          </div>
          <div className="flex gap-12 max-md:flex-wrap max-md:justify-center max-md:w-full">
            {data.footer.map((dataFooter, index) => (
              <div className="flex flex-col gap-5" key={index}>
                {Object.entries(dataFooter).map(([key, value], idx) => (
                  <InputAnimation key={idx} delay={value[0].delay}>
                    <Link
                      href="/"
                      className={`${value[0].title ? "font-black !ps-1 !text-black" : ""} ${types.smallP} ps-2`}
                    >
                      {value[0].word}
                    </Link>
                  </InputAnimation>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="container w-full flex justify-center items-center">
          <h2 className="text-center uppercase mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff2f] dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 max-md:pb-8 max-md:text-[5rem]">
            let's start
          </h2>
        </div>
      </div>
    </footer>
  );
}
