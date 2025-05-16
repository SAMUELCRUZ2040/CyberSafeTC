import types from "@/components/fontLetters"
import Link from "next/link";

function SenEmails  () {
    return (
        <div className="h-screen w-screen bg-[#73717135] flex justify-center items-center fixed top-0 left-0 !z-[9999] backdrop-blur-sm">
            <div className="border-2 rounded-2xl p-5 bg-white flex flex-col items-center justify-center text-center gap-6">
                <div className="bg-[#d7fbe7] rounded-full p-3">
                    <div className="bg-cover bg-center bg-no-repeat w-[2rem] h-[2rem] max-md:w-[8rem] max-md:h-[2rem] rounded-full" style={{backgroundImage : "url(/icons/checkSolid.svg)"}} /> 
                </div>
                <span className={`${types.p} text-[#066e29]`}>Mail sent</span>
                <p className="flex flex-col gap-2">
                    <span>Thank you for your purchase. you package will be</span>
                    <span>delivered within 2 days of your purchase</span>
                </p>
                <Link href={"/"} className="w-full p-2 rounded-lg bg-[#1aa06d]">
                    Come Again
                </Link>
            </div>
        </div>
    );
}
export default SenEmails;