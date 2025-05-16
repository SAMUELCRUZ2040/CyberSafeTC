import { ConfiTestimonials } from "./confiComponents/confiTestimonialsHome";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://gsap.com/community/uploads/monthly_2025_03/GSAP-3-sm.mp4.ad8f65bc4de4e0e5d15fac0be55bef81.mp4",

    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://gsap.com/community/uploads/monthly_2025_04/noomo.mp4.a1a63d15020568f33706b362d7a3ef6d.mp4",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://gsap.com/community/uploads/monthly_2025_04/Eyeball.mp4.2292d4b721d3d75761dca5a062ace507.mp4",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://gsap.com/community/uploads/monthly_2025_01/trimmed.mp4.b3ee24a03e178b0c306dba74ff29e698.mp4",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://gsap.com/community/uploads/monthly_2025_04/showreel-sm.mp4.4e00cbe01d62d7590b4017b4bd721a3e.mp4",
    },
  ];
  return <ConfiTestimonials testimonials={testimonials} />;
}
