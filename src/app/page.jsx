import ControllerServices from "./home/controllerServices";
import FrontPage from "./home/frontPage";
import Method from "./home/method";
import Strategies from "./home/strategies";
import Summary from "./home/summary";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Method />
      <Strategies />
      <Summary />
    </> 
  );
}
