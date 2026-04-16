import FrontPage from "./components/frontPage";
import Ilustration from "./components/ilustration";
import { Timeline } from "./components/timeline";
import { TimelineHistory } from "./TimelineHistory";

export default function About() {
    return (
      <>
        <FrontPage />
        <TimelineHistory />
        <Ilustration />
        <Timeline />
      </>
    );
  }
  