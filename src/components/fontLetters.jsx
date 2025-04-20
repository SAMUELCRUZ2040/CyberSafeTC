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
    textDoubleUp: "bg-lime-400 p-5 px-14 text-8xl rounded-xl rotate-12 -translate-x-16 -translate-y-7",
    textDoubleDown: "bg-violet-400 p-5 px-14 text-6xl rounded-xl -rotate-6 translate-y-6",
    animation: {
        initial: { y: 40, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: {
            duration: 0.4,
            ease: "easeOut",
            delay: 0.1
        }
    },
    animationScale: {
        viewport : { once: true },
        initial : { scale: 0, opacity: 0 },
        whileInView : { scale: 1, opacity: 1 }
    },
    animationTranslate : {
        viewport : { once: true },
        initial : { y: 90, opacity: 0 },
        whileInView : { y: 0, opacity: 1 }
    },
};

export default types;