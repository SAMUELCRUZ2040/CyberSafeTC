import Image from "next/image";
import { Carousel } from "./carousel";

export const CollaborationsAbout = () => {
  const images = [
    "american-airlines", "figma", "ford", "mercado-libre",
    "mercedes", "philips", "societe-generale", "vodafone",
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center gap-10 bg-[#000] rounded-xl border border-white/5 py-12 overflow-hidden">
      
      {/* Máscaras laterales en negro puro #000 */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#000] via-[#000]/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#000] via-[#000]/80 to-transparent z-10" />

      {/* Fila 1 */}
      <Carousel duration={10}>
        {images.map((data, index) => (
          <LogoItem key={`f1-${index}`} src={`/image/about/carousel/${data}.svg`} />
        ))}
      </Carousel>

      {/* Fila 2 */}
      <Carousel duration={15} reverse={true}>
        {images.map((data, index) => (
          <LogoItem key={`f2-${index}`} src={`/image/about/carousel/${data}.svg`} />
        ))}
      </Carousel>

      {/* Detalle decorativo */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[9px] text-white/10 uppercase tracking-[0.6em] whitespace-nowrap">
        Network_Nodes // Trusted_Partners
      </div>
    </div>
  );
};

const LogoItem = ({ src }) => (
  <div className="group relative flex items-center justify-center w-[140px] h-[50px] opacity-30 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0 hover:scale-110">
    <Image
      src={src}
      width={110}
      height={50}
      alt="Partner logo"
      className="object-contain"
    />
    <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);