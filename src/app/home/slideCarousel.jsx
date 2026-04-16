"use client"

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCarouselAnimation } from './components/slideCarousel/useCarouselAnimation';
import { slides } from './components/slideCarousel/slides.data';
import { CarouselDesktop } from './components/slideCarousel/CarouselDesktop.jsx';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SlideCarousel = () => {
  const containerRef = useRef(null);
  const [currentCount, setCurrentCount] = useState(1);

  useEffect(() => {
    return () => {
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.getAll) {
        ScrollTrigger.getAll().forEach(st => st.kill());
      }
    };
  }, []);

  useCarouselAnimation({
    containerRef,
    slides,
    setCurrentCount
  });

  return (
    <CarouselDesktop
      containerRef={containerRef}
      slides={slides}
      currentCount={currentCount}
    />
  );
};

export default SlideCarousel;