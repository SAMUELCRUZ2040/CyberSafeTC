"use client"

import Link from "next/link";
import data from "@/json/data";
import Image from "next/image";
import MobileNabvar from "./responsiveDesigne/mobileNabvar";
import Combobox from "./Combobox";
import Delay from "./delay";
import { motion, useScroll } from "framer-motion"

export default  function Navbar() {
    const { scrollYProgress } = useScroll();

    return (   
    <motion.nav className="fixed top-0 left-0 w-full flex justify-center align-center z-50 py-4">
        <motion.div style={{ scaleX: scrollYProgress }} />  
        <div className="flex justify-between items-center w-full container px-10 py-2 max-lg:px-5">
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
    </motion.nav>
  )
}