"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Strategies from "@/app/home/strategies";
import Average from "@/app/home/average";

export default function HorizontalScroll() {
  const [mobile, setMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleResize = () => setMobile(mediaQuery.matches);

    // Ejecuta en el montaje para establecer el valor inicial
    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    // Asegurarse de que el contenedor esté disponible antes de continuar
    if (!container) return;

    // Limpiar triggers existentes
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (!mobile) {
      const sections = container.querySelectorAll(".section");

      // Verificar que haya secciones para animar
      if (sections.length > 0) {
        gsap.to(container, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 0.5,
            end: () => "+=" + container.offsetWidth,
            invalidateOnRefresh: true, // Recalcula al cambiar de tamaño
          },
        });
      }
    } else {
      // Limpiar propiedades de animación en el contenedor
      gsap.set(container, { clearProps: "all" });
    }

    // Limpiar triggers al desmontar o cambiar de modo
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
