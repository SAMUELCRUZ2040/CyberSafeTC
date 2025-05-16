const types = {
    h1: "max-lg:text-center text-7xl max-sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl flex flex-col font-bold tracking-tight leading-none sf-text",
    h2: "text-3xl lg:text-5xl lg:leading-tight max-w-5xl tracking-tight font-light text-black dark:text-white",
    h3: "max-lg:text-center text-5xl tracking-tight max-lg:text-3xl",
    h4: "max-lg:text-center text-lg  xl:text-xl font-semibold",
    p: "max-lg:text-center text-xl me-4 max-lg:text-sm transition-none",
    smallP : "text-sm lg:text-base  max-w-2xl  text-neutral-500  font-normal dark:text-neutral-300",
    extraP : "text-sm lg:text-base  max-w-2xl",
    buttom: "max-lg:text-lg text-2xl font-semibold",
    flexCenter: "justify-center items-center",
    neonLettersUp: "bg-gradient-to-r from-sky-400 to-cyan-400 p-5 rounded-xl",
    neonLettersCenter: "bg-gradient-to-r from-green-400 to-lime-400 absolute -right-24 -top-14 p-5 px-12 rounded-lg",
    neonLettersDown: "bg-gradient-to-r from-orange-400 to-yellow-400 max-lg:-right-60 absolute -right-48 top-2 p-6 px-12 rounded-lg",
    animation: {
        initial: { y: 40, },
        whileInView: { y: 0, opacity: 1 },
        transition: {
            duration: 0.4,
            ease: "easeOut",
        }
    },
    animationScale: {
        viewport : { once: true },
        initial : { scale: 0, opacity: 0 },
        whileInView : { scale: 1, opacity: 1 },
        transition: {
            duration: .8,
            ease: "easeOut",
        }
    },
    animationTranslate : {
        viewport : { once: true },
        initial : { y: 90, opacity: 0 },
        whileInView : { y: 0, opacity: 1 }
    },
    viewportObject: {
        viewport: { once: true },
        initial: { rotate: 0, scale: 0.7, y: -90, x: 490},
        whileInView: {
          rotate: [
            0, 50, // animación hacia adelante
            46, 50, 48, 50, // rebotes en el pico
            50, 0, // regreso
            0, 0 // pausa opcional en el final
          ],
          scale: [
            0.7, 1,
            1, 1, 1, 1,
            1, 0.7,
            0.7, 0.7 // pausa visual
          ],
          
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          repeatDelay: 1
        }
      },
      servicesAnimation : {
        viewport : { once: true },
        initial : {  y: 50, opacity: 0 },
        whileInView : {  y: 0, opacity: 1 },
      }
};

export default types;