import Image from "next/image";

export default function FrontPage() {
  return (
    <section className="grid grid-cols-6 p-14 ">
      <div className="col-span-1">sssss</div>
      <div className="col-span-5 bg-blue h-full rounded-[4rem]  relative overflow-hidden">
        <span className="absolute bottom-0 left-0">
          <Image 
              src={`/image/wave.png`}
              width={500}
              height={500}
              alt={"wave"}
              priority={true}
              style={{ width: "100%", height: "auto" }}
          />
        </span>
        <span className="absolute top-0 right-0">
          <Image 
              src={`/image/wave 2.png`}
              width={500}
              height={500}
              alt={"wave"}
              priority={true}
              style={{ width: "100%", height: "auto" }}
          />
        </span>
        <video width="100%" height="100%" autoPlay loop muted preload="auto">
          <source src="/video/large.mp4" type="video/mp4" />
          <track src="/video/large.vtt" kind="subtitles" srcLang="en" label="English" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}