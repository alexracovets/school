"use client";

import { Section, Container, Title, Prices, Button } from "@/shared/components";
import useFormState from '@/store/useFormState';
import { cn } from "@/shared/lib";

export const PricesSection = () => {
    const setActiveForm = useFormState(state => state.setIsActive);

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
                    <Button
                        className={cn(
                            "mt-[10rem] mb-[.7rem]",
                            "max-tablet:mt-[3.888rem] max-tablet:mb-0"
                        )}
                        onClick={() => setActiveForm(true)}
                    >
                        Записатись на безкоштовне заняття
                    </Button>
                </div>
            </Container>
        </Section>
    )
}