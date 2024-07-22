import data from '@/json/data';

export default function Average() {
  return (
    <div className="flex justify-center items-center bg-[#92c2c217] py-[10rem] my-14">
        <div className="container">
            <h2 className="text-center text-7xl tracking-tight max-lg:text-5xl flex flex-col">
                <span>Nuestros clientes crean <span className="font-bold text-[#347faa]">experiencias</span></span>
                <span><span className="font-bold text-[#347faa]">de contenido </span>valiosas</span>
            </h2>
            <div className=" gap-[7rem] flex items-center justify-center py-[6rem] max-lg:flex-col">
                {data.home[0].average.map((dataAverage, keyAverage)=>(
                    <div
                        className='text-center'
                        key={keyAverage}
                    >
                        <h2 className='text-[#347faa] text-center text-7xl tracking-tight max-lg:text-5xl mb-4'>{dataAverage.number}</h2>
                        <p className='text-md'>{dataAverage.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div> 
  )
}
