"use client";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function TransitionLink({ href, children, className, ...props }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const curtain = document.getElementById("page-curtain");
    if (!curtain) { router.push(href); return; }

    // Sube la cortina tapando la página vieja
    gsap.to(curtain, {
      y: "0%",
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => router.push(href),
    });
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}