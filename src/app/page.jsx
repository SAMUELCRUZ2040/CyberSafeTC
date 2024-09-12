import HorizontalScroll from "@/components/home/horizontalScroll";
import FrontPage from "./home/frontPage";
import Summary from "./home/summary";
import Users from "./home/users";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Summary />
      <HorizontalScroll />
      <Users />
    </> 
  );
}
