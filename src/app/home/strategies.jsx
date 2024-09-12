import { SubStrategies, OptionStrategies} from '@/components/home/optionStrategies';
import TransitionLink from '@/components/transitionLink';
import data from '@/json/data';
import Image from 'next/image';

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
                            <OptionStrategies
                                key={keyCol}
                                strategieData={strategieData}
                            />
                        ))}
                    </div>
                </div>
                <Image
                    src={`/image/home/person2.png`}
                    width={400}
                    height={400}
                    alt={`picture of strategies`}
                    priority
                    className='w-full h-auto my-14'
                />
            </div>
            <div className="flex justify-center items-center gap-14 container max-lg:flex-col max-lg:gap-4">
                {data.home[0].subStrategies.map((subStrategiesData, keySubstrategies)=>(
                    <SubStrategies
                        key={keySubstrategies}
                        subStrategiesData={subStrategiesData}
                    />
                ))}
            </div>
            <div className="container flex justify-center items-center flex-col gap-5 mt-14">
                <h2 className='max-lg:text-lg max-lg:font-bold croll-m-20 text-2xl font-semibold tracking-tight'>No esperes más, es el momento</h2>
                <TransitionLink
                    href={"/services"}
                    className="transition-none max-lg:text-sm hover:scale-[1.04] shadow-xl py-4 px-12 border-2 rounded-xl text-xl font-bold text-center text-[#347faa]"
                >
                    empezemos ya +
                </TransitionLink>
            </div>
        </div>
    );
}