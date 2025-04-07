import Action from "./action";
import types from "@/components/fontLetters";
import data from "@/json/data";
import Link from "next/link";

export default  function Footer() {  
  return (
    <footer className="max-lg:px-5">
      <Action />
        <div className="flex items-center justify-center flex-col">
          <div className="container flex justify-between items-center pe-12 pt-12 mt-12 max-md:flex-col max-md:gap-12 max-md:pe-0">
            <div className="flex justify-start flex-col items-start max-md:items-center max-md:gap-4 max-md:justify-center">
              <div className="bg-cover bg-center bg-no-repeat w-[12rem] h-[3rem]" style={{ backgroundImage : "url(/icons/logo.webp)"}}/>
              <p className={`${types.smallP}`} >© copyright Startup 2024. All rights reserved.</p>
            </div>
            <div className="flex gap-12">
              {data.footer.map((dataFooter, _index) => (
                <div className="flex flex-col gap-5">
                  {Object.entries(dataFooter).map((dataFooterCol, _indexCol)=>(
                    <Link href={"/"} className={`${dataFooterCol[1][0].title && "font-black !ps-1 !text-black"} ${types.smallP} ps-2`}>{dataFooterCol[1][0].word}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center w-full container">
            <h2 className="text-center uppercase mt-20 text-5xl md:text-9xlxl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#81ccff27] dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0 max-md:pb-8 max-md:text-[5rem]">let's start</h2>
            </div>
        </div>
    </footer>
  )
}