"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Atention() {
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const container = containerRef.current;
    const sections = container.querySelectorAll(".section");

    gsap.to(container, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.offsetWidth,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="flex h-screen" ref={containerRef}>
        <div className="section w-screen flex-shrink-0 flex items-center justify-center bg-red-500">
          <h1 className="text-9xl font-extrabold">Section 1</h1>
        </div>
        <div className="section w-screen flex-shrink-0 flex items-center justify-center bg-blue-500">
          <h1 className="text-9xl font-extrabold">Section 2</h1>
        </div>
        <div className="section w-screen flex-shrink-0 flex items-center justify-center bg-green-500">
          <h1 className="text-9xl font-extrabold">Section 3</h1>
        </div>
        <div className="section w-screen flex-shrink-0 flex items-center justify-center bg-yellow-500">
          <h1 className="text-9xl font-extrabold">Section 4</h1>
        </div>
      </div>
    </div>
  );
}
