"use client";

import { Separator, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/shared/components";
import { cn } from "@/shared/lib";
import Image from "next/image";
import { useState } from "react";

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
    const [isSliderActive, setIsSliderActive] = useState(false);


    return (
        <div
            className={cn(
                "py-[5rem]"
            )}>
            <Carousel opts={{ active: isSliderActive }}>
                <CarouselContent>
                    {
                        slides.map((slide, idx) => {
                            return (
                                <CarouselItem key={idx} className="basis-1/4">
                                    <div className="w-[30.353rem] h-[45.5rem] bg-regal-light-blue rounded-[2.5rem] overflow-hidden px-[1.54rem]">
                                        <div className={cn(
                                            "relative w-[5.097rem] h-[5.097rem] mx-auto mt-[3.328rem] mb-[1.828rem]"
                                        )}>
                                            <Image src={`/about/slider/ico/${slide.ico}.svg`} alt="slide" fill />
                                        </div>
                                        <Separator />
                                        <h3
                                            className={cn(
                                                "flex justify-center items-center text-[1.8rem] text-center font-kyiv_titling py-[1.638rem] min-h-[7.677rem]"
                                            )}
                                            dangerouslySetInnerHTML={{ __html: slide.title }}
                                        />
                                        <Separator />
                                        <div
                                            className="pt-[1.1rem]"
                                        >
                                            <p
                                                className="text-[2.2rem] font-sawarabi leading-[1.4718]"
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
                {isSliderActive ?
                    <>
                        <CarouselPrevious />
                        <CarouselNext />
                    </> :
                    null
                }
            </Carousel>
        </div>
    )
}