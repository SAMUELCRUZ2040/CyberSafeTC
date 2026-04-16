"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import types from "@/components/fontLetters";
import { cn } from "@/utils/cn";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const containers = [
  { id: "initial", position: "md:left-[60%] md:top-[5%]", isStart: true, tag: "// START_NODE" },
  { id: "second", position: "md:left-[12%] md:top-[25%]", title: "Frontend Mastery", description: "Ultra-fast interfaces powered by React 19.", textSide: "right", tag: "// UI_CORE" },
  { id: "third", position: "md:right-[15%] md:top-[45%]", title: "Robust Structure", description: "Scalable and type-safe code with TypeScript.", textSide: "left", tag: "// TYPED_LOGIC" },
  { id: "fourth", position: "md:left-[18%] md:top-[65%]", title: "Fluid Interaction", description: "Seamless motion experiences with GSAP.", textSide: "right", tag: "// MOTION_ENGINE" },
  { id: "fifth", position: "md:right-[20%] md:top-[82%]", title: "Cloud Architecture", description: "Optimized deployments and performance.", textSide: "left", tag: "// CLOUD_DEPLOY" },
  { id: "sixth", position: "md:left-[20%] md:top-[96%]", title: "Custom Solutions", description: "High-impact digital products tailored to you.", textSide: "right", tag: "// FINAL_DELIVERY" },
];

export default function ScrollPathAnimation() {
  const scope = useRef(null);
  const iconRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) return;

      const markers = document.querySelectorAll(".scroll-container:not(.scroll-initial)");
      const box = document.querySelector(".scroll-box");
      const icon = iconRef.current;

      if (!box || markers.length === 0 || !icon) return;

      const boxStartRect = box.getBoundingClientRect();
      const points = Array.from(markers).map((marker) => {
        const r = marker.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - (boxStartRect.left + boxStartRect.width / 2),
          y: r.top + r.height / 2 - (boxStartRect.top + boxStartRect.height / 2),
        };
      });

      // 1. MAIN PATH TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-initial",
          start: "top center",
          endTrigger: ".scroll-final",
          end: "top center",
          scrub: 1.5,
        },
      });

      tl.to(".scroll-box", {
        motionPath: { path: points, curviness: 1.5 },
        ease: "none",
      });

      // 2. CONTINUOUS ROTATION
      gsap.to(icon, {
        rotation: 360,
        duration: 3, // Slightly slower for a more "heavy mechanical" feel
        repeat: -1,
        ease: "none",
      });

      // 3. NODE & CONTENT REACTION
      markers.forEach((marker) => {
        const content = marker.querySelector(".content-wrap");
        const dot = marker.querySelector(".node-dot");
        const socket = marker.querySelector(".node-socket");

        const innerTl = gsap.timeline({
          scrollTrigger: {
            trigger: marker,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          }
        });

        innerTl
          .fromTo(content, 
            { opacity: 0, x: marker.classList.contains('md:justify-end') ? 40 : -40, filter: "blur(10px)" },
            { opacity: 1, x: 0, filter: "blur(0px)", ease: "power2.out" }, 0
          )
          .to(socket, { borderColor: "rgba(255,255,255,0.6)", backgroundColor: "rgba(255,255,255,0.1)", scale: 1.1 }, 0)
          .to(dot, { backgroundColor: "#fff", boxShadow: "0 0 20px #fff", scale: 1.5 }, 0);
      });

    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope} className="min-h-screen w-full bg-black relative z-20 overflow-hidden font-sans">
      
      {/* Header */}
      <div className="pt-24 md:pt-32 pb-16 text-center px-6 relative z-10 border-b border-white/5">
          <h2 className={cn(types.h2, "text-white tracking-tighter uppercase italic")}>
             Why <span className="text-white/30 italic">Cyber Archive?</span>
          </h2>
          <p className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase mt-4">
             &gt; System_Trace: 0x8829_Architecture_Insights
          </p>
          
          {/* INTRODUCTORY PARAGRAPH (ENGLISH) */}
          <div className="max-w-3xl mx-auto mt-10 px-4 text-left border-l-2 border-white/10 pl-6">
            <p className="text-xs md:text-sm font-mono text-white/50 tracking-wide leading-relaxed">
              <span className="text-white/80 font-bold block mb-2">// ARCHIVE SYSTEM INITIALIZED</span>
              <span className="text-white/70 block mb-4">DIGITAL ARCHITECTURE DEPLOYMENT</span>
              Welcome to the core of <span className="text-white">Cyber Archive</span>. This section represents the algorithmic trace of our next-generation web infrastructure. As you scroll, the central node will navigate through the fundamental pillars that sustain our ecosystem: from frontend mastery to optimized cloud deployments. Each anchor point reveals a critical layer of our engineering. Prepare to explore the anatomy of a robust, scalable system designed for digital evolution.
              <span className="text-white/80 font-bold block mt-4">[STATUS: MONITORING_USER_TRAJECTORY]</span>
            </p>
          </div>
      </div>

      <div className="relative flex flex-col items-center md:block md:h-[400vh] px-6 py-20 md:py-0">
        <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent md:hidden" />

        {containers.map((c) => (
          <div
            key={c.id}
            className={cn(
                "scroll-container relative flex items-start gap-6 md:items-center md:justify-center",
                "w-full mb-16 md:mb-0 md:w-[160px] md:h-[160px] md:absolute",
                c.position,
                c.isStart ? "scroll-initial z-[100]" : "z-10"
            )}
          >
            <div className="relative">
                <div className="node-socket size-8 md:size-[100px] flex items-center justify-center rounded-full md:rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl transition-colors duration-500">
                    {c.isStart ? (
                      <div className="scroll-box size-4 md:size-[80px] z-[999] relative flex items-center justify-center">
                        <img ref={iconRef} src="/icons/solidIcon.png" className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" alt="icon" />
                      </div>
                    ) : (
                      <div className="node-dot size-2 md:size-3 rounded-full bg-white/10 transition-all duration-500" />
                    )}
                </div>
            </div>

            {!c.isStart && (
                <div className={cn(
                    "content-wrap flex flex-col md:absolute md:w-[450px]",
                    c.textSide === "left" 
                        ? "md:right-[180px] md:text-right md:items-end" 
                        : "md:left-[180px] md:text-left md:items-start",
                )}>
                  <span className="text-[8px] font-mono text-white/40 border border-white/10 px-2 py-0.5 rounded-full mb-2 w-fit tracking-[0.2em]">
                    {c.tag}
                  </span>
                  <h4 className="text-white text-2xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">
                    {c.title}
                  </h4>
                  <p className="text-white/40 text-sm md:text-lg max-w-[320px] md:max-w-none mt-3 font-light leading-tight">
                    {c.description}
                  </p>
                  <div className="mt-4 flex gap-1 opacity-20">
                    <div className="h-1 w-8 bg-white" />
                    <div className="h-1 w-1 bg-white" />
                  </div>
                </div>
            )}
          </div>
        ))}
      </div>

      <div className="scroll-final h-[20vh]" />
    </div>
  );
}