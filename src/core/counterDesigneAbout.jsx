import Counter from "@/components/counter";


export const CounterDesigneAbout = () => {
    const counters = [
        {
            number: 578,
            delay: 0.5,
            text : "Completed Projects",
        },
        {
            number: 400,
            delay: 0.5,
            text : "Clients",
        },
        {
            number: 99,
            delay: 0.5,
            text : "Of effectiveness",
            icon : "%"
        },
    ];
    return (
        <div className="flex justify-center items-center gap-5">
            {counters.map((counter, index) => (
                <div 
                    key={index} 
                    className="border-[#da07ff36] p-2 border-2 rounded-full shadow-sm w-[9rem] h-[9rem] text-4xl text-center gradient__inset__second flex flex-col justify-center items-center"
                >
                    <div className="flex">+ <Counter key={index} number={counter.number} delay={counter.delay} /> {counter.icon && ( counter.icon )}</div>
                    <p className="text-sm">{counter.text}</p>
                </div>
            ))}
        </div>
    );
}