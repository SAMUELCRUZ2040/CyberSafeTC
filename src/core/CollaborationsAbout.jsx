import { Carousel } from "@/components/carousel";
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
    <>
    <span className="absolute right-10 bottom-10 z-[999] font-black text-xl">
      Our collaborations recommend our projects
      <p className="text-sm font-normal">That's why the work we do is the best</p>
    </span>
    <div className="w-full h-full relative flex justify-center items-center">
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
                className={`w-[150px] h-[200px] flex gap-2 flex-shrink-0 transition-none`}
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
    </div>
    </>
  );
}