"use client"

import data from "@/json/data";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { useScreenStore } from "@/hooks/useScreenStore";
import types from "@/components/fontLetters";
import * as LucideIcons from "lucide-react";
import Image from "next/image";

export default function MobileNabvar({ onOpenContact }) {
    const width = useScreenStore((state) => state.width)
    const [isOpen, setIsOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);

    const servicesArray = data.services?.[0]?.servicesLogo || [];

    // Bloquear scroll del body cuando el menú está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        if (width > 1024) setIsOpen(false);
    }, [width]);

    // Variantes de animación
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <>
            {/* --- BARRA SUPERIOR FIJA (Cerrada) --- */}
            {/* pointer-events-none aquí para no bloquear la web */}
            <div className="fixed top-0 left-0 w-full z-[10001] lg:hidden px-6 pt-4 flex justify-between items-center pointer-events-none">
                
                {/* Logo alineado a la izquierda, más pequeño */}
                <div className="flex items-center pointer-events-auto"> 
                    <Link href="/">
                        <Image 
                            src="/icons/logo2.png" 
                            width={100} height={40} 
                            alt="logo" 
                            className="w-auto h-auto max-h-[25px]" // LOGO MÁS PEQUEÑO
                        />
                    </Link>
                </div>

                {/* Botones alineados a la derecha, más compactos */}
                <div className="flex items-center gap-2 pointer-events-auto">
                    <button 
                        onClick={onOpenContact} 
                        className={cn(
                            types.pHero,
                            "text-white text-[9px] font-medium tracking-[0.15em] uppercase",
                            "bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full active:scale-95 transition-all shadow-xl" // BOTÓN MÁS PEQUEÑO
                        )}
                    >
                        Let&apos;s start?
                    </button>

                    <button 
                        onClick={() => { setIsOpen(!isOpen); setShowServices(false); }}
                        className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full active:scale-95 transition-all shadow-xl" // BOTÓN MÁS PEQUEÑO
                    >
                        <span className={`${types.pHero} text-white text-[10px] font-medium tracking-[0.2em] uppercase`}>
                            {isOpen ? "Close" : "Menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* --- MENÚ DESPLEGABLE --- */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[9999]"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-screen w-[85%] sm:w-[400px] bg-[#0A0A0A] z-[10000] shadow-2xl overflow-y-auto"
                        >
                            {/* pt-32 para que el contenido empiece debajo de la barra fija compacta */}
                            <div className="flex flex-col min-h-full justify-between p-10 pt-32 pb-16">
                                <motion.nav variants={containerVariants} initial="hidden" animate="show" className="w-full">
                                    <ul className="flex flex-col gap-8 items-start text-left">
                                        {data.navigation.map((item, key) => {
                                            const isServices = item.name.toLowerCase().includes("serv");
                                            return (
                                                <motion.li key={key} variants={itemVariants} className="w-full">
                                                    {isServices ? (
                                                        <div className="flex flex-col items-start">
                                                            <button 
                                                                onClick={() => setShowServices(!showServices)}
                                                                className={cn(types.pHero, "text-4xl font-light text-white uppercase flex items-center gap-3")}
                                                            >
                                                                {item.name}
                                                                <LucideIcons.Plus className={cn("w-5 h-5 opacity-30 transition-transform duration-500", showServices && "rotate-45")} />
                                                            </button>
                                                            <AnimatePresence>
                                                                {showServices && (
                                                                    <motion.div 
                                                                        initial={{ height: 0, opacity: 0 }}
                                                                        animate={{ height: "auto", opacity: 1 }}
                                                                        exit={{ height: 0, opacity: 0 }}
                                                                        className="overflow-hidden flex flex-col gap-5 mt-6 ml-1 border-l border-white/10 pl-5"
                                                                    >
                                                                        {servicesArray.map((service, sKey) => (
                                                                            <Link key={sKey} href={service.url} onClick={() => setIsOpen(false)}>
                                                                                <span className="text-white/80 text-base font-normal block">{service.title}</span>
                                                                                <span className="text-white/30 text-[9px] uppercase tracking-widest mt-1 block">{service.miniDescription}</span>
                                                                            </Link>
                                                                        ))}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    ) : (
                                                        <Link href={item.url} onClick={() => setIsOpen(false)} className={cn(types.pHero, "text-4xl font-light text-white uppercase")}>
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </motion.li>
                                            );
                                        })}
                                    </ul>
                                </motion.nav>

                                {/* Footer Social */}
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col gap-4 mt-20 items-start">
                                    <span className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">Socials</span>
                                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-white/40 text-[10px] font-bold uppercase">
                                        <span>Instagram</span><span>Vimeo</span><span>LinkedIn</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}