"use client";

import { AboutSlider, Container, Title, Separator, Section } from "@/shared/components";

export const AboutSection = () => {
    return (
        <Section>
            <Container>
                <Title className="transition ease-in-out duration-300">
                    Хто ми?
                </Title>
            </Container >
            <Separator />
            <Container>
                <AboutSlider />
            </Container>
            <Separator />
        </Section>
    )
}