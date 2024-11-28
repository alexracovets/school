"use client";

import { Container, Title, Section, TutorsSlider, Button } from "@/shared/components";
import Image from "next/image";

export const TutorsSection = () => {
    return (
        <Section>
            <Container>
                <Title>
                    Репетитори
                </Title>
            </Container >
            <Container className="relative bg-regal-gray py-[.8rem]">
                <Image src={`/tutors/elipse.svg`} alt="tutor" fill className="object-contain" />
                <div className="relative z-[1]">
                    <TutorsSlider />
                    <div
                        className="w-full flex justify-center "
                    >
                        <Button className="mt-[7.2rem] mb-[5rem]">
                            Записатись на безкоштовне заняття
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}