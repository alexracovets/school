"use client";

import { Section, Container, Title, Prices, Button } from "@/shared/components";
import { cn } from "@/shared/lib";

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
                    <Button className={cn(
                        "mt-[10rem] mb-[.7rem]",
                        "max-tablet:mt-[3.888rem] max-tablet:mb-0"
                    )}>
                        Записатись на безкоштовне заняття
                    </Button>
                </div>
            </Container>
        </Section>
    )
}