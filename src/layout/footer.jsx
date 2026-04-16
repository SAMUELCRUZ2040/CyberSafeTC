import Image from "next/image";
import Action from "./action";
import data from "@/json/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <Action />
      <div className="w-full px-6 lg:px-12">
        <div className="container mx-auto py-12 md:py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            
            {/* Left - Logo & Copyright */}
            <div className="flex flex-col items-start gap-4 w-full lg:w-auto max-lg:items-center max-lg:text-center">
                <div className="relative"> 
                        <Image 
                            src="/icons/logo2.png" 
                            width={100} height={40} 
                            alt="logo" 
                            className="w-auto h-auto max-h-[25px]" // LOGO MÁS PEQUEÑO
                        />
                </div>
                <p className="text-white/30 text-xs">
                  © copyright Startup 2024. All rights reserved.
                </p>
            </div>

            {/* Right - Nav columns */}
            <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16 justify-center lg:justify-center w-full lg:w-auto">
              {data.footer.map((dataFooter, index) => (
                <div className="flex flex-col gap-3 items-center min-w-[120px]" key={index}>
                  {Object.entries(dataFooter).map(([key, value], idx) => (
                      <Link
                        href="/"
                        key={idx}
                        className={`
                          text-sm transition-colors duration-200
                          ${
                            value[0].title
                              ? "text-white/60 font-bold uppercase tracking-wider text-xs mb-1 pointer-events-none"
                              : "text-white/40 hover:text-white/80"
                          }
                        `}
                      >
                        {value[0].word}
                      </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big text */}
        <div className="w-full flex justify-center items-center overflow-hidden">
          <p className="mt-8 md:mt-12 pb-8 bg-gradient-to-b from-neutral-600 to-transparent bg-clip-text text-center text-[clamp(3rem,18vw,13rem)] font-bold text-transparent leading-none tracking-tighter select-none">
            LET'S START
          </p>
        </div>
      </div>
    </footer>
  );
}