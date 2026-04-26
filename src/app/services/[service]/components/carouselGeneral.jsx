"use client";
import { usePathname } from "next/navigation";
import { Card, CarouselServices } from "./carouselServices";

export const CarouselGeneral = ({ services }) => {
  const pathname = usePathname();
  const currentServiceId = pathname?.split('/').pop() || "";
  
  const filteredServices = services?.filter?.(
    (service) => String(service.id) !== String(currentServiceId)
  ) || [];
  
  const cards = filteredServices.map((service, index) => {
    const cardData = {
      src: service.imageHeader || "",
      title: service.title,
      subtitle: service.addTitle,
      linkService: `/services/${service.id}`,
      id: service.id
    };
    return <Card key={service.id || index} card={cardData} index={index} />;
  });
  
  return <>{cards.length > 0 && <CarouselServices items={cards} />}</>;
};