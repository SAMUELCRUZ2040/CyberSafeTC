import Cardsummary from '@/components/home/cardSummary';
import data from '@/json/data';


export default function Summary() {
  return (
    <div className="flex justify-center align-center max-lg:px-5">
        <div className="container flex items-center flex-col">
            <div className="title">
                <h2 className='max-lg:text-3xl max-lg:text-start text-7xl font-normal tracking-tight leading-none flex flex-col text-center '>
                    <span>¿Quieres saber <span className="text-[#347faa]">porque somos</span> <span className='font-semibold lg:hidden xl:hidden'>La mejor opción para tu negocio?</span></span>
                    <span className='font-semibold max-lg:hidden'>La mejor opción para tu negocio?</span>
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-5 my-14 py-14 max-lg:grid-cols-1 max-lg:my-0">
                {data.home[0].summary.map((dataSummary, keySummary)=>(
                    <Cardsummary 
                        dataSummary={dataSummary}
                        key={keySummary}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}