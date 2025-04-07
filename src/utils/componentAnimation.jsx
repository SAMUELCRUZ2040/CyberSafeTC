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

export const Components = ({ search, ...params}) => {
    const component = {
        designeAbout: <DesigneAbout />,
        collaborationsAbout: <CollaborationsAbout />,
        createDreamsAbout: <CreateDreamsAbout />,
        diferentsEffectsAbout : <DiferentsEffectsAbout />,
        deploymentsSecurityAbout : <DeploymentsSecurityAbout />,
        animationsAbout: <AnimationsAbout />,
        counter: <CounterDesigneAbout/>,
        rippleAbout: <RippleAbout />,
        skeletonOne: <SkeletonOne />,
        skeletonTwo: <SkeletonTwo />,
        skeletonThree: <SkeletonThree />,
        skeletonFour: <SkeletonFour />,
    };
    return component[search] || null;
}