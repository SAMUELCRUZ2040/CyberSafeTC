import Average from "./home/average";
import FrontPage from "./home/frontPage";
import Method from "./home/method";
import Strategies from "./home/strategies";
import Summary from "./home/summary";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Summary />
      <Average />
      <Method />
      {/* <Strategies /> */}
    </> 
  );
}
