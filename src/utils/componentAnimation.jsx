"use client"

import DesigneAbout   from '@/core/DesigneAbout';
import { CollaborationsAbout } from '@/core/CollaborationsAbout';
import { DiferentsEffectsAbout } from '@/core/diferentsEffectsAbout';
import { AnimationsAbout } from '@/core/animationsAbout';
import { CounterDesigneAbout } from '@/core/counterDesigneAbout';
import { RippleAbout } from '@/core/ripleAbout';
import { SkeletonFour, SkeletonOne, SkeletonThree, SkeletonTwo } from '@/core/skeletonHome';
import { AnimationTextFlex, AnimationTextRise, LoaderWords } from '@/core/confiComponents/confiAnimationsLettersHome';
import { InputAnimation } from '@/components/inputAnimation';

export const Components = ({ search, ...params}) => {

    const component = {
        //about
        designeAbout: <DesigneAbout />,
        collaborationsAbout: <CollaborationsAbout />,
        diferentsEffectsAbout : <DiferentsEffectsAbout />,
        animationsAbout: <AnimationsAbout />,
        counter: <CounterDesigneAbout/>,
        rippleAbout: <RippleAbout />,
        //home
        skeletonOne: <SkeletonOne />,
        skeletonTwo: <SkeletonTwo />,
        skeletonThree: <SkeletonThree />,
        skeletonFour: <SkeletonFour />,
        loaderWords : <LoaderWords  text={params.content} delay={params.delay}/>,
        AnimationTextFlex : <AnimationTextFlex text={`${params.content}`} />,
        inputAnimationText : <InputAnimation delay={params.delay} typeInput='animationTranslate'>{params.content}</InputAnimation>,
        AnimationTextRise : <AnimationTextRise delay={params.delay} text={params.content}/>,
        
    };
    return component[search] || null;
    
}