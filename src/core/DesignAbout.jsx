"use client"
import { motion } from 'framer-motion';

export const Designe = () => {
    const image = [
        {
            url : "1",
            animation : 50,
            className : "relative top-5"
        },
        {
            url : "2",
            animation : 0,
            className : "relative top-14 right-10"
        },
        {
            url : "3",
            animation : -50,
            className : "relative top-24 right-16"
        }
    ];
    
    return (
        <div className="container__image flex items-end h-full">
            {image.map((data, index_) => (
                <motion.div
                    initial={{ x: data.animation }}
                    transition={{ duration: 1 }}
                    key={index_}
                    className={`bg-cover bg-no-repeat bg-center w-1/3 h-[40rem] ${data.className} rounded-xl shadow-2xl border-2 border-gray-300`}
                    style={{ backgroundImage: `url(/image/about/grid/${data.url}.jpg)` }}
                />
            ))}
        </div>
    );
}