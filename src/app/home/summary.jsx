import data from '@/json/data';
import Image from 'next/image';

export default function Summary() {
  return (
    <div className="flex justify-center align-center">
        <div className="container">
            <div className="grid grid-cols-3 gap-10">
                {data.home[0].summary.map((dataSummary, keySummary)=>(
                    <div className="card border-2  p-4 rounded-lg">
                        <div className="w-full h-48 overflow-hidden flex justify-center items-center rounded-lg">
                            <Image  
                                src={dataSummary.picture}
                                width={400}
                                height={400}
                                alt="Picture of the author"
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