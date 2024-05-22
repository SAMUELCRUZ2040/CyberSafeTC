import data from '@/json/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Strategies() {
    return (
        <section>
            <div className="columns-2  container h-full">
                <div className="information flex h-full">
                    <div className="line flex flex-col  w-[9rem]">
                        <span 
                            className="w-1 inline-block h-[10%]"
                            style={{background : "linear-gradient(transparent, #B04DD1 40%)"}}
                        />
                        <span className='h-[5%] flex items-center'>
                            i
                        </span>
                        <span 
                            className='w-1 inline-block h-[85%]'
                            style={{background : "linear-gradient(#B04DD1 40%, transparent)"}}
                        />
                    </div>
                    <div className="dataStrategies flex flex-col justify-center gap-10">
                        <h2 className=' flex flex-col scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl'>
                            <span>Lo Primordial</span>
                            <span>Es el <span className='text-[#B04DD1]'>Cliente</span></span>
                        </h2>
                        {data.home[0].strategies.map((generateCol, keyCol)=>(
                            <div 
                                className="columns-2"
                                key={keyCol}
                            >
                                {Object.entries(generateCol).map((dataStrategies, keyStrategies)=>(
                                    //inyectar la informacion extraida mediante la iteracion
                                    <div 
                                        key={keyStrategies}
                                        className='me-5'
                                    >
                                        <h3 className='text-3xl font-bold mb-5'>{dataStrategies[1][0].subtitle}</h3>
                                        <p className='text-xl'>{dataStrategies[1][0].description}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="hook mt-14">
                            <h2 className='croll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl'>No esperes mas es el momento</h2>
                            <Link className='text-4xl font-extrabold tracking-tight lg:text-2xl text-[#B04DD1]' href={"/"}>Iniciemos ya</Link>
                        </div>
                    </div>
                </div>
                <div className="pictures locas h-full flex justify-center items-center">
                    <Image 
                        src={"/image/home/frontPage/women.jpg"}
                        width={5000}
                        height={5000}
                        alt='robot'
                        style={{width : "100%", height : "auto"}}
                        lazy="load"
                    />
                </div>
            </div>
        </section>
    );
}