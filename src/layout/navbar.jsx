"use client";

import data from "@/json/data";
import Image from "next/image";
import Link from "next/link";
import MobileNabvar from "./mobileNabvar";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      if (scrollTop === 0) {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Llamamos una vez por si el usuario ya ha hecho scroll
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-center align-center !z-[9999] ${isScrolled ? "max-lg:px-3" : "" }`}>
      <div className={`relative container flex justify-between items-center my-10 py-6 max-md:px-8 max-md:py-2 ${isScrolled ? "px-8 rounded-3xl w-1/2 max-2xl:w-2/3 max-xl:w-3/4 max-lg:w-full" : "" }`}>
        <div>
        <span className={`${isScrolled ? "w-full h-full top-0 left-0 absolute backdrop-blur-[9.5px] bg-[#e6e6e67c] z-[-1] rounded-3xl" : ""}`} />
          <Link href="/">
            <div className="bg-cover bg-center bg-no-repeat w-[8rem] h-[2rem] max-md:w-[8rem] max-md:h-[2rem]" style={{backgroundImage : "url(/icons/logo.webp)"}} />
          </Link>
        </div>
        <div className="list_item flex gap-7 h-full justify-center align-center max-md:hidden">
          {data.navigation.map((item, key) => (
            <Link
              key={key}
              href={item.url}
              className={`flex justify-center items-center gap-2 text-xl text-neutral-900 group px-1 !z-[9999]`}
            >
              <Image
                src="/icons/arrow.png"
                width={400}
                height={400}
                alt="arrow"
                className="w-[20px] group-hover:translate-y-[3px] transition-all !z-[9999]"
              />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex max-md:hidden">
          <Link href={"/contact"} className={`flex justify-center items-center gap-2 text-xl bg-[#000000] text-white rounded-tr-xl rounded-bl-xl px-11 py-3 hover:scale-[1.06] transition-all`} >Let's start?</Link>
        </div>
        <MobileNabvar />
      </div>
    </nav>
  );
}