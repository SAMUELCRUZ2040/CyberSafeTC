"use client"

import DesigneAbout   from '@/app/about/components/ilustration/DesigneAbout';
import { CollaborationsAbout } from '@/app/about/components/ilustration/CollaborationsAbout';
import { AnimatedList } from '@/app/about/components/timeLine/components/AnimatedList ';
import { AnimationsAbout } from '@/app/about/components/ilustration/animationsAbout';
import { TerminalDemo } from '@/app/about/components/timeLine/terminal';
import { CodeComparisonDemo } from '@/app/about/components/timeLine/CodeComparison';
import { ChromaGrid } from '@/app/about/components/timeLine/ChromaGrid';
import { CodeOptimization } from '@/app/about/components/timeLine/codeOptimization';
import { CustomerService } from '@/app/about/components/timeLine/customerService';
import { DiferentsEffectsAbout } from '@/app/about/components/ilustration/diferentsEffectsAbout';

export const Components = ({ search, ...params}) => {

    const component = {
        //about
        designeAbout: <DesigneAbout />,
        collaborationsAbout: <CollaborationsAbout />,
        animationsAbout: <AnimationsAbout />,
        diferentsEffectsAbout : <DiferentsEffectsAbout />,
        terminal : <TerminalDemo />,
        animatedList : <AnimatedList />,
        CodeComparison : <CodeComparisonDemo />,
        chromaGrid : <ChromaGrid />,
        codeOptimization : <CodeOptimization />,
        customerService : <CustomerService />
        
    };
    return component[search] || null;
    
}