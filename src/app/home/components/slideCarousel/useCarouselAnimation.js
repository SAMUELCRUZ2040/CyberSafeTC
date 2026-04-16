import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const killScrollTriggersSafely = () => {
  if (typeof ScrollTrigger === 'undefined' || !ScrollTrigger.getAll) return;
  ScrollTrigger.getAll().forEach((st) => {
    try {
      st.kill(true);
    } catch {
      try {
        st.kill(false);
      } catch {
        /* ignore */
      }
    }
  });
};

export const useCarouselAnimation = ({
  containerRef,
  slides,
  setCurrentCount
}) => {
  const ctxRef = useRef(null);
  const tlRef = useRef(null);

  const safeCleanup = () => {
    try {
      killScrollTriggersSafely();
    } catch {
      /* ignore */
    }
    try {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    } catch {
      /* ignore */
    }
    try {
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
    } catch {
      /* ignore */
    }
    tlRef.current = null;
    ctxRef.current = null;
  };

  const initializeStates = (
    outerWrappers,
    innerWrappers,
    sections,
    images
  ) => {
    gsap.set(outerWrappers, { xPercent: 100 });
    gsap.set(innerWrappers, { xPercent: -100 });
    gsap.set(sections, { zIndex: 0, autoAlpha: 0 });
    gsap.set(images, { zIndex: 0, autoAlpha: 0 });

    gsap.set(outerWrappers[0], { xPercent: 0 });
    gsap.set(innerWrappers[0], { xPercent: 0 });
    gsap.set(sections[0], { zIndex: 1, autoAlpha: 1 });
    gsap.set(images[0], { zIndex: 1, autoAlpha: 1 });
  };

  const createTransitionAnimation = (
    tl,
    index,
    {
      sections,
      images,
      slideImages,
      outerWrappers,
      innerWrappers
    }
  ) => {
    if (index === 0) return;

    const prevIndex = index - 1;
    const duration = 1;
    const position = prevIndex * duration;

    tl.set([sections[prevIndex], sections[index]], { zIndex: 2 }, position);
    tl.set([images[prevIndex], images[index]], { zIndex: 2 }, position);
    tl.set([sections[index], images[index]], { autoAlpha: 1 }, position);

    tl.fromTo(
      outerWrappers[index],
      { xPercent: 100 },
      { xPercent: 0, duration, ease: 'expo.inOut' },
      position
    );

    tl.fromTo(
      innerWrappers[index],
      { xPercent: -100 },
      { xPercent: 0, duration, ease: 'expo.inOut' },
      position
    );

    const prevHeading = sections[prevIndex].querySelector('.slide__heading');
    const currentHeading = sections[index].querySelector('.slide__heading');

    tl.to(prevHeading, { xPercent: 30, duration, ease: 'expo.inOut' }, position);
    tl.fromTo(
      currentHeading,
      { xPercent: -30 },
      { xPercent: 0, duration, ease: 'expo.inOut' },
      position
    );

    tl.fromTo(
      images[index],
      { xPercent: 125, scaleX: 1.5, scaleY: 1.3 },
      { xPercent: 0, scaleX: 1, scaleY: 1, duration, ease: 'expo.inOut' },
      position
    );

    tl.to(
      images[prevIndex],
      { xPercent: -125, scaleX: 1.5, scaleY: 1.3, duration, ease: 'expo.inOut' },
      position
    );

    tl.fromTo(
      slideImages[index],
      { scale: 2 },
      { scale: 1, duration, ease: 'expo.inOut' },
      position
    );

    tl.set(sections[prevIndex], { autoAlpha: 0, zIndex: 0 }, position + duration);
    tl.set(images[prevIndex], { autoAlpha: 0, zIndex: 0 }, position + duration);
  };

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const sections = container.querySelectorAll('.slide');
    const images = Array.from(container.querySelectorAll('.image')).reverse();
    const slideImages = container.querySelectorAll('.slide__img');
    const outerWrappers = container.querySelectorAll('.slide__outer');
    const innerWrappers = container.querySelectorAll('.slide__inner');

    ctxRef.current = gsap.context(() => {
      initializeStates(outerWrappers, innerWrappers, sections, images);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=300%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const slideIndex = Math.min(Math.floor(progress * slides.length), slides.length - 1);
            setCurrentCount(slideIndex + 1);
          }
        }
      });

      tlRef.current = tl;

      slides.forEach((_, index) => {
        createTransitionAnimation(tl, index, {
          sections,
          images,
          slideImages,
          outerWrappers,
          innerWrappers
        });
      });
    }, container);

    return () => {
      safeCleanup();
    };
  }, [slides.length, containerRef, setCurrentCount, slides]);
};