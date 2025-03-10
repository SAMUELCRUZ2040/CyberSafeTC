const types = {
    h1: "max-lg:text-center text-7xl max-sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl flex flex-col font-bold tracking-tight leading-none sf-text",
    h2: "max-lg:text-center max-md:text-3xl lg:text-6xl max-lg:text-start text-7xl font-normal tracking-tight leading-none",
    h3: "max-lg:text-center text-5xl tracking-tight max-lg:text-3xl",
    h4: "max-lg:text-center text-xl  xl:text-3xl font-semibold",
    p: "max-lg:text-center text-xl me-4 max-lg:text-sm transition-none",
    buttom: "max-lg:text-lg text-2xl font-semibold",
    flexCenter: "justify-center items-center",
    animation: {
        initial: { y: 40, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: {
            duration: 0.4,
            ease: "easeOut",
            delay: 0.1
        }
    }
};

export default types;
