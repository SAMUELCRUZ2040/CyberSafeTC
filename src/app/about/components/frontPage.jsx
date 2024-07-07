import Image from "next/image";
import Link from "next/link";

export default function FrontPage() {
  return (
    <section className="grid grid-cols-6 p-14 ">
      <div className="col-span-1">sssss</div>
      <div className="col-span-5 bg-blue h-full rounded-[4rem]  relative overflow-hidden">
        <span className="absolute bottom-0 left-0 z-50">
          <Image 
              src={`/image/wave.png`}
              width={500}
              height={500}
              alt={"wave"}
              priority={true}
              style={{ width: "100%", height: "auto" }}
          />
        </span>
        <span className="absolute top-0 right-0 z-50">
          <Image 
              src={`/image/wave 2.png`}
              width={500}
              height={500}
              alt={"wave"}
              priority={true}
              style={{ width: "100%", height: "auto" }}
          />
        </span>
        <video  className="absolute h-full w-full z-[-1]" autoPlay loop muted preload="auto">
          <source src="/video/large.mp4" type="video/mp4" />
          <track src="/video/large.vtt" kind="subtitles" srcLang="en" label="English" />
        </video>
        <div className="description absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="grid grid-cols-2 w-full h-auto">
              <div className="col-span-1 ps-[8rem] pb-[8rem]">
                  <h1 className="flex flex-col text-4xl lg:text-4xl xl:text-5xl 2xl:text-9xl flex flex-col  font-extrabold tracking-tight  leading-none">
                    <span>we</span>
                    <span>Build</span>
                    <span>Digital</span>
                  </h1>
                  <p className="text-lg my-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quisquam autem possimus adipisci odit nihil assumenda rerum aperiam cupiditate nesciunt sunt vero! Ullam sequi corporis consequuntur sit ex. Et, rem?</p>
                  <Link 
                  className="rounded-full bg-black p-3 px-14 text-white"
                  href={"/"}>Ver Mas</Link>
              </div>
              <div className="col-span-1 ">
                  <h1>asd</h1>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}