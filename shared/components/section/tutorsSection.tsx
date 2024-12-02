"use client";

import { Container, Title, Section, TutorsSlider, Button } from "@/shared/components";
import { cn } from "@/shared/lib";
import Image from "next/image";

export const TutorsSection = () => {
    return (
        <Section>
            <Container>
                <Title>
                    Репетитори
                </Title>
            </Container >
            <Container className={cn(
                "relative bg-regal-gray py-[.8rem]",
                "max-mobile:pt-0"
            )}>
                <Image src={`/tutors/elipse.svg`} alt="tutor" fill className="object-contain" />
                <div className="relative z-[1]">
                    <TutorsSlider />
                    <div
                        className={cn(
                            "w-full flex justify-center mt-[7.2rem] mb-[5rem]",
                            "max-tablet:mb-[3rem] max-tablet:mt-[3.805rem]",
                            "max-mobile:mt-[2.881rem] max-mobile:mb-[3.7rem]"
                        )}
                    >
                        <Button>
                            Записатись на безкоштовне заняття
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}