import FrontPage from "./home/frontPage";
import ScrollGallery from "./home/Scrollgallery";
import ScrollPathAnimation from "./home/Scrollpathanimation";
import SlideCarousel from "./home/slideCarousel";

export default function Home() {
  return (
    <>
      <FrontPage />
      <ScrollPathAnimation />
      {/* <SlideCarousel /> */}
      <ScrollGallery />
    </>
  );
}
