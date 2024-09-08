"use client";

import Link from "next/link";
import data from "@/json/data";
import Image from "next/image";
import MobileNabvar from "./responsiveDesigne/mobileNabvar";
import Combobox from "./Combobox";
import Delay from "./delay";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState({
    addAnimateNavbar: false,
    addAnimateLogo: false,
  });

  useEffect(() => {
    const scrolls = () => {
      // Detectar si el scroll es mayor a 0 o si está en la posición 0
      if (window.scrollY > 0 && !navbar.addAnimateNavbar) {
        setNavbar((prevState) => ({
          ...prevState,
          addAnimateNavbar: true,
          addAnimateLogo: true, // Activar animación del logo
        }));
      } else if (window.scrollY === 0 && navbar.addAnimateNavbar) {
        setNavbar((prevState) => ({
          ...prevState,
          addAnimateNavbar: false,
          addAnimateLogo: true, // Activar animación del logo cuando vuelve a 0
        }));
      }
    };

    window.addEventListener("scroll", scrolls);

    return () => {
      window.removeEventListener("scroll", scrolls);
    };
  }, [navbar.addAnimateNavbar]);

  // Controlar el tiempo de duración de la animación del logo
  useEffect(() => {
    if (navbar.addAnimateLogo) {
      // Después de 2 segundos, desactivar la animación del logo
      const timer = setTimeout(() => {
        setNavbar((prevState) => ({
          ...prevState,
          addAnimateLogo: false,
        }));
      }, 300); // Duración de la animación

      // Limpieza del timeout
      return () => clearTimeout(timer);
    }
  }, [navbar.addAnimateLogo]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-center align-center py-4 z-[9999]`}
    >
      <div
        className={`flex justify-between items-center w-full container mx-[18rem] px-14 py-4 max-lg:mx-4 max-lg:px-5 max-lg:py-1 my-5 ${
          navbar.addAnimateNavbar
            ? "shadow-xl rounded-3xl backdrop-blur-  bg-[#f8f8f87d]"
            : ""
        }`}
      >
        <div className={`${navbar.addAnimateLogo ? "blur-sm" : ""}`}>
          <Link href={"/"}>
            <Image
              src={`/icons/logo.webp`}
              width={400}
              height={400}
              alt={`logo`}
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>
        <ul className="list_item flex gap-7 h-full justify-center align-center max-md:hidden">
          {data.navigation.map((item, key) => (
            <li
              className={`item flex justify-center items-center gap-4 relative ${
                item.combobox && "service"
              } ${
                item.combobox == null &&
                "bg-black p-4 rounded-2xl text-white"
              }`}
              key={key}
            >
              <Delay href={item.url} content={item.name} />
              {item.combobox && (
                <span className="arrow rotate-90 transition ease-in-out">
                  <Image
                    src={`/icons/arrow.svg`}
                    width={400}
                    height={400}
                    alt={`start`}
                    style={{ width: "7px", height: "auto" }}
                  />
                </span>
              )}
              {item.combobox && <Combobox />}
            </li>
          ))}
        </ul>
        <MobileNabvar />
      </div>
    </nav>
  );
}
