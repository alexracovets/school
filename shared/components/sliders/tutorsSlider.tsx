"use client";

import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import Image from "next/image";


import { Carousel, CarouselContent, CarouselItem, CarouselApi, DotButton, useDotButton } from "@/shared/components";
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
    const color = "#235274";
    const style = cn(
        "w-[4.6rem] h-[4.277rem] mx-[-0.4rem]",
        "max-tablet:w-[2.64rem] max-tablet:h-[2.64rem] max-tablet:mx-[-0.1rem]"
    );

    for (let i = 1; i <= MAX_STARS; i++) {
        if (stars >= i) {
            starsArray.push(
                <MdOutlineStar
                    key={i}
                    color={color}
                    className={style}
                />
            );
        } else if (stars > i - 1 && stars < i) {
            starsArray.push(
                <MdOutlineStarHalf
                    key={i}
                    color={color}
                    className={style}
                />
            );
        } else {
            starsArray.push(
                <MdOutlineStarOutline
                    key={i}
                    color={color}
                    className={style}
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

    }, [selectedIndex, api])

    return (
        <>
            <div
                className={cn(
                    "flex justify-end items-center gap-x-[.6rem] py-[1.8rem] px-[1rem]",
                    "max-tablet:gap-x-[.4rem] max-tablet:pt-[1.6rem] max-tablet:pb-[1.1rem]"
                )}
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
                                <CarouselItem key={idx} className="basis-1/4 max-mobile:basis-1/2">
                                    <div className={cn(
                                        "flex flex-col gap-y-[.9rem] items-center w-[30.6rem] h-[45.2rem] pt-[2.8rem] mx-auto bg-regal-white rounded-[1.6rem] border-[0.2rem] border-regal-dark-blue select-none",
                                        "max-tablet:w-[17.53rem] max-tablet:h-[25.894rem] max-tablet:pt-[1.6rem] max-tablet:gap-y-[.5rem] max-tablet:border-[1px]",
                                        "max-mobile:w-[16.4rem] max-mobile:h-[24.225rem]"
                                    )}>
                                        <div className={cn(
                                            "relative w-[20.729rem] h-[20.729rem] rounded-[50%] overflow-hidden",
                                            "max-tablet:w-[11.875rem] max-tablet:h-[11.498rem]"
                                        )}>
                                            <Image src={`/tutors/slides/${item.image}.jpg`} alt="tutor" fill className="object-cover" />
                                        </div>
                                        <p
                                            className={cn(
                                                "text-[3.106rem] font-kyiv_titling",
                                                "max-tablet:text-[1.779rem]"
                                            )}
                                        >
                                            {item.name}
                                        </p>
                                        <p
                                            className={cn(
                                                "relative uppercase text-[1.8rem] text-regal-dark-blue-second font-kyiv_titling",
                                                "max-tablet:text-[1.031rem]"
                                            )}
                                        >
                                            <span className="relative z-[1]">
                                                {item.rate}
                                            </span>
                                            <span className={cn(
                                                "text-[1.85rem] absolute left-0 top-0 text-stroke z-[0] translate-x-[-.03rem] translate-y-[-0.1rem]",
                                                "max-tablet:text-[1.031rem] max-tablet:translate-y-0 max-tablet:translate-x-0"
                                            )}>
                                                {item.rate}
                                            </span>
                                        </p>
                                        <p
                                            className={cn(
                                                "flex flex-col justify-center items-center text-[2.589rem] leading-[1.472] font-sawarabi",
                                                "max-tablet:text-[1.483rem]"
                                            )}
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