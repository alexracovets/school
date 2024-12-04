"use client";

import Image from "next/image";

import { Container, Title, Section, TutorsSlider, Button } from "@/shared/components";
import useFormState from '@/store/useFormState';
import { cn } from "@/shared/lib";

export const TutorsSection = () => {
    const setActiveForm = useFormState(state => state.setIsActive);

    return (
        <Section className="pb-0 max-tablet:pb-0 max-mobile:pb-0">
            <Container>
                <Title>
                    Репетитори
                </Title>
            </Container >
            <Container className={cn(
                "relative bg-regal-gray py-[.8rem] overflow-hidden",
                "max-mobile:pt-0"
            )}>
                <Image
                    src={`/tutors/elipse.svg`}
                    alt="tutor"
                    fill
                    className={cn(
                        "object-contain",
                        "max-tablet:hidden"
                    )}
                />
                <div className={cn(
                    "absolute left-[50%] top-[50%] w-full h-full translate-x-[-50%] translate-y-[-50%]",
                    "max-tablet:w-[113.6rem] max-tablet:h-[45.2rem]",
                    "max-mobile:w-[72.6rem] max-mobile:h-[44.3rem]"
                )}>
                    <Image
                        src={`/tutors/elipse.svg`}
                        alt="tutor"
                        fill
                        className={cn(
                            "object-contain"
                        )}
                    />
                </div>
                <div className="relative z-[1]">
                    <TutorsSlider />
                    <div
                        className={cn(
                            "w-full flex justify-center mt-[7.2rem] mb-[5rem]",
                            "max-tablet:mb-[3rem] max-tablet:mt-[3.805rem]",
                            "max-mobile:mt-[2.881rem] max-mobile:mb-[3.7rem]"
                        )}
                    >
                        <Button onClick={() => setActiveForm(true)}>
                            Записатись на безкоштовне заняття
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}