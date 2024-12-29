import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default  function Counter({ number, delay }) {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => { // crear el intervalo de tiempo
        setCount(prevCount => { // inyectar el numero de cuenta
          if (prevCount < number) { // validar si el numero de cuenta es menor al numero
            return prevCount + 1; // sumar el numero
          } else {
            clearInterval(interval); // limpiar el intervalo de tiempo
            return prevCount; // retornar el numero de cuenta
          }
        });
      }, 29.5); // Ajustar la velocidad de la cuenta

      return () => clearInterval(interval); // limpiar el intervalo de tiempo
    }
  }, [active, number]);

  return (
        <motion.div
        className='text-center transition-none'
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: delay
        }}
        onAnimationComplete={() => setActive(true)}
      >
        {count}
      </motion.div>
    );
}