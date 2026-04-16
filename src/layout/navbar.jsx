"use client";

import data from "@/json/data";
import Image from "next/image";
import Link from "next/link";
import MobileNabvar from "./mobileNabvar";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import TransitionLink from "@/components/TransitionLink";
import types from "@/components/fontLetters";
import Contact from "@/app/contact/page";
import { AnimatePresence } from "framer-motion";
import ServicesDropdown from "@/components/ServicesDropdown";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const servicesArray = data.services?.[0]?.servicesLogo || [];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop !== 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-center align-center !z-[99]`}>
      <span className={cn(
        "absolute w-full h-full top-0 left-0 z-0 transition-all duration-500",
        isScrolled ? "bg-black/40 backdrop-blur-md opacity-100 shadow-xl" : "opacity-0"
      )} />
      
      <div className={cn(
        "relative container flex justify-between items-center transition-all duration-700",
        "my-4",
        isScrolled ? "2xl:max-w-6xl 2xl:px-5" : "2xl:max-w-7xl"
      )}>
        {/* Logo - Solo visible en Desktop (>lg) */}
<Link href="/" className="max-lg:hidden flex items-center">
    <Image 
        src="/icons/logo2.png" 
        width={100} 
        height={25}
        alt="logo" 
        priority={true}
        fetchPriority="high"
        loading="eager"
        className="object-contain w-[100px] h-[25px]" // Forzamos el tamaño en CSS también
    />
</Link>

        {/* Desktop Navigation */}
        <div className="flex gap-8 h-full justify-center items-center max-lg:hidden">
          {data.navigation.map((item, key) => {
            const isServices = item.name.toLowerCase().includes("serv");
            const navItemStyles = `${types.pHero} text-white/70 hover:text-white flex items-center gap-2 group px-2 transition-all duration-300 cursor-pointer`;

            return (
              <div 
                key={key}
                onMouseEnter={() => isServices && setIsServicesOpen(true)}
                onMouseLeave={() => isServices && setIsServicesOpen(false)}
                className="relative flex items-center h-full py-2"
              >
                {isServices ? (
                  <div className={navItemStyles}>
                    <Image
                      src="/icons/arrow.png"
                      width={10}
                      height={10}
                      alt="arrow"
                      className={cn(
                        "w-[9px] transition-transform duration-500",
                        (isServices && isServicesOpen) ? "rotate-180" : "group-hover:rotate-180"
                      )}
                    />
                    {item.name}
                  </div>
                ) : (
                  <TransitionLink href={item.url} className={navItemStyles}>
                    <Image
                      src="/icons/arrow.png"
                      width={10}
                      height={10}
                      alt="arrow"
                      className="w-[9px] group-hover:rotate-180 transition-transform duration-500"
                    />
                    {item.name}
                  </TransitionLink>
                )}

                <AnimatePresence>
                  {isServices && isServicesOpen && (
                    <ServicesDropdown services={servicesArray} />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop Button */}
        <div className="flex max-lg:hidden">
          <button 
            onClick={() => setIsContactOpen(true)} 
            className={`${types.pHero} text-white border border-white/10 bg-white/5 hover:bg-white/10 rounded-tr-2xl rounded-bl-2xl px-10 py-2.5 hover:scale-[1.05] transition-all duration-300 shadow-lg`}
          >
            Let's start?
          </button>
        </div>
        
        {/* Mobile Navbar - Pasa la función para abrir el contacto */}
        <MobileNabvar onOpenContact={() => setIsContactOpen(true)} />
      </div>

      {isContactOpen && <Contact onClose={() => setIsContactOpen(false)} />}
    </nav>
  );
}