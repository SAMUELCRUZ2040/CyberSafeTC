import Delay from '@/components/delay';
import data from '@/json/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Strategies() {
    return (
        <div className='flex justify-center items-center flex-col mb-[15rem]'>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 container h-full space-sm">
                <div className="information flex h-full">
                    <div className="dataStrategies flex flex-col justify-center items-start gap-8">
                        <h2 className='text-5xl tracking-tight max-lg:text-4xl flex flex-col'>
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
                                <p>{strategieData.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex">
                        <Image
                            src={`/image/home/person2.png`}
                            width={800}
                            height={800}
                            alt={`check`}
                            style={{ width: "100%", height: "auto" }}
                        />
                </div>
            </div>
            <div className="flex justify-center items-center gap-14 container max-lg:flex-col">
                {data.home[0].subStrategies.map((subStrategiesData, keySubstrategies)=>(
                    <div className="p-4 flex flex-col gap-5" key={keySubstrategies}>
                        <h2 className='text-2xl font-semibold'>{subStrategiesData.title}</h2>
                        <p>{subStrategiesData.description}</p>
                        <div className="flex justify-between">
                            <div className="flex gap-3 pb-10">
                                {Array.from({ length: subStrategiesData.punctuation }, (_, index) => (
                                    <Image
                                        src={`/icons/start.webP`}
                                        width={400}
                                        height={400}
                                        alt={`start`}
                                        style={{ width: "22px", height: "auto" }}
                                        key={index}
                                    />
                                ))}
                            </div>
                            <Link href={"/"} className=''>
                                <Image
                                    src={`/icons/arrow.svg`}
                                    width={400}
                                    height={400}
                                    alt={`start`}
                                    style={{ width: "10px", height: "auto" }}
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
                <div className="container flex justify-center items-center flex-col gap-5 mt-14">
                    <h2 className='croll-m-20 text-2xl font-semibold tracking-tight lg:text-4xl '>No esperes más, es el momento</h2>
                    <Delay 
                        href={"/services"}
                        content={"empezemos ya +"}
                        className="hover:scale-[1.04] shadow-xl py-4 px-12 border-2 rounded-xl text-xl font-bold text-center text-[#347faa]"
                    />
                </div>
        </div>
    );
}