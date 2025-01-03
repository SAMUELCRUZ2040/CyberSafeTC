import data from '@/json/data';
import Grid from './grid';
import types from "@/components/fontLetters";
import { First } from './componentAnimation';

export default function Ilustration() {
  return (
    <section>
      <div className='container'>
        <div className="title w-full flex justify-center items-center flex-col my-28 gap-6">
          <p>features</p>
          <h2 className={`flex flex-col ${types.h2} text-center`}>
            <span className='text-center'>A complete website builder</span>
            <span className='text-center'>with all the features you need.</span>
          </h2>
          <p className={`${types.p} flex flex-col text-center`}>
            <span>Framer is packed with powerful features, making it easy</span>
            <span>to grow and expand your website to fit your needs.</span>
          </p>
        </div>
        {data.about[0].ilustration.map((data, index) =>{
          const number = Object.keys(data).length + 1; 
          return(
          <div
            className={`flex gap-3 my-3 max-lg:flex-col `}
            key={index}
          >
            {Object.entries(data).map((dataGrid, index) => (
              <Grid
                key={index}
                delay={dataGrid[1][0].transition}
                backgroundColor={dataGrid[1][0].background}
                className={`flex flex-col gap-8`}
                style={dataGrid[1][0].className}
              >
                <h4 className={`${types.h4}`}>{dataGrid[1][0].title}</h4>
                <p className={`${types.p}`}>{dataGrid[1][0].description}</p>
                <First />
              </Grid>
            ))}
          </div>
          )
        })}
      </div>
    </section>
  );
}