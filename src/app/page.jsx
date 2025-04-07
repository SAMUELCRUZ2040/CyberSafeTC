import FrontPage from "./home/frontPage";
import Summary from "./home/summary";
import Users from "./home/users";
import Average from "./home/average";
import { Atention } from "@/app/home/atention";

export default function Home() {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage : "url(/image/figure.png)"}}>
      <FrontPage />
      <Summary />
      <Atention />
      <Average />
      <Users />
    </div> 
  );
}
