// components/descriptionServices.jsx
import data from "@/json/data";
import Image from "next/image";

export function DescriptionServices({ idService }) {
  const idInformation = data.home[0].summaryServices[1].informationServices[idService];

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl leading-none">{idInformation.title}</h1>
      <p className="text-2xl pt-8 mt-8">{idInformation.description}</p>
    </>
  );
};

export function PictureServices({ idService }) {
  const idInformation = data.home[0].summaryServices[1].informationServices[idService];
  
  return (
    <>
      <Image 
        src={idInformation.picture}
        width={500}
        height={500}
        style={{width : "100%", height : "auto"}}
        alt="asd"
      />
    </>
  );
};
