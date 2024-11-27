"use client";

import { AboutSlider, Container, Title, Separator, Section } from "@/shared/components";

export const AboutSection = () => {
    return (
        <Section>
            <Container>
                <Title>
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