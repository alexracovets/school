"use client";

import { Section, Container, Title, Prices, Button } from "@/shared/components";

export const PricesSection = () => {
    return (
        <Section>
            <Container>
                <Title>
                    Ціни
                </Title>
            </Container>
            <Prices />
            <Container>
                <div
                    className="w-full flex justify-center "
                >
                    <Button className="mt-[10rem] mb-[.7rem]">
                        Записатись на безкоштовне заняття
                    </Button>
                </div>
            </Container>
        </Section>
    )
}