"use client";

import { animatePageOut } from "@/utils/animation";
import { usePathname, useRouter } from "next/navigation";

export default function TransitionLink({ children, href, className, combobox }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault(); // Para evitar que el navegador siga automáticamente el enlace
    if (pathname === href) {
      return; // Salir si ya estamos en la misma página
    }
    // Aquí forzamos la animación de salida siempre, incluso si la ruta es la misma
    animatePageOut(href, router);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className ? className : "text-xl text-neutral-900 hover:text-neutral-700"} ${combobox ? combobox : {}}`}
    >
      {children}
    </button>
  );
}
