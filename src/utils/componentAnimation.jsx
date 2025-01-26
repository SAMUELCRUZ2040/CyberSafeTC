"use client"

import { Designe } from '@/core/DesignAbout';
import { Colaborations } from '@/core/ColaborationsAbout';
import { Carousel } from '@/core/CarouselAbout';

export const Components = ({ search }) => {
    const component = {
        designe: <Designe />,
        colaborations: <Colaborations />,
        carousel: <Carousel />,
    };
    return component[search] || null;
}