import ControllerServices from "./home/controllerServices";
import FrontPage from "./home/frontPage";
import Method from "./home/method";
import Strategies from "./home/strategies";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Method />
      <Strategies />
      <ControllerServices />
    </> 
  );
}
