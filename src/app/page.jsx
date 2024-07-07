import Average from "./home/average";
import FrontPage from "./home/frontPage";
import Strategies from "./home/strategies";
import Summary from "./home/summary";
import Users from "./home/users";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Summary />
      <Average />
      <Strategies />
      <Users />
    </> 
  );
}
