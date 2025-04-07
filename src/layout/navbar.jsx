"use client";

import data from "@/json/data";
import Image from "next/image";
import Link from "next/link";
import MobileNabvar from "./mobileNabvar";

export default function Navbar() {
  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-center align-center !z-[9999]`}>
      <div className={`container flex justify-between items-center my-10 py-5 max-md:px-8`}>
        <Link href="/">
          <div className="bg-cover bg-center bg-no-repeat w-[12rem] h-[3rem] max-md:w-[8rem] max-md:h-[2rem]" style={{backgroundImage : "url(/icons/logo.webp)"}} />
        </Link>
        <div className="list_item flex gap-7 h-full justify-center align-center max-md:hidden">
          {data.navigation.map((item, key) => (
            <Link
              key={key}
              href={item.url}
              className="flex justify-center items-center gap-2 text-xl text-neutral-900 group px-1"
            >
              <Image
                src="/icons/arrow.png"
                width={400}
                height={400}
                alt="arrow"
                className="w-[20px] group-hover:translate-y-[3px] transition-all"
              />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex max-md:hidden">
          <Link href={"/contact"} className={`flex justify-center items-center gap-2 text-xl bg-[#000000] text-white rounded-2xl px-11 py-3 hover:scale-[1.06] transition-all`} >Contact</Link>
        </div>
        <MobileNabvar />
      </div>
    </nav>
  );
}