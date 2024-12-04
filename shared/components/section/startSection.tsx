"use client";

import { cn } from "@/shared/lib";
import Image from "next/image";

import { Button, Section, ExclamationMark, BlurDotsGroup } from "@/shared/components";
import useFormState from '@/store/useFormState';

export const StartSection = () => {
    const setActiveForm = useFormState(state => state.setIsActive);

    return (
        <Section
            id="start"
            className={cn(
                "w-full flex justify-between overflow-hidden",
                "max-mobile:flex-col"
            )}
        >
            <div
                className={cn(
                    "relative w-full max-w-[85.2rem] min-w-[85.2rem] h-[52.9rem] rounded-[1.633rem] overflow-hidden",
                    "max-tablet:max-w-[51.3rem] max-tablet:min-w-[51.3rem] max-tablet:h-[33rem] max-tablet:rounded-[1rem]",
                    "max-mobile:max-w-full max-mobile:min-w-full max-mobile:h-[24.1rem] max-mobile:rounded-[1rem] max-mobile:mb-[2.3rem]"
                )}>
                <Image src="/start/books.jpg" alt="books" priority fill />
            </div>
            <div
                className={cn(
                    "flex flex-col px-[3.5rem]",
                    "max-tablet:pl-[4rem] max-tablet:pr-0",
                    "max-mobile:px-[1.6rem] max-mobile:items-center max-mobile:justify-center"
                )}
            >
                <BlurDotsGroup />
                <div
                    className={cn(
                        "flex justify-between items-end mb-[4rem]",
                        "max-tablet:mb-[2.5rem]",
                        "max-mobile:p-0 max-mobile:justify-start max-mobile:items-start max-mobile:mb-[1.5rem]"
                    )}
                >
                    <p
                        className={cn(
                            "text-[3.058rem] font-[400] font-kyiv_titling",
                            "max-tablet:text-[1.731rem]"
                        )}>
                        Індивідуальні <span
                            className={cn(
                                "relative",
                                "before:content-[''] before:absolute before:z-[-1] before:left-0 before:bottom-[-.6rem] before:w-[13.72rem] before:h-[2.8rem] before:bg-regal-blue-opacity-second before:rounded-[50%]",
                                "max-tablet:before:w-[4.493rem] max-tablet:before:h-[.917rem] max-tablet:before:left-[1.5rem] max-tablet:before:bottom-[-.4rem]"
                            )}
                        >
                            онлайн-
                        </span>  заняття з топ-репетиторами для школярів та дорослих
                    </p>
                    <ExclamationMark />
                </div>
                <p
                    className={cn(
                        "text-[2.549rem] font-[400] font-sawarabi pr-[14rem] mb-[4rem] leading-[1.471]",
                        "max-tablet:text-[1.443rem] max-tablet:pr-[7rem] max-tablet:mb-[5rem]",
                        "max-mobile:p-0 max-mobile:mb-[3rem]"
                    )}
                >
                    Отримайте якісну освіту з досвіченими викладачами в школі <span
                        className={cn(
                            "relative",
                            "before:content-[''] before:absolute before:left-0 before:bottom-0 before:z-[-1] before:w-full before:h-[2.754rem] before:bg-regal-pink before:blur-[.7rem]",
                            "max-tablet:before:h-[1.559rem] max-tablet:before:w-[4.676rem] max-tablet:before:left-[-.3rem]"
                        )}
                    >Aptly,</span> не виходячи з дому. Підготовка до іспитів, покращення успішності та розвиток навичок у зручний для вас час.
                </p>
                <Button onClick={() => setActiveForm(true)}>
                    Записатись на безкоштовне заняття
                </Button>
            </div>
        </Section>
    )
}