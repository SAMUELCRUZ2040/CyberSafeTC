"use client";

import data from '@/json/data';
import types from "@/components/fontLetters";
import Image from "next/image";
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedSection({ section, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
          }
        }
      }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-14 items-center justify-center max-sm:mb-16"
    >
      {/* Imagen */}
      <motion.div
        className={`${isEven ? '' : 'sm:order-2'} relative group`}
        variants={{
          hidden: { opacity: 0, x: isEven ? 50 : -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        }}
      >
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#ffffff0b] "
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overlay gradient on hover */}
          <motion.div
            className="absolute"
          />
          
          <Image
            src={`${section.picture}`}
            alt={section.title}
            width={600}
            height={400}
            className="w-full h-[18rem] object-cover opacity-70"
          />
            <span className="absolute left-0 bottom-0 w-full h-full backdrop-blur-[0.8px] pointer-events-none" style={{ WebkitMaskImage: "linear-gradient(to top, black 0%, black 40%, transparent 100%)", maskImage: "linear-gradient(to top, black 0%, black 40%, transparent 100%)" }} />

          {/* Decorative corner elements */}
          <motion.div
            className="absolute top-4 right-4 w-16 h-16 "
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-16 h-16 "
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      {/* Descripción */}
      <motion.div
        className={`${isEven ? 'sm:order-1' : ''} flex flex-col gap-4 sm:gap-6 max-lg:justify-center max-lg:items-center`}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2
            }
          }
        }}
      >
        {/* Título */}
        <motion.h6
          className={`${types.h5} text-primaryColor`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
          }}
        >
          {section.title}
        </motion.h6>

        {/* Descripción */}
        <motion.p
          className={`${types.pHero} text-gray-600`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
          }}
        >
          {section.description}
        </motion.p>


        {/* CTA Button opcional */}
        <motion.button
          className={`${types.pHero } text-white w-40 flex justify-center items-center  text-center border border-[#ffffff56]  rounded-tr-3xl rounded-bl-3xl px-6 py-2 hover:scale-[1.06] transition-all`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.6 }
            }
          }}
          whileTap={{ scale: 1.05 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default function OurWork({ idPage }) {
  const searchOption = data.services[0].informationService;
  const inyectId = searchOption.find((iterator) => iterator.id === idPage);
  const resultInformation = inyectId.OurWork;
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const titleControls = useAnimation();

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleInView, titleControls]);

  return (
    <section className="flex justify-center items-center px-6 sm:px-24 mb-32">
      <div className="container max-w-7xl relative ">
        {/* Secciones animadas */}
        <div className="border-[1px] border-[#a0a0a025] rounded-3xl p-12 ">
          <div className="flex flex-col gap-2 mb-9 justify-center items-start text-start">
            <h6 className={`${types.h6} font-semibold`}>Conoce y se parte de <span className="text-primaryColor">nuestra historia</span></h6>
            <p className={`${types.pHero} max-w-3xl`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum maiores maxime reiciendis vero, earum temporibus repellendus modi facilis, aliquam nesciunt, deleniti accusamus dignissimos delectus enim quidem illum perferendis saepe vel.</p>
          </div>
          {resultInformation.map((section, index) => (
            <AnimatedSection key={index} section={section} index={index} />
          ))}
        </div>
        <div className={`z-50 background absolute left-0 bottom-0 w-full h-[20rem] gradient`}/>
      </div>
    </section>
  );
}