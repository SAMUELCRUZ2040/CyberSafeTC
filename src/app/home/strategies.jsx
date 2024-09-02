import Delay from '@/components/delay';
import data from '@/json/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Strategies() {
    return (
        <div className='flex justify-center items-center flex-col max-lg:px-5 w-full h-full p-14'>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 container h-full">
                <div className="flex">
                    <div className="flex flex-col justify-center items-start gap-8">
                        <h2 className='text-5xl tracking-tight max-lg:text-3xl flex flex-col'>
                            <span>Un equipo que te</span>
                            <span>respalda, <span>24/7</span></span>
                        </h2>
                        {data.home[0].strategies.map((strategieData, keyCol)=>(
                            <div className="flex gap-5 items-center pe-[14rem] max-lg:p-0" key={keyCol}>
                                <Image
                                    src={`/icons/check.webp`}
                                    width={400}
                                    height={400}
                                    alt={`check`}
                                    style={{ width: "15px", height: "15px" }}
                                />
                                <p className='max-lg:text-sm text-justify'>{strategieData.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Image
                    src={`/image/home/person2.png`}
                    width={400}
                    height={400}
                    alt={`picture of strategies`}
                    className='w-full h-auto my-14'
                />
            </div>
            <div className="flex justify-center items-center gap-14 container max-lg:flex-col max-lg:gap-4">
                {data.home[0].subStrategies.map((subStrategiesData, keySubstrategies)=>(
                    <div 
                        className="p-4 flex flex-col gap-5" 
                        key={keySubstrategies}
                    >
                        <h2 
                            className='max-lg:text-lg text-2xl font-semibold'
                            >
                            {subStrategiesData.title}
                        </h2>
                        <p 
                            className='max-lg:text-sm'
                        >
                            {subStrategiesData.description}
                        </p>
                        <div className="flex justify-between">
                            <div className="flex gap-3">
                                {Array.from({ length: subStrategiesData.punctuation }, (_, index) => (
                                    <Image
                                        src={`/icons/start.webP`}
                                        width={400}
                                        height={400}
                                        alt={`start`}
                                        key={index}
                                        className='max-lg:w-[15px] h-auto w-[22px]'
                                    />
                                ))}
                            </div>
                            <Link href={"/"} className=''>
                                <Image
                                    src={`/icons/arrow.svg`}
                                    width={400}
                                    height={400}
                                    alt={`start`}
                                    className='max-lg:w-[8px] h-auto w-[10px]'
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container flex justify-center items-center flex-col gap-5 mt-14">
                <h2 className='max-lg:text-lg max-lg:font-bold croll-m-20 text-2xl font-semibold tracking-tight'>No esperes más, es el momento</h2>
                <Delay 
                    href={"/services"}
                    content={"empezemos ya +"}
                    className="transition-none max-lg:text-sm hover:scale-[1.04] shadow-xl py-4 px-12 border-2 rounded-xl text-xl font-bold text-center text-[#347faa]"
                />
            </div>
        </div>
    );
}