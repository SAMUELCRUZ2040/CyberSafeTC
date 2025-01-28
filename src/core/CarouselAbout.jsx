import { Carousel } from "@/utils/carousel";
import Image from "next/image";

const CarouselAbout = () => {
  const images = [
    "american-airlines",
    "figma",
    "ford",
    "mercado-libre",
    "mercedes",
    "philips",
    "societe-generale",
    "vodafone",
  ];

  return (
    <Carousel
      value={"150"}
      percent={"xPercent"}
      duration={10} // duration
      direction={"gap-10 p-5 flex-row"} // cuadrar el espaciado de cada elemento y y de la cuadrilla y la direction con flex
      ubication={"justify-end items-center"} // cuadrar la ubicacion con flex 
    >
        {images.map((data, index) => (
          <div
            key={index}
            className={`w-[150px] h-[150px] flex gap-2 flex-shrink-0 transition-none`}
          >
              <Image
                src={`/image/about/carousel/${data}.svg`}
                width={500}
                height={500}
                alt={`twitter`}
                style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
    </Carousel>
  );
}

export default CarouselAbout;