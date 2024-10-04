"use client";

import { animatePageIn, animatePageOut } from "@/utils/animation";
import { usePathname, useRouter } from "next/navigation";

export default function TransitionLink({ children, href, className, combobox }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault(); // Previene la navegación por defecto del Link

    if (pathname !== href) {
      try {
        // Espera a que `animatePageOut` termine antes de continuar
        await animatePageOut(); 
        
        // Navega a la nueva ruta
        router.push(href);
        
        // Ejecuta la animación de entrada
          animatePageIn();
      } catch (error) {
        console.error("Error during page transition", error);
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className ? className : "text-xl text-neutral-900 hover:text-neutral-700"} ${combobox ? combobox : {}}`}
    >
      {children}
    </a>
  );
}
