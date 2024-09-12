"use client"

import { animatePageOut } from "@/utils/animation";
import { usePathname, useRouter } from "next/navigation";

export default function TransitionLink({ children, href, className , combobox}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault(); // Previene la navegación por defecto del Link

    if (pathname !== href) {
      animatePageOut(() => {
          router.push(href);
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className ? className : "text-xl text-neutral-900 hover:text-neutral-700"} ${ combobox  ? combobox : {} }`}
    >
      {children}
    </a>
  );
}
