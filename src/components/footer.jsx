import Image from "next/image";
import Action from "./action";
import Link from "next/link";

export default  function Footer() {
  const informationAbout = [
    {
      title : "Visitanos",
      description : "Bogota Colombia",
    },
    {
      title : "Hablemos",
      description : "5645645641",
      descriptionTwo : "54564892",
    },
    {
      title : "Escribenos",
      description : "ejemplo@gmail.com",
      descriptionTwo : "ejemplo@gmail.com",
    },
    
  ],
  socialNetworks = ["Linkedin", "Facebook", "instagram" ];
  return (
    <footer>
      <Action />
        <div className="flex items-center justify-center flex-col">
          <div className="container py-14">
            <div className="max-md:items-center max-md:gap-5 flex justify-between px-14 max-md:flex-col max-md:p-0 max-md:text-center">
              <div className="logo w-[150px]">
                <Image 
                  src={"https://www.userogue.com/_next/image?url=%2Fimages%2Flogo-v3-dark%2Flogo.png&w=128&q=75"}
                  width={1000}
                  height={1000}
                  alt="logo"
                  style={{width : "100%", height : "auto"}}
                />
              </div>
              {informationAbout.map((data, key)=>(
                  <ul 
                    className="list_item"
                    key={key}
                  >
                    <li>
                      <span className="font-bold text-xl">{data.title}</span>
                    </li>
                    <li className="item text-sm ms-4 mt-4">{data.description}</li>
                      {data.descriptionTwo && <li className="item text-md ms-4">{data.descriptionTwo}</li>}
                  </ul>
              ))}
            </div>
          </div>
          <div className="container grid grid-cols-2 max-md:grid-cols-1 max-md:gap-5 py-14">
              <div className="max-md:text-center">
                <span>siguenos en nuestras redes
                {socialNetworks.map((data, key)=>(
                  <Link 
                    key={key}
                    href={"/"}
                  >
                    ❤️
                  </Link>
                ))}
                </span>
              </div>
              <div className="text-sm max-md:text-center">
                <span>Esta pagina esta 100% hecha por cyberSafe igual que todos los proyectos formados ademas se mantiene una privacidad al 100%</span>
              </div>
          </div>
        </div>
    </footer>
  )
}