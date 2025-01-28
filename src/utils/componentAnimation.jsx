"use client"

import { Designe } from '@/core/DesignAbout';
import { Colaborations } from '@/core/ColaborationsAbout';
import CarouselAbout from '@/core/CarouselAbout';

export const Components = ({ search }) => {
    const component = {
        designe: <Designe />,
        colaborations: <Colaborations />,
        carousel: <CarouselAbout />,
    };
    return component[search] || null;
}