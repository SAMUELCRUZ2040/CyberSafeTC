"use client";

import data from '@/json/data';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Average() {
  const [counts, setCounts] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      const intervals = [];

      // Inicializar los contadores para cada número
      data.home[0].average.forEach((dataAverage, index) => {
        const interval = setInterval(() => {
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < dataAverage.number) {
              newCounts[index] += 1; // Incrementar el contador
            } else {
              clearInterval(interval); // Detener el contador cuando llegue al límite
            }
            return newCounts;
          });
        }, 25); // Ajusta el tiempo para la velocidad del contador

        intervals.push(interval);
      });

      // Limpiar los intervalos al desmontar el componente o cuando `active` cambie
      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [active]); // Dependencia en `active` para ejecutar el efecto cuando cambie

  useEffect(() => {
    // Inicializar los contadores a 0 al principio
    setCounts(data.home[0].average.map(() => 0));
  }, []);

  return (
    <div className="flex justify-center items-center bg-[#92c2c217] max-lg:px-5 max-lg:py-10 h-full w-full ">
      <div className="container">
        <h2 className="max-lg:text-3xl max-lg:text-start text-center text-7xl tracking-tight flex flex-col">
          <span>Nos Enfocamos en la <span className="font-bold text-[#347faa]">Eficiencia y la Calidad</span></span>
          <span><span className="font-bold text-[#347faa]">En cada</span> Proyecto</span>
        </h2>
        <div className="gap-[7rem] flex items-center justify-center py-[6rem] max-lg:flex-col">
          {data.home[0].average.map((dataAverage, index) => (
            <motion.div
              className='text-center  transition-none'
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                  duration: .4,
                  ease: "easeOut",
                  delay: dataAverage.transition

              }}
              viewport={{ once: true }}
              onAnimationComplete={() => setActive(true)} 
            >
                <h2 
                    className='text-[#347faa] text-center text-7xl tracking-tight max-lg:text-4xl mb-4'

                >
                    + {counts[index]} {dataAverage.addIcon}
                </h2>
                <p
                    className='max-lg:text-sm max-lg:text-justify text-md transition-none'
                >
                    {dataAverage.description}
                </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
