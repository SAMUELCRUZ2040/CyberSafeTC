import FrontPage from "./home/frontPage";
import Summary from "./home/summary";
import Users from "./home/users";
import { Atention } from "@/app/home/atention";
import Gallery from "./home/gallery";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Summary />
      <Gallery />
      <Atention />
      <Users />
    </>
  );
}
