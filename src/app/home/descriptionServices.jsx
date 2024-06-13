// components/descriptionServices.jsx
import data from "@/json/data";
import Image from "next/image";
import Link from "next/link";

export function DescriptionServices({ idService }) {
  const idInformation = data.home[0].summaryServices[1].informationServices[idService];

  return (
    <>
      <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-7xl leading-none">{idInformation.title}</h2>
      <p className="ms-10 text-lg max-sm:text-sm">{idInformation.description}</p>
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
