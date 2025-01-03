import Atention from "./components/atention";
import FrontPage from "./components/frontPage";
import Ilustration from "./components/ilustration";
import OurWork from "./components/ourWork";

export default function About() {
    return (
      <div className="bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url(/image/figure.png)"}}>
        <FrontPage />
        <OurWork/>
        <Ilustration />
      </div>
    );
  }
  