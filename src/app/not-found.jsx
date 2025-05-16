import FuzzyText from "@/core/FuzzyText ";

export default function notFound(){
    return(
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <FuzzyText 
                baseIntensity={0.2} 
            >
                404
            </FuzzyText>
            <FuzzyText 
                baseIntensity={0.2} 
            >
                Not found
            </FuzzyText>
        </div>
    )
}