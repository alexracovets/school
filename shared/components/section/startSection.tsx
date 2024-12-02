"use client";

import { cn } from "@/shared/lib";
import Image from "next/image";

import { Button, Section, ExclamationMark } from "@/shared/components";

export const StartSection = () => {
    return (
        <Section
            id="start"
            className="w-full flex justify-between"
        >
            <div
                className={cn(
                    "relative w-full max-w-[85.2rem] min-w-[85.2rem] h-[52.9rem] rounded-[1.633rem] overflow-hidden",
                    "max-tablet:max-w-[51.3rem] max-tablet:min-w-[51.3rem] max-tablet:h-[33rem] max-tablet:rounded-[1rem]"
                )}>
                <Image src="/start/books.jpg" alt="books" priority fill />
            </div>
            <div
                className={cn(
                    "flex flex-col px-[3.5rem]",
                    "max-tablet:pl-[4rem] max-tablet:pr-0"
                )}
            >
                <div
                    className={cn(
                        "flex justify-between items-end mb-[4rem]",
                        "max-tablet:mb-[2.5rem]"
                    )}
                >
                    <p
                        className={cn(
                            "text-[3.058rem] font-[400] font-kyiv_titling",
                            "max-tablet:text-[1.731rem]"
                        )}>
                        Індивідуальні онлайн- заняття з топ-репетиторами для школярів та дорослих
                    </p>
                    <ExclamationMark />
                </div>
                <p
                    className={cn(
                        "text-[2.549rem] font-[400] font-sawarabi pr-[14rem] mb-[4rem] leading-[1.471]",
                        "max-tablet:text-[1.443rem] max-tablet:pr-[7rem] max-tablet:mb-[5rem]"
                    )}
                >
                    Отримайте якісну освіту з досвіченими викладачами в школі Aptly, не виходячи з дому. Підготовка до іспитів, покращення успішності та розвиток навичок у зручний для вас час.
                </p>
                <Button>
                    Записатись на безкоштовне заняття
                </Button>
            </div>
        </Section>
    )
}