"use client"

import { Carousel } from '@/components/carousel';
import React from 'react';
import data from '@/json/data';
import Image from 'next/image';


export const CarouselDesktop = () => {
    return (
        <>
            {data.home[0].users.map((ColumnUser, ColIndex_) => (
                <Carousel
                        key={ColIndex_}
                        percent = {"yPercent"}
                        duration = {`${ColIndex_ === 1 ? 12 : 13}`}
                        value = {160}
                        delayGeneral = {`${ColIndex_ === 1 ? 7.49 : 8.01}`}
                        delayInitial = {`${ColIndex_ === 1 ? 2.90 : 2.99}`}
                        direction = {"gap-10 p-5 flex-col bottom-[100%]"}
                        ubication = {"justify-start items-start"}
                >
                        {Object.entries(ColumnUser).map((cardUser, index_) => (
                            <div className="p-8 border-2 shadow-lg rounded-3xl relative overflow-hidden" key={index_}>
                                <div className="flex gap-8">
                                    <div className="overflow-hidden rounded-full flex justify-center items-center w-[4rem] h-[4rem]">
                                        <Image
                                            src={`/image/home/persons/client_${cardUser[1][0].picture}.webp`}
                                            width={500}
                                            height={500}
                                            alt={`model`}
                                            style={{ width: "100%", height: "auto" }}
                                            className='scale-[1.49]'
                                        />
                                    </div>
                                    <div>
                                        <div className="flex gap-2">
                                            <div className='bg-cover bg-center bg-no-repeat w-[1.2rem] h-[1.2rem]' style={{backgroundImage : "url(icons/check.png)"}}/>
                                            <h2 className="max-lg:text-sm text-lg">{cardUser[1][0].name}</h2>
                                        </div>
                                        <h3 className="text-sm text-gray-400">@{cardUser[1][0].profession}</h3>
                                    </div>
                                </div>
                                <p className="max-lg:text-sm pt-4 text-md">{cardUser[1][0].description}</p>
                                <div className="icon absolute top-5 right-5 opacity-80 cursor-pointer">
                                    <Image
                                        src={`/icons/twitter.svg`}
                                        width={500}
                                        height={500}
                                        alt={`twitter`}
                                        style={{ width: "1.4rem", height: "1.2rem" }}
                                    />
                                </div>
                            </div>
                        ))}
                </Carousel>
            ))}
        </>
    );
}

export const CarouselMobile = () =>{

    const users = React.useMemo(() => {
        const allUsers = [];
        data.home[0].users.forEach(group => {
            Object.values(group).forEach(user => {
                allUsers.push(...user);
            });
        });
        return allUsers;
    }, []);

    return(
        <Carousel
            percent = {"yPercent"}
            duration = {25}
            value = {190}
            delayGeneral = {13.15}
            delayInitial = {1.29}
            direction = {"gap-10 p-5 flex-col bottom-[100%]"}
            ubication = {"justify-start items-start"}
        >
            {[...Array(15)].map((_, i) => {
                const randomUser = users[i % users.length];
                return(
                    <div className="p-8 border-2 shadow-lg rounded-3xl relative overflow-hidden" key={i}>
                        <div className="flex gap-8">
                            <div className="overflow-hidden rounded-full flex justify-center items-center w-[4rem] h-[4rem]">
                                <Image
                                    src={`/image/home/persons/client_${randomUser.picture}.webp`}
                                    width={500}
                                    height={500}
                                    alt={`model`}
                                    style={{ width: "100%", height: "auto" }}
                                    className='scale-[1.49]'
                                />
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <div className='bg-cover bg-center bg-no-repeat w-[1.2rem] h-[1.2rem]' style={{backgroundImage : "url(icons/check.png)"}}/>
                                    <h2 className="max-lg:text-sm text-lg">{randomUser.name}</h2>
                                </div>
                                <h3 className="text-sm text-gray-400">@{randomUser.profession}</h3>
                            </div>
                        </div>
                        <p className="max-lg:text-sm pt-4 text-md">{randomUser.description}</p>
                        <div className="icon absolute top-5 right-5 opacity-80 cursor-pointer">
                            <Image
                                src={`/icons/twitter.svg`}
                                width={500}
                                height={500}
                                alt={`twitter`}
                                style={{ width: "1.4rem", height: "1.2rem" }}
                            />
                        </div>
                    </div>
                )
            })}
        </Carousel>
    )
}