import Link from 'next/link'
import Image from 'next/image';

function FrontPage() {
  return (
    <section>
        <div className="grid grid-cols-2 w-full h-full ">
          <div className="description  w-full p-14 flex flex-col items-center justify-center">
              <h1 className='w-full flex flex-col text-[10rem] leading-none z-10'>
                <span className='w-full flex justify-start font-bold text-transparent' style={{WebkitTextStroke : "4px #000"}}>
                  Fashion
                </span>
                <span className='w-ful flex justify-center font-bold'>
                  Never
                </span>
                <span className='w-full flex justify-between items-center'>
                  <span  className='w-[14rem] h-[14rem] bg-cover bg-no-repeat bg-center animate-spin' style={{backgroundImage: "url(/image/about/letterRotate.png)", animationDirection: "reverse", animationDuration : "20s"}}/>
                  sleeps
                </span>
              </h1>
              <p className='py-2 w-[40%] mt-5 font-semibold text-lg relative before:block before:absolute before:w-[4px] before:-left-9 before:h-full before:bg-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,e asperiores assumenda aliquid delectus corporis ipsum dolor temporibus sed dicta itaque ea!</p>
              <Link href={"/"} className='w-full mt-10 text-2xl font-bold flex items-center justify-start gap-3'>
                <p>Descubrelo todo</p>
                <Image
                  src={`/image/arrowLong.png`}
                  width={100}
                  height={100}
                  alt={`check`}
                  style={{ width: "3rem", height: "auto" }}
                  className='relative top-[6px]'
                />
               </Link>
          </div>
          <div className="ilustration flex items-center justify-center z-0 pt-14 bg-cover">
              <div className="w-[90%] h-[70vh]  right-24 bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url(/image/about/collage.png)"}} />
          </div>
        </div>
    </section>
  )
}

export default FrontPage