import FrontPage from "./components/frontPage";
import Ilustration from "./components/ilustration";
import OurWork from "./components/ourWork";
import { Timeline } from "@/app/about/components/timeline";

export default function About() {
    return (
      <>
        <FrontPage />
        <OurWork/>
        <Timeline />
        {/* <Ilustration /> */}
      </>
    );
  }
  