import ConfiAnimationsAbout from "./confiComponents/confiAnimationsAbout";

export const AnimationsAbout = () => {
    return (
            <div className="flex justify-center" style={{position: 'relative', overflow: 'hidden', minHeight: '400px', maxHeight: '400px', width: '100%'}}>
                <span className=" font-black text-8xl absolute text-transparent mt-[8rem]" style={{WebkitTextStroke: "1px #000" }}>Dynamic</span>
                <ConfiAnimationsAbout
                    count={30}
                    gravity={1}
                    friction={1}
                    wallBounce={0.5}
                    followCursor={false}
                />
            </div>
    );
}
