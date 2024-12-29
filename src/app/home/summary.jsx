import types from '@/components/fontLetters';
import Cardsummary from '@/components/home/cardSummary';
import data from '@/json/data';


export default function Summary() {
  return (
    <div className="flex justify-center align-center max-lg:px-5">
        <div className="container flex items-center flex-col space">
            <div className="title">
                <h2 className={`${types.h2} ${types.flex} text-center flex flex-col`}>
                    <span  className='text-center'>¿Quieres saber <span className="text-[#347faa] text-center">porque somos</span></span>
                    <span className='font-semibold text-center'>La mejor opción para tu negocio?</span>
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