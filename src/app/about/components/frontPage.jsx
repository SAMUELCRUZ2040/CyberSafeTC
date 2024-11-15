import TransitionLink from '@/components/transitionLink';

export default  function FrontPage() {
  return (
    <section className='bg-cover bg-center bg-no-repeat bg-fixed' style={{backgroundImage : "url(/image/figure.png)"}}>
        <div className="grid grid-cols-2 w-full h-full ">
          <div className="flex items-center justify-center z-0 pt-14 bg-cover">
              <div className="w-[100%] h-[90vh]  right-24 bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url(/image/about/collage.webp)"}} />
          </div>
          <div className="w-full p-14 flex flex-col items-center justify-center">
              <h1 className='w-full flex flex-col text-[8rem] leading-none z-10 gap-5'>
                <span className='w-full flex justify-start font-bold text-transparent' style={{WebkitTextStroke : "4px #000"}}>
                  Agilidad
                </span>
                <span className='w-ful flex justify-center font-bold'>
                  Ingenio
                </span>
                <span className='w-full flex justify-end items-center'>
                  Visión
                </span>
              </h1>
              <p className='py-2 w-[40%] mt-5  text-lg relative before:block before:absolute before:w-[1px] before:-left-9 before:h-full before:bg-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,e asperiores assumenda aliquid delectus corporis ipsum dolor temporibus sed dicta itaque ea!</p>
              <TransitionLink
                className='w-full mt-10 text-2xl font-bold flex items-center justify-start gap-3'
                href={"/"} 
              >
                Descubrelo todo {`>`}
              </TransitionLink>
          </div>
        </div>
    </section>
  )
}