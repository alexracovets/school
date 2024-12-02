"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Separator, Carousel, CarouselContent, CarouselItem, CarouselApi, DotButton, useDotButton } from "@/shared/components";

import useIsMobile from '@/store/useIsMobile';
import { cn } from "@/shared/lib";

const slides = [
    {
        ico: "slider_ico_1",
        title: "ІНДИВІДУАЛЬНИЙ <br> ПІДХІД",
        content: "Наші викладачі розробляють персоналізовані програми навчання, враховуючи рівень підготовки та цілі кожного учня."
    },
    {
        ico: "slider_ico_2",
        title: "МОЛОДІ ТА ДОСВІДЧЕНІ <br> РЕПЕТИТОРИ",
        content: "Усі наші викладачі – мають досвід роботи з учнями та допомагають досягти високих результатів в комфортній атмосфері."
    },
    {
        ico: "slider_ico_3",
        title: "ЗРУЧНИЙ ФОРМАТ",
        content: "Навчання онлайн дозволяє займатись у будь-який зручний для вас час та місце, без необхідності витрачати час на дорогу."
    },
    {
        ico: "slider_ico_4",
        title: "ПІДГОТОВКА ДО <br> ІСПИТІВ",
        content: "Ми готуємо учнів до важливих іспитів та тестів, допомагаючи їм впевнено почуватися на будь-яких екзаменах."
    }
]

export const AboutSlider = () => {
    const [api, setApi] = useState<CarouselApi>();
    const isMobile = useIsMobile(state => state.isMobile);
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
                                <CarouselItem key={idx} className="basis-1/4 max-mobile:basis-1/2">
                                    <div className={cn(
                                        "w-[30.353rem] h-[45.5rem] bg-regal-light-blue rounded-[2.5rem] overflow-hidden px-[1.54rem] mx-auto select-none",
                                        "max-tablet:w-[17.4rem] max-tablet:h-[26.01rem] max-tablet:px-[.86rem] max-tablet:rounded-[1.433rem]",
                                        "max-mobile:w-[16.335rem] max-mobile:h-[24.049rem] max-mobile:px-[.8rem]"
                                    )}>
                                        <div className={cn(
                                            "relative w-[5.097rem] h-[5.097rem] mx-auto mt-[3.328rem] mb-[1.828rem]",
                                            "max-tablet:w-[3.756rem] max-tablet:h-[3.756rem] max-tablet:mt-[1.5rem] max-tablet:mb-[.6rem]",
                                            "max-mobile:w-[2.746rem] max-mobile:h-[2.746rem] max-mobile:mt-[1.7rem] max-mobile:mb-[1rem]"
                                        )}>
                                            <Image src={`/about/slider/ico/${slide.ico}.svg`} alt="slide" fill />
                                        </div>
                                        <Separator />
                                        <h3
                                            className={cn(
                                                "flex justify-center items-center text-[1.8rem] text-center font-kyiv_titling min-h-[7.677rem]",
                                                "max-tablet:text-[1.032rem] max-tablet:min-h-[4.278rem]",
                                                "max-mobile:text-[1.18rem] max-tablet:min-h-[4.565rem]"
                                            )}
                                            dangerouslySetInnerHTML={{ __html: slide.title }}
                                        />
                                        <Separator />
                                        <div
                                            className={cn(
                                                "mt-[1.1rem]",
                                                "max-tablet:mt-[.6rem]"
                                            )}
                                        >
                                            <p
                                                className={cn(
                                                    "text-[2.2rem] font-sawarabi leading-[1.4718]",
                                                    "max-tablet:text-[1.262rem]",
                                                    "max-mobile:text-[1.18rem]"
                                                )}
                                            >
                                                {slide.content}
                                            </p>
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