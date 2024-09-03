"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Strategies from "@/app/home/strategies";
import Average from "@/app/home/average";

export default function HorizontalScroll() {
  const [mobile, setMobile] = useState(false);
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleResize = () => setMobile(mediaQuery.matches);

    handleResize(); // Ejecuta en el montaje para establecer el valor inicial
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    if (!mobile && container) {
      const sections = container.querySelectorAll(".section");

      gsap.to(container, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0.5,
          end: () => "+=" + container.offsetWidth,
          invalidateOnRefresh: true, // Vuelve a calcular al cambiar de tamaño
        },
      });
    } else {
      gsap.set(container, { clearProps: "all" });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [mobile]);

  return (
    <>
      {mobile ? (
        <>
          <Average />
          <Strategies />
        </>
      ) : (
        <div className="overflow-hidden">
          <div className="flex transition-none" ref={containerRef}>
            <div className="section w-screen h-screen flex-shrink-0">
              <Average />
            </div>
            <div className="section w-screen h-screen flex-shrink-0">
              <Strategies />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
