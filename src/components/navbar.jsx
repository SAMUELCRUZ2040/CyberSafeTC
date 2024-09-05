"use client"

import Link from "next/link";
import data from "@/json/data";
import Image from "next/image";
import MobileNabvar from "./responsiveDesigne/mobileNabvar";
import Combobox from "./Combobox";
import Delay from "./delay";
import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react";

export default  function Navbar() {
    const [ navbar, setNavbar ] = useState(false)
    useEffect(()=>{
        const scrolls = ()=>{
            if(window.scrollY > 0){
                setNavbar(true);
            }
            else{
                setNavbar(false)
            }
        }
        window.addEventListener("scroll", scrolls);
        
        return()=>{
            window.removeEventListener("scroll",  scrolls);
        }
    },[])
    return (   
    <nav className={`fixed top-0 left-0 w-full flex justify-center align-center py-4 z-[9999]`}>
        <div className={`flex justify-between items-center w-full container mx-32 px-8 py-4  max-lg:mx-4 max-lg:px-5 max-lg:py-1 my-5 ${ navbar ? "shadow-xl rounded-3xl backdrop-blur-sm bg-[#e6e6e631]" : "" }`}>
            <div className="logo">
                <Link href={"/"}>
                    <Image
                        src={`https://www.userogue.com/_next/image?url=%2Fimages%2Flogo-v3-dark%2Flogo.png&w=128&q=75`}
                        width={400}
                        height={400}
                        alt={`logo`}
                        style={{ width: "100%", height: "auto" }}
                    />
                </Link>
            </div>
            <ul className="list_item flex gap-7 h-full justify-center align-center max-md:hidden">
                {data.navigation.map((item, key)=> (
                    <li className={`item flex justify-center items-center gap-4 relative ${item.combobox && "service"} ${item.combobox == null && "bg-black p-4 rounded-2xl text-white" }`} key={key}>
                        <Delay 
                            href={item.url}
                            content={item.name}
                        />
                        {item.combobox && 
                            <span className="arrow rotate-90 transition ease-in-out">
                                <Image
                                    src={`/icons/arrow.svg`}
                                    width={400}
                                    height={400}
                                    alt={`start`}
                                    style={{ width: "7px", height: "auto" }}
                                />
                            </span>
                        }
                        {item.combobox && <Combobox />} 
                    </li>
                ))}
            </ul>
            <MobileNabvar />
        </div>
    </nav>
  )
}