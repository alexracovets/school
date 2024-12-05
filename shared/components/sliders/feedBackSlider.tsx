"use client";

import React, { useEffect, useState } from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselApi, DotButton, useDotButton } from "@/shared/components";

import useResponsive from '@/store/useResponsive';
import { cn } from "@/shared/lib";

interface ItemType {
    title: string;
    comment: string[];
}

interface SlidesType {
    slides: ItemType[]
}

export const FeedBackSlider: React.FC<SlidesType> = ({ slides }) => {
    const [api, setApi] = useState<CarouselApi>();
    const isMobile = useResponsive(state => state.isMobile);
    const [isSliderActive, setIsSliderActive] = useState(isMobile);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

    useEffect(() => {
        setIsSliderActive(isMobile)
    }, [isMobile]);

    useEffect(() => {
        setTimeout(() => {
            api?.scrollTo(selectedIndex)
        }, 300)

    }, [selectedIndex, api]);

    return (
        <div
            className={cn(
                "py-[5rem]",
                "max-tablet:py-[3rem]",
                "max-mobile:pt-0"
            )}>
            <div
                className={cn(
                    "hidden justify-end items-center gap-x-[.6rem] py-[1.8rem] px-[1rem]",
                    "max-tablet:gap-x-[.4rem] max-tablet:pt-[1.6rem] max-tablet:pb-[1.1rem]",
                    "max-mobile:flex max-mobile:pt-[1.1rem] max-mobile:pb-[1.3rem]"
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
            <Carousel setApi={setApi} opts={{ align: 'start', loop: true, dragFree: true, active: isSliderActive }}>
                <CarouselContent>
                    {
                        slides.map((slide, idx) => {
                            return (
                                <CarouselItem key={idx}>
                                    <div className="p-[1.877rem] rounded-[2.895rem] border-[1px] border-regal-blue-second mb-[.2rem] h-full mx-[1rem]">
                                        <div className="text-[1.75rem] pb-[1.6rem] text-center font-kyiv_titling">
                                            {slide.title}
                                        </div>
                                        <div>
                                            {
                                                slide.comment.map((text, index) => {
                                                    return (
                                                        <p
                                                            key={index}
                                                            className="text-[1.287rem] font-sawarabi leading-[1.4721]"
                                                        >
                                                            {text}
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
            </Carousel>
        </div>
    )
}