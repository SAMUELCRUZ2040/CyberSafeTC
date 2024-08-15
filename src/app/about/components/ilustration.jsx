import data from '@/json/data';
import Link from 'next/link';

export default function Ilustration() {
  return (
    <div className="flex justify-center items-center flex-col">
        {data.about[0].ilustration.map((data, _index)=>(
            <div 
                key={_index} 
                className="w-[100vw] h-[100vh] sticky top-0 bg-slate-600 flex justify-center items-center flex-col bg-cover bg-no-repeat bg-center text-6xl font-extrabold gap-5 text-white" 
                style={{backgroundImage : `url(/image/about/projects${data.picture}-min.jpg)`}}
            >
                <h2>{data.word}</h2>
                <Link href={"#"} className='underline decoration-4 text-3xl'>{data.wordSrc}</Link>
            </div>
        ))}
    </div>
  )
}