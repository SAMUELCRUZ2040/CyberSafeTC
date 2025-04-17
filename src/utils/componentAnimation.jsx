"use client"

import DesigneAbout   from '@/core/DesigneAbout';
import { CollaborationsAbout } from '@/core/CollaborationsAbout';
import { CreateDreamsAbout } from '@/core/createDreamsAbout';
import { DiferentsEffectsAbout } from '@/core/diferentsEffectsAbout';
import { DeploymentsSecurityAbout } from '@/core/deploymentsSecurityAbout';
import { AnimationsAbout } from '@/core/animationsAbout';
import { CounterDesigneAbout } from '@/core/counterDesigneAbout';
import { RippleAbout } from '@/core/ripleAbout';
import { SkeletonFour, SkeletonOne, SkeletonThree, SkeletonTwo } from '@/core/skeletonHome';
import { AnimationText } from '@/components/animationText';
import { NeonLetters } from '@/core/confiComponents/confiAnimationsLettersHome';
import { InputAnimationText } from '@/components/inputAnimation';

export const Components = ({ search, ...params}) => {

    const component = {
        //about
        designeAbout: <DesigneAbout />,
        collaborationsAbout: <CollaborationsAbout />,
        createDreamsAbout: <CreateDreamsAbout />,
        diferentsEffectsAbout : <DiferentsEffectsAbout />,
        deploymentsSecurityAbout : <DeploymentsSecurityAbout />,
        animationsAbout: <AnimationsAbout />,
        counter: <CounterDesigneAbout/>,
        rippleAbout: <RippleAbout />,
        //home
        skeletonOne: <SkeletonOne />,
        skeletonTwo: <SkeletonTwo />,
        skeletonThree: <SkeletonThree />,
        skeletonFour: <SkeletonFour />,
        transitionLetter : <AnimationText text={`${params.content}`} />,
        NeonLetters : <NeonLetters  text={`${params.content}`}/>,
        inputAnimationText : <InputAnimationText delay={params.delay}>{params.content}</InputAnimationText>,
        
    };
    return component[search] || null;
}