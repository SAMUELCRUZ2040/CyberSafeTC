import Image from "next/image";
import React from "react";
import { ConfiTimeline } from "../../../context/confiTimeline";
import types from "../../../components/fontLetters";

const timelineData = [
  {
    title: "2019",
    description:
      "In 2019, the idea of Cyber was born, a company focused on innovation and technological growth. In a constantly evolving world, we identified the need to offer innovative and efficient technological solutions for companies and entrepreneurs seeking to optimize and scale their processes.",
    images: ["/image/about/timeline_1.webp", "/image/about/timeline_2.jpg"],
  },
  {
    title: "Early 2022",
    description:
      "With a clear vision and a commitment to innovation, Cyber began to expand its services, consolidating its presence in the technology sector. During this period, we optimized our processes, incorporated new technologies, and strengthened our team, allowing us to tackle more complex projects and offer more specialized solutions to our clients.",
    images: ["/image/about/timeline_3.jpg", "/image/about/timeline_4.webp"],
  },
  {
    title: "Early 2024",
    description:
      "Entering 2024, Cyber has significantly evolved, establishing itself as a benchmark in technology and innovation. This year marked the beginning of a new growth phase, with the implementation of more advanced solutions in software development, infrastructure, and security. Additionally, we expanded our service portfolio and strengthened our strategic partnerships to continue driving the digital transformation of our clients.",
    images: ["/image/about/timeline_5.webp", "/image/about/timeline_6.webp"],
  },
  {
    title: "Finally",
    description:
      "We now drive innovation with tailor-made technological solutions, ensuring quality, efficiency, and a constant commitment to the success of our clients.",
    highlights: [
      "✅ Constant Innovation",
      "✅ Personalized Approach",
      "✅ Quality and Efficiency",
      "✅ Specialized Team",
      "✅ Commitment to the Client",
    ],
    images: ["/image/about/timeline_7.webp", "/image/about/timeline_8.webp"],
  },
];

const TimelineContent = ({ description, highlights, images }) => (
  <div>
    <p className={`${types.p} mb-8`}>{description}</p>
    {highlights && (
      <div className="mb-8">
        {highlights.map((highlight, index) => (
          <div key={index} className={`${types.p} flex gap-2 items-center`}>
            {highlight}
          </div>
        ))}
      </div>
    )}
    <div className="grid grid-cols-2 gap-4">
      {images.map((src, index) => (
        <span className={`p-5 border-2 rounded-bl-lg  ${index === 0 ? "rounded-bl-3xl rounded-tr-3xl" : "rounded-tl-3xl rounded-br-3xl"}`} key={index}>
          <Image
            src={src}
            alt="timeline image"
            width={500}
            height={500}
            className="opacity-85 object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </span>
      ))}
    </div>
  </div>
);

export function Timeline() {
  const data = timelineData.map(({ title, ...content }) => ({
    title,
    content: <TimelineContent {...content} />,
  }));

  return (
    <div className="w-full">
      <ConfiTimeline data={data} />
    </div>
  );
}
