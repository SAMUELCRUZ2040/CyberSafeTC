import data from '@/json/data';
import Grid from './grid';
import types from "@/components/fontLetters";
// import { Designe, Colaborations } from './componentAnimation';
import { Components } from '../../../utils/componentAnimation';
import { cn } from '@/utils/cn';

export default function Ilustration() {
  const direction = ( directionObject ) =>{
    const classDirection = {
      topLeft: "absolute top-0 left-0",
      topRight: "absolute top-0 right-0",
      bottomLeft: "absolute bottom-0 left-0",
      bottomRight: "absolute bottom-0 right-0",
      center: "absolute top-0 right-0 w-full h-auto flex justify-center items-center flex-col text-center",
      longTextSmall: "w-[75%]",
      longTextLong: "w-[68%]",
    }
    return classDirection[directionObject] || null;
  }

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
          return(
          <div
            className={`flex gap-3 my-3 max-lg:flex-col px-[18rem]`}
            key={index}
          >
            {Object.entries(data).map((dataGrid, index) => (
              <Grid
                key={index}
                delay={dataGrid[1][0].transition}
                backgroundColor={dataGrid[1][0].background}
                className={`max-lg:!w-full relative`}
                style={dataGrid[1][0].className}
              >
                <div className={cn(
                  //special dates
                  `${dataGrid[1][0].className === "58%" ? direction("longTextLong") : direction("longTextSmall")} ${direction(dataGrid[1][0].directionText)}`,
                  //base styles
                  "z-[0] p-8"
                )}>
                      <h4 className={`text-2xl !font-black`}>{dataGrid[1][0].title}</h4>
                      <p className='text-md w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, suscipit!</p>
                </div>
                
                <div className={`h-auto p-8 ${direction(dataGrid[1][0].directionComponent)}`}>
                  {dataGrid[1][0].value && (
                    <Components 
                      search={dataGrid[1][0].extraComponent}
                    />
                  )}
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-[-1] p-10 opacity-80">
                  <Components 
                    search={dataGrid[1][0].component}
                  />
                </div>
              </Grid>
            ))}
          </div>
          )
        })}
      </div>
    </section>
  );
}


const ComponentsUse = ({}) => {
  return(p)
}