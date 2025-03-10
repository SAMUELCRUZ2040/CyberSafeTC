import FrontPage from "./home/frontPage";
import Summary from "./home/summary";
import Users from "./home/users";
import Strategies from "./home/strategies";
import Average from "./home/average";

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
