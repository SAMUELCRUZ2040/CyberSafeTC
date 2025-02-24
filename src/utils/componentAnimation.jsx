"use client"

import DesigneAbout   from '@/core/DesigneAbout';
import { CollaborationsAbout } from '@/core/CollaborationsAbout';
import { CreateDreamsAbout } from '@/core/createDreamsAbout';
import { DiferentsEffectsAbout } from '@/core/diferentsEffectsAbout';
import { DeploymentsSecurityAbout } from '@/core/deploymentsSecurityAbout';
import { AnimationsAbout } from '@/core/animationsAbout';

export const Components = ({ search }) => {
    const component = {
        designeAbout: <DesigneAbout />,
        collaborationsAbout: <CollaborationsAbout />,
        createDreamsAbout: <CreateDreamsAbout />,
        diferentsEffectsAbout : <DiferentsEffectsAbout />,
        deploymentsSecurityAbout : <DeploymentsSecurityAbout />,
        animationsAbout: <AnimationsAbout />,
    };
    return component[search] || null;
}