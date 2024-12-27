import types from '@/components/fontLetters';
import TransitionLink from '@/components/transitionLink';
import data from '@/json/data';

export default  function FrontPage() {
  return (
    <section className='bg-cover bg-center bg-no-repeat bg-fixed' style={{backgroundImage : "url(/image/figure.png)"}}>
        <div className="grid grid-cols-3 container">
              <div className="title flex-col gap-8 flex items-start">
                <p className={`${types.p}`}>Somo un equipo impulsado por el </p>
                <h1 className={`${types.h1} w-full flex gap-8`}>
                  <span className={`w-full flex justify-start font-bold`}>
                  Enfoque la
                  </span>
                  <span className='w-ful  font-bold'>
                    Creatividad y
                  </span>
                  <span className='w-full items-center'>
                   La Innovación
                  </span>
                </h1>
                <p className={`${types.p}`}>Contactanos ahora mismo +</p>
                <TransitionLink 
                  href={"/"}
                  className="px-8 py-4 hover:scale-[1.05] transition-none bg-black text-white" >Ver nuestros proyectos +
                </TransitionLink>
              </div>
              <div className="w-[100%] h-[100%] bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url(/image/about/collage.webp)"}} />
              <div className="counter flex flex-col gap-4 items-center justify-between">
                  {data.about[0].counter.map((item, index) => (
                    <span key={index}>
                      
                    </span>
                  ))}
              </div>
        </div>
    </section>
  )
}
