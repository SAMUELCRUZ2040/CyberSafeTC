// components/descriptionServices.jsx
import data from "@/json/data";
import Image from "next/image";
import Link from "next/link";

export function DescriptionServices({ idService }) {
  const idInformation = data.home[0].summaryServices[1].informationServices[idService];

  return (
    <>
      <h2 className="text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight">{idInformation.title}</h2>
      <p className="ms-10 text-lg max-md:text-sm">{idInformation.description}</p>
      <Link 
        href={"/"}
        className="hover:scale-[1.04] shadow-xl py-4 px-12 border-2 rounded-xl text-xl font-bold"
      >
        Ver servicio +
      </Link>
    </>
  );
};

export function PictureServices({ idService }) {
  const idInformation = data.home[0].summaryServices[1].informationServices[idService];
  
  return (
      <Image 
        src={idInformation.picture}
        width={500}
        height={500}
        alt="asd"
        className="shadow-xl rounded-lg opacity-80 shadow-md border-2 p-5 grayscale-[50%] w-full h-full"
      />
  );
};
