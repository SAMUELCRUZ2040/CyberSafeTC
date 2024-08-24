import data from '@/json/data';

export default function Average() {
  return (
    <div className="flex justify-center items-center bg-[#92c2c217] py-[10rem] my-14 max-lg:px-5 max-lg:py-10">
        <div className="container">
            <h2 className="max-lg:text-3xl max-lg:text-start text-center text-7xl tracking-tight flex flex-col">
                <span>Nos Enfocamos en la <span className="font-bold text-[#347faa]">Eficiencia y la Calidad</span></span>
                <span><span className="font-bold text-[#347faa]">En cada</span> Proyecto</span>
            </h2>
            <div className="gap-[7rem] flex items-center justify-center py-[6rem] max-lg:flex-col">
                {data.home[0].average.map((dataAverage, keyAverage)=>(
                    <div
                        className='text-center'
                        key={keyAverage}
                    >
                        <h2 className='text-[#347faa] text-center text-7xl tracking-tight max-lg:text-4xl mb-4'>+ {dataAverage.number}</h2>
                        <p className='max-lg:text-sm max-lg:text-justify text-md'>{dataAverage.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div> 
  )
}
