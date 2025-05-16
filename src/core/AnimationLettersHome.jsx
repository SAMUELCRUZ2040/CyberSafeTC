import { Components } from "@/utils/componentAnimation";

export  const AnimationLettersHome = ({ type, letters, delay }) => {

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