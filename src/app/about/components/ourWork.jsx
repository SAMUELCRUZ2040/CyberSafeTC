import Link from "next/link";
import data from '@/json/data';

export default function OurWork() {
  return (
    <div className="flex justify-center items-center">
        <div className="container bg-[#f6f6f6]">
            <h2>¿Qué te gustaría crear?</h2>
            {data.about[0].outWork.map((data, _index)=>(
                <div 
                    className="grid grid-cols-2"
                    key={_index}
                >
                    <div
                    className="bg-cover-[80%] bg-no-repeat bg-center h-[40rem]"
                        style={{order : data.direction ? 1 : 2, backgroundImage : `url(/image/about/${data.picture}.png)`}}

                    />
                    <div
                        className="flex flex-col gap-5 items-start"
                        style={{order : data.direction ? 2 : 1}}
                    >
                        <div className="logo">{data.icon}</div>
                        <h3 className="text-5xl">{data.title}</h3>
                        <p className="text-lg">{data.description}</p>
                        <p className="text-md text-[#5c5c5c]">{data.miniDescription}</p>
                        <Link className="px-8 py-4 hover:scale-[1.05] transition-none bg-black text-white" href={"/"}>{data.submit}</Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}