import ControllerServices from "./home/controllerServices";
import FrontPage from "./home/frontPage";
import Strategies from "./home/strategies";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Strategies />
      <ControllerServices />
    </> 
  );
}
