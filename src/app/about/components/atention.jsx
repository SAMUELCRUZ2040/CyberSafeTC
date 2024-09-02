"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Strategies from "@/app/home/strategies";
import Average from "@/app/home/average";

export default function Atention() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const sections = container.querySelectorAll(".section");

    gsap.to(container, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.1,
        end: () => "+=" + container.scrollWidth,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="flex w-full h-screen transition-none" ref={containerRef}>
        <div className="section w-screen h-screen flex-shrink-0">
          <Average />
        </div>
        <div className="section w-screen h-screen flex-shrink-0">
          <Strategies />
        </div>
      </div>
    </div>
  );
}
