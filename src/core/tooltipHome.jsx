"use client";

import React from "react";
import { ConfiTooltip } from "./confiComponents/confiTooltipHome";

const people = [
    {
        id: 1,
        name: "Samantha ramirez", // w 
        designation: "Software Engineer",
        image:
            "/image/footer/footer_1.jpg",
    },
    {
        id: 2,
        name: "Robert Johnson", // w
        designation: "Product Manager",
        image:
            "/image/footer/footer_2.jpg",
    },
    {
        id: 3,
        name: "Pedro cruz", // h
        designation: "Data Scientist",
        image:
            "/image/footer/footer_3.jpg",
    },
    {
        id: 4,
        name: "Luisa Davis", // h
        designation: "UX Designer",
        image:
            "/image/footer/footer_4.jpg",
    }
];

export function TooltipHome() {
  return (
    <div className="flex flex-row items-start justify-start  w-full">
      <ConfiTooltip items={people} />
    </div>
  );
}
