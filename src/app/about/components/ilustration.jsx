import data from '@/json/data';
import OurWork from './ourWork';

export default function Ilustration() {
  return (
    <>
      {data.about[0].ilustration.map((data, _index) => (
        <div 
          key={_index} 
          className="sticky top-0  w-full h-screen flex justify-center items-center" // Se aumenta la altura
          style={{ backgroundImage: `url(/image/about/)` }}
        >
          {/* Contenedor sticky para mantener OurWork fijo mientras se hace scroll */}
            <OurWork />
        </div>
      ))}
    </>
  );
}
