import { ConfiDeploymentsSecurityAbout } from "./confiComponents/confiDeploymentsSecurityAbout";

export const DeploymentsSecurityAbout = () => {
  const numbers = [
    {
      number: "87",
      delay: "",
      sign: "%",
      description: "performance",
      className: ""
    },
    {
      number: "99",
      delay: "",
      sign: "%",
      description: "security and deployments",
      className: ""
    },
    {
      number: "99",
      delay: "",
      sign: "%",
      description: "seo",
      className: ""
    }
  ]
  return (
    <div className="w-full h-full flex items-center justify-center gap-10">
        {numbers.map((data, index) => (
          <ConfiDeploymentsSecurityAbout 
            key={index}
            number={data.number}
            delay={data.delay}
            sign={data.sign}
            description={data.description}
            className={data.className}
          />
        ))}
    </div>
  );
}