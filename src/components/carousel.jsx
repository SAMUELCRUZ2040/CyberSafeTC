'use client'

import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ data }) => {
  const users = Object.values(data).flat();
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % users.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [users.length]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      carouselRef.current.style.transform = `translateY(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <div className="carousel">
      <div className="carousel-inner" ref={carouselRef}>
        {users.map((user, i) => (
          <div className="carousel-item" key={i} style={{ transitionDuration: user.transition }}>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.profession}</p>
            <p>{user.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
