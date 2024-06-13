import data from '@/json/data';
import Image from 'next/image';

export default function Summary() {
  return (
    <div className="flex justify-center align-center">
        <div className="container">
            <div className="title">
                <h2 className='text-4xl font-extrabold tracking-tight lg:text-5xl leading-none my-8'>¿Porque elegirnos?</h2>
            </div>
            <div className="grid grid-cols-3 gap-10 my-14 py-14 max-lg:grid-cols-1">
                {data.home[0].summary.map((dataSummary, keySummary)=>(
                    <div 
                        className="card border-2  p-4 rounded-lg"
                        key={keySummary}
                    >
                        <div className="w-full h-48 overflow-hidden flex justify-center items-center rounded-lg">
                            <Image  
                                src={`/image/home/summary/img-${dataSummary.picture}.webP`}
                                width={400}
                                height={400}
                                alt={`${dataSummary.alt}`}
                                style={{ width: "100%", height: "auto" }}
                                className='hover:scale-[1.1] transition ease-linear'
                            />
                        </div>
                        <h2 className='font-bold text-lg my-3'>{dataSummary.title}</h2>
                        <p className='text-md'>{dataSummary.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}