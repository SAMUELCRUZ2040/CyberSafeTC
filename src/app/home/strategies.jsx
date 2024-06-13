import data from '@/json/data';
import Image from 'next/image';
import Link from 'next/link';


export default function Strategies() {
    return (
        <section>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 container h-full ">
                <div className="information flex h-full">
                    <div className="dataStrategies flex flex-col justify-center items-start gap-8">
                        <h2 className='flex flex-col scroll-m-20 text-5xl font-bold tracking-tight lg:text-6xl'>
                            <span>Lo Primordial</span>
                            <span>Es el <span className='text-[#347faa]'>Cliente</span></span>
                        </h2>
                        {data.home[0].strategies.map((generateCol, keyCol)=>(
                            //crear el numero de columnas que va a conentener las descripciones
                            <div 
                                className="grid grid-cols-2 max-sm:grid-cols-1"
                                key={keyCol}
                            >
                                {Object.entries(generateCol).map((dataStrategies, keyStrategies)=>(
                                    //inyectar la informacion extraida mediante la iteracion
                                    <div 
                                        key={keyStrategies}
                                        className='me-5'
                                    >
                                        <h3 className='text-3xl font-bold mb-2 max-sm:text-2xl'>{dataStrategies[1][0].subtitle}</h3>
                                        <p className='text-lg max-sm:text-sm'>{dataStrategies[1][0].description}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                            <h2 className='croll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl'>No esperes mas es el momento</h2>
                            <Link 
                                href={"/"}
                                className="hover:scale-[1.04] shadow-xl py-4 px-12 border-2 rounded-xl text-xl font-bold text-center"
                            >
                                Empecemos ya +
                            </Link>
                    </div>
                </div>
                <div className="h-full w-full flex flex-col items-center justify-center max-sm:mt-5">
                    {data.home[0].strategiesGrid.map((GenerateColGrid, KeyColGrid)=>{
                        return(
                            <div 
                                className={`grid grid-cols-3 w-full max-sm:grid-cols-1`}
                                key={KeyColGrid}
                            >
                                {Object.entries(GenerateColGrid).map((dataStrategies, keyStrategies)=>(
                                    <div 
                                        className={`m-2 flex flex-col items-start overflow-hidden rounded-lg p-2 shadow-xl border-2 hover:scale-[1.01] gap-4 backdrop-blur-lg bg-[#ffffff1a]`}
                                        style={{gridColumn : `span ${dataStrategies[1][0].className} / span ${dataStrategies[1][0].className}`}}
                                        key={keyStrategies}
                                    >
                                        <div className="w-full h-32 overflow-hidden flex justify-center items-center rounded-lg">
                                            <Image  
                                                src={dataStrategies[1][0].picture}
                                                width={400}
                                                height={400}
                                                alt="Picture of the author"
                                                style={{ width: "100%", height: "auto" }}
                                            />
                                        </div>
                                        <h4 className='text-md font-semibold tracking-wide'>{dataStrategies[1][0].title}</h4>
                                        <p className='text-sm'>{dataStrategies[1][0].description}</p>
                                    </div>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}