"use client";

import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import Image from "next/image";


import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/shared/components";
import { DotButton, useDotButton } from './slidersDot';
import { cn } from "@/shared/lib";

const tutors = [
    {
        image: '0',
        name: 'Назар',
        rate: 'топ',
        profile: [
            "математика"
        ],
        stars: 5
    },
    {
        image: '1',
        name: 'Андрій',
        rate: 'топ',
        profile: [
            "математика"
        ],
        stars: 5
    },
    {
        image: '2',
        name: 'Ярослав',
        rate: 'топ',
        profile: [
            "математика"
        ],
        stars: 5
    },
    {
        image: '3',
        name: 'Дмитро',
        rate: 'топ',
        profile: [
            "математика",
            "англійська мова"
        ],
        stars: 5
    },
    {
        image: '4',
        name: 'Ангеліна',
        rate: 'топ',
        profile: [
            "англійська мова"
        ],
        stars: 5
    },
    {
        image: '5',
        name: 'Дмитро',
        rate: 'топ',
        profile: [
            "англійська мова"
        ],
        stars: 5
    },
    {
        image: '6',
        name: 'Тетяна',
        rate: 'топ',
        profile: [
            "українська мова"
        ],
        stars: 5
    }
]
const renderStars = (stars: number) => {
    const MAX_STARS = 5;
    const starsArray = [];

    for (let i = 1; i <= MAX_STARS; i++) {
        if (stars >= i) {
            // Якщо кількість зірок більша або дорівнює позиції, додаємо повну зірку
            starsArray.push(
                <MdOutlineStar
                    key={i}
                    color="#235274"
                    className="w-[4.6rem] h-[4.277rem] mx-[-0.4rem]"
                />
            );
        } else if (stars > i - 1 && stars < i) {
            starsArray.push(
                <MdOutlineStarHalf
                    key={i}
                    color="#235274"
                    className="w-[4.6rem] h-[4.277rem] mx-[-0.4rem]"
                />
            );
        } else {
            starsArray.push(
                <MdOutlineStarOutline
                    key={i}
                    color="#235274"
                    className="w-[4.6rem] h-[4.277rem] mx-[-0.4rem]"
                />
            );
        }
    }

    return starsArray;
};

export const TutorsSlider = () => {
    const [api, setApi] = useState<CarouselApi>();
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

    useEffect(() => {
        setTimeout(() => {
            api?.scrollTo(selectedIndex)
        }, 300)

    }, [selectedIndex])

    return (
        <>
            <div
                className="flex justify-end items-center gap-x-[.6rem] py-[1.8rem] px-[1rem]"
            >
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => onDotButtonClick(index)}
                    />
                ))}
            </div>
            <Carousel setApi={setApi} opts={{ align: 'start', loop: true, dragFree: true }}>
                <CarouselContent>
                    {
                        tutors.map((item, idx) => {
                            return (
                                <CarouselItem key={idx} className="basis-1/4">
                                    <div className="flex flex-col gap-y-[.9rem] items-center w-[30.6rem] h-[45.2rem] pt-[2.8rem] mx-auto bg-regal-white rounded-[1.6rem] border-[0.2rem] border-regal-dark-blue select-none">
                                        <div className="relative w-[20.729rem] h-[20.729rem] rounded-[50%] overflow-hidden">
                                            <Image src={`/tutors/slides/${item.image}.jpg`} alt="tutor" fill className="object-cover" />
                                        </div>
                                        <p
                                            className={cn(
                                                "text-[3.106rem] font-kyiv_titling"
                                            )}
                                        >
                                            {item.name}
                                        </p>
                                        <p
                                            className={cn(
                                                "relative uppercase text-[1.8rem] text-regal-dark-blue-second font-kyiv_titling",
                                            )}
                                        >
                                            <span className="relative z-[1]">
                                                {item.rate}
                                            </span>
                                            <span className="text-[1.85rem] absolute left-0 top-0 text-stroke z-[0] translate-x-[-.03rem] translate-y-[-0.1rem]">
                                                {item.rate}
                                            </span>
                                        </p>
                                        <p
                                            className="flex flex-col justify-center items-center text-[2.589rem] leading-[1.472] font-sawarabi"
                                        >
                                            {
                                                item.profile.map((profile, index) => {
                                                    return (
                                                        <span key={index}>{profile}</span>
                                                    )
                                                })
                                            }
                                        </p>
                                        <div
                                            className="flex justify-center items-center"
                                        >
                                            {renderStars(item.stars)}
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
            </Carousel>
        </>
    )
}