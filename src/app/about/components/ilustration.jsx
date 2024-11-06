import data from '@/json/data';
import OurWork from './ourWork';

export default function Ilustration() {
  return (
    <>
        {data.about[0].ilustration.map((data, _index)=>(
            <div 
                key={_index} 
                className="flex justify-center items-center  sticky top-0 w-full h-auto"
                style={{backgroundImage : `url(/image/about/)`}}
            >
              <OurWork />
            </div>
        ))}
    </>
  )
}