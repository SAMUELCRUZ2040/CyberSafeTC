"use client"

import data from "@/json/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileNabvar() {
    const [state, setstate] = useState({
        toggle : false,
    })

    const toggleActive = ()=>{
        setstate(prevState =>({
            ...prevState,
            toggle: !prevState.toggle,
        }))
    }

  return (
    <>
        <div className="tooltip fixed right-12 top-12 z-50 max-md:flex hidden cursor-pointer justify-center items-center" 
            onClick={toggleActive}
        >
            s
            <Image
                src={"/icons/enter.webP"}
                width={400}
                height={400}
                alt={`logo`}
                style={{ width: "100%", height: "auto" }}
                className={`absolute ${state.toggle ?  "hidden" : "flex"  }`}
            />
            <Image
                src={"/icon/exit.webP"}
                width={400}
                height={400}
                alt={`logo`}
                style={{ width: "100%", height: "auto" }}
                className={`absolute ${state.toggle ?  "flex" : "hidden"  }`}
            />
        </div>
        <div className={`${state.toggle ? "flex" : "hidden" } flex flex-col bg-white fixed top-0 left-0 h-full w-full p-8 overflow-hidden z-40`}>
            <div className="w-full">
                <Link 
                    onClick={toggleActive}
                    href={"/"}
                >
                    <Image
                        src={`https://www.userogue.com/_next/image?url=%2Fimages%2Flogo-v3-dark%2Flogo.png&w=128&q=75`}
                        width={400}
                        height={400}
                        alt={`logo`}
                        style={{ width: "10rem", height: "auto" }}
                    />
                </Link>
            </div>
            <ul className="list_item  flex justify-center flex-col items-start gap-14 py-14">
                {data.navigation.map((item, key)=> (
                    <li 
                    style={{WebkitTextStroke : "1px #000000b3", color : "transparent"}}
                    className="item flex gap-5 text-4xl font-bold hover:translate-x-1 transition-75" key={key}
                    onClick={toggleActive}
                    >
                        <Image
                            src={`/icons/arrow.svg`}
                            width={400}
                            height={400}
                            alt={`start`}
                            style={{ width: "15px", height: "auto" }}
                        />
                        <Link className=" hover:text-[#000000b3] transition-75" href={`${item.url}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}