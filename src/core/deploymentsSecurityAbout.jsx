import { ConfiDeploymentsSecurityAbout } from "./confiComponents/confiDeploymentsSecurityAbout";

export const DeploymentsSecurityAbout = () => {
  const numbers = [
    {
      number: "87",
      delay: "",
      sign: "%",
      description: "performance",
      color : "inset 0 0 10px rgba(0, 204, 255, 0.244), inset 0 0 20px rgba(0, 204, 255, 0.219), inset 0 0 30px rgba(0, 204, 255, 0.135)",
      borderColor: "#00ccffb8",
      className: ""
    },
    {
      number: "99",
      delay: "",
      sign: "%",
      description: "security and deployments",
      color : "inset 0 0 10px rgba(0, 204, 255, 0.244), inset 0 0 20px rgba(0, 204, 255, 0.219), inset 0 0 30px rgba(0, 204, 255, 0.135)",
      borderColor: "#00ccffb8",
      className: ""
    },
    {
      number: "99",
      delay: "",
      sign: "%",
      description: "seo",
      color : "inset 0 0 10px rgba(17, 255, 0, 0.592), inset 0 0 20px rgba(17, 255, 0, 0.219), inset 0 0 30px rgba(17, 255, 0, 0.135)",
      borderColor: "#11ff00b8",
      className: ""
    }
  ]
  return (
    <div className="w-full h-full flex items-center justify-center gap-4">
        {numbers.map((data, index) => (
          <ConfiDeploymentsSecurityAbout 
            key={index}
            number={data.number}
            delay={data.delay}
            sign={data.sign}
            description={data.description}
            className={data.className}
            color={data.color}
            borderColor={data.borderColor}
          />
        ))}
    </div>
  );
}