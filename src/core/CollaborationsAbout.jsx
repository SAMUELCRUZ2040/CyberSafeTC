import { Carousel } from "@/utils/carousel";
import Image from "next/image";

export const CollaborationsAbout = () => {
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

  const groups = [
    {
      percent: "xPercent",
      duration: 8,
      value: 160,
      direction: "gap-10 p-5 flex-row right-[110%]",
      ubication: "justify-end items-end"
    },
    {
      percent: "xPercent",
      duration: 8,
      value: -160,
      direction: "gap-10 p-5 flex-row left-[110%]",
      ubication: "justify-end items-start"
    }
  ]

  return (
    <span className="w-full h-full relative flex justify-center items-center">
      {groups.map((group, index) => (
        <Carousel
          percent={group.percent}
          duration={group.duration} // duration
          value={group.value}
          direction={group.direction} // cuadrar el espaciado de cada elemento y y de la cuadrilla y la direction con flex
          ubication={group.ubication} // cuadrar la ubicacion con flex
          key={index}
        >
            {images.map((data, index) => (
              <div
                key={index}
                className={`w-[150px] h-[190px] flex gap-2 flex-shrink-0 transition-none`}
              >
                  <Image
                    src={`/image/about/carousel/${data}.svg`}
                    width={300}
                    height={300}
                    alt={`twitter`}
                    style={{ width: "70%", height: "auto" }}
                />
              </div>
            ))}
        </Carousel>
      ))}
      <div className={`z-50 absolute right-96 -bottom-12 w-full h-[15rem] gradient rotate-90`}/>
      <div className={`z-50 absolute -right-96 -bottom-12 w-full h-[15rem] gradient -rotate-90`}/>
    </span>
  );
}