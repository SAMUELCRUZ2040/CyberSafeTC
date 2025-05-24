import Image from "next/image";
import React from "react";
import { ConfiTimeline } from "../../../core/confiComponents/confiTimeline";
import types from "../../../components/fontLetters";
import data from '@/json/data';
import { InputAnimation } from "@/components/inputAnimation";

const TimelineContent = ({ description, highlights = [], images = [], delay = 0 }) => (
  <div>
    <InputAnimation delay={delay}>
      <p className={`${types.p} mb-8`}>{description}</p>
      {highlights.length > 0 && (
        <div className="mb-8">
          {highlights.map((highlight, index) => (
            <div key={index} className={`${types.p} flex gap-2 items-center`}>
              {highlight}
            </div>
          ))}
        </div>
      )}
    </InputAnimation>

    <div className="grid grid-cols-2 gap-4">
      {images.map((src, index) => (
        <InputAnimation delay={delay + 0.1 * index} key={`${src}-${index}`}>
          <Image
            src={src}
            alt={`Timeline image ${index + 1}`}
            width={500}
            height={500}
            className="opacity-85 object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </InputAnimation>
      ))}
    </div>
  </div>
);

export function Timeline() {
  const timelineData = data.about[0].timeLine.map((item, index) => ({
    title: item.title,
    content: (
      <TimelineContent
        key={index}
        description={item.description}
        highlights={item.highlights}
        images={item.images}
        delay={0.2 * index}
      />
    ),
  }));

  return (
    <div className="w-full">
      <ConfiTimeline data={timelineData} />
    </div>
  );
}