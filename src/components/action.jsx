import data from "@/json/data";
import CardsAction from "./footer/cards";

export default function Action() {
  return (
    <div className="fall__action flex justify-center items-center bg-[#c2dbdb30] max-lg:px-2">
        <div className="container grid grid-cols-3 my-14 py-14 max-xl:grid-cols-1">
            <div className=" col-span-1 flex items-center justify-center">
              <h2 className="gap-2 flex flex-col croll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                <span>¿Y si nos</span>
                <span>reunimos?</span>
              </h2>
            </div>
            <div className="col-span-2 max-xl:mt-8">
              <div className="max-lg:gap-6 max-md:grid-cols-1 card grid grid-cols-2 gap-28" >
                {data.footer[0].callAction.map((i, key) => (
                    <CardsAction 
                      i={i}
                      key={key}
                    />
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}
