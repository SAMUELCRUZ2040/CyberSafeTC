import Image from "next/image";
import createGlobe from "cobe";
import {useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const SkeletonOne = () => {
    return (
      (<div className="relative flex gap-10 h-full">
        <div
          className="w-full  mx-auto dark:bg-neutral-900 shadow-2xl group h-full">
          <div className="bg-cover bg-center bg-no-repeat w-full h-full max-lg:h-[20rem]" style={{backgroundImage  : "url(/image/home/atention_1.jpg)"}} />
        </div>
        <div
          className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-[#f6f6f6] dark:from-black via-[#f6f6f6] dark:via-black to-transparent w-full pointer-events-none" />
        <div
          className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-[#f6f6f6] dark:from-black via-transparent to-transparent w-full pointer-events-none" />
      </div>)
    );
  };

  export const SkeletonTwo = () => {
    const images = [
      "/image/home/atention_2.jpg",
      "/image/home/atention_3.jpg",
      "/image/home/atention_4.jpg",
    ];

    const imageVariants = {
      whileHover: {
        scale: 1.1,
        rotate: 0,
        zIndex: 100,
      },
      whileTap: {
        scale: 1.1,
        rotate: 0,
        zIndex: 100,
      },
    };
    return (
      (<div
        className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden max-lg:items-center">
        {/* TODO */}
        <div className="flex flex-row -ml-20">
          {images.map((image, idx) => (
            <motion.div
              variants={imageVariants}
              key={"images-first" + idx}
              whileHover="whileHover"
              whileTap="whileTap"
              className="rounded-xl -mr-4 mt-4 p-1 bg-[#f6f6f6] dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden transition-none">
              <Image
                src={image}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 object-cover flex-shrink-0 max-lg:h-[8rem] max-lg:w-[8rem]" />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-row">
          {images.map((image, idx) => (
            <motion.div
              key={"images-second" + idx}
              variants={imageVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              className="rounded-xl -mr-4 mt-4 p-1 bg-[#f6f6f6] dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden transition-none">
              <Image
                src={image}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 object-cover flex-shrink-0 max-lg:h-[8rem] max-lg:w-[8rem]" />
            </motion.div>
          ))}
        </div>
        <div
          className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-[#f6f6f6] dark:from-black to-transparent  h-full pointer-events-none" />
        <div
          className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-[#f6f6f6] dark:from-black  to-transparent h-full pointer-events-none" />
      </div>)
    );
  };

  export const SkeletonThree = () => {
    return(
      <div className="bg-cover bg-center bg-no-repeat w-full h-full opacity-80 max-lg:h-[20rem]"  style={{backgroundImage : "url(/image/home/atention_6.jpg)"}}/>
    )
  };
  
  export const SkeletonFour = () => {
    return (
      (<div
        className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-14 my-12 py-12">
        <Globe className="absolute right-0 -top-28 md:-right-10" />
      </div>)
    );
  };
  export const Globe = ({
    className
  }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
      let phi = 0;

      if (!canvasRef.current) return;

      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 0.1, // Sin efecto de oscurecimiento
        diffuse: 2, // Más difusión de luz
        mapSamples: 26000,
        mapBrightness: 19, // Aumenta el brillo del mapa
        baseColor: [1, 1, 1], // Blanco puro
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          // longitude latitude
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        },
      });

      return () => {
        globe.destroy();
      };
    }, []);

    return (
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        className={className} />
    );
  };
