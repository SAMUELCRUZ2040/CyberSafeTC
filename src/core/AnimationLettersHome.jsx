import { Components } from "@/utils/componentAnimation";

export  const AnimationLettersHome = ({ type, letters, delay, classNameLetter}) => {

    return (
        <>
            <Components 
                search={type}
                content={letters}
                delay={delay}
            />
        </>
    );
}