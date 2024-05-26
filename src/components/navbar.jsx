import Link from "next/link";
import data from "@/json/data";

export default  function Navbar() {
    return (
    <nav className="fixed top-0 left-0 w-full flex justify-center align-center z-50">
        <div className="flex justify-between align-center  position-absolute container rounded-md mt-5 p-6 px-[6rem]">
            <div className="logo">
                <Link href={"/"}>
                    <img src="https://www.userogue.com/_next/image?url=%2Fimages%2Flogo-v3-dark%2Flogo.png&w=128&q=75" alt="" />
                </Link>
            </div>
            <ul className="list_item flex gap-7 h-full justify-center align-center">
                {data.navigation.map((item, key)=> (
                    <li className="item grid place-content-center" key={key}>
                        <Link href={`${item.url}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}