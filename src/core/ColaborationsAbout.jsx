"use client"

import React, { useState, useEffect } from 'react';

export const Colaborations = () => {
    const [current, setCurrent] = useState(0);
    const items = [
      {
        content: 'Novitates',
        images: [
          'https://picsum.photos/seed/a/700/700',
          'https://picsum.photos/seed/b/700/700',
          'https://picsum.photos/seed/c/700/700',
          'https://picsum.photos/seed/d/700/700',
        ],
      },
      {
        content: 'Si spem',
        images: [
          'https://picsum.photos/seed/e/700/700',
          'https://picsum.photos/seed/f/700/700',
          'https://picsum.photos/seed/g/700/700',
          'https://picsum.photos/seed/h/700/700',
        ],
      },
      {
        content: 'Adferunt',
        images: [
          'https://picsum.photos/seed/i/700/700',
          'https://picsum.photos/seed/j/700/700',
          'https://picsum.photos/seed/k/700/700',
          'https://picsum.photos/seed/l/700/700',
        ],
      },
    ];
  
    const handleNavigation = (direction) => {
      const nextIndex =
        direction === 'next'
          ? (current + 1) % items.length
          : (current - 1 + items.length) % items.length;
      setCurrent(nextIndex);
    };
  
    return (
      <div className="slider h-full w-full flex items-center justify-center relative overflow-hidden">
        <div className="nav absolute flex justify-between w-full px-8">
          <button
            onClick={() => handleNavigation('prev')}
            className="w-8 h-8-700 z-50 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(/icons/arrow-left-solid.svg)` }}
          /> 
          <button
            onClick={() => handleNavigation('next')}
            className="w-8 h-8 z-50 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(/icons/arrow-right-solid.svg)` }}
          />
        </div>
  
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${
              index === current ? 'is-active opacity-100' : 'opacity-0'
            } absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-700 overflow-hidden`}
          >
            <div className="content text-black text-8xl font-bold absolute z-50">
              <span className="font-black" >{item.content}</span>
            </div>
            <div className="imgs relative w-4/5 h-[30rem]">
              <div className="grid absolute top-0 left-0 w-full h-full grid-cols-12 grid-rows-12 gap-4 transform ">
                {item.images.map((src, imgIndex) => (
                  <motion.div
                    key={`${index}-${imgIndex}`}
                    className={`img transition-none ${
                      imgIndex === 0
                        ? 'col-span-4 row-span-6'
                        : imgIndex === 1
                        ? 'col-start-5 col-span-8 row-span-5'
                        : imgIndex === 2
                        ? 'col-span-8 row-start-7 row-span-6'
                        : 'col-start-9 col-span-4 row-start-7 row-span-6'
                    }`}
                    initial="hidden"
                    animate={index === current ? 'visible' : 'hidden'}
                  >
                    <img
                      src={src}
                      alt={`Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };